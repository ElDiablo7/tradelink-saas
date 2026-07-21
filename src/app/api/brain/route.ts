import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    // In a real application, this would call Anthropic or OpenAI API.
    // For this demonstration, we are using a robust mock AI dispatcher
    // that analyzes the homeowner's request and outputs a structured trade scope.

    let tradeType = "General Handyman";
    let priority = "Normal";
    let quote = "£60.00";
    let scope = "General maintenance task. No immediate danger detected.";

    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes("leak") || lowerMsg.includes("water") || lowerMsg.includes("pipe") || lowerMsg.includes("sink")) {
      tradeType = "Emergency Plumber";
      priority = "High / Emergency";
      quote = "£120.00 (Callout) + Parts";
      scope = "Active water leak reported. Requires immediate dispatch to prevent property water damage. Plumber to isolate water supply and repair/replace faulty pipework.";
    } 
    else if (lowerMsg.includes("electric") || lowerMsg.includes("wire") || lowerMsg.includes("spark") || lowerMsg.includes("light")) {
      tradeType = "Electrician";
      priority = lowerMsg.includes("spark") ? "High / Emergency" : "Normal";
      quote = "£85.00 (Standard Hourly)";
      scope = "Electrical fault or installation. Tradesperson to ensure mains safety, diagnose circuit issue, and rectify according to BS7671 standards.";
    }
    else if (lowerMsg.includes("roof") || lowerMsg.includes("tile") || lowerMsg.includes("gutter")) {
      tradeType = "Roofer";
      priority = "Normal";
      quote = "£150.00 (Inspection & Minor Repair)";
      scope = "Exterior roofing work. Requires ladder access. Visual inspection of tiles/guttering and minor patching required.";
    }

    // Simulate network delay to AI provider
    await new Promise(resolve => setTimeout(resolve, 1500));

    return NextResponse.json({
      success: true,
      data: {
        tradeType,
        priority,
        estimatedQuote: quote,
        professionalScope: scope,
        aiMessage: `I've analyzed your issue. You need a **${tradeType}**. I've estimated the cost at **${quote}** and prepared a professional brief for the tradespeople. Would you like me to ping nearby professionals now?`
      }
    });

  } catch {
    return NextResponse.json({ success: false, error: "Failed to process AI dispatch." }, { status: 500 });
  }
}
