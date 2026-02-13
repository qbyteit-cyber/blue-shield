import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, type, data } = body;

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // TODO: Integrate with Sanity or an Email Service (Resend/SendGrid)
        console.log(`[LEAD CAPTURED] Type: ${type}, Email: ${email}`, data);

        return NextResponse.json({ message: "Lead captured successfully" }, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
