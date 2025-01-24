# Lab-to-Hub: CI/CD Demonstration Project

## Overview
This project demonstrates **CI/CD workflows** by synchronizing code between **GitLab** and **GitHub**, and deploying an Angular application to **GitHub Pages**. It showcases the use of automation and continuous deployment practices to streamline the development process.

---

## Features

- **CI/CD Integration:** Automatically synchronizes the `main` branch from GitLab to GitHub using GitLab CI/CD.
- **Automated Deployment:** Builds and deploys the Angular application to GitHub Pages using GitHub Actions.
- **Best Practices:** Implements secure handling of credentials and environment variables for safe and reliable automation.

---

## Workflow Details

### GitLab CI/CD Pipeline

The `.gitlab-ci.yml` file configures a pipeline to:
1. Detect changes on the `main` branch in GitLab.
2. Synchronize the latest code with the GitHub repository.
3. Push changes securely using a GitHub personal access token.

### GitHub Actions Workflow

The GitHub workflow automates the following steps:
1. **Install dependencies:** Installs the required Node.js modules.
2. **Build project:** Builds the Angular application for production.
3. **Deploy:** Publishes the build artifacts to GitHub Pages.

---

## Prerequisites

### GitLab CI/CD Variables
Ensure the following variables are set in your GitLab project:
- `USER_GITHUB`: Your GitHub username.
- `TOKEN_GITHUB`: GitHub personal access token with repository write permissions.
- `USER_EMAIL`: Email address associated with your Git.
- `USER_NAME`: Name associated with your Git.

### GitHub Secrets
Add the following secret to your GitHub repository:
- `GH_TOKEN`: GitHub personal access token with permissions to publish on GitHub Pages.

---

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/lab-to-hub.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application locally:
   ```bash
   npm start
   ```

4. Push changes to the `main` branch to trigger the CI/CD pipeline and deploy.

---

## Live Demo

Access the deployed application here: [Lab-to-Hub on GitHub Pages](https://<your-username>.github.io/lab-to-hub/)

Replace `<your-username>` with your GitHub username.

---

## Technologies Used

- **Angular:** For building the web application.
- **GitLab CI/CD:** To automate synchronization to GitHub.
- **GitHub Actions:** To build and deploy the application.
- **GitHub Pages:** For hosting the deployed application.

