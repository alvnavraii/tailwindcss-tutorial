# Proyecto con Tailwind CSS

Este proyecto utiliza Tailwind CSS para el diseño y la estilización de la interfaz de usuario.

Todo el código de este proyecto se puede encontrar en:

https://www.youtube.com/watch?v=5HtRcMSO1Ro&t=0s

## Instalación

Para instalar Tailwind CSS en tu proyecto, sigue estos pasos:

1. Instala Tailwind CSS a través de npm:
    ```bash
    npm install tailwindcss
    ```

2. Crea un archivo de configuración de Tailwind:
    ```bash
    npx tailwindcss init
    ```

3. Configura el archivo `tailwind.config.js` para incluir tus rutas de contenido:
    ```javascript
    module.exports = {
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

4. Añade las directivas de Tailwind a tu archivo CSS:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Uso

Ejemplo de cómo utilizar clases de Tailwind en tu HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dark Mode</title>
    <link rel="stylesheet" href="./output.css">
</head>
<body class="dark:bg-slate-900">
    <label for="darkmode" class="dark:text-white">Dark Mode</label>
    <input type="checkbox" id="darkmode">
    <article class="w-[400px] mt-10 border rounded-lg p-3 mx-auto dark:bg-slate-800">
        <h2 class="font-bold text-lg dark:text-white">Titulo</h2>
        <p class="dark:text-slate-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quod soluta rerum? 
            Dolorum maxime ut rem explicabo fuga commodi eveniet ex iusto. 
            Accusantium doloremque quibusdam magni illo natus officia corrupti!</p>
    </article>
    <script src="./main.js"></script>
</body>
</html>