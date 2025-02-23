import { ArrowRight, Bot, Cloud, Server, Users, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import Prism from 'prismjs';
import { useEffect } from 'react';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-tomorrow.css';
import DeploymentFlow from "./DeploymentFlow";

const Hero = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0" />
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="space-y-2 fade-in">
          <p className="text-primary inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 blur-card">
            AI-Powered Voice Conversations
          </p>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Fleet-Ready Conversation
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Simplify the integration, deployment, and version control of AI agent-powered conversational voice capabilities across your edge fleet.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in slide-up">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline">
            View Documentation
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 slide-up">
          <FeatureCard 
            icon={<Bot className="h-6 w-6 text-primary" />}
            title="AI Agent Integration"
            description="Seamlessly integrate conversational AI agents into your applications"
          />
          <FeatureCard 
            icon={<Server className="h-6 w-6 text-primary" />}
            title="Fleet Management"
            description="Deploy and manage voice capabilities across your entire fleet"
          />
          <FeatureCard 
            icon={<Cloud className="h-6 w-6 text-primary" />}
            title="Version Control"
            description="Keep your AI conversations in sync with robust version control"
          />
        </div>

        <div className="mt-16 slide-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Visualize Your Deployment Flow</h2>
          <DeploymentFlow />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 slide-up">
          <div className="rounded-2xl blur-card p-8 text-left hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-primary/20">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Collaborate</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Work together like never before. Build and deploy AI agents across your team or developer community with built-in version control and collaboration tools.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Version Control", "Team Management", "Shared Resources", "Real-time Updates"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-sm bg-white/10 text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl blur-card p-8 text-left hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-primary/20">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Explore AI Agents</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Access a vast library of pre-built AI agents. Fork, customize, and deploy agents for your specific use cases with just a few clicks.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Agent Marketplace", "Custom Templates", "One-Click Deploy", "Instant Integration"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-sm bg-white/10 text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="p-6 rounded-xl blur-card hover:bg-white/10 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Hero;
