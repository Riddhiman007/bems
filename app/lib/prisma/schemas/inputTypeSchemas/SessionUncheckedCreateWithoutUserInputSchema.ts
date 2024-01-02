import type { Prisma } from '../../client';

import { z } from 'zod';

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date()
}).strict();

export default SessionUncheckedCreateWithoutUserInputSchema;
