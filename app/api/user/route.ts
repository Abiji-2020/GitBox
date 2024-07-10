import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try{
        const body =await req.json();
        const {email, username, password, confirmPassword } = body;

        //To check if the email already exits 
        const exitingUser = await db.user.findUnique({
            where: {
                email: email
            }
        });
        if(exitingUser){
            return NextResponse.json({user: null, message: "User already exits"},{status:409});
        }
        //To check if the userId already exits 
        const exitingUserName = await db.user.findUnique({
            where: {
                username: username
            }
        });
        if(exitingUserName){
            return NextResponse.json({user: null, message: "User already exits"},{status:409});
        }

        const newUser = await db.user.create({
            data: {
                email,
                username,
                password

        }});

    }
    catch(error
    ){
        return NextResponse.json({user: null, message: error},{status:500});
    }
    
}