import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Download,
  Code2,
  ShoppingBag,
  Zap,
  ArrowRight,
  Linkedin,
  Github,
  Globe,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import heroImage from "@/assets/hero-portfolio.jpg";
import projectBeauty from "@/assets/project-beauty.jpg";
import projectMigration from "@/assets/project-migration.jpg";
import projectCheckout from "@/assets/project-checkout.jpg";
import resumeAsset from "@/assets/Geovanny_Escaf_Resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Geovanny Escaf | Shopify Plus Developer & Frontend Engineer",
      },
      {
        name: "description",
        content:
          "Portfolio of Geovanny Escaf, a Shopify Plus Developer and Frontend Ecommerce Engineer based in New York. Expert in Liquid, React, Vue.js, and Shopify Plus solutions.",
      },
      {
        property: "og:title",
        content: "Geovanny Escaf | Shopify Plus Developer & Frontend Engineer",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Geovanny Escaf, a Shopify Plus Developer and Frontend Ecommerce Engineer based in New York.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Geovanny Escaf | Shopify Plus Developer" },
      {
        name: "twitter:description",
        content:
          "Shopify Plus Developer with 5+ years building high-quality ecommerce solutions.",
      },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    title: "Beauty Ecommerce Storefront",
    category: "Shopify Plus / Frontend",
    description:
      "Built custom landing pages and enhanced multiple Shopify stores within the beauty industry portfolio. Improved organic traffic by 20% through schema markup and reduced bounce rate by 12% across three storefronts.",
    image: projectBeauty,
    tags: ["Shopify", "Liquid", "HTML5", "CSS3", "Schema Markup", "SEO"],
  },
  {
    title: "Shopify 2.0 Theme Migration",
    category: "Theme Architecture",
    description:
      "Migrated legacy Shopify 1.0 Liquid templates to modern Shopify 2.0 themes using JSON templates and Online Store 2.0 sections architecture. Migrated 5+ stores with custom frontend components in Vue.js and React.",
    image: projectMigration,
    tags: ["Shopify 2.0", "Liquid", "Vue.js", "React", "SCSS", "JSON Templates"],
  },
  {
    title: "Custom Checkout Components",
    category: "Shopify Plus / Checkout Extensibility",
    description:
      "Developed secure, scalable checkout extensions and custom storefront components for Shopify Plus merchants. Leveraged Checkout Extensibility, Shopify Functions, and B2B features to drive conversion.",
    image: projectCheckout,
    tags: ["Checkout Extensibility", "Shopify Functions", "B2B", "Markets"],
  },
];

const experiences = [
  {
    role: "Shopify Developer",
    company: "Fortuitas",
    period: "May 2025 - July 2026",
    description: [
      "Collaborated with project managers and designers to develop and launch Shopify stores aligned with client requirements.",
      "Customized purchased themes with new features, tailored sections, and blocks to support business needs.",
      "Built custom landing pages and frontend components from PSD and Figma designs using HTML, CSS, JavaScript, and Tailwind CSS.",
      "Translated design concepts into responsive, user-friendly storefront experiences with brand consistency.",
    ],
  },
  {
    role: "Shopify Developer",
    company: "Beauty Industry Group",
    period: "September 2022 - April 2025",
    description: [
      "Maintained and enhanced multiple Shopify stores within the Beauty Industry Group portfolio.",
      "Improved organic traffic by 20% through schema markup implementation.",
      "Reduced bounce rate by 12% via landing page optimizations across 3 stores.",
      "Built custom landing pages from Figma designs using HTML5 and CSS3, translating concepts into responsive frontend experiences.",
    ],
  },
  {
    role: "Shopify Frontend Developer",
    company: "The Stable",
    period: "December 2021 - August 2022",
    description: [
      "Upgraded legacy Shopify 1.0 Liquid templates to Shopify 2.0 themes using JSON templates and Online Store 2.0 architecture.",
      "Built custom frontend components and features using Vue.js, React.js, and SCSS.",
      "Worked in an Agile environment with daily stand-ups and cross-functional collaboration.",
    ],
  },
  {
    role: "Shopify Frontend Developer",
    company: "BVA - Acquired by The Stable",
    period: "August 2020 - December 2021",
    description: [
      "Worked on BVA's proprietary Shopify theme built with Liquid, Vue.js, and Gulp.",
      "Improved storefront functionality and user experience by resolving bug-fix tickets.",
      "Supported 10+ Shopify store builds and ongoing frontend development.",
    ],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Vue.js",
      "Liquid",
      "HTML5",
      "SCSS/Sass",
      "Tailwind CSS",
      "Responsive Design",
      "Accessibility Compliance",
    ],
  },
  {
    title: "Shopify Plus",
    skills: [
      "Shopify 2.0",
      "Checkout Extensibility",
      "Shopify Functions",
      "Markets",
      "Shopify B2B",
      "Admin GraphQL API",
      "Store Migration",
      "Theme Customization",
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      "Node.js / TypeScript",
      "Python",
      "Ruby",
      "REST API",
      "Webhook",
      "Git",
      "Jira",
      "Notion",
      "Figma",
      "Claude Code",
      "Cursor",
    ],
  },
];

const achievements = [
  "Reduced bounce rate by 12% across 3 stores via landing page optimization",
  "Improved organic traffic by 20% through schema markup implementation",
  "Migrated 5 stores to Shopify 2.0 using advanced Liquid and JSON templates",
  "Developed 10+ custom storefront components using Vue.js",
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "geovannyescaf@gmail.com", href: "mailto:geovannyescaf@gmail.com" },
  { icon: Phone, label: "Phone", value: "+1 (223) 219-2524", href: "tel:+12232192524" },
  { icon: MapPin, label: "Location", value: "New York, US", href: null },
];

function Index() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (href: string) => {
    setActiveSection(href.replace("#", ""));
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display text-xl font-bold tracking-tight text-foreground"
          >
            Geovanny<span className="text-primary">.</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hidden border-border/60 hover:bg-accent hover:text-accent-foreground sm:inline-flex"
            >
              <a href={resumeAsset.url} download={resumeAsset.original_filename}>
                <Download className="size-4" />
                Resume
              </a>
            </Button>
            <Button
              size="sm"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}>
                Hire Me
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Ecommerce web development hero"
            className="h-full w-full object-cover opacity-40"
            width={1920}
            height={1088}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="mb-6 border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
            >
              <Zap className="mr-1.5 size-3.5" />
              Shopify Plus Developer
            </Badge>

            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Geovanny Escaf
            </h1>
            <p className="mt-4 font-display text-2xl font-medium text-primary sm:text-3xl">
              Frontend Ecommerce Engineer
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I build high-performing, beautiful Shopify storefronts that turn visitors into customers.
              5+ years of experience delivering custom themes, landing pages, and scalable ecommerce
              solutions for DTC brands.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick("#projects"); }}>
                  View Projects
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-border/60 hover:bg-accent hover:text-accent-foreground"
              >
                <a href={resumeAsset.url} download={resumeAsset.original_filename}>
                  <Download className="mr-2 size-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShoppingBag className="size-4 text-primary" />
                <span>50+ Shopify Stores</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="size-4 text-primary" />
                <span>Liquid, React, Vue.js</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="size-4 text-primary" />
                <span>New York, US</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                About Me
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I&apos;m a Shopify Plus Developer with 5+ years of experience delivering high-quality
                  ecommerce solutions across agency and in-house environments. My expertise spans
                  Liquid, HTML5, CSS3/SCSS, JavaScript (ES6+), Vue.js, and React.js, with hands-on Shopify
                  Plus experience including Checkout Extensibility, Shopify Functions, Markets, and B2B.
                </p>
                <p>
                  I specialize in translating Figma and PSD designs into responsive, user-friendly
                  storefronts that maintain brand consistency and drive conversion. I have a proven track
                  record of migrating stores to Shopify 2.0, building custom themes and landing pages,
                  optimizing SEO performance, and collaborating cross-functionally in Agile teams.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-display text-lg font-semibold text-foreground">Key Achievements</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />
              <Card className="relative border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">Education</h3>
                      <div className="mt-3 rounded-xl bg-accent/30 p-4">
                        <p className="font-medium text-foreground">Bachelor of Science in Computer Science</p>
                        <p className="text-sm text-muted-foreground">The University of Texas at Dallas</p>
                        <p className="text-xs text-muted-foreground">April 2016 - May 2020</p>
                      </div>
                    </div>
                    <Separator className="bg-border/50" />
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">Certifications</h3>
                      <div className="mt-3 rounded-xl bg-accent/30 p-4">
                        <p className="font-medium text-foreground">Shopify Development Fundamentals</p>
                        <p className="text-sm text-muted-foreground">Shopify</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
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
              A selection of Shopify and frontend ecommerce projects I&apos;ve delivered for brands and
              agencies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="group overflow-hidden border-border/50 bg-card/50 transition-all hover:border-primary/30 hover:bg-card/80"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-3">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    {project.category}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-accent/50 text-xs text-accent-foreground hover:bg-accent"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
            >
              Career Path
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Experience
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              A track record of building, optimizing, and scaling ecommerce experiences across agencies
              and in-house teams.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border/50 md:left-1/2" />
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company + exp.period}
                  className={`relative grid gap-8 md:grid-cols-2 ${
                    index % 2 === 0 ? "" : "md:direction-rtl"
                  }`}
                >
                  <div className={`${index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                    <Card className="border-border/50 bg-card/50 transition-all hover:border-primary/30 hover:bg-card/80">
                      <CardContent className="p-6">
                        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                          <div>
                            <h3 className="font-display text-lg font-semibold text-foreground">
                              {exp.role}
                            </h3>
                            <p className="text-sm font-medium text-primary">{exp.company}</p>
                          </div>
                          <Badge
                            variant="outline"
                            className="w-fit border-border/50 text-xs text-muted-foreground"
                          >
                            {exp.period}
                          </Badge>
                        </div>
                        <ul className="mt-4 space-y-2">
                          {exp.description.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div
                    className={`absolute left-4 top-6 flex size-4 -translate-x-1/2 items-center justify-center rounded-full bg-primary md:left-1/2`}
                  >
                    <div className="size-1.5 rounded-full bg-primary-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
            >
              Tech Stack
            </Badge>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Skills
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              The tools and technologies I use to design, build, and optimize modern ecommerce
              experiences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <Card
                key={group.title}
                className="border-border/50 bg-card/50 transition-all hover:border-primary/30 hover:bg-card/80"
              >
                <CardHeader className="pb-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">{group.title}</h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-accent/50 text-xs text-accent-foreground hover:bg-accent"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge
                variant="outline"
                className="mb-4 border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
              >
                Get in Touch
              </Badge>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Contact Me
              </h2>
              <p className="mt-4 max-w-md text-base text-muted-foreground">
                Have a project in mind or looking for a Shopify Plus developer? Let&apos;s talk about how
                I can help your store grow.
              </p>

              <div className="mt-8 space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-accent/50">
                      <info.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-border/60 hover:bg-accent hover:text-accent-foreground"
                >
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-border/60 hover:bg-accent hover:text-accent-foreground"
                >
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="size-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-border/60 hover:bg-accent hover:text-accent-foreground"
                >
                  <a
                    href="mailto:geovannyescaf@gmail.com"
                    aria-label="Email"
                  >
                    <Mail className="size-4" />
                  </a>
                </Button>
              </div>
            </div>

            <Card className="border-border/50 bg-card/50">
              <CardContent className="p-6 sm:p-8">
                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const data = new FormData(form);
                    window.location.href = `mailto:geovannyescaf@gmail.com?subject=${encodeURIComponent(
                      String(data.get("subject") || "Project Inquiry"),
                    )}&body=${encodeURIComponent(
                      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\nMessage:\n${data.get("message")}`,
                    )}`;
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="border-border/60 bg-background/50 text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="border-border/60 bg-background/50 text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project inquiry"
                      className="border-border/60 bg-background/50 text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="border-border/60 bg-background/50 text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Send Message
                    <ExternalLink className="ml-2 size-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-display text-lg font-bold text-foreground">
              Geovanny<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Geovanny Escaf. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:geovannyescaf@gmail.com"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Email
              </a>
              <a
                href={resumeAsset.url}
                download={resumeAsset.original_filename}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
