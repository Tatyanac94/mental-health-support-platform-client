// src/app/api/posts/route.js
import { NextResponse } from 'next/server';

export async function GET() {
    // Fetch posts from your backend
    const posts = []; // Replace with actual data fetching logic
    return NextResponse.json(posts);
}

export async function POST(request) {
    const body = await request.json();
    // Logic to save the new post in your backend
    return NextResponse.json({ success: true });
}
