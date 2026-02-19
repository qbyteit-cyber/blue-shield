"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

/**
 * GDPR-compliant cookie consent using vanilla-cookieconsent v3.
 * Categories: necessary (always on), analytics (opt-in), marketing (opt-in).
 * Cookie: cc_cookie, 365-day expiry.
 */
export function CookieConsentComponent() {
    useEffect(() => {
        CookieConsent.run({
            cookie: {
                name: "cc_cookie",
                expiresAfterDays: 365,
            },

            guiOptions: {
                consentModal: {
                    layout: "bar inline",
                    position: "bottom",
                    equalWeightButtons: false,
                },
                preferencesModal: {
                    layout: "box",
                    position: "right",
                    equalWeightButtons: true,
                },
            },

            categories: {
                necessary: {
                    enabled: true,
                    readOnly: true,
                },
                analytics: {
                    enabled: false,
                    autoClear: {
                        cookies: [
                            { name: /^_ga/ },
                            { name: "_gid" },
                        ],
                    },
                },
                marketing: {
                    enabled: false,
                    autoClear: {
                        cookies: [
                            { name: "_fbp" },
                            { name: "_fbc" },
                        ],
                    },
                },
            },

            language: {
                default: "en",
                translations: {
                    en: {
                        consentModal: {
                            title: "Your Privacy Matters",
                            description:
                                'We use cookies to enhance your browsing experience, analyse site traffic, and deliver personalised content. You can customise your preferences or accept all cookies. Read our <a href="/privacy" class="cc-link">Privacy Policy</a> for full details.',
                            acceptAllBtn: "Accept All",
                            acceptNecessaryBtn: "Reject All",
                            showPreferencesBtn: "Manage Preferences",
                        },
                        preferencesModal: {
                            title: "Cookie Preferences",
                            acceptAllBtn: "Accept All",
                            acceptNecessaryBtn: "Reject All",
                            savePreferencesBtn: "Save Preferences",
                            closeIconLabel: "Close",
                            sections: [
                                {
                                    title: "How We Use Cookies",
                                    description:
                                        "We use cookies and similar technologies to ensure our website functions correctly and to improve your experience. You can choose which categories to allow below.",
                                },
                                {
                                    title: "Essential Cookies",
                                    description:
                                        "These cookies are required for core website functionality and security. They cannot be disabled.",
                                    linkedCategory: "necessary",
                                },
                                {
                                    title: "Analytics & Performance",
                                    description:
                                        "These cookies help us understand how visitors interact with our website, allowing us to measure and improve performance. This includes Google Analytics.",
                                    linkedCategory: "analytics",
                                    cookieTable: {
                                        headers: {
                                            name: "Cookie",
                                            domain: "Domain",
                                            description: "Description",
                                            expiration: "Expiration",
                                        },
                                        body: [
                                            {
                                                name: "_ga",
                                                domain: "itis-secure.com",
                                                description: "Google Analytics — distinguishes unique users",
                                                expiration: "2 years",
                                            },
                                            {
                                                name: "_gid",
                                                domain: "itis-secure.com",
                                                description: "Google Analytics — distinguishes unique users",
                                                expiration: "24 hours",
                                            },
                                        ],
                                    },
                                },
                                {
                                    title: "Marketing & Advertising",
                                    description:
                                        "These cookies are used to deliver relevant advertisements and track campaign performance across platforms like Meta (Facebook).",
                                    linkedCategory: "marketing",
                                    cookieTable: {
                                        headers: {
                                            name: "Cookie",
                                            domain: "Domain",
                                            description: "Description",
                                            expiration: "Expiration",
                                        },
                                        body: [
                                            {
                                                name: "_fbp",
                                                domain: "itis-secure.com",
                                                description: "Meta Pixel — tracks visits across websites",
                                                expiration: "3 months",
                                            },
                                        ],
                                    },
                                },
                                {
                                    title: "More Information",
                                    description:
                                        'For questions about our use of cookies, please <a href="/contact" class="cc-link">contact us</a>.',
                                },
                            ],
                        },
                    },
                },
            },

            onConsent: () => {
                if (CookieConsent.acceptedCategory("analytics")) {
                    loadAnalytics();
                }
                if (CookieConsent.acceptedCategory("marketing")) {
                    loadMarketing();
                }
            },

            onChange: () => {
                if (CookieConsent.acceptedCategory("analytics")) {
                    loadAnalytics();
                }
                if (CookieConsent.acceptedCategory("marketing")) {
                    loadMarketing();
                }
            },
        });

        // Expose a global function for the footer "Cookie Settings" button
        (window as Window & { openCookieSettings?: () => void }).openCookieSettings = () => {
            CookieConsent.showPreferences();
        };
    }, []);

    return null; // The library manages its own DOM
}

/* ── Script Injection (only called after consent) ──────────────── */

function loadAnalytics() {
    // Prevent double injection
    if (document.getElementById("gtag-script")) return;

    /*
     * TODO: Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID.
     *
     * const script = document.createElement("script");
     * script.id = "gtag-script";
     * script.async = true;
     * script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
     * document.head.appendChild(script);
     *
     * window.dataLayer = window.dataLayer || [];
     * function gtag(...args: unknown[]) { (window as any).dataLayer.push(args); }
     * gtag("js", new Date());
     * gtag("config", "G-XXXXXXXXXX");
     */
    console.log("[CookieConsent] Analytics consent granted — ready for GTM/GA4 injection.");
}

function loadMarketing() {
    // Prevent double injection
    if (document.getElementById("fbpixel-script")) return;

    /*
     * TODO: Replace 'XXXXXXXXXXXXXXX' with your actual Meta Pixel ID.
     *
     * const script = document.createElement("script");
     * script.id = "fbpixel-script";
     * script.innerHTML = `
     *   !function(f,b,e,v,n,t,s){...}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
     *   fbq('init', 'XXXXXXXXXXXXXXX');
     *   fbq('track', 'PageView');
     * `;
     * document.head.appendChild(script);
     */
    console.log("[CookieConsent] Marketing consent granted — ready for Meta Pixel injection.");
}
