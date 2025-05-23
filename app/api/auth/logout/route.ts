import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const cookieStore = cookies();
        cookieStore.delete("session"); // Clear the session cookie
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Error during logout:", error);
        return NextResponse.json({ success: false, error: "Logout failed" }, { status: 500 });
    }
}