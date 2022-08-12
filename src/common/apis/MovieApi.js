import axios from 'axios';
// import { APIKey } from './MovieApiKey';

export default axios.create({
  baseURL: "https://www.omdbapi.com",
  timeout: 1000,
  // headers: { 
  //   "Content-Type": "application/json", 'Authorization': APIKey,
  //  'Access-Control-Allow-Origin': '*'},
}
);