import React, { useState } from "react";

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    props.onRegister(false);
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="Enter a username"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label> Password: </Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label> Email: </Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label> Birthday: </Form.Label>
                  <Form.Control
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </Form.Group>
                <Button type="submit" onClick={handleSubmit}>
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
