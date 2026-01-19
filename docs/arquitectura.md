# Arquitectura del proyecto

## Resumen
- **Frontend**: React + TypeScript + Vite (SPA corporativa).
- **Backend**: no presente en este repositorio. Queda pendiente la modularizacion cuando exista un `src/` de servidor.

## Mapa inicial (antes de reestructura)
### Arbol inicial (front `src/`)
```
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

### Router y paginas (estado inicial)
- Router principal: `src/app/AppRouter.tsx`
- Paginas: `HomePage`, `ProyectosPage`, `ContactoPage`
- Scroll por hash: `src/app/ScrollToHash.tsx`

### Modulos (estado inicial)
- Inicio: Hero, About, Por que elegirnos, Clientes (cinta)
- Proyectos: grid + tarjetas + modal
- Contacto: formulario + info + imagenes

### Rutas activas (estado inicial)
- `/`
- `/proyectos`
- `/contacto`

## Estructura actual (despues de reestructura)
### Arbol actual (front `src/`)
```
C:\USERS\GEORGES\DESKTOP\BDK-FRONT\BDK-FRONT\SRC
|   main.tsx
|   
+---app
|   |   App.tsx
|   |   
|   +---layouts
|   |       LayoutPrincipal.tsx
|   |       
|   +---providers
|   |       ProveedoresApp.tsx
|   |       
|   \---router
|           RouterPrincipal.tsx
|           ScrollAlHash.tsx
|           
+---assets
|       
+---componentes
|   +---comunes
|   |       BarraNavegacion.tsx
|   |       PiePagina.tsx
|   |       
|   +---formularios
|   |       index.ts
|   |       
|   +---graficos
|   |       index.ts
|   |       
|   \---ui
|           Boton.tsx
|           Contenedor.tsx
|           TituloSeccion.tsx
|           
+---dominios
|   +---contacto
|   |   |   datosContacto.ts
|   |   |   index.ts
|   |   |   
|   |   +---api
|   |   |       contactoApi.ts
|   |   |       
|   |   \---componentes
|   |           FormularioContacto.tsx
|   |           ImagenesContacto.tsx
|   |           InfoContacto.tsx
|   |           
|   +---inicio
|   |   |   datosClientes.ts
|   |   |   datosInicio.ts
|   |   |   index.ts
|   |   |   
|   |   +---api
|   |   |       index.ts
|   |   |       
|   |   \---componentes
|   |           CarruselHero.tsx
|   |           CintaClientes.tsx
|   |           SeccionPorQueElegirnos.tsx
|   |           SeccionSobreNosotros.tsx
|   |           
|   +---proyectos
|   |   |   datosProyectos.ts
|   |   |   index.ts
|   |   |   
|   |   +---api
|   |   |       proyectosApi.ts
|   |   |       
|   |   \---componentes
|   |           GrillaProyectos.tsx
|   |           ModalDetalleProyecto.tsx
|   |           TarjetaProyecto.tsx
|   |           
|   \---sitio
|       |   datosNavegacion.ts
|       |   datosNoEncontrado.ts
|       |   datosPiePagina.ts
|       |   datosSitio.ts
|       |   index.ts
|       |   
|       \---api
|               index.ts
|               
+---estilos
|       base.css
|       
+---lib
|   +---formateadores
|   |       index.ts
|   |       
|   +---http
|   |       clienteHttp.ts
|   |       
|   +---utils
|   |       cn.ts
|   |       
|   \---validacion
|           index.ts
|           
\---paginas
    +---contacto
    |       PaginaContacto.tsx
    |       
    +---inicio
    |       PaginaInicio.tsx
    |       
    +---no-encontrado
    |       PaginaNoEncontrada.tsx
    |       
    \---proyectos
            PaginaProyectos.tsx
```

### Router y paginas (actual)
- Router principal: `src/app/router/RouterPrincipal.tsx`
- Layout principal: `src/app/layouts/LayoutPrincipal.tsx`
- Paginas: `PaginaInicio`, `PaginaProyectos`, `PaginaContacto`, `PaginaNoEncontrada`
- Scroll por hash: `src/app/router/ScrollAlHash.tsx`

### Dominios (actual)
- `dominios/inicio`: secciones del home + datos del hero/intro/clientes.
- `dominios/proyectos`: grilla, tarjetas, modal + datos de proyectos.
- `dominios/contacto`: formulario, info, imagenes + datos de contacto.
- `dominios/sitio`: configuracion global (navbar, footer, sitio, 404).

### Rutas activas (actual)
- `/`
- `/proyectos`
- `/contacto`
- `*` (no encontrado)
