
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import FleetManagement from "@/components/FleetManagement";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <div className="pt-32">
        <Hero />
        <FleetManagement />
      </div>
    </main>
  );
};

export default Index;
