import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Mic,
  FileText,
  MessageSquare,
  Video,
  Quote,
  Layers,
  Play,
  Plus,
  Minus,
  Check,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CloudScene } from "@/components/animations/CloudScene";
import { TiltCard } from "@/components/animations/TiltCard";
import { SuperpowerTicker } from "@/components/animations/SuperpowerTicker";
import { StickerBadge } from "@/components/animations/StickerBadge";
import { ScrollFloat3D } from "@/components/animations/ScrollFloat3D";
import { SectionCloudDivider } from "@/components/animations/SectionCloudDivider";
import conversation from "@/assets/studio-conversation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reframe Studios — Content & storytelling for private markets" },
      {
        name: "description",
        content:
          "Turn your investment expertise into stories that build authority, visibility and founder relationships. A specialist storytelling studio for private markets.",
      },
      { property: "og:title", content: "Reframe Studios — Your thinking, reframed" },
      {
        property: "og:description",
        content: "Strategic content and storytelling for private-market investors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Partner-led content",
    description: "Turn the way your partners think into a distinctive, consistent voice.",
    detail:
      "Partner interviews, LinkedIn viewpoints, thought-leadership articles and opinion pieces — shaped around the expertise already inside your firm.",
    icon: MessageSquare,
  },
  {
    title: "Portfolio storytelling",
    description: "Go beyond the announcement. Tell the story behind the investment.",
    detail:
      "Investment narratives, founder interviews and portfolio stories that explain your conviction, contribution and the people behind the business.",
    icon: FileText,
  },
  {
    title: "Content repurposing",
    description: "Give your best ideas more than one moment in the spotlight.",
    detail:
      "Transform podcasts, panels and partner conversations into video clips, carousels, quote visuals and long-form insights.",
    icon: Layers,
  },
  {
    title: "Video & YouTube",
    description: "Make complex investment thinking clear, human and watchable.",
    detail:
      "Editorial planning, interview-led films, short-form video and YouTube assets, from the first question to the final edit.",
    icon: Video,
  },
  {
    title: "Executive positioning",
    description: "Build recognition around the expertise that makes you different.",
    detail:
      "Narrative development, executive viewpoints and an editorial direction that connects your experience with the conversations that matter.",
    icon: Quote,
  },
];

const examples = [
  {
    source: "Portfolio announcement",
    output: "Why we invested",
    copy: "The market opportunity. The founder’s ambition. The conviction behind the decision.",
  },
  {
    source: "Portfolio growth",
    output: "The story behind the numbers",
    copy: "What changed, what the team learned, and what the next chapter makes possible.",
  },
  {
    source: "Partner conversation",
    output: "A point of view worth sharing",
    copy: "A distinctive perspective that makes your investment thinking useful to the market.",
  },
];

function Index() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const [example, setExample] = useState(0);
  const current = examples[example];
  if (!current) return null;

  return (
    <>
      <SiteHeader />
      <main>
        {/* HERO SECTION WITH CLOUD SCENE & 3D TILT */}
        <CloudScene>
          <section className="hero container relative">
            <div className="hero-copy z-10">
              <div className="eyebrow flex items-center gap-2">
                <span className="status-dot" /> CONTENT & STORYTELLING FOR PRIVATE MARKETS
                <span className="ml-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-[#ffd4e5] text-[#4d102e] border border-[#f48fb1] animate-pulse">
                  <Sparkles size={10} /> 3D MOTIONS ENABLED
                </span>
              </div>
              <h1>
                Be the investor
                <br />
                founders already
                <br />
                <em>know.</em>
                <span className="hero-last">Before the first meeting.</span>
              </h1>
              <p>
                We turn your investment thinking into stories
                <br className="desktop-break" /> that build recognition, trust, and relationships.
              </p>
              <div className="hero-actions">
                <Button variant="editorial" asChild>
                  <a href="#approach">
                    See how we Reframe content <ArrowUpRight />
                  </a>
                </Button>
                <Link to="/contact" className="text-link">
                  Talk to us <ArrowUpRight size={16} />
                </Link>
              </div>
              <div className="hero-note">
                <span className="mini-line" /> YOUR EXPERTISE. A CLEARER STORY. A WIDER REACH.
              </div>
            </div>

            <div className="hero-visual z-10">
              <TiltCard
                maxTilt={14}
                depth={35}
                scale={1.03}
                cursorLabel="TILT 3D ✦"
                className="w-full h-full shadow-2xl rounded-2xl overflow-hidden border border-white/60 bg-white/20 backdrop-blur-xs"
              >
                <div className="relative w-full h-full">
                  <img
                    src={conversation}
                    width={1536}
                    height={1152}
                    alt="An editorial scene of a thoughtful investment conversation"
                    fetchPriority="high"
                    className="w-full h-[calc(100%-37px)] object-cover object-[52%_center] rounded-xl"
                  />
                  <span className="image-frame top-frame" />
                  <span className="image-frame bottom-frame" />
                  <div className="photo-caption">
                    <span>GOOD STORIES START WITH BETTER CONVERSATIONS.</span>
                    <ArrowUpRight size={18} />
                  </div>
                  <div
                    className="image-tag shadow-lg rounded-sm border border-border"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <span className="status-dot" /> A DIFFERENT PERSPECTIVE.
                  </div>
                </div>
              </TiltCard>
            </div>
          </section>
        </CloudScene>

        {/* AUDIENCE STRIP */}
        <ScrollFloat3D delay={0.05} yOffset={30}>
          <div className="audience-strip container">
            <span>BUILT AROUND YOUR WORLD</span>
            <div>
              Private equity
              <i />
              Venture capital
              <i />
              Growth equity
              <i />
              Family offices
            </div>
          </div>
        </ScrollFloat3D>

        {/* LOFTY LAB SUPERPOWER TICKER */}
        <SuperpowerTicker />

        {/* 01 / THE OPPORTUNITY SECTION WITH 3D SCROLL & TILT */}
        <ScrollFloat3D yOffset={60} rotateX={12}>
          <section className="problem section container">
            <div className="section-top">
              <span className="eyebrow">01 / THE OPPORTUNITY</span>
              <span className="section-note">There’s more to your story.</span>
            </div>
            <div className="two-column">
              <h2>
                You probably don’t have
                <br />a <em>content shortage.</em>
              </h2>
              <div className="section-copy">
                <p>
                  You have partner conversations. Investment theses. Portfolio milestones.
                  Perspectives the market needs to hear.
                </p>
                <p className="muted">
                  The challenge isn’t finding something to say.
                  <br />
                  It’s finding the story in what you already know.
                </p>
              </div>
            </div>
            <div className="source-grid">
              {[
                { icon: Mic, title: "Partner conversations" },
                { icon: FileText, title: "Investment theses" },
                { icon: Layers, title: "Portfolio stories" },
                { icon: MessageSquare, title: "Market perspectives" },
              ].map(({ icon: Icon, title }, i) => (
                <ScrollFloat3D key={title} delay={0.08 * i} yOffset={35} rotateX={10}>
                  <TiltCard
                    maxTilt={10}
                    depth={20}
                    scale={1.02}
                    cursorLabel="EXPLORE ✦"
                    className="source-item rounded-xl p-4 bg-white/70 border border-purple-200/40 shadow-xs transition-all hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary text-foreground">
                        <Icon size={20} strokeWidth={1.4} />
                      </div>
                      <span className="font-medium text-xs">{title}</span>
                      <small className="ml-auto text-[10px] text-muted-foreground font-mono">
                        0{i + 1}
                      </small>
                    </div>
                  </TiltCard>
                </ScrollFloat3D>
              ))}
            </div>
          </section>
        </ScrollFloat3D>

        {/* 02 / SERVICES SECTION */}
        <ScrollFloat3D yOffset={60} rotateX={12}>
          <section id="services" className="services-section section">
            <div className="container">
              <div className="section-top">
                <span className="eyebrow">02 / WHAT WE DO</span>
                <span className="section-note">From expertise to impact.</span>
              </div>
              <div className="two-column services-layout">
                <div>
                  <h2>
                    Thoughtful content.
                    <br />
                    <em>Purposeful reach.</em>
                  </h2>
                  <p className="intro-copy">
                    The right stories, in the right formats.
                    <br />
                    Built around the way private markets work.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    <StickerBadge variant="blue" rotation={-3}>
                      High Authority
                    </StickerBadge>
                    <StickerBadge variant="green" rotation={4}>
                      LP Resonance
                    </StickerBadge>
                  </div>
                  <Link to="/contact" className="text-link">
                    Find your starting point <ArrowUpRight size={17} />
                  </Link>
                </div>
                <div className="service-list">
                  {services.map(({ title, description, detail, icon: Icon }, i) => (
                    <div className="service-row" key={title}>
                      <Button
                        variant="ghost"
                        className="service-toggle"
                        aria-expanded={expanded === i}
                        aria-controls={`service-${i}`}
                        onClick={() => setExpanded(expanded === i ? null : i)}
                      >
                        <span className="service-number">0{i + 1}</span>
                        <span>{title}</span>
                        {expanded === i ? <Minus /> : <Plus />}
                      </Button>
                      {expanded === i && (
                        <div
                          id={`service-${i}`}
                          className="service-detail animate-in fade-in slide-in-from-top-2 duration-300"
                        >
                          <Icon size={24} strokeWidth={1.25} />
                          <div>
                            <p>{description}</p>
                            <p className="muted">{detail}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollFloat3D>

        {/* 03 / THE REFRAME WAY - 3D TRANSFORMATION PANELS */}
        <ScrollFloat3D yOffset={60} rotateX={12}>
          <section id="approach" className="section container">
            <div className="section-top">
              <span className="eyebrow">03 / THE REFRAME WAY</span>
              <span className="section-note">Same source. A different story.</span>
            </div>
            <div className="section-heading-row">
              <h2>
                Don’t just share the news.
                <br />
                <em>Give it meaning.</em>
              </h2>
              <p>
                We look beyond what happened.
                <br />
                To why it matters.
              </p>
            </div>
            <div className="example-tabs" role="tablist" aria-label="Story transformation examples">
              {examples.map((item, i) => (
                <Button
                  key={item.source}
                  variant="ghost"
                  role="tab"
                  aria-selected={i === example}
                  onClick={() => setExample(i)}
                  className={i === example ? "example-tab selected" : "example-tab"}
                >
                  {item.source}
                </Button>
              ))}
            </div>

            <div className="transformation gap-6">
              <TiltCard
                maxTilt={8}
                depth={25}
                cursorLabel="BEFORE ✦"
                className="before-panel rounded-2xl shadow-sm border border-border overflow-hidden"
              >
                <span className="eyebrow">THE STARTING POINT</span>
                <FileText size={30} strokeWidth={1} />
                <h3>{current.source}</h3>
                <p>An update about what happened.</p>
                <span className="example-label">ILLUSTRATIVE EXAMPLE</span>
              </TiltCard>

              <div className="transform-arrow flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg animate-bounce">
                  <ArrowRight strokeWidth={1.5} size={20} />
                </div>
              </div>

              <TiltCard
                maxTilt={12}
                depth={35}
                cursorLabel="REFRAMED ✦"
                className="after-panel rounded-2xl shadow-xl border border-white/50 overflow-hidden relative"
              >
                <div className="absolute top-4 right-4">
                  <StickerBadge variant="yellow" rotation={5}>
                    ★ High Impact
                  </StickerBadge>
                </div>
                <span className="eyebrow">THE REFRAMED STORY</span>
                <h3>
                  {current.output}
                  <ArrowUpRight strokeWidth={1} />
                </h3>
                <p>{current.copy}</p>
                <div className="format-tags">
                  <span className="hover:font-semibold transition-all">Partner viewpoint</span>
                  <span className="hover:font-semibold transition-all">Short film</span>
                  <span className="hover:font-semibold transition-all">Long-form insight</span>
                </div>
              </TiltCard>
            </div>
          </section>
        </ScrollFloat3D>

        {/* CLOUD SCALLOP TRANSITION INTO POSITIONING */}
        <SectionCloudDivider fillColor="#17114b" />

        {/* LOFTY LAB METRICS & POSITIONING BANNER */}
        <ScrollFloat3D yOffset={60} rotateX={12}>
          <section className="positioning relative">
            <div className="container relative z-10">
              <div className="flex justify-between items-start flex-wrap gap-6 mb-8">
                <div>
                  <span className="eyebrow">STRATEGY BEFORE THE SCHEDULE</span>
                  <h2>
                    Not another
                    <br />
                    <em>social-media calendar.</em>
                  </h2>
                </div>

                {/* Lofty Lab Metrics Badges */}
                <div className="flex gap-4 sm:gap-6 items-center flex-wrap">
                  <TiltCard
                    maxTilt={15}
                    depth={30}
                    className="px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center"
                  >
                    <div className="text-3xl font-bold font-mono tracking-tight text-[#fff7b2]">
                      +230%
                    </div>
                    <div className="text-[10px] text-(--forest-muted) uppercase tracking-wider mt-1">
                      Founder Recall
                    </div>
                  </TiltCard>
                  <TiltCard
                    maxTilt={15}
                    depth={30}
                    className="px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center"
                  >
                    <div className="text-3xl font-bold font-mono tracking-tight text-[#ffd4e5]">
                      12x
                    </div>
                    <div className="text-[10px] text-(--forest-muted) uppercase tracking-wider mt-1">
                      Engagement Depth
                    </div>
                  </TiltCard>
                  <TiltCard
                    maxTilt={15}
                    depth={30}
                    className="px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center"
                  >
                    <div className="text-3xl font-bold font-mono tracking-tight text-[#cce4ff]">
                      14.6M
                    </div>
                    <div className="text-[10px] text-(--forest-muted) uppercase tracking-wider mt-1">
                      Target Views
                    </div>
                  </TiltCard>
                </div>
              </div>

              <div className="positioning-bottom">
                <p>
                  We start with better questions.
                  <br />
                  Not “what should we post?” but “what is worth saying?”
                </p>
                <div>
                  <span>
                    <Check size={16} /> Investment thinking first
                  </span>
                  <span>
                    <Check size={16} /> Substance over frequency
                  </span>
                  <span>
                    <Check size={16} /> A voice that is unmistakably yours
                  </span>
                </div>
              </div>
              <span className="large-frame" aria-hidden="true" />
            </div>
          </section>
        </ScrollFloat3D>

        {/* CLOUD SCALLOP TRANSITION OUT OF POSITIONING */}
        <SectionCloudDivider fillColor="#edf3fe" inverted />

        {/* 04 / ONE IDEA, MORE VALUE */}
        <ScrollFloat3D yOffset={60} rotateX={12}>
          <section className="section container">
            <div className="section-top">
              <span className="eyebrow">04 / ONE IDEA, MORE VALUE</span>
              <span className="section-note">Make your thinking work harder.</span>
            </div>
            <div className="section-heading-row">
              <h2>
                One conversation.
                <br />
                <em>Many ways to connect.</em>
              </h2>
              <p>
                Your best ideas shouldn’t end
                <br />
                when the conversation does.
              </p>
            </div>
            <div className="repurpose-layout">
              <TiltCard
                maxTilt={12}
                depth={25}
                cursorLabel="ORIGIN ✦"
                className="conversation-source rounded-2xl bg-white/50 border border-border shadow-sm"
              >
                <Mic size={32} strokeWidth={1.2} />
                <h3>
                  A partner
                  <br />
                  conversation
                </h3>
                <span>THE ORIGINAL IDEA</span>
              </TiltCard>
              <ArrowRight className="repurpose-arrow" />
              <div className="output-grid">
                {[
                  { icon: Play, label: "Short video" },
                  { icon: MessageSquare, label: "LinkedIn viewpoint" },
                  { icon: Layers, label: "Editorial carousel" },
                  { icon: Quote, label: "Quote visual" },
                  { icon: FileText, label: "Long-form insight" },
                  { icon: Video, label: "YouTube asset" },
                ].map(({ icon: Icon, label }, i) => (
                  <ScrollFloat3D key={label} delay={0.06 * i} yOffset={25}>
                    <TiltCard
                      maxTilt={8}
                      depth={15}
                      scale={1.02}
                      className="rounded-xl border border-border bg-white/40 p-4 hover:bg-white hover:shadow-md transition-all flex items-center gap-3"
                    >
                      <Icon size={20} strokeWidth={1.2} />
                      <span>{label}</span>
                      <ArrowUpRight size={14} className="ml-auto" />
                    </TiltCard>
                  </ScrollFloat3D>
                ))}
              </div>
            </div>
          </section>
        </ScrollFloat3D>

        {/* 05 / WHY REFRAME - 3D OUTCOME CARDS */}
        <ScrollFloat3D yOffset={60} rotateX={12}>
          <section className="outcomes section">
            <div className="container">
              <span className="eyebrow">05 / WHY REFRAME</span>
              <div className="section-heading-row">
                <h2>Recognition before introduction.</h2>
                <p>
                  Content with a commercial purpose.
                  <br />
                  Not just a publishing target.
                </p>
              </div>
              <div className="outcome-grid">
                {[
                  {
                    title: "Build authority",
                    copy: "Make your expertise visible, distinctive and useful.",
                    tag: "★ Authority",
                  },
                  {
                    title: "Earn market recall",
                    copy: "Stay part of the conversation between investment cycles.",
                    tag: "⚡ Recall",
                  },
                  {
                    title: "Create connections",
                    copy: "Give founders a reason to know you before they meet you.",
                    tag: "✦ Relationships",
                  },
                ].map((item, i) => (
                  <ScrollFloat3D key={item.title} delay={0.1 * i} yOffset={35}>
                    <TiltCard
                      maxTilt={12}
                      depth={25}
                      scale={1.02}
                      cursorLabel="VIEW ✦"
                      className="rounded-2xl p-6 bg-white/40 border border-black/5 hover:bg-white hover:shadow-xl transition-all"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                          {item.tag}
                        </span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                    </TiltCard>
                  </ScrollFloat3D>
                ))}
              </div>
            </div>
          </section>
        </ScrollFloat3D>

        {/* 06 / STORIES WITH SUBSTANCE - LOFTY LAB 3D SHOWCASE CARDS */}
        <ScrollFloat3D yOffset={60} rotateX={12}>
          <section id="work" className="section container">
            <div className="section-top">
              <span className="eyebrow">06 / STORIES WITH SUBSTANCE</span>
              <span className="section-note">An inside look at the possibilities.</span>
            </div>
            <div className="section-heading-row">
              <h2>
                Less announcement.
                <br />
                <em>More perspective.</em>
              </h2>
              <Link to="/contact" className="text-link">
                Discuss relevant work <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="work-grid">
              <ScrollFloat3D delay={0.05} yOffset={40}>
                <a href="#approach" className="work-item block group">
                  <TiltCard
                    maxTilt={14}
                    depth={40}
                    scale={1.025}
                    cursorLabel="PREVIEW 3D ▶"
                    className="rounded-2xl overflow-hidden shadow-xl border border-border group-hover:shadow-2xl transition-all"
                  >
                    <div className="work-art investment-art rounded-2xl relative overflow-hidden">
                      <div className="absolute top-4 right-4 z-10">
                        <StickerBadge variant="orange" rotation={4}>
                          ★ Featured Perspective
                        </StickerBadge>
                      </div>
                      <span>THE INVESTMENT PERSPECTIVE</span>
                      <h3>
                        Behind every
                        <br />
                        investment,
                        <br />
                        <em>a conviction.</em>
                      </h3>
                      <span className="art-wordmark">reframe / perspectives</span>
                    </div>
                  </TiltCard>
                  <div className="work-description">
                    <div>
                      <span className="eyebrow">ILLUSTRATIVE CONCEPT / PARTNER-LED CONTENT</span>
                      <h3>From investment thesis to point of view</h3>
                    </div>
                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </a>
              </ScrollFloat3D>

              <ScrollFloat3D delay={0.15} yOffset={40}>
                <a href="#approach" className="work-item block group">
                  <TiltCard
                    maxTilt={14}
                    depth={40}
                    scale={1.025}
                    cursorLabel="PREVIEW 3D ▶"
                    className="rounded-2xl overflow-hidden shadow-xl border border-border group-hover:shadow-2xl transition-all"
                  >
                    <div className="work-art story-art rounded-2xl relative overflow-hidden">
                      <div className="absolute top-4 right-4 z-10">
                        <StickerBadge variant="pink" rotation={-6}>
                          ✦ Portfolio Film
                        </StickerBadge>
                      </div>
                      <div className="story-document rounded-xl shadow-lg border border-black/5">
                        <span>THE PORTFOLIO STORY</span>
                        <h3>
                          Beyond
                          <br />
                          <em>the numbers.</em>
                        </h3>
                        <div className="document-lines" />
                        <span>THE PEOPLE. THE PROGRESS. THE NEXT CHAPTER.</span>
                      </div>
                    </div>
                  </TiltCard>
                  <div className="work-description">
                    <div>
                      <span className="eyebrow">ILLUSTRATIVE CONCEPT / PORTFOLIO STORYTELLING</span>
                      <h3>Turning a milestone into a meaningful story</h3>
                    </div>
                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </a>
              </ScrollFloat3D>
            </div>
            <p className="work-disclaimer">
              Client confidentiality comes first. Ask us about relevant examples we can share
              privately.
            </p>
          </section>
        </ScrollFloat3D>

        {/* 07 / ABOUT THE STUDIO */}
        <ScrollFloat3D yOffset={60} rotateX={12}>
          <section id="about" className="about-section section">
            <div className="container two-column">
              <div>
                <span className="eyebrow">07 / ABOUT THE STUDIO</span>
                <h2>
                  A content studio.
                  <br />
                  <em>An investor’s lens.</em>
                </h2>
              </div>
              <div className="section-copy">
                <p>
                  Reframe Studios is built around a simple belief: the thinking inside
                  private-market firms deserves a better life outside them.
                </p>
                <p className="muted">
                  We connect investment expertise with editorial thinking — asking better questions,
                  finding the human story, and shaping content that feels like you.
                </p>
                <Link to="/contact" className="text-link">
                  Get to know Reframe <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </section>
        </ScrollFloat3D>

        {/* 08 / INSIGHTS SECTION */}
        <ScrollFloat3D yOffset={60} rotateX={12}>
          <section id="insights" className="section container insights-section">
            <div className="flex justify-center mb-4">
              <StickerBadge variant="purple" rotation={-4}>
                ✦ Studio Philosophy
              </StickerBadge>
            </div>
            <span className="eyebrow">08 / A PERSPECTIVE TO TAKE AWAY</span>
            <h2>
              The strongest story isn’t always
              <br />
              <em>the loudest one.</em>
            </h2>
            <p>
              It’s the one that helps someone understand how you think.
              <br />
              That’s where we start.
            </p>
            <a href="#approach" className="text-link">
              Explore our approach <ArrowDown size={17} />
            </a>
          </section>
        </ScrollFloat3D>

        {/* SCALLOP CLOUD TRANSITION INTO FOOTER */}
        <SectionCloudDivider fillColor="#030f2e" />
      </main>
      <SiteFooter />
    </>
  );
}
