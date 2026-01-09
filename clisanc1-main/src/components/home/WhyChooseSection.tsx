import { GraduationCap, Users, Award, Clock } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of real-world experience in their fields.",
    icon: GraduationCap,
  },
  {
    id: 2,
    title: "Practical Learning",
    description: "Hands-on projects and real-world applications to build your portfolio.",
    icon: Users,
  },
  {
    id: 3,
    title: "Career Support",
    description: "Get guidance on job placement, freelancing, and building your professional network.",
    icon: Award,
  },
  {
    id: 4,
    title: "Flexible Schedule",
    description: "Learn at your own pace with flexible class timings that fit your lifestyle.",
    icon: Clock,
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Clisanco?
          </h2>
          <p className="text-lg text-muted-foreground">
            We're committed to providing the best learning experience to help you 
            achieve your digital career goals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="text-center p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
