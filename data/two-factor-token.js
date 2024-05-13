import { connectToDb } from "@/lib/connectToDb";

export const getTwoFactorTokenByToken = async (token) => {
  try {
    {
      const twoFactorToken = await connectToDb.twoFactorToken.findUnique({
        where: { token },
      });
    }
  } catch (error) {
    return null;
  }
};
export const getTwoFactorTokenByEmail = async (email) => {
  try {
    {
      const twoFactorToken = await connectToDb.twoFactorToken.findFirst({
        where: { email },
      });
      return twoFactorToken;
    }
  } catch (error) {
    return null;
  }
};
