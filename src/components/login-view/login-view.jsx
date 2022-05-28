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

//login for user - taking username and password
export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //declare hook for each input
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  //validate user inputs
  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr("Username Required");
      isReq = false;
    } else if (username.length < 5) {
      setUsernameErr("Username must be 5 characters long");
      isReq = false;
    }
    if (!password) {
      setPasswordErr("Password Required");
      isReq = false;
    } else if (password.length < 6) {
      setPassword("Password must be 6 characters long");
      isReq = false;
    }
    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    axios
      .post("https://my-flix-220508.herokuapp.com/login", {
        Username: username,
        Password: password,
      })
      .then((response) => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch((e) => {
        console.log("no such user");
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    props.onRegister(true);
  };

  return (
    <Row>
      <Col></Col>
      <Col>
        <Card
          style={{
            marginTop: 200,
            marginBottom: 100,
            width: "30rem",
            height: "20rem",
          }}
        >
          <Card.Body>
            <Card.Title style={{ textAlign: "center", fontSize: "" }} />
            <Form>
              <Form.Group>
                <Form.Label> Username: </Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Enter your username"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label> Password: </Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
              </Form.Group>
              <Button
                type="submit"
                style={{ marginTop: 20, marginRight: 5 }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Button
                variant="secondary"
                style={{ marginTop: 20 }}
                type="submit"
                onClick={handleRegister}
              >
                Register Here
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col></Col>
    </Row>
  );
}

LoginView.propTypes = {
  onRegister: PropTypes.func.isRequired,
  onLoggedIn: PropTypes.func.isRequired,
};
