# Notely

![CI](https://github.com/MhmdRayanm7/learn-cicd-typescript-starter/actions/workflows/ci.yml/badge.svg)
![CD](https://github.com/MhmdRayanm7/learn-cicd-typescript-starter/actions/workflows/cd.yml/badge.svg)

A TypeScript web application built as part of the [Boot.dev Learn CI/CD](https://www.boot.dev/courses/learn-ci-cd-github-docker-typescript) course, focusing on automated testing, builds, and cloud deployments.

## Tech Stack

- **Backend:** Node.js, TypeScript, Express
- **Database:** Turso (libSQL), Drizzle ORM
- **CI/CD:** GitHub Actions
- **Cloud & Deployment:** Google Cloud, Cloud Build, Cloud Run, Artifact Registry
- **Tools:** Docker, Vitest, ESLint, Prettier

## CI/CD Pipeline

**Continuous Integration — Pull Requests**
- Unit tests with coverage
- Formatting and linting checks

**Continuous Deployment — Push to main**
- Build the application and Docker image
- Authenticate to Google Cloud using Workload Identity Federation
- Push the image to Artifact Registry
- Run database migrations
- Deploy to Google Cloud Run

## Local Development

Requires Node.js 22 or newer.

1. Install dependencies: `npm ci`
2. Create a `.env` file and set `PORT=8080`
3. Start the app: `npm run dev`
4. Open `http://localhost:8080`

Database features require additional Turso configuration.

---

Built for learning and practicing CI/CD with Boot.dev.
