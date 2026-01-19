# Arquitectura actual (antes de reestructura)

## Estado general
- Este repositorio contiene **solo frontend** (React + TypeScript + Vite).
- **No existe carpeta de backend** en el proyecto actual. La reestructura del backend queda pendiente cuando exista un repositorio o carpeta con `src/` de servidor.

## Arbol actual (front `src/`)
```
Listado de rutas de carpetas
El nsero de serie del volumen es 000000CF BABE:2D6B
C:\USERS\GEORGES\DESKTOP\BDK-FRONT\BDK-FRONT\SRC
|   index.css
|   main.tsx
|   
+---app
|       App.tsx
|       AppRouter.tsx
|       ScrollToHash.tsx
|       
+---assets
|       react.svg
|       
+---components
|   \---shared
|           Button.tsx
|           Container.tsx
|           Footer.tsx
|           Navbar.tsx
|           SectionTitle.tsx
|           
+---data
|       clients.ts
|       contact.ts
|       footer.ts
|       home.ts
|       navLinks.ts
|       notFound.ts
|       projects.ts
|       site.ts
|       
+---features
|   +---contacto
|   |       ContactForm.tsx
|   |       ContactImages.tsx
|   |       ContactInfo.tsx
|   |       
|   +---home
|   |   \---sections
|   |           AboutSection.tsx
|   |           ClientsMarquee.tsx
|   |           HeroCarousel.tsx
|   |           WhyChooseUs.tsx
|   |           
|   \---proyectos
|           ProjectCard.tsx
|           ProjectDetailModal.tsx
|           ProjectsGrid.tsx
|           
+---lib
|       cn.ts
|       
\---pages
        ContactoPage.tsx
        HomePage.tsx
        ProyectosPage.tsx
```

## Arbol actual (back `src/`)
- **No existe backend** en este repo (no hay carpeta `src/` de servidor).

## Router principal y paginas
- Router principal: `src/app/AppRouter.tsx`
- Paginas: `src/pages/HomePage.tsx`, `src/pages/ProyectosPage.tsx`, `src/pages/ContactoPage.tsx`
- Utilidad de scroll por hash: `src/app/ScrollToHash.tsx`

## Componentes reutilizables vs de pagina
- Reutilizables (shared): `src/components/shared/*`
- Componentes de pagina / secciones: `src/features/home/sections/*`, `src/features/proyectos/*`, `src/features/contacto/*`

## Servicios de API / context / stores
- **No existen** servicios API, context providers, stores o capas HTTP en el estado actual.

## Backend (controllers, routes, services, repos, middlewares)
- **No aplica**: no hay backend en este repositorio.

## Mapa de modulos (actual)
- Inicio (home): Hero, About, Por que elegirnos, Clientes (marquee)
- Proyectos: grid + cards + modal de detalle
- Contacto: formulario + info + imagenes

## Rutas activas
- `/` -> Home
- `/proyectos` -> Proyectos
- `/contacto` -> Contacto
- `*` -> NotFound basico
