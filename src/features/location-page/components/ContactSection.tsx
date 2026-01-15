"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ContactSectionProps {
  /** Dynamischer Ortsname */
  cityName: string;
  /** Koordinaten für Google Maps */
  coordinates?: {
    lat: number;
    lng: number;
  };
  className?: string;
}

/**
 * Kontakt-Sektion gemäß Layout-Struktur:
 * - Großes Kontaktformular (Name, Telefon, Problem)
 * - Google Maps Embed (zentriert auf {Stadt} Koordinaten)
 */
export function ContactSection({
  cityName,
  className,
}: ContactSectionProps) {
  const [formState, setFormState] = React.useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuliere Form-Submit (hier API-Aufruf integrieren)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Google Maps Embed URL (mapUrl removed - not used)

  return (
    <section
      id="kontakt"
      className={cn("bg-primary-900 py-16 lg:py-24", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-section-title text-white">
            Jetzt Kontakt aufnehmen
          </h2>
          <p className="mx-auto max-w-2xl font-body text-lg text-white/80">
            Fordern Sie Ihr kostenloses Angebot an. Wir melden uns schnellstmöglich
            bei Ihnen zurück.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg bg-white p-6 shadow-card-hover lg:p-8">
            {isSubmitted ? (
              <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold text-slate-900">
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p className="font-body text-slate-600">
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-heading text-sm font-semibold uppercase tracking-wide text-slate-700"
                  >
                    Ihr Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full rounded border border-slate-300 px-4 py-3 font-body text-slate-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    placeholder="Max Mustermann"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block font-heading text-sm font-semibold uppercase tracking-wide text-slate-700"
                    >
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full rounded border border-slate-300 px-4 py-3 font-body text-slate-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      placeholder="030 123 456 789"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-heading text-sm font-semibold uppercase tracking-wide text-slate-700"
                    >
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full rounded border border-slate-300 px-4 py-3 font-body text-slate-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      placeholder="max@beispiel.de"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-heading text-sm font-semibold uppercase tracking-wide text-slate-700"
                  >
                    Ihr Anliegen *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded border border-slate-300 px-4 py-3 font-body text-slate-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    placeholder="Beschreiben Sie kurz Ihr Problem oder Ihre Anfrage..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="h-5 w-5 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Wird gesendet...
                    </>
                  ) : (
                    "Kostenloses Angebot anfordern"
                  )}
                </Button>

                <p className="text-center font-body text-sm text-slate-500">
                  Ihre Daten werden vertraulich behandelt und nicht an Dritte
                  weitergegeben.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-6 font-heading text-xl font-semibold text-white">
                Schnellkontakt
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:+4930123456789"
                  className="flex items-center gap-4 rounded-lg bg-white/10 p-4 transition-colors hover:bg-white/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-600 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading text-sm uppercase tracking-wide text-white/70">
                      Telefon
                    </p>
                    <p className="font-heading text-xl font-semibold text-white">
                      030 123 456 789
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-lg bg-white/10 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading text-sm uppercase tracking-wide text-white/70">
                      Erreichbarkeit
                    </p>
                    <p className="font-heading text-lg font-semibold text-white">
                      24/7 Notdienst verfügbar
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-lg bg-white/10 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading text-sm uppercase tracking-wide text-white/70">
                      Einsatzgebiet
                    </p>
                    <p className="font-heading text-lg font-semibold text-white">
                      {cityName} & Umgebung
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="overflow-hidden rounded-lg bg-slate-200">
              <div className="relative h-64 w-full">
                {/* Hier würde normalerweise Google Maps eingebettet */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-slate-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                      />
                    </svg>
                    <p className="mt-2 font-body text-sm text-slate-600">
                      Karte: {cityName}
                    </p>
                    <p className="font-body text-xs text-slate-500">
                      (Google Maps API-Key erforderlich)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

