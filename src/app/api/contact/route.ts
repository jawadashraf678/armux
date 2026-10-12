import { NextResponse } from "next/server";

const GOOGLE_SHEET_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbzMw3mWNiPLdV_E2cwYnRBhzxQs1s757gniz-JUoDgvyfCadApkQ1WO2RepUgYM8dhesQ/exec";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const response = await fetch(GOOGLE_SHEET_WEB_APP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json().catch(() => ({ result: "success" }));

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error("Error submitting to Google Sheet:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to submit" },
      { status: 500 }
    );
  }
}
