# Load Testing

This repository highlights the various different approaches to load testing your API using [K6](https://k6.io/).

## Load (load-tesing.js)

Load testing is primarily concerned with performance assessment and is normally the test you want to run first to gain a benchmark of how much load the app can wiststand. This benchmark can then be used to assess each new feature to ensure the application performance is not deteriorating. A load testing step can be included in the Continuous Intergration (CI) pipline to check.

## Stress (stress-testing.js)

Stress testing is one of the many different types of load testing.

While load testing is primarily concerned with assessing the systems performance, the purpose of stress testing is to assess the availability and stability of the system under heavy load.

## Spike (spike-testing.js)

Spike testing is a variation of a stress testing, but it does not gradually increase the load. Instead it spikes to extreme load over a very short period of time.

https://k6.io/docs/test-types/stress-testing/#spike-testing-in-k6

https://k6.io/docs/test-types/stress-testing/

## Soak (soak-testing.js)

A soak test uncovers performance and reliability issues stemming from a system being under pressure for an extended period and for this reason, take the longest to complete.

https://k6.io/docs/test-types/soak-testing/
