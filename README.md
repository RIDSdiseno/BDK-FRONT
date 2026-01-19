# BDK Ingenieria y Construccion - Frontend

SPA corporativa construida con React + TypeScript + Vite, animaciones con Framer Motion y estilos en TailwindCSS.

## Requisitos
- Node.js 18+ (recomendado)

## Scripts
- `npm run dev` inicia el entorno de desarrollo.
- `npm run build` compila el proyecto para produccion.
- `npm run preview` levanta la build local.
- `npm run lint` ejecuta ESLint.

## Variables de entorno
- `VITE_API_URL` (opcional): base URL para llamadas HTTP desde `src/lib/http/clienteHttp.ts`.

## Estructura principal
- `src/app`: router, layouts y providers.
- `src/paginas`: paginas por ruta.
- `src/componentes`: UI reutilizable y componentes comunes.
- `src/dominios`: logica y componentes por dominio.
- `src/lib`: utilidades compartidas (http, validacion, formateadores).
- `src/estilos`: estilos base.

## Documentacion
- `docs/arquitectura.md`
- `docs/convenciones.md`
- `docs/front/estructura.md`
- `docs/back/estructura.md`

## Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- Redirect SPA: `public/_redirects`
