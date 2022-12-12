import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '5m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes
        { duration: '10m', target: 100 }, // stay at 100 users for 10 minutes
        { duration: '5m', target: 0 }, // ramp-down to 0 users
    ],
    thresholds: {
        http_req_duration: ['p(99)<150'], // 99% of requests must complete below 150ms
    }
};

const API_BASE_URL = "https://localhost:7024"

export default () => {
    var result = http.get(`${API_BASE_URL}/WeatherForecast`);

    check(result, { "status was 200": (r) => r.status == 200 });

    sleep(1);
};

