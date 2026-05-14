import { NextResponse } from "next/server";
import { model } from "@/lib/gemini";

export async function POST(req: Request) {
  const body = await req.json();

  const prompt = `
  Analyze this resume and provide:
  - ATS score
  - Missing skills
  - Improvements
  - Overall feedback

  Resume:
  ${body.resume}
  `;

  const result = await model.generateContent(prompt);

  return NextResponse.json({
    response: result.response.text(),
  });
}