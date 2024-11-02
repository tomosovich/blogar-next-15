import { UserProfile } from '@prisma/client';

import prisma from '@/lib/prisma';

/**
 * Retrieves a `UserProfile` from the database by an email address.
 *
 * @param email - The email address to search for.
 * @returns A `UserProfile` if found, `null` otherwise.
 *
 * This established a facade that we can use for this functionality.
 *
 * In this case, you can just use `await retrieveUserProfileFromDatabaseByEmail(email@example.com)`.
 */
export async function retrieveUserProfileFromDatabaseByEmail(
  email: UserProfile['email']
) {
  return prisma.userProfile.findUnique({ where: { email } });
}
