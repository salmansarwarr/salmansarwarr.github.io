import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "salmansarwardev@gmail.com",
      href: "mailto:salmansarwardev@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 315 0259301",
      href: "tel:+923150259301",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karachi, Pakistan",
      href: "#",
    },
    {
      icon: Clock,
      label: "Timezone",
      value: "PKT (UTC+5)",
      href: "#",
    },
  ];

  const services = [
    "Smart Contract Development",
    "DeFi",
    "Web3 Frontend Development",
    "Solana Projects",
    "Blockchain Consultation",
    "Security Audits",
    "Backend Development",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        form.current,
        import.meta.env.VITE_PUBLIC_KEY 
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        form.current.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 contact-bg-special blockchain-bg relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your blockchain vision to life? Let's discuss your
            project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="card-bg-enhanced glow-on-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Get In Touch
                </CardTitle>
                <CardDescription>
                  I'm always interested in new opportunities and exciting
                  projects. Whether you need a consultant, developer, or
                  technical advisor, let's connect!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {info.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="card-bg-gradient glow-on-hover">
              <CardHeader>
                <CardTitle>Services Available</CardTitle>
                <CardDescription>
                  Specialized services for blockchain and Web3 development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {services.map((service, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs tech-badge-interactive"
                    >
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Quick Response
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Typically respond within 24 hours during business days
                  </p>
                  <Badge variant="secondary">
                    Available for Immediate Projects
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="card-bg-enhanced border-gradient-hover">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Tell me about your project and let's start the conversation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Name *
                    </label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Your name" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email *
                    </label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-foreground"
                  >
                    Subject *
                  </label>
                  <Input 
                    id="subject" 
                    name="subject"
                    placeholder="Project consultation"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="budget"
                    className="text-sm font-medium text-foreground"
                  >
                    Project Budget (Optional)
                  </label>
                  <Input 
                    id="budget" 
                    name="budget"
                    placeholder="$10,000 - $50,000"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, timeline, and requirements..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <p className="text-green-700 dark:text-green-300 font-medium">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <p className="text-red-700 dark:text-red-300 font-medium">
                      Failed to send message. Please try again or email me directly.
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full interactive-gradient glow-on-hover border-0 transition-all duration-300"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}