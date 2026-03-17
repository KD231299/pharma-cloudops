pipeline {
    agent any

    environment {
        IMAGE = "pharma-cloudops"
        DOCKER_USER = "kd231299"
    }

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/KD231299/pharma-cloudops.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE ./app'
            }
        }

        stage('Tag Image') {
            steps {
                sh 'docker tag $IMAGE $DOCKER_USER/$IMAGE:latest'
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push $DOCKER_USER/$IMAGE:latest'
            }
        }

        stage('Deploy to K3s') {
            steps {
                sh '''
                kubectl apply -f k8s/deployment.yaml
                kubectl apply -f k8s/service.yaml
                '''
            }
        }
    }
}