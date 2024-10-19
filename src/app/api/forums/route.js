// src/app/api/forums/route.js
import { NextResponse } from 'next/server';

// Sample in-memory forums array (replace with your database logic)
let forums = [
    { id: 1, name: 'Mental Health', description: 'Discuss mental health topics' },
    { id: 2, name: 'Support for Parents', description: 'Share experiences and support' },
];

export async function GET() {
    return NextResponse.json(forums);
}

export async function POST(request) {
    const { name, description } = await request.json();
    const newForum = {
        id: forums.length + 1,
        name,
        description,
    };
    forums.push(newForum);
    return NextResponse.json(newForum);
}
