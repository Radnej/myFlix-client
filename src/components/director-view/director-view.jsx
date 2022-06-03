import React from "react";
import PropTypes from "prop-types";

//add react-bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

export class DirectorView extends React.Component {
  render() {
    const { movie, director, onBackClick } = this.props;
    console.log("director");
    return (
      <Card id="director-view" style={{ marginTop: "10rem" }}>
        <Card.Body>
          <Row>
            <Col>
              <Card.Img variant="top" src={movie.ImagePath} />
            </Col>
            <Col>
              <Card.Title className="director-Name">{director.Name}</Card.Title>
              <Card.Text id="director-bio" className="director-bio">
                {director.Bio}
              </Card.Text>
              <Card.Text id="director-movies" className="movie-director">
                Movies: {director.Movies.Title}
              </Card.Text>
              <Button
                variant="dark"
                onClick={() => {
                  onBackClick(null);
                }}
              >
                Back
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

DirectorView.propTypes = {
  director: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Movie: PropTypes.shape({
      Title: PropTypes.string,
    }),
  }).isRequired,

  onBackClick: PropTypes.func.isRequired,
};
