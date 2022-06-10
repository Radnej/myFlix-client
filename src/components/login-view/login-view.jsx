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
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  // //declare hook for each input
  // const [UsernameErr, setUsernameErr] = useState("");
  // const [PasswordErr, setPasswordErr] = useState("");

  // //validate user inputs
  // const validate = () => {
  //   let isReq = true;
  //   if (!Username) {
  //     setUsernameErr("Username Required");
  //     isReq = false;
  //   } else if (Username.length < 5) {
  //     setUsernameErr("Username must be 5 characters long");
  //     isReq = false;
  //   }
  //   if (!Password) {
  //     setPasswordErr("Password Required");
  //     isReq = false;
  //   } else if (Password.length < 6) {
  //     setPassword("Password must be 6 characters long");
  //     isReq = false;
  //   }
  //   return isReq;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    axios
      .post("https://my-flix-220508.herokuapp.com/login", {
        Username: Username,
        Password: Password,
      })
      .then((response) => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch((e) => {
        console.log(e);
        alert(
          "you're not already registered or you have deleted your profile! Please register"
        );
        window.open("/register", "_self");
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    props.onRegister(true);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title style={{ textAlign: "center", fontSize: "" }} />
        <Row className="justify-content-md-center">
          <Col></Col>
          <Col md={6}>
            <h1>Sign in to your account</h1>
            <Form className="register-form">
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="label titles h3 align-self-center">
                  {" "}
                  Username:{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Enter your username"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label className="label titles h3 align-self-center">
                  {" "}
                  Password:{" "}
                </Form.Label>
                <Form.Control
                  type="password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="custom-btn"
                type="submit"
                // style={{ marginTop: 20, marginRight: 5 }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
              <br></br>
              <br></br>
              <Row className="d-flex justify-content-center">
                <p className="m-2">Don't have an account?</p>
                <Button
                  variant="primary"
                  className="custom-btn"
                  //style={{ marginTop: 20 }}
                  type="submit"
                  onClick={handleRegister}
                >
                  Sign up
                </Button>
              </Row>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

LoginView.propTypes = {
  onRegister: PropTypes.func.isRequired,
  onLoggedIn: PropTypes.func.isRequired,
};
