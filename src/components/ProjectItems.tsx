"use client";

import { useState } from "react";
import ProjectItem, { Project } from "./ProjectItem";

/**
 * The project rows and which one currently shows its details.
 * Hover shows a row's details for a moment; clicking pins them so they stay
 * until the row is clicked again or another one is pinned.
 */
export default function ProjectItems({ projects }: { projects: Project[] }) {
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Hovering another row peeks at it; leaving brings the pinned one back
  const activeId = hoveredId ?? pinnedId;

  return (
    <>
      {projects.map((p) => (
        <ProjectItem
          key={p.id}
          project={p}
          active={activeId === p.id}
          pinned={pinnedId === p.id}
          onHover={(hovering) =>
            setHoveredId((current) => (hovering ? p.id : current === p.id ? null : current))
          }
          onToggle={() => setPinnedId((current) => (current === p.id ? null : p.id))}
        />
      ))}
    </>
  );
}
