import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import {
  About,
  Contact,
  Education,
  Footer,
  Goals,
  Hero,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";
import { profile } from "@/lib/portfolio-content";

const title = `${profile.name} — Full Stack Developer Portfolio`;
const description =
  "Full Stack Developer portfolio: React, Java, Spring Boot, Node.js and MongoDB projects, skills and contact details. Building future with code.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Goals />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
