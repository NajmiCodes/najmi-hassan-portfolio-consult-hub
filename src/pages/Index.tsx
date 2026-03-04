import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const testimonials = [
  {
    name: "Haris Ghaffar",
    role: "AI Engineer | IGNITE FYP Winner | IELTS 7.5",
    quote:
      "Najmi Hassan was one of the mentors whose guidance and belief in my potential helped me achieve 7.5 bands on the IELTS exam. His unwavering support was the foundation that built my success.",
  },
  {
    name: "Sana Raza",
    role: "Graduate Student @ LSU | DET Score: 150",
    quote:
      "Najmi Hassan's support during my DET practice sessions was invaluable. His guidance helped me score 150 overall on the Duolingo English Test — a result I'm truly proud of.",
  },
  {
    name: "Amna Hassan",
    role: "Google Generation Scholar | Stanford CIP | CS50 Winner",
    quote:
      "Najmi is a talented back-end developer. He fully embraced the challenge and developed the backend of our Google Gemini hackathon project on time with great communication throughout.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center">
        <div className="section-container py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Open to collaboration & consulting
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Hi, I'm{" "}
              <span className="gradient-text">Najmi Hassan</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Software Engineer passionate about AI/ML, building intelligent systems, 
              and helping graduate aspirants to achieve their academic goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button asChild variant="hero" size="lg">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What People Say
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Hear from students and collaborators who've worked with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="card-elevated p-6 flex flex-col gap-4 animate-slide-up"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                <Quote className="w-8 h-8 text-primary/30" />
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  "{t.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Need Help with Your Application?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get expert reviews on your CV, SOP, or schedule a 1-on-1 consultation 
              to boost your MS/PhD application.
            </p>
            <Button asChild variant="gradient" size="lg">
              <Link to="/services">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
