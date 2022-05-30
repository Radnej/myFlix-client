import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

//add react-bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";

//user registration form taking necessary user details
export function RegistrationView(props) {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Birthday, setBirthday] = useState("");

  // Declare hook for each input
  const [UsernameErr, setUsernameErr] = useState("");
  const [PasswordErr, setPasswordErr] = useState("");
  const [EmailErr, setEmailErr] = useState("");

  // validate user inputs
  const validate = () => {
    let isReq = true;
    if (!Username) {
      setUsernameErr("Username Required");
      isReq = false;
    } else if (Username.length < 5) {
      setUsernameErr("Username must be 5 characters long");
      isReq = false;
    } else {
      setUsernameErr("");
    }
    if (!Password) {
      setPasswordErr("Password Required");
      isReq = false;
    } else if (Password.length < 6) {
      setPassword("Password must be 6 characters long");
      isReq = false;
    } else {
      setPasswordErr("");
    }
    if (!Email) {
      setEmailErr("Email Required");
      isReq = false;
    } else if (Email.indexOf("@") === -1) {
      setEmail("Email must be a valid email address");
      isReq = false;
    } else {
      setEmailErr("");
    }

    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      /* Send request to the server for authentication */
      axios
        .post("https://my-flix-220508.herokuapp.com/users", {
          Username: Username,
          Password: Password,
          Email: Email,
          Birthday: Birthday,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          alert("Registration successful, please login!");
          window.open("/", "_self");
        })
        .catch((response) => {
          alert("error registering the user");
          window.open("/", "_self");
        });
    }
  };

  return (
    <Row>
      <Col>
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title> Please Register</Card.Title>
              <Form>
                <Form.Group>
                  <Form.Label> Username: </Form.Label>
                  <Form.Control
                    type="text"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Enter a username"
                  />
                  {UsernameErr && <p>{UsernameErr}</p>}
                </Form.Group>
                <Form.Group>
                  <Form.Label> Password: </Form.Label>
                  <Form.Control
                    type="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {PasswordErr && <p>{PasswordErr}</p>}
                </Form.Group>
                <Form.Group>
                  <Form.Label> Email: </Form.Label>
                  <Form.Control
                    type="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {EmailErr && <p>{EmailErr}</p>}
                </Form.Group>
                <Form.Group>
                  <Form.Label> Birthday: </Form.Label>
                  <Form.Control
                    type="date"
                    value={Birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </Form.Group>
                <Button
                  style={{ marginTop: "1rem" }}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </CardGroup>
      </Col>
    </Row>
  );
}

RegistrationView.propTypes = {
  onRegister: PropTypes.func.isRequired,
};
