import { Layout } from "@/components/layout/Layout";
import { FileText, MessageSquare, Video, Check, ArrowRight, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ACADEMIC_BOOKING_FORM_URL =
  import.meta.env.VITE_ACADEMIC_BOOKING_FORM_URL ||
  "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";

const TECHNICAL_SERVICES_FORM_URL =
  import.meta.env.VITE_TECHNICAL_SERVICES_FORM_URL ||
  "https://docs.google.com/forms/d/e/1FAIpQLSeqZnJmtyfpkyGCVIt6h__nCNdJQE9hdzS4uT8WEMCjUZeVnA/viewform";

const services = [
  {
    id: "cv",
    icon: FileText,
    title: "CV Review",
    description: "Get detailed feedback on your CV to make it stand out to admissions committees.",
    price: 5,
    pricePKR: 1400,
    features: [
      "Comprehensive structure review",
      "Content clarity improvements",
      "Formatting suggestions",
      "Industry-standard recommendations",
      "48-hour turnaround",
    ],
    popular: false,
  },
  {
    id: "sop",
    icon: MessageSquare,
    title: "SOP Review",
    description: "Expert review of your Statement of Purpose for MS/PhD applications.",
    price: 7,
    pricePKR: 2000,
    features: [
      "Narrative flow analysis",
      "Motivation clarity check",
      "Grammar & style editing",
      "Research fit alignment",
      "Personalized feedback",
      "72-hour turnaround",
    ],
    popular: true,
  },
  {
    id: "call",
    icon: Video,
    title: "1-to-1 Online Call",
    description: "Personalized consultation to discuss your application strategy.",
    price: 15,
    pricePKR: 4200,
    features: [
      "30-minute video call",
      "Application strategy discussion",
      "University selection guidance",
      "Profile evaluation",
      "Q&A session",
      "Follow-up summary email",
    ],
    popular: false,
  },
];

const technicalServices = [
  {
    id: "website",
    icon: Globe,
    title: "Website Development",
    description: "Custom websites built with modern tech—responsive, fast, and tailored to your business needs.",
  },
  {
    id: "ai-apps",
    icon: Sparkles,
    title: "AI Powered Application Development",
    description: "Intelligent applications leveraging AI/ML—from chatbots to automation and predictive systems.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-slide-up">
              Academic Consulting Services
            </h1>
            <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Get expert guidance on your MS/PhD applications. From CV reviews to 
              personalized consultations, I'll help you put your best foot forward.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`card-elevated p-6 flex flex-col relative animate-slide-up ${
                  service.popular ? "ring-2 ring-primary" : ""
                }`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>

                <div className="mb-6">
                  <span className="font-display text-4xl font-bold text-foreground">
                    ${service.price}
                  </span>
                  <span className="text-muted-foreground text-sm ml-1">USD</span>
                  <div className="text-sm text-muted-foreground mt-1">
                    PKR {service.pricePKR.toLocaleString()}
                  </div>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={service.popular ? "gradient" : "outline"}
                  className="w-full"
                >
                  <a
                    href={ACADEMIC_BOOKING_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request Service
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Services */}
      <section className="py-20 border-t border-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Technical Services
            </h2>
            <p className="text-muted-foreground">
              From websites to AI-powered applications, I build software that solves real problems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technicalServices.map((item, index) => (
              <div
                key={item.id}
                className="card-elevated p-6 flex flex-col animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 flex-grow">
                  {item.description}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={TECHNICAL_SERVICES_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-border">
        <div className="section-container">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                q: "How do I submit my documents?",
                a: "After submitting the request form, you'll receive an email with instructions to submit your CV or SOP via Google Drive or email attachment.",
              },
              {
                q: "What's the turnaround time?",
                a: "CV reviews are completed within 48 hours, SOP reviews within 72 hours. Consultations are scheduled based on mutual availability.",
              },
              {
                q: "Can I request revisions?",
                a: "Yes! One round of follow-up questions or clarifications is included in every review package.",
              },
              {
                q: "What payment methods do you accept?",
                a: "Please contact us directly to arrange payment. We'll discuss payment options when you reach out.",
              },
            ].map((faq, index) => (
              <div key={index} className="card-elevated p-5">
                <h3 className="font-display font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
