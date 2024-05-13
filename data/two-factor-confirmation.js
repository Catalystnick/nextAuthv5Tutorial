import { connectToDb } from "@/lib/connectToDb";

export const getTwoFactorConfirmationByUserId = async (userId) => {
  try {
    const twoFactorConfirmation =
      await connectToDb.twoFactorConfirmation.findUnique({ where: { userId } });
    return twoFactorConfirmation;
  } catch (error) {
    return null;
  }
};
