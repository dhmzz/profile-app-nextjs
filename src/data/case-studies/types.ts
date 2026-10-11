// Text fields accept two inline marks: **bold** and `code`.

export type Figure = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type Block =
  | { type: "text"; text: string }
  /** Divided rows, one line each. */
  | { type: "list"; items: string[] }
  /** Numbered blocks with a heading and a paragraph. */
  | { type: "numbered"; items: { title: string; text: string }[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "code"; text: string }
  /** A left-to-right flow; `note` is what happens alongside each step. */
  | { type: "steps"; items: { title: string; note?: string }[] }
  /** A numbered part of a longer section, with its own blocks. */
  | { type: "part"; title: string; blocks: Block[] };

export type Section = {
  id: string;
  /** Short name for the section header and the contents list. */
  label: string;
  title: string;
  blocks: Block[];
  /** Shown full width after the section's content. */
  figure?: Figure;
};

export type CaseStudy = {
  slug: string;
  title: string;
  year: number;
  /** e.g. "Freelance" */
  kind: string;
  /** One sentence; also used as the page description for search engines. */
  summary: string;
  intro: string;
  facts: { label: string; value: string }[];
  cover?: Figure;
  sections: Section[];
};

/** Lives here, not next to the data, so client components can link to a study without bundling its content. */
export function caseStudyPath(slug: string) {
  return `/case-study/${slug}`;
}
