pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:${env.PATH}"
    }

    stages {
        stage('Parando servicios...'){
            steps {
                sh '''
                    docker compose -p adj-demo down || true
                '''
            }
        }
        stage('Eliminando imagenes antiguas...') {
            steps {
                sh '''
                    IMAGES=$(docker images --filter "label=com.docker.compose.project=adj-demo" -q)
                    if [ -n "$IMAGES" ]; then
                       docker rmi -f $IMAGES
                    else
                       echo "No hay images por borrar"
                    fi
                '''
            }
        }
        stage('Descargando actualizacion...') {
            steps {
                checkout scm 
            }
        }
        stage('Construyendo y desplegando...') {
            steps {
                sh '''
                    docker compose up --build -d
                '''
            }
        }
    }

    post {
        always {
            echo 'pipeline finalizada.'
        }
        success {
            echo 'La pipeline se ejecuto correctamente.'
        }
        failure {
            echo 'Ocurrio un error en la pipeline.'
        }
    }
}
