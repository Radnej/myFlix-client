import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <Card id="movie-view" style={{ marginTop: "10rem" }}>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Img
                      variant="top"
                      src={movie.ImagePath}
                      style={{ height: "35", width: "20rem" }}
                    />
                  </Col>
                  <Col>
                    <Card.Title className="movie-title">
                      {movie.Title}
                    </Card.Title>
                    <Card.Text
                      id="movie-description"
                      className="movie-description"
                    >
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
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
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
