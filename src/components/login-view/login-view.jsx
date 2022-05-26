import React, { useState } from "react";
import PropTypes from "prop-types";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username);
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
  onRegistration: PropTypes.func.isRequired,
  onLoggedIn: PropTypes.func.isRequired,
};
