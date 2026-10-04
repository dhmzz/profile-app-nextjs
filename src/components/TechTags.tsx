export default function TechTags({
  tags,
  className = "",
}: {
  tags: string[];
  className?: string;
}) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tech) => (
        <span key={tech} className="label rounded-sm border border-line px-3 py-1.5 text-muted">
          {tech}
        </span>
      ))}
    </div>
  );
}
