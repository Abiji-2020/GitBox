import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try{
        const body = await req.json();
        const {email, password } = body;
        const exitingUser  = await db.user.findUnique({
            where: {
                email: email
            }
        });
        if(!exitingUser){
            return NextResponse.json({user: null, message: "User does not exits"},{status:404});
        }
        if(exitingUser.password !== password){
            return NextResponse.json({user: null, message: "Incorrect password"},{status:401});
        }
        return NextResponse.json({user: exitingUser, message: "User found", username: exitingUser.username},{status:200});
    }catch(error){
        return NextResponse.json({user: null, message: error},{status:500});
    }
}