
import { ArrowRight, Bot, Cloud, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Prism from 'prismjs';
import { useEffect } from 'react';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-tomorrow.css';

const Hero = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0" />
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="space-y-2 fade-in">
          <p className="text-foreground inline-block px-4 py-1.5 rounded-lg text-sm font-medium mb-4 blur-card">
            AI-Powered Voice Conversations
          </p>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Fleet-Ready Conversation
          </h1>
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-8">
            Simplify the integration, deployment, and version control of AI agent-powered conversational voice capabilities across your edge fleet.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in slide-up">
          <Button size="lg" className="bg-primary hover:bg-primary/90 solid-shadow-button">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="solid-shadow-button-outline">
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
          <div className="text-left rounded-lg blur-card p-6 overflow-hidden">
            <div className="flex flex-col">
              <div className="bg-primary/20 backdrop-blur-sm p-3 -mx-6 -mt-6 mb-4 border-b border-black">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-sm text-foreground">example.ts</p>
                </div>
              </div>
              <pre className="!bg-transparent text-sm overflow-x-auto">
                <code className="language-typescript">
{`import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { Pica } from "@picahq/ai";
import * as dotenv from "dotenv";
dotenv.config();

const pica = new Pica(process.env.PICA_SECRET_KEY!);

async function runAgentTask(message: string): Promise<string> {
  const system = await pica.generateSystemPrompt();

  const { text } = await generateText({
    model: openai("gpt-4o"),
    system,
    prompt: message,
    tools: { ...pica.oneTool },
    maxSteps: 10,
  });

  return text;
}`}
                </code>
              </pre>
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
