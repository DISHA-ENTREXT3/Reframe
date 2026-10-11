import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Eye,
  FileText,
  Filter,
  Layers,
  Play,
  Share2,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";
import { CloudScene } from "@/components/animations/CloudScene";
import { ScrollFloat3D } from "@/components/animations/ScrollFloat3D";
import { SectionCloudDivider } from "@/components/animations/SectionCloudDivider";
import { StickerBadge } from "@/components/animations/StickerBadge";
import { TiltCard } from "@/components/animations/TiltCard";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/our-works")({
  head: () => ({
    meta: [
      { title: "Our Works — Reframe Studios | Illustrative Private Market Concepts" },
      {
        name: "description",
        content:
          "Explore illustrative case concepts across private equity, venture capital, and growth funds. Less announcement, more perspective.",
      },
      { property: "og:title", content: "Our Works — Reframe Studios" },
      {
        property: "og:description",
        content:
          "Illustrative portfolio concepts showing how investment conviction becomes market authority.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurWorksPage,
});

interface WorkConcept {
  id: string;
  category: "all" | "video" | "editorial" | "lp" | "portfolio";
  categoryLabel: string;
  title: string;
  tagline: string;
  firmType: string;
  badge: string;
  badgeVariant: "orange" | "pink" | "yellow" | "blue" | "green" | "purple";
  badgeRotation: number;
  metricNumber: string;
  metricLabel: string;
  deliverables: string[];
  summary: string;
  detailedAngle: string;
  bgGradient: string;
  accentBorder: string;
}

const CONCEPTS: WorkConcept[] = [
  {
    id: "conviction-thesis",
    category: "editorial",
    categoryLabel: "Thesis & Editorial",
    title: "The Conviction Thesis",
    tagline: "Behind every investment, an unwritten conviction.",
    firmType: "Tier-1 Tech Growth Fund",
    badge: "★ Featured Perspective",
    badgeVariant: "orange",
    badgeRotation: 4,
    metricNumber: "+310%",
    metricLabel: "Founder Inbound Quality",
    deliverables: ["4-Min Partner Film", "Deep-Dive Editorial Essay", "Executive Thought Carousel"],
    summary:
      "Transforming a contrarian view on enterprise intelligence infrastructure from internal partner notes into an authoritative founder briefing.",
    detailedAngle:
      "Instead of generic funding round announcements, we extracted the lead partner's counter-intuitive thesis on data orchestration. Within 3 weeks, target Series B founders were citing the piece in inbound partner outreach.",
    bgGradient: "from-blue-900/90 via-indigo-950 to-slate-900",
    accentBorder: "border-blue-300/40",
  },
  {
    id: "milestone-story",
    category: "portfolio",
    categoryLabel: "Portfolio Stories",
    title: "Beyond The Balance Sheet",
    tagline: "The human drama of generational industrial transition.",
    firmType: "European Mid-Market Buyout",
    badge: "✦ Milestone Film",
    badgeVariant: "pink",
    badgeRotation: -5,
    metricNumber: "Top 5%",
    metricLabel: "Stakeholder Recall",
    deliverables: ["Documentary Vignette", "Leadership Photo Essay", "Employee Pride Chronicle"],
    summary:
      "Documenting a high-stakes founder succession without corporate clichés, emphasizing craft, family legacy, and modern robotics adoption.",
    detailedAngle:
      "We embedded with factory leadership over 48 hours to tell the authentic turnaround story. The resulting documentary was shown at the LP annual meeting and praised for avoiding PE jargon.",
    bgGradient: "from-purple-950 via-slate-900 to-indigo-950",
    accentBorder: "border-pink-300/40",
  },
  {
    id: "lp-macro-letter",
    category: "lp",
    categoryLabel: "LP & Executive",
    title: "The Contrarian Partner Letter",
    tagline: "The annual report investors actually read cover-to-cover.",
    firmType: "Cross-Border Venture Partnership",
    badge: "⚡ LP Communications",
    badgeVariant: "yellow",
    badgeRotation: 3,
    metricNumber: "94%",
    metricLabel: "LP Read Completion",
    deliverables: [
      "Macro Perspective Memo",
      "Data Storytelling Graphics",
      "Print Keepsake Edition",
    ],
    summary:
      "Reinventing the obligatory annual update into an indispensable strategic memo that institutional LPs forward to peers and investment committees.",
    detailedAngle:
      "Rather than standard financial tables alone, we highlighted the fundamental technological bottlenecks reshaping their target sectors, creating an enduring reference document for allocators.",
    bgGradient: "from-amber-950/80 via-slate-900 to-stone-950",
    accentBorder: "border-amber-300/40",
  },
  {
    id: "founder-dilemmas",
    category: "video",
    categoryLabel: "Video & Film",
    title: "Founder Dilemmas Unfiltered",
    tagline: "The conversations that only happen behind closed doors.",
    firmType: "Early-Stage Venture Collective",
    badge: "★ Episodic Video",
    badgeVariant: "blue",
    badgeRotation: -4,
    metricNumber: "12x",
    metricLabel: "Organic Social Shares",
    deliverables: ["Episodic Roundtable Film", "LinkedIn Video Cuts", "Audio Dispatch Series"],
    summary:
      "Intimate roundtables confronting down-rounds, co-founder splits, and technological pivots, building magnetic authenticity with technical builders.",
    detailedAngle:
      "Shot with warm cinematic lighting and zero pre-scripted soundbites, this video series generated immediate empathy, cementing the firm as the most founder-sympathetic early-stage partner in their region.",
    bgGradient: "from-slate-900 via-sky-950 to-indigo-950",
    accentBorder: "border-cyan-300/40",
  },
  {
    id: "energy-architecture",
    category: "editorial",
    categoryLabel: "Thesis & Editorial",
    title: "Market Architecture In Motion",
    tagline: "Deconstructing grid modernization for institutional allocators.",
    firmType: "Climate & Transition Fund",
    badge: "✦ Thesis Breakdown",
    badgeVariant: "green",
    badgeRotation: 4,
    metricNumber: "18.5k",
    metricLabel: "Senior Policy & LP Reads",
    deliverables: ["Visual Narrative Architecture", "Interactive Diagrams", "Executive Briefing"],
    summary:
      "Translating complex electrical infrastructure into a clear visual story that simplified complex physics for sovereign wealth and pension allocators.",
    detailedAngle:
      "We converted complex transmission constraints into an elegant 3-part interactive whitepaper that influenced policy discussions and expedited subsequent fund closing cycles.",
    bgGradient: "from-emerald-950 via-teal-950 to-slate-900",
    accentBorder: "border-emerald-300/40",
  },
  {
    id: "exit-retrospective",
    category: "portfolio",
    categoryLabel: "Portfolio Stories",
    title: "The Exit Retrospective",
    tagline: "Honoring seven years of operational endurance.",
    firmType: "Growth Equity & Healthcare",
    badge: "⚡ Transformation Case",
    badgeVariant: "purple",
    badgeRotation: -3,
    metricNumber: "3.4x",
    metricLabel: "Capital Multiple Celebrated",
    deliverables: ["Retrospective Case Film", "Executive Q&A Suite", "LP Case Study Pamphlet"],
    summary:
      "A four-part retrospective detailing operational restructuring alongside clinical breakthroughs, highlighting management resilience.",
    detailedAngle:
      "By showcasing both the difficult middle years and the final triumph, this retrospective positioned the fund as a patient, values-aligned healthcare partner for future prospective founders.",
    bgGradient: "from-purple-950 via-slate-950 to-indigo-950",
    accentBorder: "border-purple-300/40",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Concepts" },
  { id: "editorial", label: "Thesis & Editorial" },
  { id: "video", label: "Video & Film" },
  { id: "lp", label: "LP & Executive" },
  { id: "portfolio", label: "Portfolio Stories" },
] as const;

function OurWorksPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedConcept, setSelectedConcept] = useState<WorkConcept | null>(null);

  const filteredConcepts =
    activeCategory === "all" ? CONCEPTS : CONCEPTS.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-(--background) text-foreground selection:bg-purple-200">
      <SiteHeader />

      <main>
        {/* HERO SECTION WITH CLOUD SCENE & FLOATING CARDS */}
        <CloudScene className="pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="container relative z-10">
            <ScrollFloat3D yOffset={30}>
              <div className="max-w-3xl mx-auto text-center mb-10">
                <div className="inline-flex items-center gap-2 mb-4">
                  <StickerBadge variant="orange" rotation={-3}>
                    ★ ILLUSTRATIVE CONCEPTS
                  </StickerBadge>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                    Studio Portfolio
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.12] mb-6">
                  Less announcement.
                  <br />
                  <em className="italic font-serif">More perspective.</em>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  A curated suite of illustrative frameworks and strategic case studies
                  demonstrating how partner conviction translates into enduring market gravity
                  across private equity, venture capital, and family offices.
                </p>
              </div>
            </ScrollFloat3D>

            {/* FILTER PILLS WITH 3D HOVER */}
            <ScrollFloat3D delay={0.1} yOffset={25}>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer shadow-xs ${
                        isActive
                          ? "bg-purple-900 text-white shadow-md scale-105"
                          : "bg-white/80 hover:bg-white text-slate-700 border border-purple-200/50 hover:shadow-sm"
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </ScrollFloat3D>
          </div>
        </CloudScene>

        {/* WORK CONCEPTS 3D GRID */}
        <section className="py-16 md:py-24 container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredConcepts.map((concept, index) => (
              <ScrollFloat3D key={concept.id} delay={0.06 * index} yOffset={40} rotateX={10}>
                <div className="h-full group">
                  <TiltCard
                    maxTilt={12}
                    depth={35}
                    scale={1.02}
                    cursorLabel="PREVIEW ✦"
                    className="h-full rounded-3xl overflow-hidden shadow-lg border border-purple-200/50 bg-white/70 backdrop-blur-xs hover:shadow-2xl transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Visual Header / Cover Art */}
                      <div
                        className={`h-48 sm:h-52 p-6 rounded-t-3xl bg-linear-to-br ${concept.bgGradient} text-white relative overflow-hidden flex flex-col justify-between`}
                      >
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -bottom-8 -right-8 w-36 h-36 bg-white/10 rounded-full blur-xl"
                        />
                        <div className="flex items-start justify-between relative z-10">
                          <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-md text-white/90">
                            {concept.firmType}
                          </span>
                          <StickerBadge
                            variant={concept.badgeVariant}
                            rotation={concept.badgeRotation}
                          >
                            {concept.badge}
                          </StickerBadge>
                        </div>

                        <div className="relative z-10">
                          <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white mb-1">
                            {concept.metricNumber}
                          </div>
                          <div className="text-[11px] font-mono uppercase tracking-wider text-white/70">
                            {concept.metricLabel}
                          </div>
                        </div>
                      </div>

                      {/* Content Card Body */}
                      <div className="p-6 sm:p-7">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[11px] font-semibold text-purple-700 uppercase tracking-wider">
                            {concept.categoryLabel}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground tracking-tight mb-2 group-hover:text-purple-900 transition-colors">
                          {concept.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                          {concept.summary}
                        </p>

                        {/* Deliverables tags */}
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {concept.deliverables.map((d, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-medium px-2 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Action Footer */}
                    <div className="p-6 pt-0">
                      <button
                        onClick={() => setSelectedConcept(concept)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-50 text-purple-900 border border-purple-200/70 hover:bg-purple-900 hover:text-white transition-all text-xs font-semibold cursor-pointer shadow-2xs"
                      >
                        <span>Inspect Strategic Angle</span>
                        <ArrowUpRight size={15} />
                      </button>
                    </div>
                  </TiltCard>
                </div>
              </ScrollFloat3D>
            ))}
          </div>

          {/* CONFIDENTIALITY NOTICE BANNER */}
          <ScrollFloat3D yOffset={30}>
            <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-white/60 border border-border text-center max-w-2xl mx-auto shadow-2xs">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground">
                Client Confidentiality Notice
              </span>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                All case concepts presented above are illustrative frameworks demonstrating our
                strategic methodology and editorial narrative structure. We uphold strict
                non-disclosure agreements. Authorized firm references and work samples are shared
                strictly upon private request.
              </p>
            </div>
          </ScrollFloat3D>
        </section>

        {/* SCALLOP TRANSITION */}
        <SectionCloudDivider fillColor="#f6effe" />

        {/* BOTTOM INVITATION CTA */}
        <ScrollFloat3D yOffset={40}>
          <section className="py-20 text-center container">
            <div className="p-8 sm:p-14 rounded-3xl bg-linear-to-r from-blue-950 via-indigo-950 to-purple-950 text-white relative overflow-hidden shadow-2xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
              />
              <div className="relative z-10 max-w-xl mx-auto">
                <StickerBadge variant="yellow" rotation={3}>
                  ⚡ YOUR TURN
                </StickerBadge>
                <h2 className="text-3xl sm:text-4xl font-medium mt-4 mb-4 text-white">
                  Have an investment thesis waiting to be told?
                </h2>
                <p className="text-sm text-purple-200/90 mb-8 leading-relaxed">
                  Let’s unpack what your partners know and give it the editorial clarity and market
                  stature it deserves.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    asChild
                    variant="editorialOutline"
                    className="border-white/40 text-white hover:bg-white/10"
                  >
                    <Link to="/about-us">
                      Learn how we work <ArrowRight size={16} />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="editorial"
                    className="bg-white text-slate-900 hover:bg-white/90"
                  >
                    <Link to="/contact">
                      Start an inquiry <ArrowUpRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </ScrollFloat3D>
      </main>

      {/* INTERACTIVE MODAL DETAIL PREVIEW */}
      {selectedConcept && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedConcept(null)}
        >
          <div
            className="w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-purple-200 overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className={`p-6 sm:p-8 bg-linear-to-br ${selectedConcept.bgGradient} text-white relative`}
            >
              <button
                onClick={() => setSelectedConcept(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-sm bg-white/20">
                  {selectedConcept.firmType}
                </span>
                <span className="text-xs text-white/80">{selectedConcept.categoryLabel}</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-1">
                {selectedConcept.title}
              </h3>
              <p className="text-xs text-white/80 font-serif italic">"{selectedConcept.tagline}"</p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <span className="text-xs font-semibold text-purple-900 uppercase tracking-wider block mb-1">
                  The Editorial Strategy
                </span>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedConcept.detailedAngle}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase block">
                    Strategic Outcome
                  </span>
                  <div className="text-xl font-bold font-mono text-purple-950">
                    {selectedConcept.metricNumber}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-medium text-purple-900 block">
                    {selectedConcept.metricLabel}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-purple-900 uppercase tracking-wider block mb-2">
                  Delivered Asset Suite
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedConcept.deliverables.map((d, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 border border-slate-200"
                    >
                      ✦ {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedConcept(null)}
                  className="rounded-xl"
                >
                  Close
                </Button>
                <Button asChild variant="editorial" size="sm" className="rounded-xl">
                  <Link to="/contact">
                    Discuss a similar project <ArrowUpRight size={14} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
