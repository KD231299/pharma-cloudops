pipeline {
    agent any

    environment {
        DOCKER_USER = "kd231299"
        IMAGE = "pharma-cloudops"
    }

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/KD231299/pharma-cloudops.git'
            }
        }

        stage('Build Image') {
            steps {
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
                sh '''
                echo Kishan#23121999 | docker login -u $DOCKER_USER --password-stdin
                docker push $DOCKER_USER/$IMAGE:latest
                '''
            }
        }

        stage('Deploy to K8s') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}