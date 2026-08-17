import { ExternalLink, Monitor, Tablet, Smartphone, TrendingUp, TrendingDown, Layers } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import projectBellami from "@/assets/project-bellami.jpg";
import projectFenty from "@/assets/project-fenty.jpg";
import projectWhiteWarren from "@/assets/project-whitewarren.jpg";
import fentyTablet from "@/assets/fenty-tablet.png.asset.json";
import fentyMobile from "@/assets/fenty-mobile.png.asset.json";
import wwTablet from "@/assets/ww-tablet.png.asset.json";
import wwMobile from "@/assets/ww-mobile.png.asset.json";
import fracturePdp from "@/assets/fracture-pdp.png.asset.json";
import fracturePdpMobile from "@/assets/fracture-pdp-mobile.png.asset.json";

const seoTrend = [
  { month: "Month 1", traffic: 100, lcp: 4.6 },
  { month: "Month 2", traffic: 106, lcp: 4.1 },
  { month: "Month 3", traffic: 112, lcp: 3.4 },
  { month: "Month 4", traffic: 118, lcp: 2.9 },
  { month: "Month 5", traffic: 124, lcp: 2.6 },
  { month: "Month 6", traffic: 132, lcp: 2.3 },
];

const seoMetrics = [
  { label: "Organic traffic", value: "+20%", direction: "up" as const, note: "after schema markup rollout" },
  { label: "Bounce rate", value: "-12%", direction: "down" as const, note: "across optimized landing pages" },
  { label: "Largest Contentful Paint", value: "4.6s → 2.3s", direction: "down" as const, note: "image & script optimization" },
  { label: "Lighthouse performance", value: "48 → 86", direction: "up" as const, note: "mobile, on key templates" },
];

type Project = {
  id: string;
  title: string;
  role: string;
  url: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

const projects: Project[] = [
  {
    id: "bellami",
    title: "BELLAMI Hair",
    role: "SEO & Performance · Beauty Industry Group",
    url: "https://www.bellamihair.com/",
    summary:
      "Full technical SEO audit and performance overhaul of the BELLAMI Shopify storefront — structured data, Core Web Vitals and render-blocking cleanup across templates.",
    highlights: [
      "Audited crawlability, indexation, canonical and schema coverage across collection and product templates.",
      "Implemented Product, Breadcrumb and FAQ JSON-LD to win richer SERP results.",
      "Cut render-blocking scripts, deferred third-party apps and served responsive/lazy images.",
      "Tracked Core Web Vitals weekly and shipped iterative Liquid and asset-level fixes.",
    ],
    tags: ["Shopify", "Liquid", "Technical SEO", "Schema Markup", "Core Web Vitals", "Lighthouse", "Performance"],
  },
  {
    id: "fenty",
    title: "Fenty Hair",
    role: "Store Retainer Team · The Stable",
    url: "https://fentybeauty.com/",
    summary:
      "Part of the store retainer team building custom Shopify sections and shipping fixes on the live Fenty storefront — every component built responsive-first from desktop down to mobile.",
    highlights: [
      "Built custom, merchandiser-configurable sections and blocks for campaign pages.",
      "Triaged and fixed live-site issues with fast, zero-downtime releases.",
      "Validated every build across desktop, tablet and mobile breakpoints.",
    ],
    tags: ["Shopify Plus", "Liquid", "Custom Sections", "JavaScript", "Responsive UI", "QA"],
  },
  {
    id: "white-warren",
    title: "White & Warren",
    role: "Shopify Rebuild · Figma to Store",
    url: "https://www.whiteandwarren.com/",
    summary:
      "Rebuilt the White & Warren storefront on Shopify straight from Figma — pixel-accurate Online Store 2.0 sections with a fully fluid layout system.",
    highlights: [
      "Translated the full Figma design system into reusable Liquid sections and JSON templates.",
      "Implemented fluid typography and grid rules so every page adapts from 390px to 1920px.",
      "Handed over a theme editor setup merchandisers can run without a developer.",
    ],
    tags: ["Shopify 2.0", "Figma to Shopify", "Liquid", "JSON Templates", "SCSS", "Responsive UI"],
  },
  {
    id: "fracture",
    title: "Fracture Me",
    role: "Headless Commerce · Hydrogen + Oxygen",
    url: "https://fractureme.com/",
    summary:
      "Headless storefront deployed with Shopify Hydrogen on Oxygen, including a custom React product gallery on the PDP driven by Storefront API media and variant state.",
    highlights: [
      "Built the PDP media gallery in React — variant-aware image swapping, thumbnails and lazy loading.",
      "Queried product media and variants through the Storefront API with GraphQL fragments.",
      "Deployed and monitored the Hydrogen app on Oxygen with preview environments per branch.",
    ],
    tags: ["Hydrogen", "Oxygen", "Headless", "React", "Storefront API", "GraphQL", "Remix"],
  },
];

function DeviceFrame({
  src,
  label,
  alt,
  icon: Icon,
  className = "",
}: {
  src: string;
  label: string;
  alt: string;
  icon: typeof Monitor;
  className?: string;
}) {
  return (
    <figure className={`overflow-hidden rounded-xl border border-border/60 bg-card/60 ${className}`}>
      <figcaption className="flex items-center gap-2 border-b border-border/60 px-3 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3.5 w-3.5 text-primary" />
        {label}
      </figcaption>
      <div className="max-h-[420px] overflow-hidden">
        <img src={src} alt={alt} loading="lazy" className="w-full object-cover object-top" />
      </div>
    </figure>
  );
}

function SectionShell({ project, children }: { project: Project; children: React.ReactNode }) {
  return (
    <section
      id={`project-${project.id}`}
      className="scroll-mt-24 border-t border-border/50 py-16 first:border-t-0 sm:py-20"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-14">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-medium uppercase tracking-wider text-primary">{project.role}</p>
          <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
          <ul className="mt-5 space-y-2.5">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-accent/50 text-xs text-accent-foreground">
                {tag}
              </Badge>
            ))}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Visit live site
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export function ProjectSections() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 max-w-2xl">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
          >
            Selected Work
          </Badge>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            A deeper look at the Shopify and headless ecommerce work I&apos;ve delivered for brands and
            agencies — with results, screens and the stack behind each build.
          </p>
        </div>

        {/* BELLAMI — SEO & performance results */}
        <SectionShell project={projects[0]!}>
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {seoMetrics.map((metric) => (
                <Card key={metric.label} className="border-border/50 bg-card/60">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {metric.direction === "up" ? (
                        <TrendingUp className="h-3.5 w-3.5 text-primary" />
                      ) : (
                        <TrendingDown className="h-3.5 w-3.5 text-primary" />
                      )}
                      {metric.label}
                    </div>
                    <p className="mt-2 font-display text-2xl font-bold text-primary">{metric.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{metric.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-border/50 bg-card/60">
              <CardContent className="p-5">
                <p className="text-sm font-medium text-foreground">
                  Organic traffic index vs. LCP over the 6-month engagement
                </p>
                <div className="mt-4 h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={seoTrend} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                      <defs>
                        <linearGradient id="trafficFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.45} />
                          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid stroke="var(--color-border)" vertical={false} />
                      <XAxis
                        dataKey="month"
                        tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        yAxisId="traffic"
                        domain={[90, 140]}
                        tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        yAxisId="lcp"
                        orientation="right"
                        domain={[0, 6]}
                        tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          background: "var(--color-popover)",
                          border: "1px solid var(--color-border)",
                          borderRadius: 8,
                          color: "var(--color-popover-foreground)",
                          fontSize: 12,
                        }}
                      />
                      <Area
                        type="monotone"
                        yAxisId="traffic"
                        dataKey="traffic"
                        name="Organic traffic index"
                        stroke="var(--color-primary)"
                        strokeWidth={2}
                        fill="url(#trafficFill)"
                      />
                      <Area
                        type="monotone"
                        yAxisId="lcp"
                        dataKey="lcp"
                        name="LCP (s)"
                        stroke="var(--color-chart-3)"
                        strokeWidth={2}
                        fill="transparent"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <DeviceFrame
              src={projectBellami}
              label="Storefront · Desktop"
              alt="BELLAMI Hair Shopify storefront"
              icon={Monitor}
            />
          </div>
        </SectionShell>

        {/* Fenty — responsive */}
        <SectionShell project={projects[1]!}>
          <div className="space-y-4">
            <DeviceFrame src={projectFenty} label="Desktop" alt="Fenty storefront on desktop" icon={Monitor} />
            <div className="grid gap-4 sm:grid-cols-2">
              <DeviceFrame src={fentyTablet.url} label="Tablet · 834px" alt="Fenty storefront on tablet" icon={Tablet} />
              <DeviceFrame src={fentyMobile.url} label="Mobile · 390px" alt="Fenty storefront on mobile" icon={Smartphone} />
            </div>
          </div>
        </SectionShell>

        {/* White & Warren — responsive */}
        <SectionShell project={projects[2]!}>
          <div className="space-y-4">
            <DeviceFrame
              src={projectWhiteWarren}
              label="Desktop"
              alt="White & Warren storefront on desktop"
              icon={Monitor}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <DeviceFrame src={wwTablet.url} label="Tablet · 834px" alt="White & Warren storefront on tablet" icon={Tablet} />
              <DeviceFrame src={wwMobile.url} label="Mobile · 390px" alt="White & Warren storefront on mobile" icon={Smartphone} />
            </div>
          </div>
        </SectionShell>

        {/* Fracture Me — headless PDP gallery */}
        <SectionShell project={projects[3]!}>
          <div className="space-y-4">
            <DeviceFrame
              src={fracturePdp.url}
              label="Hydrogen PDP · Custom gallery"
              alt="Fracture Me headless product detail page with custom media gallery"
              icon={Layers}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <DeviceFrame
                src={fracturePdpMobile.url}
                label="PDP · Mobile 390px"
                alt="Fracture Me product page on mobile"
                icon={Smartphone}
              />
              <Card className="border-border/50 bg-card/60">
                <CardContent className="p-5">
                  <p className="text-sm font-medium text-foreground">Why headless here</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    The gallery needed variant-aware media, custom zoom behaviour and instant swapping that the
                    Liquid theme couldn&apos;t deliver. Hydrogen gave full React control over the PDP while Oxygen
                    kept edge delivery and Shopify checkout intact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionShell>
      </div>
    </section>
  );
}
