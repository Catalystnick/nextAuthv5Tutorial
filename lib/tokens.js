import { v4 as uuid } from "uuid";
import { connectToDb } from "./connectToDb";
import { GetVerificationTokenByEmail } from "@/data/verificationToken";
import { getPasswordResetTokenByEmail } from "@/data/password-resetToken";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import crypto from "crypto";

export const generateTwoFactorToken = async (email) => {
  const token = crypto.randomInt(100_000, 1_000_000).toString();

  const date = new Date();
  date.setHours(date.getHours() + 1);
  const expires = date;

  const existingToken = await getTwoFactorTokenByEmail(email);

  if (existingToken) {
    await connectToDb.twoFactorToken.delete({
      where: { id: existingToken.id },
    });
  }

  const twoFactorToken = await connectToDb.twoFactorToken.create({
    data: { email, token, expires },
  });

  return twoFactorToken;
};

export const generateVerificationToken = async (email) => {
  const token = uuid();

  const date = new Date();
  date.setHours(date.getHours() + 1);
  const expires = date;

  const existingToken = await GetVerificationTokenByEmail(email);
  if (existingToken) {
    await connectToDb.verificationToken.delete({
      where: { id: existingToken.id },
    });
  }

  const verificationToken = await connectToDb.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};

export const generatePasswordResetToken = async (email) => {
  const token = uuid();

  const date = new Date();
  date.setHours(date.getHours() + 1);
  const expires = date;

  const existingToken = await getPasswordResetTokenByEmail(email);

  if (existingToken) {
    await connectToDb.passwordResetToken.delete({
      where: { id: existingToken.id },
    });
  }

  const passwordResetToken = await connectToDb.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });
  return passwordResetToken;
};
