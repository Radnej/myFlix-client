import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//add react-bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Card style={{ height: "100%" }}>
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Link to={"/movies/${movie._id}"}></Link>
        </Card.Body>
        <Button variant="danger" onClick={() => onMovieClick(movie)}>
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
