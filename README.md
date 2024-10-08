# Proyecto de Microservicios con API Gateway

Este proyecto consiste en un conjunto de microservicios desarrollados con NestJS, incluyendo un API Gateway para integrarlos. Cada microservicio se ejecuta en un puerto diferente y puede ser levantado simultáneamente usando un solo comando.

## Estructura del Proyecto

- `mercado-libre-service`: Servicio que maneja productos y categorías.
- `user-service`: Servicio que maneja la gestión de usuarios.
- `api-gateway`: API Gateway que integra los microservicios.

## Prerrequisitos

Asegúrate de tener instalado lo siguiente en tu sistema:

- [git](https://git-scm.com/) - sistema de control de versiones
- [node.js](https://nodejs.org/en/) - entorno de ejecución (_revisar la version en [.nvmrc](./.nvmrc)_)
- [npm](https://www.npmjs.com/) - node package manager


## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. Instala las dependencias para cada microservicio:

   ```bash
   cd mercado-libre-service
   npm install
   cd ../user-service
   npm install
   cd ../api-gateway
   npm install
   cd ..
   ```

## Configuración

Cada microservicio utiliza variables de entorno para configurar el puerto en el que se ejecuta. Asegúrate tener el archivo .env con el siguiente contenido:

```bash
API_GATEWAY_PORT=3001
API_MERCADO_LIBRE_SERVICE_PORT=3002
API_USER_SERVICE_PORT=3003
```

## Ejecución

Para levantar todos los microservicios simultáneamente, ejecuta el siguiente comando desde el directorio raíz del proyecto:

```bash
npm run dev
```

Este comando utilizará concurrently para ejecutar todos los servicios al mismo tiempo.

## Acceso a los Servicios
- API Gateway: http://localhost:3001
- Mercado Libre Service: http://localhost:3002
- User Service: http://localhost:3003

## Documentación de la API

La documentación de la API está disponible a través de Swagger en el API Gateway:

- [Swagger UI](http://localhost:3001/api)

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y haz commit de ellos (git commit -am 'Agrega nueva funcionalidad').
4. Empuja tu rama al repositorio remoto (git push origin feature/nueva-funcionalidad).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE). para más detalles.

## Autores
- [Juan David Martinez Rios](mailto:tinrios3@gmail.com)