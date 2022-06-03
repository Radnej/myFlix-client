import React from "react";
import axios from "axios";
import {
  Form,
  FormGroup,
  Container,
  FormControl,
  Card,
  Col,
} from "react-bootstrap";

import PropTypes, { string } from "prop-types";

///here im retaining the user's old details
class UserDetailsView extends React.Component {
  constructor() {
    super();
  }

  getUser(token) {
    let user = localStorage.getItem("user");
    axios
      .get(`https://my-flix-220508.herokuapp.com/users/${user}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.props.setUserData(response.data);
      })
      .catch((e) => console.log(e));
  }
  componentDidMount() {
    const accessToken = localStorage.getItem("token");
    this.getUser(accessToken);
  }

  render() {
    let { userData } = this.props;
    console.log(userData);
    return (
      <Container>
        <div className="titles h1 text-center">Hi, {userData.username}</div>
        <Card.Title className="titles text-center custom-card-title">
          View and update your details
        </Card.Title>
        <Container className="d-flex justify-content-right text-center">
          <Col className="d-inline">
            <FormGroup>
              <Form.Label className="titles h3">Username</Form.Label>
              <Container className="p-1">
                <FormControl
                  className=" custom-form-label"
                  type="text"
                  name="username"
                  placeholder={userData.username}
                  disabled
                ></FormControl>
              </Container>
            </FormGroup>

            <FormGroup>
              <Form.Label className="titles h3">Password</Form.Label>
              <Container className="d-flex flex-column flex-sm-row justify-content-between p-1">
                <FormControl
                  className="custom-form-label"
                  type="text"
                  name="password"
                  placeholder={userData.password}
                  disabled
                ></FormControl>
              </Container>
            </FormGroup>

            <FormGroup>
              <Form.Label className="titles h3">Email</Form.Label>
              <Container className="d-flex flex-column flex-sm-row justify-content-between p-1">
                <FormControl
                  className="custom-form-label"
                  type="email"
                  name="email"
                  placeholder={userData.email}
                  disabled
                ></FormControl>
              </Container>
            </FormGroup>

            <FormGroup>
              <Form.Label className="titles h3">Birth date</Form.Label>
              <Container className="d-flex flex-column flex-sm-row justify-content-between p-1">
                <FormControl
                  className="custom-form-label"
                  type="text"
                  name="birthday "
                  placeholder={userData.birthday}
                  disabled
                ></FormControl>
              </Container>
            </FormGroup>
          </Col>
        </Container>
      </Container>
    );
  }
}
let mapStateToProps = (state) => {
  return { userData: state.userData };
};
export default connect(mapStateToProps, { setUserData })(UserDetailsView);

UserDetailsView.propTypes = {
  setUserData: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    favoriteMovies: PropTypes.arrayOf(string),
  }).isRequired,
};
