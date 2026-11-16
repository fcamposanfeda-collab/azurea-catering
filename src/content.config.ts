import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Blog. Cada artículo es un .md en src/content/blog/. Un artículo con fecha futura no se
 * publica hasta ese día: la web se reconstruye cada mañana (ver .github/workflows/deploy.yml).
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['Bodas', 'Comuniones', 'Empresas', 'Celebraciones', 'Consejos']),
    image: z.string(),
    imageAlt: z.string(),
    draft: z.boolean().default(false),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
  }),
});

export const collections = { blog };
