# DevOps Lifecycle App

## Improving Collaboration By  Integrating Multiple Tools

## Overview

The **DevOps Lifecycle App** is a comprehensive project that demonstrates how to integrate multiple DevOps tools and practices to streamline the software development lifecycle. The project addresses key challenges in automating CI/CD pipelines, ensuring code quality, handling runtime errors, and maintaining scalable infrastructure. By containerizing both frontend and backend services and deploying them using Kubernetes, the project provides a robust solution for modern application delivery.

## Abstract

This project aims to create an automated and efficient CI/CD pipeline by integrating industry-standard tools and AWS services. The solution leverages:
- **Docker** for containerization of the frontend and backend applications.
- **Jenkins** for orchestrating CI/CD pipelines.
- **Kubernetes** (with Minikube for local testing and AWS EKS for production) for container orchestration and scalability.
- **SonarQube** for static code analysis to maintain high code quality.
- **Sentry** for real-time error monitoring and application performance tracking.

The focus of the project is to eliminate manual processes, accelerate deployment cycles, and build an infrastructure that can scale dynamically with user traffic while ensuring reliable and efficient releases.


## Tools & Technologies

The project utilizes the following tools:

- **Development & Containerization:**
  - Docker

- **Version Control:**
  - Git & GitHub

- **CI/CD Pipeline:**
  - Jenkins
  - AWS CodeBuild / CodeDeploy / CodePipeline *(for future integration)*

- **Static Code Analysis:**
  - SonarQube

- **Monitoring:**
  - Sentry

- **Container Orchestration:**
  - Kubernetes (Minikube for local development, AWS EKS for production deployment)
 
## Pictures

![Screenshot 2025-02-27 170659](https://github.com/user-attachments/assets/f12ca340-e6fd-4d25-8d02-dd89170e0cef)



![Screenshot 2025-02-27 170707](https://github.com/user-attachments/assets/b3063c84-c475-4609-b574-f1410ddaccde)




![Screenshot 2025-02-18 211606](https://github.com/user-attachments/assets/1cd14582-fc31-4cef-84d0-e7805073cd53)


**Sentry first errors**



![Screenshot 2025-02-18 202325](https://github.com/user-attachments/assets/8ef96642-5ec5-43c7-8fbe-4d407e487573)



![Screenshot 2025-02-18 202336](https://github.com/user-attachments/assets/e1858361-4b5f-4a8e-a2ec-ceee026c255e)


**Deploying To Docker**


![Screenshot 2025-02-18 233920](https://github.com/user-attachments/assets/55e8e89e-68ad-401c-8353-4bf39ac758d1)



![Screenshot 2025-02-18 233935](https://github.com/user-attachments/assets/c5571f71-a845-4cd8-94a6-7a737c4c236c)








## How to Run the Project Locally

1. **Clone the Repository:**
   
   git clone https://github.com/<your-username>/devops-lifecycle-app.git
   cd devops-lifecycle-app


2. **Run with Docker Compose:** Make sure Docker is installed and running, then execute:

docker-compose up -d
The frontend should be accessible on http://localhost:8080.
The backend API should be accessible on http://localhost:5000/api.

3. **Run on Kubernetes** (Local via Minikube):

Ensure Minikube and kubectl are installed.
Apply the Kubernetes configurations:  kubectl apply -f k8s/deployment.yaml

Get the service URL: minikube service devops-app-service

This will provide you with the URLs to access the frontend and backend services.




## Future Improvements
The following enhancements are planned for future phases of the project:

**CI/CD Pipeline Enhancements:**

Fully automate all stages of the pipeline including code integration, testing, and deployment.
Implement automatic triggers based on GitHub commits.

**Improving Kubernetes Cluster Management:**

Enable autoscaling to handle peak traffic efficiently.
Streamline cluster management with advanced Kubernetes CLI tools.

**Strengthening Monitoring and Security:**

Enhance Sentry integration for real-time error tracking and performance monitoring.
Incorporate SonarQube in the CI/CD pipeline for vulnerability scanning and improved code quality.

**Scaling Infrastructure:**

Deploy the application using scalable AWS services (e.g., EC2, ECS, EKS) for production environments.

## Conclusion
This project demonstrates how integrating multiple DevOps tools can significantly improve collaboration, automate deployments, and maintain a scalable and reliable infrastructure. By following this repository, you can set up a robust DevOps lifecycle that addresses both current challenges and future growth.

