"use server"; // It won't be sent to server ever, it's like creating a API route

import { LoginSchema } from "@/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if(!validatedFields.success){
    return {error: "Invalid fields!"};
  }

  return {success: "Email sent."}
}