import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
    const { searchParams, origin } = new URL(request.url);
    const title = searchParams.get("title") ?? "Enterprise TISAX® & ISO 27001 Compliance";

    // Fetch the logo as a base64 data URL — required for edge sandbox rendering
    const logoRes = await fetch(`${origin}/itis-secure-logo.svg`);
    const logoSvg = await logoRes.text();
    const logoDataUrl = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;

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
                {/* Top-left: Logo + Brand name */}
                <div
                    style={{
                        position: "absolute",
                        top: "48px",
                        left: "64px",
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={logoDataUrl}
                        alt="ITIS-Secure Logo"
                        width={80}
                        height={80}
                        style={{ objectFit: "contain" }}
                    />
                    <span
                        style={{
                            color: "#D4AF37",
                            fontSize: "32px",
                            fontWeight: "bold",
                            letterSpacing: "0.05em",
                        }}
                    >
                        ITIS-Secure
                    </span>
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
                            fontSize: "52px",
                            fontWeight: "bold",
                            lineHeight: 1.2,
                            maxWidth: "1000px",
                        }}
                    >
                        {title}
                    </div>

                    {/* Gold divider */}
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
        { width: 1200, height: 630 }
    );
}
