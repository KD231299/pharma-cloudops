pipeline {
    agent any

    environment {
        IMAGE = "pharma-cloudops"
        DOCKER_USER = "kd231299"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh 'docker build -t $IMAGE .'
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

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f k8s/deployment.yaml
                kubectl apply -f k8s/service.yaml
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'kubectl get pods'
                sh 'kubectl get svc'
            }
        }
    }
}