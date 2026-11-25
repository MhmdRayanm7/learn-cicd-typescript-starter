
# Notely

[![CI](https://github.com/MhmdRayanm7/learn-cicd-typescript-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/MhmdRayanm7/learn-cicd-typescript-starter/actions/workflows/ci.yml)
[![Deployment](https://img.shields.io/badge/Deployment-Verified-2EA44F)](https://github.com/MhmdRayanm7/learn-cicd-typescript-starter/actions/runs/45168431228)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=githubactions&logoColor=white)
![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?logo=googlecloud&logoColor=white)
![Turso](https://img.shields.io/badge/Turso-4FF8D2?logo=turso&logoColor=black)
![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-C5F74F?logo=drizzle&logoColor=black)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white)

A TypeScript web application developed as part of the [Boot.dev Learn CI/CD](https://www.boot.dev/courses/learn-ci-cd-github-docker-typescript) course, focusing on automated testing, cloud infrastructure, containerization, and continuous deployment.

## Tech Stack

| Category | Technologies |
| --- | --- |
| Backend | TypeScript, Node.js, Express |
| Database | Turso, libSQL, Drizzle ORM |
| CI/CD | GitHub Actions |
| Containerization | Docker |
| Cloud | Google Cloud Platform |
| Cloud Services | Cloud Build, Artifact Registry, Cloud Run |
| Security | IAM, OIDC, Workload Identity Federation |
| Testing & Code Quality | Vitest, ESLint, Prettier |

## CI/CD Pipeline

```mermaid
flowchart TD
    A[Pull Request] --> B[Continuous Integration]
    B --> C[Tests and Code Quality]
    C --> D[Merge to Main]
    D --> E[Build Application]
    E --> F[Google Cloud Authentication]
    F --> G[Docker Build and Push]
    G --> H[Database Migrations]
    H --> I[Cloud Run Deployment]
```

### Continuous Integration

- Automated unit tests and coverage
- Code formatting and linting
- Security-related linting rules
- Pull request validation

### Continuous Deployment

- Automated application and Docker builds
- Secure cloud authentication using WIF
- Container image publishing to Artifact Registry
- Database migrations with Drizzle
- Automated deployment to Google Cloud Run

## Local Development

Requires Node.js 22 or newer.

```bash
npm ci
```

Create a `.env` file:

```env
PORT=8080
```

Start the application:

```bash
npm run dev
```

Open http://localhost:8080.

Database functionality requires additional Turso configuration.

## Deployment Status

The complete CI/CD pipeline was successfully executed and verified on November 23, 2026.

Cloud resources were intentionally removed after completing the course to avoid unnecessary costs. The deployment workflow is preserved for reference.

[View the successful deployment](https://github.com/MhmdRayanm7/learn-cicd-typescript-starter/actions/runs/45168431228)

---

Built as part of the Boot.dev backend development learning path.
