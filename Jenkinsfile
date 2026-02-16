pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                sh 'ls -la' // Example command to list files, replace with actual checkout commands
                // Add your checkout commands here
            }
        }
        stage('Info') {
            steps {
                sh 'git rev-parse short HEAD' // Example command to get the short commit hash
                // Add your test commands here
            }
        }
    }
}