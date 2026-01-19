# Estructura del Frontend

## Objetivo
Ordenar el frontend por **dominios** y separar paginas, componentes reutilizables y utilidades.

## Estructura
- `src/app`: router, layouts y providers globales.
- `src/paginas`: paginas por ruta (solo orquestan vistas).
- `src/componentes/ui`: componentes UI reutilizables puros.
- `src/componentes/comunes`: piezas compartidas del layout (navbar, footer).
- `src/dominios`: logica y componentes por dominio (inicio, proyectos, contacto, sitio).
- `src/lib`: utilidades transversales (http, validacion, formateadores, utils).
- `src/estilos`: estilos base y utilidades globales.
- `src/assets`: recursos estaticos empaquetados.

## Convenciones rapidas
- Paginas en `src/paginas/<dominio>/PaginaX.tsx`.
- Componentes UI reutilizables en `src/componentes/ui`.
- Cada dominio expone un `index.ts` con su API publica.
- Datos y mocks por dominio en `dominios/<dominio>/datos*.ts`.
- Llamadas HTTP por dominio en `dominios/<dominio>/api`.

## Router
- `src/app/router/RouterPrincipal.tsx` define las rutas.
- `src/app/layouts/LayoutPrincipal.tsx` compone navbar + footer.

## Consumo de API
- Cliente central: `src/lib/http/clienteHttp.ts`.
- Las llamadas por dominio viven en `src/dominios/<dominio>/api/`.
