import { NextResponse } from 'next/server';
import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

// Remove edge runtime for compatibility with OpenAI SDK
// export const runtime = 'edge';

export async function POST(req: Request) {
    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY) {
        return NextResponse.json(
            { error: 'OpenAI API key is not configured. Please add OPENAI_API_KEY to your environment variables.' },
            { status: 500 }
        );
    }

    // Initialize OpenAI client only when needed
    const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY!})

    // Wrap with a try/catch to handle API errors
    try {
        const { messages } = await req.json();

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            stream: true,
            messages,
        });

        const stream = OpenAIStream(response);

        return new StreamingTextResponse(stream);
    } catch (error) {
        // Check if the error is an APIError
        if (error instanceof OpenAI.APIError) {
            const { name, status, headers, message } = error;
            return NextResponse.json({ name, status, headers, message }, { status });
        } else {
            throw error;
        }
    }
}// app/api/chat/route.ts
