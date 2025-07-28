pipeline {
  agent any
  stages {
    stage('Run Cypress Tests') {
      steps {
        sh 'npm install'
        sh 'npx cypress run --headless --browser chrome'
      }
    }
  }
}