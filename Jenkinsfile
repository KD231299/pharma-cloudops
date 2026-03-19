pipeline {
    agent any

    environment {
        IMAGE = "pharma-cloudops"
        DOCKER_USER = "kd231299"
        VERSION = "${BUILD_NUMBER}"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                sh 'docker build -t $DOCKER_USER/$IMAGE:v$VERSION .'
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push $DOCKER_USER/$IMAGE:v$VERSION'
            }
        }

        stage('Update Deployment') {
            steps {
                sh '''
                sed -i "s|image: .*|image: $DOCKER_USER/$IMAGE:v$VERSION|g" k8s/deployment.yaml
                '''
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
                sh 'kubectl rollout status deployment pharma-app --timeout=20s'
            }
        }
    }
}