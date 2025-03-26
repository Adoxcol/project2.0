import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const hashPassword = async (password : string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}


export const comparePassword = async (
  password : string,
  hashedPassword: string
):Promise <boolean> => {
    return await bcrypt.compare(password, hashedPassword);
  };


export const generateToken = (userId: number): string => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
      expiresIn: '1h',
    });
    return token;
  };