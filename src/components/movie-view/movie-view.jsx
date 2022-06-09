import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export class MovieView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FavoriteMovies: [],
    };
    this.isFav;

    this.addFav = this.addFav.bind(this);
    this.removeFav = this.removeFav.bind(this);
  }

  getUser(token) {
    let user = localStorage.getItem("user");
    axios
      .get(`https://my-flix-220508.herokuapp.com/users/${user}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        //assign the result to the state
        this.setState({
          FavoriteMovies: response.data.FavoriteMovies,
        });
      })
      .catch((e) => console.log(e));
  }
  componentDidMount() {
    const accessToken = localStorage.getItem("token");
    this.getUser(accessToken);
  }

  //add favorite
  addFav() {
    {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      //prevent adding duplicate movies
      let userFavorites = this.state.FavoriteMovies;
      isFav = userFavorites.includes(this.props.movie._id);
      if (!isFav) {
        axios
          .post(
            `https://my-flix-220508.herokuapp.com/users/${user}/movies/${this.props.movie._id}`,
            {},

            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then((response) => {
            console.log(response);
            alert(
              `${this.props.movie.Title} has been added to your list of favorites`
            );
            // window.open(`/movies/${id}`, "_self");
          })
          .catch((e) => console.log(e));
      } else if (isFav) {
        alert(
          `${this.props.movie.Title} is already in your list of favorite movies!`
        );
        // window.open(`/movies/${id}`, "_self");
      }
    }
  }
  //remove favorite
  removeFav() {
    {
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");

      axios
        .delete(
          `https://my-flix-220508.herokuapp.com/users/${user}/movies/${this.props.movie._id}`,

          { headers: { Authorization: `Bearer ${token}` } },
          {}
        )
        .then((response) => {
          console.log(response);
          isFav = false;
          alert(
            `${this.props.movie.Title} has been deleted from your list of favorites`
          );
          // window.open(`/movies/${id}`, "_self");
        })
        .catch((e) => console.log(e));
    }
  }
  render() {
    const { movie, onBackClick } = this.props;

    let movieId = this.props.movie._id;
    let userFav = this.state.FavoriteMovies;
    console.log(this.state);
    let isFav = userFav.includes(movieId);

    return (
      <Card>
        <Card.Body className="text-left p-4 card-custom">
          <Button
            variant="primary"
            className="custom-btn"
            onClick={() => {
              onBackClick(null);
            }}
          >
            Go Back
          </Button>
          <Container className="text-center p-3 card-custom">
            <Card.Img
              className="movie-poster img-responsive"
              variant="top"
              style={{ width: "40%" }}
              src={movie.ImagePath}
            />
          </Container>

          <Col className="d-sm-flex justify-content-between justify-content-xl-center">
            <Card.Text className="label titles h3 align-self-center">
              Title:{" "}
            </Card.Text>
            <span className="movie-title titles ml-3 h1">{movie.Title}</span>
          </Col>

          <Col className="d-sm-flex justify-content-between justify-content-xl-center">
            <Card.Text className="label titles h3 align-self-center">
              Description:{" "}
            </Card.Text>
            <span className="movie-description card-text ml-3 ">
              {movie.Description}
            </span>
          </Col>

          <Col className="d-sm-flex justify-content-between justify-content-xl-center">
            <Card.Text className="label titles h3 align-self-center">
              Genre:{" "}
            </Card.Text>
            <Link
              className="titles-expand movie-genre ml-3 h1"
              to={`/genres/${movie.Genre.Name}`}
            >
              {movie.Genre.Name}
            </Link>
          </Col>

          <Col className="d-sm-flex justify-content-between justify-content-xl-center">
            <Card.Text className="label titles h3 align-self-center">
              Director:{" "}
            </Card.Text>
            <Link
              className="movie-director titles-expand ml-3 h1"
              to={`/directors/${movie.Director.Name}`}
            >
              {movie.Director.Name}
            </Link>
          </Col>

          {!isFav && (
            <Button
              variant="primary"
              className="custom-btn"
              onClick={this.addFav}
            >
              Add to favorites
            </Button>
          )}
          {isFav && (
            <Button
              variant="primary"
              className="custom-btn"
              onClick={this.removeFav}
            >
              Remove from favorites
            </Button>
          )}
        </Card.Body>
      </Card>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }).isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }).isRequired,
    Description: PropTypes.string.isRequired,

    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
