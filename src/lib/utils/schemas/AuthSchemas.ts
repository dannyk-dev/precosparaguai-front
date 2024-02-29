import { z } from 'zod';

export const UserSchema = z.object({
    username: z.string().min(3).max(20).optional(),
    email: z.string().email(),
    password: z.string().min(8),
});
