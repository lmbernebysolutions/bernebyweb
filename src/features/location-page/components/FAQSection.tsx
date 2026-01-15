"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  /** Dynamischer Ortsname */
  cityName: string;
  className?: string;
}

/**
 * FAQ-Sektion gemäß Layout-Struktur:
 * - Akkordeon-Muster um Platz zu sparen
 * - Dynamische Fragen mit {Stadt}
 * - Kann für FAQ-Rich-Snippets genutzt werden
 */
export function FAQSection({ cityName, className }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      question: `Wie schnell sind Sie in ${cityName}?`,
      answer: `Als lokaler Dachdecker-Betrieb in ${cityName} sind wir meist innerhalb von 24 Stunden bei Ihnen. Bei Notfällen wie Sturmschäden können wir oft sogar innerhalb von 60 Minuten vor Ort sein.`,
    },
    {
      question: "Was kostet eine Dachinspektion?",
      answer:
        "Eine professionelle Dachinspektion bieten wir für Kunden in der Region kostenfrei an. Dabei prüfen wir den Zustand Ihres Daches und erstellen Ihnen ein unverbindliches Angebot für notwendige Arbeiten.",
    },
    {
      question: "Bieten Sie auch Notdienst am Wochenende an?",
      answer:
        "Ja, unser 24h-Notdienst ist 7 Tage die Woche, auch an Feiertagen, für Sie erreichbar. Bei akuten Dachschäden wie undichten Stellen oder Sturmschäden sind wir schnellstmöglich vor Ort.",
    },
    {
      question: "Welche Zahlungsmöglichkeiten gibt es?",
      answer:
        "Wir bieten Ihnen flexible Zahlungsmöglichkeiten: Barzahlung, Überweisung oder auf Wunsch auch Ratenzahlung. Bei größeren Projekten vereinbaren wir gerne individuelle Zahlungsmodalitäten.",
    },
    {
      question: `Arbeiten Sie nur in ${cityName} oder auch in der Umgebung?`,
      answer: `Unser Hauptgebiet ist ${cityName} und die nähere Umgebung (ca. 30km Radius). Für größere Projekte kommen wir auch gerne weiter. Fragen Sie einfach unverbindlich an!`,
    },
    {
      question: "Wie lange dauert eine Dachsanierung?",
      answer:
        "Die Dauer hängt vom Umfang der Arbeiten ab. Kleinere Reparaturen erledigen wir oft am selben Tag. Eine komplette Dachsanierung dauert in der Regel 3-5 Werktage. Sie erhalten vorab einen genauen Zeitplan.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={cn("bg-surface-light py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-section-title text-primary-900">
              Häufig gestellte Fragen
            </h2>
            <p className="font-body text-lg text-slate-600">
              Hier finden Sie Antworten auf die häufigsten Fragen zu unseren
              Dachdeckerleistungen in {cityName}.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-heading text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <svg
                    className={cn(
                      "h-5 w-5 flex-shrink-0 text-primary-900 transition-transform duration-200",
                      openIndex === index && "rotate-180"
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer Panel */}
                <div
                  className={cn(
                    "grid transition-all duration-200 ease-in-out",
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-6 py-5">
                      <p className="font-body text-slate-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <p className="font-body text-slate-600">
              Ihre Frage war nicht dabei?{" "}
              <a
                href="#kontakt"
                className="font-semibold text-primary-900 hover:text-primary-700"
              >
                Kontaktieren Sie uns direkt
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}

