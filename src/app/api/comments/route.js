// src/app/api/comments/route.js
import { NextResponse } from 'next/server';

export async function GET() {
    const comments = []; // Replace with actual data fetching logic
    return NextResponse.json(comments);
}

export async function POST(request) {
    const body = await request.json();
    // Logic to save the new comment in your backend
    return NextResponse.json({ success: true });
}
