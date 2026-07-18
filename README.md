# Server Status Dashboard

A beginner-friendly DevOps project that demonstrates a complete software delivery workflow, from application development to containerization, continuous integration, and cloud-ready deployment.

This project was built to practice real-world DevOps concepts instead of only writing application code. It follows a workflow similar to what many engineering teams use in production.

---

# Project Overview

The Server Status Dashboard is a simple responsive web application that displays the health and status of backend services.

Although the application itself is intentionally simple, the main goal of this project is to learn the DevOps lifecycle by implementing modern development and deployment practices.

This project covers:

- Git Branching Strategy
- Pull Requests
- Docker Containerization
- Nginx
- GitHub Actions CI
- GitHub Container Registry (GHCR)
- Cloud Deployment Preparation

---

# Project Goals

The purpose of this project is to understand how a modern DevOps workflow works from start to finish.

Instead of only building a website, the project focuses on:

- Building an application
- Version controlling it
- Containerizing it
- Automatically testing it
- Publishing Docker images
- Preparing for cloud deployment

---

# Overall Architecture

```text
                 Developer

                     │
                     ▼

               VS Code Project

                     │

                Git Commit

                     │

                 GitHub Repo

                     │

              Pull Request (PR)

                     │

         GitHub Actions CI Pipeline

                     │

         Build Docker Image

                     │

      Run Temporary Docker Container

                     │

          Health Check (HTTP 200)

                     │

          Container Logs Collected

                     │

       Remove Temporary Container

                     │

          Publish Docker Image

                     │

    GitHub Container Registry (GHCR)

                     │

              (Future Stage)

               AWS EC2 Server

                     │

             Docker Container

                     │

               Live Website
```

---

# Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Version Control

- Git
- GitHub

### Containerization

- Docker
- Nginx

### CI/CD

- GitHub Actions
- GitHub Container Registry (GHCR)

### Cloud (Upcoming)

- AWS EC2

---

# Project Structure

```text
server-status-dashboard/

│
├── index.html
├── style.css
├── script.js
│
├── Dockerfile
├── .dockerignore
│
├── README.md
│
└── .github
    └── workflows
        └── docker-ci.yml
```

---

# Features

- Responsive Dashboard UI
- Service Status Cards
- Summary Cards
- Responsive Layout
- Dockerized Application
- Nginx Web Server
- GitHub Actions CI Pipeline
- Docker Health Checks
- Docker Image Publishing
- Cloud Ready Deployment

---

# Git Workflow

The project follows a feature branch workflow.

```text
main

│

├── feature/dashboard-design

│

├── feature/dockerize-dashboard

│

├── ci/docker-build-test

│

└── ci/publish-ghcr-image
```

Workflow:

```text
Create Issue

↓

Create Branch

↓

Develop Feature

↓

Commit Changes

↓

Push Branch

↓

Create Pull Request

↓

GitHub Actions Runs

↓

Review

↓

Merge

↓

Delete Branch
```

---

# Docker Workflow

The application is containerized using Docker and served by Nginx.

Docker build flow:

```text
Dockerfile

↓

Docker Image

↓

Docker Container

↓

Nginx

↓

Static Website
```

Docker is used to ensure that the application runs consistently across different environments.

---

# GitHub Actions CI Pipeline

Every Pull Request automatically triggers a CI pipeline.

Pipeline Steps

```text
Checkout Repository

↓

Build Docker Image

↓

Run Docker Container

↓

Wait for Application

↓

Health Check

↓

Show Logs

↓

Remove Container
```

If every step succeeds, the Pull Request receives a green status check.

---

# GitHub Container Registry (GHCR)

Once code is merged into the main branch:

```text
Build Image

↓

Run Tests

↓

Health Check

↓

Login to GHCR

↓

Tag Image

↓

Publish Docker Image
```

The published image can later be pulled from anywhere.

---

# Future Cloud Deployment

Next stage of the project:

```text
GitHub

↓

GitHub Actions

↓

GHCR

↓

AWS EC2

↓

Docker

↓

Nginx

↓

Live Website
```

---

# DevOps Concepts Learned

This project helped me understand:

- Linux Basics
- Git
- GitHub
- Git Branching
- Pull Requests
- Docker
- Docker Images
- Docker Containers
- Docker Networking
- Dockerfile
- .dockerignore
- Nginx
- GitHub Actions
- CI Pipelines
- Docker Registry
- GitHub Container Registry
- Cloud Deployment Preparation

---

# Learning Workflow

```text
HTML

↓

Git

↓

GitHub

↓

Branches

↓

Pull Requests

↓

Docker

↓

Dockerfile

↓

Docker Images

↓

Containers

↓

GitHub Actions

↓

Continuous Integration

↓

Container Registry

↓

AWS Cloud (Next)
```

---

# Future Improvements

The project will continue to grow by adding:

- AWS EC2 Deployment
- Docker Compose
- Nginx Reverse Proxy
- HTTPS using Let's Encrypt
- Custom Domain
- Automatic Deployment (CD)
- Prometheus Monitoring
- Grafana Dashboard
- Log Aggregation
- Terraform
- Infrastructure as Code
- Ansible Automation
- Kubernetes Deployment
- High Availability Architecture

---

# Learning Outcomes

Through this project I gained hands-on experience with:

- Building a complete Git workflow
- Working with feature branches
- Using Pull Requests
- Resolving merge workflows
- Writing Dockerfiles
- Building Docker images
- Running Docker containers
- Publishing container images
- Creating GitHub Actions workflows
- Automating build and test pipelines
- Preparing applications for cloud deployment

---

# Project Status

Current Progress

```text
✅ HTML

✅ CSS

✅ JavaScript

✅ Git

✅ GitHub

✅ Branching

✅ Pull Requests

✅ Docker

✅ Dockerfile

✅ Docker Images

✅ Containers

✅ Nginx

✅ GitHub Actions

✅ CI Pipeline

✅ GHCR

🟡 AWS EC2 (In Progress)

⬜ Docker Compose

⬜ Reverse Proxy

⬜ HTTPS

⬜ Monitoring

⬜ Terraform

⬜ Kubernetes
```

---

#  Author

**Kavishka Chandrasekara**

Aspiring DevOps & Cloud Engineer

Learning by building real-world DevOps projects and gradually progressing toward production-grade cloud infrastructure.