---
title: "Ejemplo de post (se reemplaza por la importación real)"
description: "Este archivo es sólo un ejemplo del formato. El importador de WordPress genera un archivo así por cada post del blog salvado."
pubDate: 2026-01-15
author: "Building Networks"
category: "Novedades"
tags: ["ejemplo", "migracion"]
draft: false
---

Este es un post de **ejemplo** para verificar que el blog funciona.

Cuando corramos `npm run import:wp` con el dump de la base de datos, este archivo
se elimina y se generan los posts reales del blog, cada uno con su fecha, autor,
categoría e imágenes.

## Subtítulo de ejemplo

- Los posts se guardan como Markdown en `src/content/blog/`.
- Las imágenes van en `src/content/blog/` o en `/public/`.
- El contenido queda versionado en Git: nada vive en una base de datos atacable.
