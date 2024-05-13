"use server";

import { getPasswordResetTokenByToken } from "@/data/password-resetToken";
import { getUserByEmail } from "@/data/user";
import { connectToDb } from "@/lib/connectToDb";
import { NewPasswordSchema } from "@/schemas";
import bcrypt from "bcryptjs";

export const newPassword = async (values, token) => {
  if (!token) {
    return { error: "Missing token" };
  }
  const validatedField = NewPasswordSchema.safeParse(values);

  if (!validatedField.success) {
    return { error: "Invalid fields" };
  }

  const { password, reenterpassword } = validatedField.data;

  const existingToken = await getPasswordResetTokenByToken(token);
  if (!existingToken) {
    return { error: "Invalid token" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired" };
  }
  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist" };
  }

  if (password == reenterpassword) {
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDb.user.update({
      where: { id: existingUser.id },
      data: { password: hashedPassword },
    });

    await connectToDb.passwordResetToken.delete({
      where: { id: existingToken.id },
    });

    return { success: "Password updated" };
  } else {
    return { error: "Passwords do not match" };
  }
};
