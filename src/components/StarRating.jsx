import Star from "./ui/icons/Star";

export default function StarRating({
  rating,
  max = 5,
  size = 20,
  color = "#f59e0b",
}) {
  return (
    <div className="inline-flex items-center gap-0.5">
      {Array.from({ length: max }, (_, i) => {
        const fillPercent = Math.max(0, Math.min(100, (rating - i) * 100));
        return (
          <Star key={i} fillPercent={fillPercent} size={size} color={color} />
        );
      })}
    </div>
  );
}
