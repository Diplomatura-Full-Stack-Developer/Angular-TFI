# Diplomatura en Profesional Full-Stack Developer

## Curso de desarrollo con Angular - Profesor: Gabriel Alberini

## Trabajo Final Integrador

### Desarrollar una SPA (Single Page Application).

### Objetivos:

Desarrollar una SPA (Single Page Application) aplicando los conceptos trabajados durante el curso:

- **Módulos**
- **Routing**
- **Rutas dinámicas**
- **Lazy loading**
- **localStorage/sessionStorage**
- **Estilos**
- **Organización del proyecto**
- **Deploy en Firebase**

### Proyecto:

El proyecto se desarrolla sobre una idea propia de una casa de venta de artículos del hogar con más de 80 años de historia
que nace a partir de un emprendimiento familiar.
Esta empresa, con el paso del tiempo fué creciendo y se establecieron sucursales en diferentes provincias de la Argentina.
El logo de la empresa es un diseño propio creado con la ayuda de chatGPT.
Son propios los diseños de las sucursales con la marquesina y el logo de la empresa, también con la ayuda de chatGPT para obtener las imagenes.
Las sucursales, que están en diferentes provincias de país, se ubican dos de ellas en esquinas centricas comerciales,
una a mitad de cuadra, también en un centro comercial, y otra en un shopping center.
En la aplicación también hay una imagen de fondo en la página donde se cuenta la historia de la empresa.
Esta imagen corresponde a la primera sucursal que se inauguró en la ciudad de Buenos Aires. Con esta idea y con la ayuda de chatGPT se creó esta imagen de fondo con estilo vintage.

### Consideraciones:

- Se desarrolla un proyecto similar al entregado en el curso de React, con el objetivo de comparar con Angular la implementación de las distintas herramientas que caracterízan a cada uno.
- Otro objetivo, es dejar con esta aplicación un frontend adecuado para desarrollar el backend correspondiente con el curso de NodeJS.
- Se simula la utilización de datos dinámicos mediante señales, haciendo en primer lugar una carga de datos estáticos.
- Se mantiene la persistencia de los datos en el navegador mediante el uso de **localStorage**.
- Se configura un **lazy loading** de los módulos de la aplicación mediante el uso de **loadComponent**.
- Se almacena en el localStorage la última URL visitada por el usuario para redireccionar a ella luego de reinciar la aplicación.
- Se configura una **ruta dinámica** para la visualización de los detalles de un producto.
- Se implementa la funcionalidad de agregar productos al carrito y eliminarlos, también se implementa la funcionalidad de visualizar el total de productos en el carrito.
- No se implementa la funcionalidad de realizar una compra.
- El footer se muestra completo con fines visuales, pero no se implementan las funcionalidades de las redes sociales.

### Pasos para el despliegue en Firebase:

1. Crear un proyecto en Firebase:

```bash
npm install firebase
```

1. Instalar dependencias de Firebase para Angular:

```bash
ng add @angular/fire
```

1. Configurar variables de entorno:

```typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
  },
};
```

1. Iniciar sesión en Firebase:

```bash
firebase login
```

1. Inicializar el proyecto en Firebase:

```bash
firebase init
```

1. Crear el build de producción:

```bash
ng build
```

1. Hacer el deploy de la aplicación:

```bash
firebase deploy
```

1. Verificar el despliegue en Firebase:

[https://angular-m1-t4.web.app](https://angular-m1-t4.web.app)

### Pasos para la ejecución local:

1. Clonar el repositorio:

```bash
git clone https://github.com/Diplomatura-Full-Stack-Developer/Angular-TFI
```

2. Instalar las dependencias:

```bash
npm install
```

3. Configurar las variables de entorno:

```typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
  },
};
```

4. Ejecutar la aplicación:

```bash
ng serve
```

### Recursos utilizados:

- Angular ([https://angular.dev/](https://angular.dev/))
- Angular CLI - Versión 22.1.7 ([https://angular.io/cli](https://angular.io/cli))
- Node.js - Versión 24.20.0 ([https://nodejs.org/es/download/](https://nodejs.org/es/download/))
- Tailwind CSS - Versión 4.1.12 ([https://tailwindcss.com/](https://tailwindcss.com/))
- Angular Material - Versión 22.1.5 ([https://material.angular.io/](https://material.angular.io/))

### Alumno: Rubén Seco

### Comisión: 181802
