"use server";

import { cookies } from "next/headers"; 


async function createCookies(data: any) {
    const token = data.token;
    const email = data.email;

    cookies().set("token", token);
    cookies().set("email", email);
}

async function getCookies() {
    const token = cookies().get("token");
    const email = cookies().get("email");

    return { token, email };
}

export { createCookies, getCookies };