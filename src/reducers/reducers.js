// export default moviesApp;
import { combineReducers } from "redux";
import {
  SET_FILTER,
  GET_MOVIES,
  GET_MOVIE_INFO,
  LOGIN_USER,
  REGISTER_USER,
  UPDATE_USER,
  GET_USER_INFO,
  DELETE_USER,
  LOGOUT_USER,
  ADD_FAVORITEMOVIES,
  DELETE_FAVORITEMOVIES,
} from "../actions/actions";

function visibilityFilter(state = "", action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}

function getMovies(state = [], action) {
  switch (action.type) {
    case GET_MOVIES:
      return action.value;
    default:
      return state;
  }
}

function getMovieInfo(state = [], action) {
  switch (action.type) {
    case GET_MOVIE_INFO:
      return action.value;
    default:
      return state;
  }
}

function loginUser(state = [], action) {
  switch (action.type) {
    case LOGIN_USER:
      return action.value;
    default:
      return state;
  }
}

function registerUser(state = [], action) {
  switch (action.type) {
    case REGISTER_USER:
      return action.value;
    default:
      return state;
  }
}

function updateUser(state = [], action) {
  switch (action.type) {
    case UPDATE_USER:
      return action.value;
    default:
      return state;
  }
}

function getUserInfo(state = [], action) {
  switch (action.type) {
    case GET_USER_INFO:
      return action.value;
    default:
      return state;
  }
}

function deleteUser(state = [], action) {
  switch (action.type) {
    case DELETE_USER:
      return action.value;
    default:
      return state;
  }
}

function logoutUser(state = [], action) {
  switch (action.type) {
    case LOGOUT_USER:
      return action.value;
    default:
      return state;
  }
}

function addFavoritemovies(state = [], action) {
  switch (action.type) {
    case ADD_FAVORITEMOVIES:
      return action.value;
    default:
      return state;
  }
}

function deleteFavoritemovies(state = [], action) {
  switch (action.type) {
    case DELETE_FAVORITEMOVIES:
      return action.value;
    default:
      return state;
  }
}

const moviesApp = combineReducers({
  visibilityFilter,
  getMovies,
  getMovieInfo,
  loginUser,
  registerUser,
  updateUser,
  getUserInfo,
  deleteUser,
  deleteUser,
  loginUser,
  addFavoritemovies,
  deleteFavoritemovies,
});

export default moviesApp;
