import { Layout } from "@/components/layout/Layout";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tools: string[];
  type: "hackathon" | "personal";
  highlights?: string[];
  link?: string;
}

const hackathonProjects: Project[] = [
  {
    title: "AI Fashion Shopping Experience",
    description: "Innovative fashion-tech project focused on AI-powered shopping with multimodal input (text, image, voice) through a dynamic chatroom.",
    tools: ["Llama", "Groq", "Fetch.ai", "Python", "TypeScript", "Node.js"],
    type: "hackathon",
    highlights: ["RAISE YOUR HACK Hackathon", "2nd Place Winner"],
    link: "https://lablab.ai/ai-hackathons/raise-your-hack/jroq-prosus-track/fashion-ai?_gl=1*fo36ye*_up*MQ..*_ga*MTEwODMzNzM0MC4xNzcyMDE3OTA0*_ga_0DKXC1L0Y7*czE3NzIwMTc5MDQkbzEkZzAkdDE3NzIwMTc5MDQkajYwJGwwJGg2MjI0MTcxNjI.",
  },
  {
    title: "GeneGazer - Bioinformatics Tool",
    description: "Led international team to develop a bioinformatics tool for single-cell RNA-seq data analysis with Gemini AI integration.",
    tools: ["Gemini", "Python", "Streamlit", "Scanpy", "Leiden Algorithm"],
    type: "hackathon",
    highlights: ["Trae AI IDE Hackathon"],
    link: "https://lablab.ai/ai-hackathons/code-craft-ai-x-dev-hackathon/goat-trae-hack/genegazer?_gl=1*1bgibpw*_up*MQ..*_ga*MTEwODMzNzM0MC4xNzcyMDE3OTA0*_ga_0DKXC1L0Y7*czE3NzIwMTc5MDQkbzEkZzAkdDE3NzIwMTc5MDQkajYwJGwwJGg2MjI0MTcxNjI.",
  },
  {
    title: "Multi-Agent Biology Lab Simulator",
    description: "Multi-agent AI system simulating biological experiments with 5 specialized AI agents automating experimental workflow.",
    tools: ["Crew AI", "Python", "Mistral", "Streamlit"],
    type: "hackathon",
    highlights: ["Internet of Agents Hackathon"],
    link: "https://lablab.ai/ai-hackathons/internet-of-agents/coral-synergy/virtual-bio-lab?_gl=1*8db2j7*_up*MQ..*_ga*MTEwODMzNzM0MC4xNzcyMDE3OTA0*_ga_0DKXC1L0Y7*czE3NzIwMTc5MDQkbzEkZzAkdDE3NzIwMTc5MDQkajYwJGwwJGg2MjI0MTcxNjI.",
  },
  {
    title: "AI Grammar Learning Platform",
    description: "AI-powered English grammar learning platform for high school students with GPT-5 integration for bilingual content generation.",
    tools: ["GPT-5", "Python", "Streamlit"],
    type: "hackathon",
    highlights: ["Co-Creating with GPT-5 Hackathon"],
    link: "https://lablab.ai/ai-hackathons/co-creating-with-gpt-5/ai-mavericks/smartlearn?_gl=1*7t23pz*_up*MQ..*_ga*MTEwODMzNzM0MC4xNzcyMDE3OTA0*_ga_0DKXC1L0Y7*czE3NzIwMTc5MDQkbzEkZzAkdDE3NzIwMTc5MDQkajYwJGwwJGg2MjI0MTcxNjI.",
  },
];

const personalProjects: Project[] = [
  {
    title: "Air Pollution Prediction System",
    description: "Web application to predict PM 2.5 and Air Quality Level with 92% accuracy using regression and classification models.",
    tools: ["Streamlit", "Hugging Face", "Supervised ML"],
    type: "personal",
    link: "https://github.com/NajmiHassan/Air-Pollution-Prediction-System",
  },
  {
    title: "Real-Time Object Detection",
    description: "Web app detecting objects in video uploads frame by frame using YOLO v4, returning object counts.",
    tools: ["Streamlit", "Google Colab", "Hugging Face", "YOLO v4"],
    type: "personal",
    link: "https://github.com/NajmiHassan/Real-Time-Object-Detection-and-Counting",
  },
  {
    title: "DNS Query Monitoring Tool",
    description: "Python DNS tool using Isolation Forest to detect anomalies in real-time traffic with visual/audio alerts.",
    tools: ["Python", "Scapy", "Npcap", "Isolation Forest"],
    type: "personal",
    link: "https://github.com/NajmiHassan/dns_query_monitoring_and_analysis_tool",
  },
  {
    title: "CrewAI Blogpost Generator",
    description: "Blog post generator using CrewAI Agentic framework with multiple AI agents collaborating to create content.",
    tools: ["Streamlit", "CrewAI", "Gemini", "Serper Dev Tools"],
    type: "personal",
    link: "https://github.com/NajmiHassan/CrewAI-Blogpost",
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="card-elevated p-6 flex flex-col h-full group">
    <div className="flex items-start justify-between gap-4 mb-3">
      <div>
        {project.highlights && (
          <div className="flex flex-wrap gap-2 mb-2">
            {project.highlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
              >
                {highlight.includes("Winner") && <Sparkles className="w-3 h-3" />}
                {highlight}
              </span>
            ))}
          </div>
        )}
        <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
      </div>
    </div>

    <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>

    <div className="flex flex-wrap gap-2 mb-4">
      {project.tools.map((tool) => (
        <span
          key={tool}
          className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
        >
          {tool}
        </span>
      ))}
    </div>

    <div className="flex gap-2 pt-4 border-t border-border">
      <Button variant="outline" size="sm" className="flex-1" asChild>
        <a href={project.link || "#"} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="w-4 h-4" />
          View Project
        </a>
      </Button>
    </div>
  </div>
);

const Projects = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-slide-up">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
              A collection of hackathon wins and personal projects showcasing my expertise 
              in AI/ML, full-stack development, and problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Hackathon Projects */}
      <section className="py-16 border-b border-border">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Hackathon Projects</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathonProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Personal Projects */}
      <section className="py-16">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Github className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Personal Projects</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
