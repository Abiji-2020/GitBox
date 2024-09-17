"use server";

import { cookies } from "next/headers";

async function createCookies(data: any) {
  const token = data.token;
  const email = data.email;
  const username = data.username;
  cookies().set("token", token);
  cookies().set("email", email);
  cookies().set("username", username);
}

async function getCookies() {
  const token = cookies().get("token");
  const email = cookies().get("email");
  const username = cookies().get("username");

  return { token, email , username};
}

async function removeCookies() {
  cookies().delete("token");
  cookies().delete("email");
  cookies().delete("username");
}

export { createCookies, getCookies, removeCookies };
