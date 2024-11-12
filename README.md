<p align="center">
  <img src="./public/logos/logo.png" alt="Logo" width="200">
</p>

<div align="center">

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Clerk](https://img.shields.io/badge/Clerk-indigo?style=for-the-badge&logo=clerk&logoColor=white)
![Spotify](https://img.shields.io/badge/Spotify-black?style=for-the-badge&logo=Spotify&logoColor=green)
</div>

<h1 align="center">Tu música personalizada cada més</h1>

<div align="center">
    <img src="./public/images/Captura de pantalla 2024-11-10 a las 22.33.47.png">
</div>

## Recursos 

Este proyecto utiliza los siguientes recursos:

- **Next.js**: Un framework de React para la creación de aplicaciones web.
- **TypeScript**: Un superset de JavaScript que añade tipos estáticos.
- **React**: Una biblioteca de JavaScript para construir interfaces de usuario.
- **Clerk Auth**: Una solución de autenticación para aplicaciones web.
- **API de Spotify**: Utilizada para acceder a datos de música y funcionalidades de Spotify.
- **Magic UI**: Una biblioteca de componentes UI para crear interfaces de usuario atractivas.
- **shadcn**: Una librería de componentes UI para aplicaciones web.

## Uso

Para configurar el proyecto, sigue estos pasos:

1. Clona el repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd saas-spotify
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Crea un archivo `.env.local` en la raíz del proyecto con las siguientes claves:
    ```env
    CLERK_PUBLIC_KEY=your_public_key
    CLERK_PRIVATE_KEY=your_private_key
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
    NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard
    ```

Asegúrate de reemplazar `your_public_key` y `your_private_key` con tus claves de Clerk correspondientes.

## Estado del Proyecto

>[!IMPORTANT] 
> Este proyecto se encuentra actualmente en desarrollo. Algunas funcionalidades pueden no estar completamente implementadas o pueden cambiar en el futuro.