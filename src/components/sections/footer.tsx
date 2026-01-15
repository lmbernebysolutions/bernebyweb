import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { NAV_LINKS } from "@/lib/constants";

export const Footer = () => {
    return (
        <footer className="bg-deep-navy text-white pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-8 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Logo variant="footer" />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
                            Der digitale Revierführer für dein Handwerk.
                        </p>
                        <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
                            Wir automatisieren Leads, SEO und Kundenkommunikation im Erzgebirgskreis.
                        </p>
                        <div className="flex items-center gap-4">
                            <SocialLink href="#" icon={<Instagram size={20} />} label="Instagram" />
                            <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
                            <SocialLink href="#" icon={<Facebook size={20} />} label="Facebook" />
                            <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Navigation</h4>
                        <ul className="space-y-3">
                            {NAV_LINKS.map(link => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-electric-cyan transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Legal & Support */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Rechtliches</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/imprint" className="text-gray-400 hover:text-electric-cyan transition-colors text-sm">
                                    Impressum
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-400 hover:text-electric-cyan transition-colors text-sm">
                                    Datenschutz
                                </Link>
                            </li>
                            <li>
                                <Link href="/agb" className="text-gray-400 hover:text-electric-cyan transition-colors text-sm">
                                    AGB
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-electric-cyan transition-colors text-sm">
                                    Support Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter/CTA */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Bleib informiert</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Erhalte Tipps für digitales Handwerk direkt in dein Postfach.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Deine E-Mail Adresse"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-electric-cyan transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-white text-deep-navy font-bold py-3 rounded-lg hover:bg-electric-cyan transition-colors text-sm"
                            >
                                Anmelden
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} Berneby Solutions. Alle Rechte vorbehalten.
                    </p>
                    <p className="text-gray-500 text-xs flex items-center gap-1">
                        Made with <span className="text-rust-orange">❤️</span> in Erzgebirge
                    </p>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <Link
        href={href}
        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-electric-cyan hover:text-deep-navy transition-all transform hover:scale-110"
        aria-label={label}
    >
        {icon}
    </Link>
);
