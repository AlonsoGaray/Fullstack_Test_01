import z from 'zod'

export const projectSchema = z.object({
  name: z.string().min(1, 'Project name is required').max(100, 'Name too long'),
  description: z.string().max(500, 'Description too long').optional(),
})

export type ProjectFormData = z.infer<typeof projectSchema>
