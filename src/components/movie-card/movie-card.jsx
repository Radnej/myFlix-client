import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <Row>
        <Col>
          <Card style={{ height: "42rem", marginBottom: "5rem" }}>
            <Card.Img
              variant="top"
              src={movie.ImagePath}
              style={{ height: "25rem" }}
            />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text style={{ height: "5rem" }}>
                {movie.Description}
              </Card.Text>
            </Card.Body>
            <Button variant="danger" onClick={() => onMovieClick(movie)}>
              Open
            </Button>
          </Card>
        </Col>
      </Row>
    );
  }
}

MovieCard.propTypes = {
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
  onMovieClick: PropTypes.func.isRequired,
};
