import { z, defineCollection } from 'astro:content';

const project = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        tags: z.array(z.string()).max(4),
        sourceCode: z.string().url().optional(),
        liveUrl: z.string().url().optional(),
        reportUrl: z.string().url().optional(),
    }).refine(
        (data) => data.sourceCode || data.liveUrl,
        { message: "Each project needs at least a sourceCode or liveUrl" }
    ),
});

export const collections = {
    project
};
