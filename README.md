# Momence assignment

A simple application to fetch, display & allow conversions using Czech national bank daily rates API.

An example is deployed at https://momence-assignment.slarka.com/.

## FE Application

A simple React app built using Vite, served in a Docker container using Nginx.

To run, use `yarn nx serve app`.

To run E2E tests, run `yarn nx e2e app-e2e`.

## BE Server

A simple Node.js server, using built-in Node HTTP server, to fetch, transform and send the daily rates as JSON.

To run, use `yarn nx serve be`.

To run unit tests, run `yarn nx test be`.
