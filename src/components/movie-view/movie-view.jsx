import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//add react-bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card id="movie-view" style={{ marginTop: "10rem" }}>
        <Card.Body>
          <Row>
            <Col>
              <Card.Img variant="top" src={movie.ImagePath} />
            </Col>
            <Col>
              <Card.Title className="movie-title">{movie.Title}</Card.Title>
              <Card.Text id="movie-description" className="movie-description">
                {movie.Description}
              </Card.Text>
              <Card.Text id="movie-director" className="movie-director">
                Director: {movie.Director.Name}
              </Card.Text>
              <Card.Text id="movie-genre" className="movie-gerne">
                Genre: {movie.Genre.Name}
              </Card.Text>
              <Button
                variant="dark"
                onClick={() => {
                  onBackClick(null);
                }}
              >
                Back
              </Button>
              <Link to={`/directors/${movie.Director.Name}`}>
                <Button variant="link">Director</Button>
              </Link>

              <Link to={`/genres/${movie.Genre.Name}`}>
                <Button variant="link">Genre</Button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string,
    }),
  }).isRequired,

  onBackClick: PropTypes.func.isRequired,
};
