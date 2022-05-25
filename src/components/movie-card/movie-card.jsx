import React from "react";
import PropTypes from "prop-types";

//add react-bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <Card style={{ height: "40rem", marginBottom: "5rem" }}>
        <Card.Img
          variant="top"
          src={movie.ImagePath}
          style={{ height: "20rem" }}
        />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text style={{ height: ",5rem" }}>{movie.Description}</Card.Text>
        </Card.Body>
        <Button
          style={{ marginTop: ",5rem" }}
          variant="danger"
          onClick={() => onMovieClick(movie)}
        >
          Open
        </Button>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string,
    }),
  }).isRequired,

  onMovieClick: PropTypes.func.isRequired,
};
