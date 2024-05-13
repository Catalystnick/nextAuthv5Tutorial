import { connectToDb } from "@/lib/connectToDb";

export const getPasswordResetTokenByToken = async (token) => {
  try {
    const passwordToken = await connectToDb.passwordResetToken.findUnique({
      where: { token },
    });
    return passwordToken;
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email) => {
  try {
    const passwordToken = await connectToDb.passwordResetToken.findFirst({
      where: { email },
    });
    return passwordToken;
  } catch {
    return null;
  }
};
