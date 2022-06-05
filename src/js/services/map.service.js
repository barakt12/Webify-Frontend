import { httpService } from './http.service.js'


export async function getGeocodingApi(userInput) {
  const API_KEY = 'AIzaSyArNzNzxQ3Vxrf3OSpZq2xhh9WoxopjQQ0';
  return await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${userInput}&key=${API_KEY}`)
  .then(res => res.json())
  .then(data => data.results[0].geometry.location)
  .catch(err => console.log(err))
}