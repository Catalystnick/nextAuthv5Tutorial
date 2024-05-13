import { connectToDb } from "@/lib/connectToDb";

export const getUserByEmail = async (email) => {
  try {
    const user = await connectToDb.user.findUnique({ where: { email } });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id) => {
  try {
    const user = await connectToDb.user.findUnique({ where: { id } });
    return user;
  } catch {
    return null;
  }
};
