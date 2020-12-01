import Axios from 'axios';

export default Axios.create({
  baseUrl: 'https://quiz-app-react-redux.firebaseio.com/',
});
