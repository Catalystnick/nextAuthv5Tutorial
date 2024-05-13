import { connectToDb } from "@/lib/connectToDb";

export async function GetVerificationTokenByEmail(email) {
  try {
    const verificationToken = await connectToDb.verificationToken.findFirst({
      where: { email },
    });

    return verificationToken;
  } catch (error) {
    return null;
  }
}

export async function GetVerificationTokenByToken(token) {
  try {
    const verificationToken = await connectToDb.verificationToken.findUnique({
      where: { token },
    });

    return verificationToken;
  } catch (error) {
    return null;
  }
}
