import { Link } from "react-router-dom";
import { Sparkles, Brain, BarChart3, Palette, Headphones, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const bonusSessions = [
  {
    id: 1,
    title: "AI & Data Skills",
    description: "Practical AI tools and data handling",
    icon: Brain,
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Marketing strategies that convert",
    icon: BarChart3,
  },
  {
    id: 3,
    title: "Graphics Design",
    description: "Creating stunning visuals with AI",
    icon: Palette,
  },
  {
    id: 4,
    title: "Virtual Assistance",
    description: "Remote work essentials",
    icon: Headphones,
  },
  {
    id: 5,
    title: "Web Development",
    description: "Building modern websites",
    icon: Globe,
  },
];

const BonusSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-6">
            <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
              <Sparkles className="mr-2 h-4 w-4" />
              Exclusive Bonus Sessions
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Guided Practical Walkthrough Sessions
            </h2>
            
            <p className="text-lg opacity-90 leading-relaxed max-w-xl">
              Get hands-on experience with our exclusive bonus sessions. Our expert instructors 
              guide you through real-world projects and practical applications of each skill area.
            </p>

            <ul className="space-y-3">
              {["Live demonstrations", "Hands-on projects", "Expert mentorship", "Real-world applications"].map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span className="opacity-90">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link to="/contact">Register for Bonus Sessions</Link>
            </Button>
          </div>

          {/* Session Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {bonusSessions.map((session, index) => (
              <div
                key={session.id}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 transition-transform hover:scale-105 ${
                  index === 4 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <div className="bg-white/20 rounded-lg p-3 w-fit mb-3">
                  <session.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1">{session.title}</h3>
                <p className="text-sm text-white/70">{session.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
