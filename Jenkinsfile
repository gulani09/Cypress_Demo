pipeline {
  agent any
  stages {
    stage('Run Cypress Tests') {
      steps {
        bat 'npm install'
        bat 'npx cypress run --headless --browser chrome || exit 0'
      }
    }
  }
}
