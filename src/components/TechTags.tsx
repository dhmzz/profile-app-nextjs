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
      {tags.map((tech, index) => (
        <span
          key={tech}
          data-aos="fade-up"
          data-aos-delay={index * 50}
          className="px-3 py-1 text-label uppercase font-medium border border-line-strong text-muted rounded-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
