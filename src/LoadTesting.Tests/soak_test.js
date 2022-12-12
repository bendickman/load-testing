import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '2m', target: 400 }, // ramp-up to 400 users
        { duration: '3h56m', target: 400 }, // stay at 400 users for ~4 hours
        { duration: '2m', target: 0 }, // ramp-down to 0 users (optional)
    ]
};

const API_BASE_URL = "https://localhost:7024"

export default () => {
    http.get(`${API_BASE_URL}/WeatherForecast`);
    sleep(1);
};
 
