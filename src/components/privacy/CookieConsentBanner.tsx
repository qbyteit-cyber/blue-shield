"use client";

import { useEffect, useState } from "react";
import { X, ShieldCheck, ChevronRight, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

type ConsentState = {
    analytics: boolean;
    marketing: boolean;
    timestamp: string;
};

const CONSENT_KEY = "itis_consent_v1";

export function CookieConsentBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);

    // Default preferences
    const [preferences, setPreferences] = useState<{ analytics: boolean; marketing: boolean }>({
        analytics: true,
        marketing: false,
    });

    useEffect(() => {
        // Check for existing consent
        const storedConsent = localStorage.getItem(CONSENT_KEY);
        if (!storedConsent) {
            // Delay appearance for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        } else {
            // Apply existing consent on load
            const consent: ConsentState = JSON.parse(storedConsent);
            applyConsent(consent);
        }

        // Listen for custom event to open settings
        const handleOpenSettings = () => {
            setShowPreferences(true);
            setIsVisible(false); // Hide banner if open, prefer modal
        };

        window.addEventListener("open-cookie-settings", handleOpenSettings);
        return () => window.removeEventListener("open-cookie-settings", handleOpenSettings);
    }, []);

    const applyConsent = (consent: { analytics: boolean; marketing: boolean }) => {
        const consentData: ConsentState = {
            ...consent,
            timestamp: new Date().toISOString(),
        };

        localStorage.setItem(CONSENT_KEY, JSON.stringify(consentData));

        // ─── GTM / GA4 INJECTION ─────────────────────────────────────────────
        if (consent.analytics) {
            /* 
             * TODO: INJECT GOOGLE TAG MANAGER (GTM) OR GA4 SCRIPT HERE
             * Example:
             * window.dataLayer = window.dataLayer || [];
             * function gtag(){dataLayer.push(arguments);}
             * gtag('js', new Date());
             * gtag('config', 'G-XXXXXXXXXX');
             */
            console.log("Analytics cookies accepted - Injecting GTM/GA4...");
        }

        // ─── FACEBOOK PIXEL INJECTION ────────────────────────────────────────
        if (consent.marketing) {
            /* 
             * TODO: INJECT META PIXEL (FACEBOOK) SCRIPT HERE
             * Example:
             * !function(f,b,e,v,n,t,s){...}(window, document,'script',...);
             * fbq('init', 'XXXXXXXXXXXXXXX');
             * fbq('track', 'PageView');
             */
            console.log("Marketing cookies accepted - Injecting Pixel...");
        }

        setIsVisible(false);
        setShowPreferences(false);
    };

    const handleAcceptAll = () => {
        applyConsent({ analytics: true, marketing: true });
    };

    const handleRejectAll = () => {
        applyConsent({ analytics: false, marketing: false });
    };

    const handleSavePreferences = () => {
        applyConsent(preferences);
    };

    return (
        <AnimatePresence>
            {/* Main Banner */}
            {isVisible && !showPreferences && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-neutral-200 p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="flex-1 space-y-2">
                            <h3 className="text-lg font-bold text-primary-navy flex items-center gap-2">
                                <ShieldCheck className="text-accent-coral" size={20} />
                                Your Privacy Matters
                            </h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                We use cookies to enhance your experience, analyze site traffic, and deliver personalized content.
                                Your data remains yours. See our <a href="/privacy" className="text-accent-coral hover:underline font-medium">Privacy Policy</a>.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <Button
                                variant="outline"
                                onClick={() => setShowPreferences(true)}
                                className="w-full sm:w-auto border-neutral-300 hover:bg-neutral-50"
                            >
                                <Settings size={16} className="mr-2" />
                                Preferences
                            </Button>
                            <Button
                                variant="outline"
                                onClick={handleRejectAll}
                                className="w-full sm:w-auto border-neutral-300 hover:bg-neutral-50"
                            >
                                Reject All
                            </Button>
                            <Button
                                variant="primary"
                                onClick={handleAcceptAll}
                                className="w-full sm:w-auto bg-primary-navy hover:bg-primary-navy/90 text-white shadow-lg shadow-primary-navy/20"
                            >
                                Accept All
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Preferences Modal */}
            {showPreferences && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
                    >
                        <div className="p-6 border-b border-neutral-100 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-primary-navy">Cookie Preferences</h3>
                            <button onClick={() => setShowPreferences(false)} className="text-neutral-400 hover:text-primary-navy transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <p className="text-sm text-neutral-600">
                                Customize your consent preferences for data processing. Essential cookies are required for the website to function properly.
                            </p>

                            {/* Essential */}
                            <div className="flex items-start justify-between gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                                <div>
                                    <div className="font-bold text-primary-navy text-sm mb-1">Essential</div>
                                    <p className="text-xs text-neutral-500">Required for core functionality and security.</p>
                                </div>
                                <div className="text-xs font-bold text-accent-coral uppercase tracking-wider px-2 py-1 bg-accent-coral/10 rounded">
                                    Always Active
                                </div>
                            </div>

                            {/* Analytics */}
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <div className="font-bold text-primary-navy text-sm mb-1">Analytics & Performance</div>
                                    <p className="text-xs text-neutral-500">Help us understand how you use our site to improve functionality.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={preferences.analytics}
                                        onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                                    />
                                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-coral"></div>
                                </label>
                            </div>

                            {/* Marketing */}
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <div className="font-bold text-primary-navy text-sm mb-1">Marketing</div>
                                    <p className="text-xs text-neutral-500">Used to deliver relevant advertisements and track campaign performance.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={preferences.marketing}
                                        onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                                    />
                                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-coral"></div>
                                </label>
                            </div>
                        </div>

                        <div className="p-6 bg-neutral-50 border-t border-neutral-100 flex justify-end gap-3">
                            <Button variant="ghost" onClick={() => setShowPreferences(false)}>Cancel</Button>
                            <Button variant="primary" onClick={handleSavePreferences} className="text-white hover:bg-neutral-800">
                                Save Preferences
                            </Button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
