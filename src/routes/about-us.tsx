import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Eye,
  FileText,
  Layers,
  MessageSquare,
  Mic,
  Shield,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { CloudScene } from "@/components/animations/CloudScene";
import { ScrollFloat3D } from "@/components/animations/ScrollFloat3D";
import { SectionCloudDivider } from "@/components/animations/SectionCloudDivider";
import { StickerBadge } from "@/components/animations/StickerBadge";
import { TiltCard } from "@/components/animations/TiltCard";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — Reframe Studios | Content & Storytelling for Private Markets" },
      {
        name: "description",
        content:
          "Discover Reframe Studios' editorial philosophy, studio tenets, and how we turn private market partner conviction into lasting market recall.",
      },
      { property: "og:title", content: "About Reframe Studios" },
      {
        property: "og:description",
        content: "Quiet authority, investment thinking first, and substance over frequency.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutUsPage,
});

function AboutUsPage() {
  return (
    <div className="min-h-screen bg-(--background) text-foreground selection:bg-purple-200">
      <SiteHeader />

      <main>
        {/* HERO SECTION WITH CLOUD SCENE & 3D FLOATING CARDS */}
        <CloudScene className="pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="container relative z-10">
            <ScrollFloat3D yOffset={30}>
              <div className="max-w-3xl mx-auto text-center mb-10">
                <div className="inline-flex items-center gap-2 mb-4">
                  <StickerBadge variant="purple" rotation={-3}>
                    ✦ THE REFRAME PHILOSOPHY
                  </StickerBadge>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                    Editorial Studio
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.12] mb-6">
                  We translate <em className="italic font-serif">conviction</em>
                  <br />
                  into lasting market gravity.
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Reframe Studios was founded on a simple observation: private market leaders don't
                  have a content shortage — they have an editorial filter challenge. We extract the
                  unwritten intellect of partners and craft stories with intellectual weight.
                </p>
              </div>
            </ScrollFloat3D>

            {/* 3D FEATURED STUDIO MANIFESTO CARD */}
            <ScrollFloat3D delay={0.1} yOffset={45} rotateX={8}>
              <div className="max-w-4xl mx-auto">
                <TiltCard
                  maxTilt={8}
                  depth={30}
                  scale={1.01}
                  cursorLabel="MANIFESTO ✦"
                  className="rounded-3xl p-8 sm:p-12 bg-white/80 backdrop-blur-md border border-purple-200/50 shadow-2xl relative overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
                    <div className="flex-1 space-y-4">
                      <span className="text-xs font-mono tracking-widest text-purple-700 font-semibold uppercase">
                        Our Core Creed
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                        Recognition before introduction.
                      </h2>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        When a founder, co-investor, or LP sits down with you, they should already
                        feel the weight and precision of your perspective. Not because you posted
                        incessantly, but because what you published was unmistakable.
                      </p>
                      <div className="pt-2 flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-blue-50 text-blue-900 border border-blue-200">
                          <Check size={14} className="text-blue-600" /> Intellectual Rigor
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-purple-50 text-purple-900 border border-purple-200">
                          <Check size={14} className="text-purple-600" /> Partner Respect
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200">
                          <Check size={14} className="text-emerald-600" /> Absolute Confidentiality
                        </span>
                      </div>
                    </div>

                    <div className="w-full md:w-64 shrink-0 flex flex-col gap-3">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
                        <div className="text-2xl font-bold font-mono text-purple-900">01 /</div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-700 mt-1">
                          Senior-Led Dialogues
                        </div>
                        <p className="text-[11px] text-muted-foreground mt-1">
                          No junior account managers asking basic questions.
                        </p>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
                        <div className="text-2xl font-bold font-mono text-blue-900">02 /</div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-700 mt-1">
                          Substance Over Volume
                        </div>
                        <p className="text-[11px] text-muted-foreground mt-1">
                          One standout thesis outperforms twenty generic updates.
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </ScrollFloat3D>
          </div>
        </CloudScene>

        {/* SECTION 1: THE THREE STUDIO TENETS */}
        <ScrollFloat3D yOffset={60} rotateX={10}>
          <section className="py-20 container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">HOW WE THINK</span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mt-2">
                Three tenets that guide every piece we produce.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: Target,
                  number: "01",
                  title: "Investment Thinking First",
                  tag: "✦ Strategic Alignment",
                  bg: "bg-blue-50/60 border-blue-200/70",
                  badgeVariant: "blue" as const,
                  description:
                    "Marketing agencies talk about impressions; we talk about conviction, cost of capital, risk underwriting, and founder psychology. We speak the native language of private capital.",
                },
                {
                  icon: Sparkles,
                  number: "02",
                  title: "Signal Over Noise",
                  tag: "★ High Recall",
                  bg: "bg-purple-50/60 border-purple-200/70",
                  badgeVariant: "purple" as const,
                  description:
                    "The modern feed is drowned in generic corporate summaries. Our aim is singular: when your target audience reads or watches, they stop scrolling and take notes.",
                },
                {
                  icon: Shield,
                  number: "03",
                  title: "Quiet Authority",
                  tag: "⚡ Executive Voice",
                  bg: "bg-amber-50/60 border-amber-200/70",
                  badgeVariant: "yellow" as const,
                  description:
                    "True market leaders don't shout with buzzwords or hype. We craft understated, deeply confident narratives that carry weight among peer LPs and elite founders.",
                },
              ].map((tenet, idx) => {
                const Icon = tenet.icon;
                return (
                  <ScrollFloat3D key={tenet.title} delay={0.08 * idx} yOffset={35}>
                    <TiltCard
                      maxTilt={12}
                      depth={25}
                      scale={1.02}
                      cursorLabel="TENET ✦"
                      className={`rounded-3xl p-8 border ${tenet.bg} bg-white/70 backdrop-blur-xs shadow-sm hover:shadow-xl transition-all h-full flex flex-col justify-between`}
                    >
                      <div>
                        <div className="flex justify-between items-center mb-6">
                          <span className="font-mono text-xs font-semibold text-muted-foreground">
                            {tenet.number}
                          </span>
                          <StickerBadge
                            variant={tenet.badgeVariant}
                            rotation={idx % 2 === 0 ? 3 : -3}
                          >
                            {tenet.tag}
                          </StickerBadge>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-black/5 flex items-center justify-center mb-5 text-purple-900">
                          <Icon size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {tenet.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {tenet.description}
                        </p>
                      </div>
                      <div className="mt-8 pt-4 border-t border-black/5 flex items-center text-xs font-mono text-purple-800">
                        <span>CORE PRINCIPLE #{idx + 1}</span>
                        <ArrowUpRight size={14} className="ml-auto" />
                      </div>
                    </TiltCard>
                  </ScrollFloat3D>
                );
              })}
            </div>
          </section>
        </ScrollFloat3D>

        {/* SCALLOP DIVIDER */}
        <SectionCloudDivider fillColor="#f6effe" />

        {/* SECTION 2: THE EDITORIAL METHODOLOGY */}
        <ScrollFloat3D yOffset={60} rotateX={10}>
          <section className="py-20 bg-linear-to-b from-[#f6effe] to-[#edf3fe] relative overflow-hidden">
            <div className="container relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                <div>
                  <span className="eyebrow">OUR METHODOLOGY</span>
                  <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mt-2">
                    How partner time turns into
                    <br />
                    <em className="italic font-serif">commercial narrative.</em>
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground max-w-md">
                  We minimize partner workload to 30–45 minutes while maximizing strategic output
                  across films, editorial essays, and board briefings.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    icon: Mic,
                    title: "The Inquiry Session",
                    time: "30 Minutes",
                    desc: "An unstructured, exploratory conversation with our senior editorial lead to probe your latest thesis or portfolio nuance.",
                  },
                  {
                    step: "02",
                    icon: Compass,
                    title: "Thesis Decomposition",
                    time: "48 Hours",
                    desc: "We extract the counter-intuitive arguments, strategic tensions, and market data that form the core spine of your story.",
                  },
                  {
                    step: "03",
                    icon: Layers,
                    title: "Multi-Format Crafting",
                    time: "1–2 Weeks",
                    desc: "We develop the narrative into bespoke documentary vignettes, interactive viewpoints, and executive memos.",
                  },
                  {
                    step: "04",
                    icon: Zap,
                    title: "Targeted Resonance",
                    time: "Ongoing",
                    desc: "Selective syndication and distribution designed specifically for peer GPs, target founders, and investment committees.",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <ScrollFloat3D key={item.step} delay={0.06 * i} yOffset={30}>
                      <TiltCard
                        maxTilt={10}
                        depth={20}
                        scale={1.02}
                        className="rounded-2xl p-6 bg-white/80 border border-purple-200/40 shadow-xs hover:shadow-lg transition-all h-full"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-2xl font-bold font-mono text-purple-900">
                            {item.step}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-100 text-purple-800">
                            {item.time}
                          </span>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-base font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </TiltCard>
                    </ScrollFloat3D>
                  );
                })}
              </div>
            </div>
          </section>
        </ScrollFloat3D>

        {/* SCALLOP DIVIDER */}
        <SectionCloudDivider fillColor="#edf3fe" inverted />

        {/* SECTION 3: EDITORIAL STANDARDS / WHAT WE NEVER DO */}
        <ScrollFloat3D yOffset={60} rotateX={8}>
          <section className="py-20 container">
            <div className="max-w-3xl mx-auto rounded-3xl p-8 sm:p-12 bg-white/70 backdrop-blur-md border border-border shadow-lg">
              <span className="eyebrow">OUR COMMITMENT</span>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mt-2 mb-6">
                What we stand against in private market content.
              </h2>
              <div className="space-y-4">
                {[
                  "No automated press releases masked as thought leadership.",
                  "No generic AI-generated platitudes without partner conviction.",
                  "No vanity vanity-metric chases (likes vs. founder respect).",
                  "No compromise on confidential fund or deal information.",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 font-bold text-xs">
                      ✕
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  Ready to experience an editorial partnership built for private markets?
                </p>
                <Button asChild variant="editorial" className="shrink-0">
                  <Link to="/contact">
                    Talk to our team <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </ScrollFloat3D>

        {/* BOTTOM CTA STRIP WITH FLOATING CLOUD VIBE */}
        <ScrollFloat3D yOffset={40}>
          <section className="py-16 text-center container">
            <div className="p-8 sm:p-12 rounded-3xl bg-linear-to-r from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden shadow-2xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-10 -right-10 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl"
              />
              <div className="relative z-10 max-w-xl mx-auto">
                <StickerBadge variant="pink" rotation={-4}>
                  ✦ START A CONVERSATION
                </StickerBadge>
                <h2 className="text-3xl sm:text-4xl font-medium mt-4 mb-4 text-white">
                  Put your investment thinking into motion.
                </h2>
                <p className="text-sm text-purple-200/90 mb-8 leading-relaxed">
                  Join forward-thinking GPs, partners, and family offices who build undeniable
                  authority before the pitch begins.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    asChild
                    variant="editorialOutline"
                    className="border-white/40 text-white hover:bg-white/10"
                  >
                    <Link to="/our-works">
                      Explore our works <ArrowUpRight size={16} />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="editorial"
                    className="bg-white text-slate-900 hover:bg-white/90"
                  >
                    <Link to="/contact">
                      Schedule a partner intro <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </ScrollFloat3D>
      </main>

      <SiteFooter />
    </div>
  );
}
