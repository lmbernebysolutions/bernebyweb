"use client";

import { motion } from "framer-motion";
import { CaseStudyCard, CaseStudyProps } from "@/components/ui/case-study-card";
import { fadeInUp } from "@/lib/animation-utils";
import InteractiveHoverButton from "@/components/libraries/magic-ui/interactive-hover-button";

const CASE_STUDIES: CaseStudyProps[] = [
    {
        client: "Bedachungen Weber",
        industry: "Dachdecker",
        description: "Von 'Man findet uns nicht' zu Marktführer in Annaberg-Buchholz. Durch SEO-Optimierung und Geo-Net Dominator konnten wir die Sichtbarkeit massiv steigern.",
        quote: "Wir müssen jetzt Aufträge ablehnen, weil wir so viele Anfragen bekommen. Ein Luxusproblem!",
        author: "Thomas Weber, Inhaber",
        image: "/images/mockups/bedachungen_weber.png",
        metrics: [
            { label: "Monatliche Anfragen", before: 3, after: 28, unit: "" },
            { label: "Sichtbarkeit (Städte)", before: 1, after: 12, unit: "" }
        ]
    },
    {
        client: "Sanitär Klein & Söhne",
        industry: "SHK",
        description: "Das Telefon klingelte früher nur für Kleinreparaturen. Dank Voice-Guard und Vertical Funnels kommen jetzt hochwertige Komplettbad-Sanierungen rein.",
        quote: "Die Qualität der Anfragen ist eine ganz andere Welt. Wir arbeiten weniger, verdienen aber mehr.",
        author: "Michael Klein, Geschäftsführer",
        image: "/images/mockups/sanitaer_klein.png",
        metrics: [
            { label: "Auftragswert Ø", before: 850, after: 12500, unit: "€" },
            { label: "Verlorene Anrufe", before: 15, after: 0, unit: "" }
        ]
    }
];

export const CaseStudiesSection = () => {
    return (
        <section className="py-24 bg-deep-navy relative overflow-hidden" id="case-studies">
            <div className="container mx-auto px-8 md:px-16 relative z-10">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-electric-cyan font-medium tracking-widest uppercase text-sm mb-4 block">
                        Erfolgsgeschichten
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ergebnisse, die <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-blue-500">für sich sprechen</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Wir erzählen keine Märchen. Wir liefern messbares Wachstum für Handwerksbetriebe im Erzgebirge.
                    </p>
                </motion.div>

                <div className="space-y-12 w-full">
                    {CASE_STUDIES.map((study, i) => (
                        <CaseStudyCard key={i} study={study} />
                    ))}
                </div>

                <div className="mt-16 text-center flex justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            Möchtest du die nächste Erfolgsgeschichte sein?
                        </p>
                        <InteractiveHoverButton className="text-white border-electric-cyan/50 hover:border-electric-cyan">
                            Gespräch vereinbaren
                        </InteractiveHoverButton>
                    </div>
                </div>
            </div>
        </section>
    );
};
