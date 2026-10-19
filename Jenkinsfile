pipeline {
    // Runs every stage inside a Node.js container (uses the docker:dind setup from Q1)
    agent {
        docker { image 'node:22-alpine' }
    }
    stages {
        stage('Checkout') {
            steps { checkout scm }
        }
        stage('Install') {
            steps { sh 'node -v && npm -v && npm install' }
        }
        stage('Test') {
            steps { sh 'npm test' }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
                sh 'tar -czf hw6-node-app-${BUILD_NUMBER}.tar.gz -C dist .'
            }
        }
    }
    post {
        success {
            archiveArtifacts artifacts: 'hw6-node-app-*.tar.gz', fingerprint: true
        }
    }
}
