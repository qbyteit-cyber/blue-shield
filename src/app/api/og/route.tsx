import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") ?? "Enterprise TISAX® & ISO 27001 Compliance";

    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#0A2463",
                    position: "relative",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Top-left: Brand name */}
                <div
                    style={{
                        position: "absolute",
                        top: "48px",
                        left: "64px",
                        color: "#D4AF37",
                        fontSize: "32px",
                        fontWeight: "bold",
                        letterSpacing: "0.05em",
                    }}
                >
                    ITIS-Secure
                </div>

                {/* Center: Page title */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "0 80px",
                        textAlign: "center",
                    }}
                >
                    <div
                        style={{
                            color: "#ffffff",
                            fontSize: "56px",
                            fontWeight: "bold",
                            lineHeight: 1.2,
                            maxWidth: "1000px",
                        }}
                    >
                        {title}
                    </div>

                    {/* Gold divider line */}
                    <div
                        style={{
                            marginTop: "32px",
                            width: "120px",
                            height: "3px",
                            backgroundColor: "#D4AF37",
                            borderRadius: "2px",
                        }}
                    />
                </div>

                {/* Bottom-left: Domain */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "48px",
                        left: "64px",
                        color: "#8BA8CC",
                        fontSize: "22px",
                    }}
                >
                    itis-secure.com
                </div>

                {/* Bottom-right: Services */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "48px",
                        right: "64px",
                        color: "#8BA8CC",
                        fontSize: "22px",
                    }}
                >
                    TISAX® · ISO 27001 · CMMC 2.0
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
