import { Star } from "lucide-react";

type RatingStarsProps = {
  rating: number;
  reviewCount?: number;
};

export function RatingStars({ rating, reviewCount }: RatingStarsProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted">
      <span className="flex items-center gap-0.5 text-accent" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`size-4 ${index < Math.round(rating) ? "fill-current" : ""}`}
            aria-hidden="true"
          />
        ))}
      </span>
      <span>
        {rating.toFixed(1)}
        {reviewCount !== undefined ? ` (${reviewCount})` : null}
      </span>
    </div>
  );
}

