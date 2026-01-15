import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className?: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => {
    return (
        <div
            key={name}
            className={cn(
                "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-hauer",
                // light styles
                "bg-[#021A33] border border-white/10 [box-shadow:0_0_0_1px_rgba(255,255,255,.05),0_2px_4px_rgba(0,0,0,.1)]",
                // dark styles
                "transform-gpu dark:bg-[#021A33] dark:[box-shadow:0_-20px_80px_-20px_#01FAF91a_inset]",
                // hover effects
                "hover:border-white/20 hover:shadow-[0_0_20px_rgba(1,250,249,0.2)] transition-all",
                className,
            )}
        >
            <div>{background}</div>
            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
                <Icon className="h-12 w-12 origin-left transform-gpu text-electric-cyan transition-all duration-300 ease-in-out group-hover:scale-75" />
                <h3 className="text-xl font-semibold text-white">
                    {name}
                </h3>
                <p className="max-w-lg text-gray-400">{description}</p>
            </div>

            <div
                className={cn(
                    "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
                )}
            >
                <Button variant="ghost" href={href} size="sm" className="pointer-events-auto">
                    {cta}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
            </div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
        </div>
    );
};

export { BentoCard, BentoGrid };
