import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  try {
    const { explanation } = await req.json();

    if (!explanation || typeof explanation !== "string" || !explanation.trim()) {
      return NextResponse.json({
        feedback: "Please enter an explanation.",
      });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are ExplainIQ, an AI tutor. A student will explain a concept in their own words. Evaluate their understanding out of 100. Respond in this exact format:\n\nScore: X/100\n\nWhat you got right:\n✓ point\n✓ point\n\nImprove:\n→ point\n→ point\n\nTutor tip:\none sentence tip.",
        },
        {
          role: "user",
          content: `The student is explaining a concept. Here is their explanation:\n\n"${explanation}"\n\nEvaluate it.`,
        },
      ],
      temperature: 0.5,
    });

    const feedback =
      completion.choices[0]?.message?.content || "Could not generate feedback.";

    return NextResponse.json({ feedback });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { feedback: "Server error. Please try again." },
      { status: 500 }
    );
  }
}