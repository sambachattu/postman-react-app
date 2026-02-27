pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t postman-react-app .'
            }
        }

        stage('Run Container (Test)') {
            steps {
                sh 'docker run -d -p 3001:80 --name react-test postman-react-app'
            }
        }
    }

    post {
        success {
            echo 'Docker build successful 🚀'
        }
        failure {
            echo 'Build failed ❌'
        }
    }
}