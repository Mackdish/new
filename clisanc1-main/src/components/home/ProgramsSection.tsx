import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Palette, Database, Headphones, Megaphone, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const programs = [
  {
    id: 1,
    title: "Stock Market Trading",
    description: "Learn to analyze markets, read charts, and make informed trading decisions in the stock market.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "text-green-600",
  },
  {
    id: 2,
    title: "AI for Graphics Design",
    description: "Harness the power of AI tools to create stunning graphics and visual content efficiently.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "text-pink-600",
  },
  {
    id: 3,
    title: "AI for Data Science & Annotation",
    description: "Master data analysis, machine learning fundamentals, and professional data annotation techniques.",
    icon: Database,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "text-blue-600",
  },
  {
    id: 4,
    title: "Virtual Assistance (VA)",
    description: "Develop essential skills to provide remote administrative and technical support services.",
    icon: Headphones,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "text-purple-600",
  },
  {
    id: 5,
    title: "Digital Marketing",
    description: "Learn SEO, social media marketing, content strategy, and paid advertising fundamentals.",
    icon: Megaphone,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "text-orange-600",
  },
  {
    id: 6,
    title: "Website Development",
    description: "Build modern, responsive websites using the latest web technologies and frameworks.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "text-cyan-600",
  },
];

const ProgramsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Training Programs
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our comprehensive range of digital skills programs designed 
            to prepare you for success in the modern economy.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card
              key={program.id}
              className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className={`p-2 rounded-lg bg-background/90 ${program.color}`}>
                    <program.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                  <Link to="/programs">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/programs">
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
