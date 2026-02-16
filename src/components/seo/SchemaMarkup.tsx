export function SchemaMarkup() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "ITIS-SECURE",
        "legalName": "QBYTE IT SRL",
        "url": "https://itis-secure.com",
        "logo": "https://itis-secure.com/itis-secure-logo.svg",
        "image": "https://itis-secure.com/og-image.jpg",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Str. Liliacului nr 2",
            "addressLocality": "Cisnadie",
            "addressRegion": "Sibiu",
            "postalCode": "555300",
            "addressCountry": "RO"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+40-741-711-770",
            "contactType": "customer service",
            "email": "office@itis-secure.com",
            "availableLanguage": ["English", "Romanian", "German"]
        },
        "sameAs": [
            "https://www.linkedin.com/company/information-security-consulting-srl"
        ]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Information Security Consulting",
        "provider": {
            "@type": "LocalBusiness",
            "name": "ITIS-SECURE"
        },
        "areaServed": "Europe",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Compliance Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "TISAX® Preparation"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "CMMC 2.0 Compliance"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "ISO/IEC 27001 Implementation"
                    }
                }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the Gap-to-Certified lifecycle?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is our proprietary methodology that takes companies from their current security posture to full certification (TISAX, ISO 27001, CMMC) by identifying gaps, implementing controls, and supporting the final audit."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer outsourced CISO roles?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide outsourced CISO, DPO, and ISMS Manager roles to help organizations maintain compliance without the overhead of full-time executive hires."
                }
            },
            {
                "@type": "Question",
                "name": "How long does TISAX labeling usually take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The timeline varies based on maturity, but typically ranges from 4 to 9 months including gap analysis, implementation, and the final assessment audit."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
