import axios from 'axios';

const getDemoEndpoint = () => axios.get('https://jsonplaceholder.typicode.com/photos/1');

export { getDemoEndpoint };
