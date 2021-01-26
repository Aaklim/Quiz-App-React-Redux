import {
  AUTH_GET_EMAIL_PASSWORD,
  AUTH_GET_TOKEN,
  AUTH_ERROR,
  AUTH_LOGOUT,
  AUTH_GET_USER_ID,
} from '../actions/actions'
const initialState = {
  email: '',
  password: '',
  error: null,
  userId: null,
  token: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_GET_EMAIL_PASSWORD:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      }
    case AUTH_GET_TOKEN:
      return {
        ...state,
        token: action.payload,
      }
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case AUTH_LOGOUT:
      return { ...initialState }

    case AUTH_GET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      }

    default:
      return state
  }
}

export default authReducer
