import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
    rating?: number;
    maxStars?: number;
    className?: string;
}

export const StarRating = ({ rating = 5, maxStars = 5, className }: StarRatingProps) => {
    return (
        <div className={cn("flex items-center gap-1", className)}>
            {[...Array(maxStars)].map((_, i) => (
                <Star
                    key={i}
                    className={cn(
                        "w-5 h-5 transition-all duration-300",
                        i < rating
                            ? "fill-electric-cyan text-electric-cyan"
                            : "fill-transparent text-gray-600"
                    )}
                />
            ))}
        </div>
    );
};
