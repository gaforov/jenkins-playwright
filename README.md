# Playwright Test Automation with Jenkins

This repository contains Playwright test automation scripts designed for end-to-end testing of web applications. The project is integrated with Jenkins CI/CD pipelines for automated test execution and report generation. It includes a **minimal set of test tools** and a **basic test structure** to validate Jenkins configuration and integration.

## Features
- **Cross-browser testing**: Supports Chromium, Firefox, and WebKit.
- **Jenkins integration**: Configurable with Jenkins pipelines for continuous integration and test automation.
- **HTML reports**: Automatically generates interactive HTML test reports.
- **Support for Allure and Cucumber reports**: Advanced reporting options for test results.
- **Scalable architecture**: Modular and reusable test framework for quick testing setup.

## Prerequisites
Ensure the following plugins and tools are installed:
- **Node.js** (v20+)
- **Jenkins Plugins**:
  - [NodeJS Plugin](https://plugins.jenkins.io/nodejs/)
  - [HTML Publisher Plugin](https://plugins.jenkins.io/htmlpublisher/)
  - [Allure Plugin](https://plugins.jenkins.io/allure-jenkins-plugin/)
  - [Cucumber Reports Plugin](https://plugins.jenkins.io/cucumber-reports/)

## Minimal Testing Tools and Structure
This repository includes:
- **Basic Playwright Tests**: Simple test cases to verify Jenkins integration, such as:
  - Navigating to a web page.
  - Verifying page titles or elements.
  - Performing basic interactions like clicking buttons or filling forms.
- **Basic Test Structure**:
  - Tests are organized in the `tests/` directory with separate files for logical grouping.
  - Not a full POM (Page Object Model) structure but modular scripts for simplicity.
- **Jenkins Pipeline Configuration**: Includes steps to:
  - Install dependencies.
  - Run Playwright tests.
  - Publish reports using the HTML Publisher, Allure, or Cucumber plugins.

## Usage
### Local Setup
1. Install dependencies:
   ```bash
   npm install
