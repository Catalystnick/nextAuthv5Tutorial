"use server";
import { connectToDb } from "@/lib/connectToDb";
import { getUserByEmail } from "@/data/user";
import { GetVerificationTokenByToken } from "@/data/verificationToken";

export const newVerification = async (token) => {
  const existingToken = await GetVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: "Token does not exist" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist" };
  }

  await connectToDb.user.update({
    where: { id: existingUser.id },
    data: { emailVerified: new Date(), email: existingToken.email },
  });

  await connectToDb.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Email verified" };
};
