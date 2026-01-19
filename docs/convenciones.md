# Convenciones del proyecto

## Nombres y carpetas
- Carpetas de dominio en español: `dominios/inicio`, `dominios/proyectos`, `dominios/contacto`.
- Paginas: `PaginaX.tsx` dentro de `src/paginas/<dominio>`.
- Componentes reutilizables en `src/componentes/ui` y `src/componentes/comunes`.

## Imports
- Preferir imports relativos cortos y estables.
- Los dominios exponen un `index.ts` para uso publico.

## Capas (cuando exista backend)
- `routes` -> `controller` -> `service` -> `repo`.
- Los controllers solo orquestan request/response.
- Services contienen la logica de negocio.
- Repos encapsulan Prisma.

## Commits
- `chore: snapshot antes de reestructura`
- `refactor(front): reestructura por dominios`
- `refactor(back): modularizacion por capas` (cuando exista backend)
- `docs: arquitectura y convenciones`
- `chore: limpieza final`

## Estilo de codigo
- Componentes en PascalCase.
- Hooks con prefijo `use`.
- Tipos y helpers en archivos `tipos.ts`, `mappers.ts`, `constantes.ts` cuando aplique.
