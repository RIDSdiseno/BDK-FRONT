# Estructura del Backend

## Estado actual
Este repositorio **no contiene backend**. No existe carpeta `src/` de servidor ni codigo Node/Express/Prisma.

## Estructura objetivo (cuando exista backend)
```
src/
  app/
    server.ts
    routes.ts
  modulos/
    auth/
    ecommerce/
      pagos/
      analytics/
      productos/
    crm/
      integracion/
  infra/
    db/
    http/
    logger/
  middlewares/
  shared/
```

## Siguientes pasos
- Indicar la ruta del repo backend o agregar el backend al monorepo para poder modularizar.
