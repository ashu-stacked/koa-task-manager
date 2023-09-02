# Koa PostgreSQL REST API

This repository contains a Koa application that serves as a RESTful API, utilizing PostgreSQL as the database management system. It provides endpoints for managing tasks and users and includes JWT authentication and error logging middleware.

## Table of Contents

1. [Description](#description)
2. [Features](#features)
3. [Requirements](#requirements)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Usage](#usage)
7. [Endpoints](#endpoints)
8. [Tables and Associations](#tables-and-associations)
9. [Authentication via JWT](#authentication-via-jwt)
10. [Error Logging Middleware](#error-logging-middleware)
11. [License](#license)

## Description

This Koa application is designed to serve as a backend API for a task management system. It allows users to authenticate,authorize,create, read, update, and delete tasks and users. The application is built on the Koa framework and uses PostgreSQL for data storage.

## Features

- User registration and authentication via JWT
- Login and Logout feature for specific user
- Task creation, modification, and deletion
- Fetching a user's tasks
- RESTful API design
- JWT-based authentication
- Middlewares for error logging

## Requirements

Before running the application, ensure you have the following dependencies installed:

- Node.js
- PostgreSQL

## Installation

To get started, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ashu-stacked/koa-task-manager.git

2. npm install:

   ```bash
   npm install
   
3. Run the server via:

   ```bash
   node src/app.js




