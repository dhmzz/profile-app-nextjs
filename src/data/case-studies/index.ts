import type { CaseStudy } from "./types";
import { ussVoucherBooking } from "./uss-voucher-booking";

export type { CaseStudy } from "./types";
export { caseStudyPath } from "./types";

/** Newest first: the first entry is the one the home page hero points to. */
export const caseStudies: CaseStudy[] = [ussVoucherBooking];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
