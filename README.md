
# ITOURS 0.0.1

# Repositorio Frontend. Aplicación Web de Gestión Turismo
El proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) version 18.0.7.
Es un frontend para una aplicacion web sobre gestión turistica.


## Integrantes de Equipo

| Instructores del Proyecto                                                  |
|------------------------------| ------------------------------------------- |
| Nombre                       | Email                                       |
|------------------------------| ------------------------------------------- |
| Eduardo Nieves               | zedmous@gmail.com                           |


| Developers Frontend                                                        |
|------------------------------| ------------------------------------------- |
| Nombre                       | Email                                       |
|------------------------------| ------------------------------------------- |
| Example Example              | example@email.com                           |

| Developers Backend                                                         |
|------------------------------| ------------------------------------------- |
| Nombre                       | Email                                       |
|------------------------------| ------------------------------------------- |
| Example Example              | example@email.com                           |

### Especificaciones técnicas / Referencias

- Documentación oficial `https://expressjs.com/` 

#### Requerimientos previos:
- Html
- Css
- JavaScript
- TypeScript
- Angular
- NodeJS
- Npm

#### Branches

- master -> Production Service`https://example.com/api`
- master -> Production Local ```http://localhost:4200```
- develop -> Develop Service `https://example.com/api`
- develop -> Develop Local ```http://localhost:4200```

### Configurar el entorno de desarrollo

### Instalación y configuración
- Pasos de ejecucion:

1. Clonar el repositorio en tu máquina local con el comando 
```
git clone https://github.com/Zedmous/iujo-fe-general-2024-1.git
```
2. Apuntar al directorio en la consola al proyecto con el comando 
```
cd iujo-fe-general-2024-1
```
2. Instalar las dependencias necesarias con el comando 
```
npm install
```
3. Configurar las variables de entornos, usa el archivo `.env.example` 
copia pegalo renombra el nombre dejandole solo `.env` y colocale los valores correspodnientes
4. Ejecutar el servidor de desarrollo con el comando 
```
ng serve
```

#### Comandos para desplegar funciones.

| °   | Comando             | Descripción                                                            | Notas |
| --- | ------------------- | ---------------------------------------------------------------------- | ----- |
| 1   | `ng serve`          | Ejecutar compilación de la aplicación y activa el modo desarrollo      |       |
| 2   | `ng build`          | Ejecutar la compilacion del proyecto  y genera el directorio `dist/`   |       |

### Estructura del proyecto

```
├──src:
|   ├──app:
|   |   ├──core:
|   |   │   ├──guards:
|   |   |   |   ├──*.guard.ts
|   │   |   ├──interfaces:
|   |   |   |   ├──*.interface.ts
|   │   |   ├──services:
|   |   |   |   ├──*.service.ts
|   |   ├──pages:
|   │   |   ├──dashboard:
|   |   |   |   ├──<departamentos>*:
|   |   |   |   ├──dashboard-routing.module.ts
|   |   |   |   ├──dashboard.component.css
|   |   |   |   ├──dashboard.component.html
|   |   |   |   ├──dashboard.component.ts
|   |   |   |   ├──dashboard.module.ts
|   │   |   ├──login:
|   |   |   |   ├──<departamentos>*:
|   |   |   |   ├──dashboard-routing.module.ts
|   |   |   |   ├──dashboard.component.css
|   |   |   |   ├──dashboard.component.html
|   |   |   |   ├──dashboard.component.ts
|   |   |   |   ├──dashboard.module.ts
|   |   ├──shared:
|   │   |   ├── ...
|   |   ├──app-routing.module.ts
|   |   ├──app.component.css
|   |   ├──app.component.html
|   |   ├──app.component.ts
|   |   ├──app.module.ts
|   ├──assets:
|   ├──enviroments:
|   ├──index.html
|   ├──main.ts
|   ├──styles.css
├──.editorconfig
├──.gitignore
├──angular.json
├──package-lock.json
├──package.json
├──README.md
├──tsconfig.app.json
├──tsconfig.json
├──tsconfig.spec.json
```

## Dependencias instaladas
| °   | Paquete                            | Versión         |
| --- | ---------------------------------- | --------------- |
|  1  | `@angular/animations`              | `^18.0.0`      |
|  2  | `@angular/cdk`                     | `^18.0.6`      |
|  3  | `@angular/common`                  | `^18.0.0`      |
|  4  | `@angular/compiler`                | `^18.0.0`      |
|  5  | `@angular/core`                    | `^18.0.0`      |
|  6  | `@angular/forms`                   | `^18.0.0`      |
|  7  | `@angular/material`                | `^18.0.6`      |
|  8  | `@angular/platform-browser`        | `^18.0.0`      |
|  9  | `@angular/platform-browser-dynamic`| `^18.0.0`      |
| 10  | `@angular/router`                  | `^18.0.0`      |
| 11  | `@types/lodash`                   | `^4.17.7`      |
| 12  | `rxjs`                             | `~7.8.0`       |
| 13  | `tslib`                            | `^2.3.0`       |
| 14  | `zone.js`                         | `~0.14.3`      |



## Servidor de desarrollo

Ejecute `ng serve` para un servidor de desarrollo. Navegue hasta `http://localhost:4200/`. La aplicación se recargará automáticamente si modifica alguno de los archivos de origen.
