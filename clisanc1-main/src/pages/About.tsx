import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Lightbulb, Users, Award, BookOpen } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technology and teaching methods.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive network of learners and professionals.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality education.",
  },
  {
    icon: BookOpen,
    title: "Practical Learning",
    description: "Hands-on experience with real-world applications.",
  },
];

const stats = [
  { value: "1000+", label: "Students Trained" },
  { value: "6+", label: "Programs Offered" },
  { value: "50+", label: "Expert Instructors" },
  { value: "95%", label: "Success Rate" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">Clisanco</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Clisanco Technologies Limited is a premier digital skills and technology 
                training institution dedicated to empowering individuals with the knowledge 
                and practical skills needed to thrive in the modern digital economy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a vision to bridge the digital skills gap, we offer comprehensive 
                training programs that combine theoretical knowledge with hands-on practical 
                experience, preparing our students for real-world challenges.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-xl hidden md:block">
                <p className="text-3xl font-bold">5+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-muted/50 rounded-2xl p-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, high-quality digital skills training that empowers 
                individuals from all backgrounds to build successful careers in the technology 
                sector. We are committed to practical, hands-on learning that translates 
                directly to real-world success.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-muted/50 rounded-2xl p-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading digital skills training institution in Africa, recognized 
                for producing highly skilled professionals who drive innovation and digital 
                transformation across industries. We envision a future where everyone has 
                access to quality tech education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at Clisanco Technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-background rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
          <p className="opacity-90 mb-8 max-w-2xl mx-auto">
            Be part of the next generation of digital professionals. 
            Start your learning journey with Clisanco today.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
