README.md – Frontend (React + TypeScript)
markdown
Copiar
Editar
# Frontend Evaluaciones 360°

## Descripción
Aplicación web en **React + TypeScript** para gestionar evaluaciones 360° de empleados.  
Interfaz moderna, responsiva y profesional.

## Características
- Registro/Login con JWT  
- Dashboards por rol (Admin, Manager, Employee)  
- Formularios dinámicos con **React Hook Form**  
- Gestión de estado con **Redux Toolkit** y **Context API**  
- Navegación con **React Router v6**  
- Código limpio: hooks reutilizables, contexto, acciones y reducers organizados  

## Tecnologías
- React 18, TypeScript, Vite  
- React Hook Form  
- Redux Toolkit, Context API  
- Tailwind CSS  
- Axios  

## Instalación y ejecución
1. Clonar repositorio  
   ```bash
   git clone https://github.com/tu-usuario/frontend-evaluaciones.git
   cd frontend-evaluaciones
Instalar dependencias

bash
Copiar
Editar
npm install
Configurar variables de entorno

Copia .env.example → .env

Define VITE_API_BASE_URL=http://localhost:4000/api

Ejecutar en desarrollo

bash
Copiar
Editar
npm run dev
Generar build de producción

bash
Copiar
Editar
npm run build
Estructura del proyecto
bash
Copiar
Editar
src/
├─ components/       # Componentes UI reutilizables
├─ features/         # Slices de Redux y Context Providers
├─ hooks/            # Custom hooks
├─ pages/            # Vistas / rutas principales
├─ routes/           # Configuración de React Router
├─ services/         # Clientes HTTP (Axios)
└─ styles/           # Tailwind overrides y utilidades
Diseño
Paleta de colores:

Azul principal: #1E3A8A

Gris oscuro: #111827

Verde acento: #10B981

Accesibilidad: contraste WCAG, tipografía legible
