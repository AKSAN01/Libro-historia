# Proyecto: Historia de Colombia Interactivo

## 1. Visión General
Una aplicación web interactiva diseñada para presentar la historia de Colombia (1960-2026) bajo el concepto de un "Libro Histórico Interactivo". El diseño es inmersivo, utilizando texturas de papel, efectos de lomo de cuero y sombras profundas, combinando la lectura clásica con elementos multimedia modernos.

## 2. Tecnologías y Frameworks Principales
- **React 19 + Vite**: Motor principal de la aplicación. Vite asegura una compilación ultra rápida.
- **Framer Motion**: Librería para orquestar micro-interacciones (hover en los libros de la línea de tiempo) y transiciones de páginas (Fade-in / Fade-out al cambiar de décadas).
- **GSAP**: Incluido para futuras animaciones complejas (como scroll interactivo o animaciones secuenciales en ciertas hojas).
- **React Router DOM**: Para el enrutamiento modular. Permite navegar entre el `Índice`, la `Línea del tiempo` y las diferentes `Décadas` sin recargar la página.