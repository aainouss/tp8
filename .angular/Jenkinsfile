pipeline {
    agent any

    environment {
        EMAIL_RECEPT = "aainouss@gmail.com"
             
    }

    stages {
        stage('clone') {
            steps {
                git 'https://github.com/aainouss/tp8.git'
            }
        }
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('quality code') {
            steps {
                echo 'Verification de la qualité du code'
                bat 'npm run lint'
            }
        }


        stage('Build Angular app') {
            steps {
                echo 'Build en cours'
                bat 'npm run build --prod'
            }
        }


        stage('Build Docker image') {
            steps {
                bat 'docker build -t tp8'
            }
        }


        stage('run Docker container') {
            steps {
                bat 'docker run -d -p 8080:80 tp8'
                  }
            }
        }
    post {
        success {

            mail to: "${EMAIL_RECEPT}",
            subject: "Build réussi",
            body: "Build terminé avec succès"
        }
         failure {

            mail to: "${EMAIL_RECEPT}",
            subject: "Build échoué",
            body: "Build terminé avec échec"
        }
    }
