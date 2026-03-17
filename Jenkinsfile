pipeline {
    agent any

    environment {
        IMAGE = "pharma-cloudops"
        DOCKER_USER = "kd231299"
    }

    stages {

        stage('Clone Code') {
            steps {
                echo "Cloning repository..."
                git 'https://github.com/KD231299/pharma-cloudops.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh 'docker build -t $IMAGE .'
            }
        }

        stage('Tag Image') {
            steps {
                echo "Tagging image..."
                sh 'docker tag $IMAGE $DOCKER_USER/$IMAGE:latest'
            }
        }

        stage('Push Image') {
            steps {
                echo "Pushing to DockerHub..."
                sh 'docker push $DOCKER_USER/$IMAGE:latest'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo "Deploying to K3s..."
                sh '''
                kubectl apply -f k8s/deployment.yaml
                kubectl apply -f k8s/service.yaml
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                echo "Checking pods..."
                sh 'kubectl get pods'
                sh 'kubectl get svc'
            }
        }
    }
}