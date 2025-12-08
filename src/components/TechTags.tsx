export default function TechTags({ 
  tags, 
  className = "" 
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
          className="
            px-3 py-1 
            text-[10px] 
            uppercase 
            tracking-widest 
            font-medium
            border 
            border-black/20 dark:border-white/20
            text-black/70 dark:text-white/70
            rounded-md
            transition-all 
            duration-300 
            ease-out
            hover:scale-105
            hover:border-black/40 dark:hover:border-white/40
            hover:bg-black/5 dark:hover:bg-white/5
          "
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
