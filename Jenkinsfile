pipeline {
    agent any

    environment {
        DOCKER_HUB_USER = 'sheethalr12'  // Your Docker Hub username
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/your-repo/devops-lifecycle-app.git'  // Update with your repo
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t frontend-app ./frontend'
                sh 'docker build -t backend-app ./backend'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub-credentials']) {
                    sh "docker tag frontend-app $DOCKER_HUB_USER/frontend-app"
                    sh "docker push $DOCKER_HUB_USER/frontend-app"
                    sh "docker tag backend-app $DOCKER_HUB_USER/backend-app"
                    sh "docker push $DOCKER_HUB_USER/backend-app"
                }
            }
        }
    }
}
