"use server";

import { ResetPasswordSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { sendPasswordEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";

export const resetPassword = async (values) => {
  const validatedFields = ResetPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid email" };
  }

  const { email } = validatedFields.data;
  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email not found" };
  }

  //Generate token
  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordEmail(passwordResetToken.email, passwordResetToken.token);

  return { success: "Reset email sent" };
};
