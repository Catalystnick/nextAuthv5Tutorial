import { connectToDb } from "@/lib/connectToDb";

export const getAccountByUserId = async (userId) => {
  try {
    const account = await connectToDb.account.findFirst({
      where: { userId },
    });

    return account;
  } catch {
    return null;
  }
};
