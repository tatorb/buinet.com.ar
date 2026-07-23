import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog: cada post es un archivo Markdown en src/content/blog/.
// El importador de WordPress (scripts/import-wordpress.mjs) genera estos archivos
// una sola vez a partir del dump de la DB salvada.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Building Networks'),
      category: z.string().optional(),
      tags: z.array(z.string()).default([]),
      // Imagen destacada (ruta relativa a la carpeta del post o URL).
      heroImage: image().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
