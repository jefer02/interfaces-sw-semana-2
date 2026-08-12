# Nike Airforce1 Premium — Tarjeta de producto

Réplica de la tarjeta de producto hecha con React + Vite + Tailwind CSS.

## Cómo ejecutarlo

1. Descomprime el archivo.
2. Abre una terminal en la carpeta del proyecto.
3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre en tu navegador la URL que te muestre la terminal (normalmente `http://localhost:5173`).

## Estructura

```
nike-card/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── shoe.png        (foto del tenis)
└── src/
    ├── main.jsx
    ├── App.jsx          (la tarjeta completa)
    └── index.css
```

Todo el componente vive en `src/App.jsx`, así que ahí puedes editar textos, precio, colores, etc.
