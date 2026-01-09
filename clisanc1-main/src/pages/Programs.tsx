import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Palette, Database, Headphones, Megaphone, Code, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const programs = [
  {
    id: 1,
    title: "Stock Market Trading",
    description: "Master the art of trading in the stock market with our comprehensive program covering technical analysis, fundamental analysis, and risk management strategies.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: ["Technical Analysis", "Chart Reading", "Risk Management", "Trading Psychology", "Market Research"],
    duration: "8 Weeks",
    color: "text-green-600 bg-green-100",
  },
  {
    id: 2,
    title: "AI for Graphics Design",
    description: "Learn to leverage cutting-edge AI tools to create stunning graphics, illustrations, and visual content with unprecedented speed and creativity.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: ["Midjourney & DALL-E", "Adobe Firefly", "Logo Design", "Social Media Graphics", "Brand Identity"],
    duration: "6 Weeks",
    color: "text-pink-600 bg-pink-100",
  },
  {
    id: 3,
    title: "AI for Data Science & Data Annotation",
    description: "Dive into the world of data science and learn professional data annotation techniques used by major tech companies worldwide.",
    icon: Database,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: ["Python for Data Science", "Machine Learning Basics", "Data Annotation", "Data Cleaning", "Visualization"],
    duration: "10 Weeks",
    color: "text-blue-600 bg-blue-100",
  },
  {
    id: 4,
    title: "Virtual Assistance (VA)",
    description: "Develop the essential skills needed to provide professional remote administrative, technical, and creative support services to clients globally.",
    icon: Headphones,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: ["Calendar Management", "Email Handling", "Customer Service", "Project Management", "Communication Tools"],
    duration: "4 Weeks",
    color: "text-purple-600 bg-purple-100",
  },
  {
    id: 5,
    title: "Digital Marketing Opportunities",
    description: "Learn the complete digital marketing ecosystem including SEO, social media marketing, content strategy, email marketing, and paid advertising.",
    icon: Megaphone,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Email Marketing", "Analytics"],
    duration: "8 Weeks",
    color: "text-orange-600 bg-orange-100",
  },
  {
    id: 6,
    title: "Website Development",
    description: "Build modern, responsive, and dynamic websites using the latest web technologies, frameworks, and best practices in the industry.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: ["HTML, CSS, JavaScript", "React & Modern Frameworks", "Responsive Design", "API Integration", "Deployment"],
    duration: "12 Weeks",
    color: "text-cyan-600 bg-cyan-100",
  },
];

const Programs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Training <span className="text-gradient">Programs</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choose from our comprehensive range of digital skills programs designed 
              to prepare you for success in the modern digital economy. Each program 
              is crafted by industry experts with practical, hands-on learning.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <Card
                key={program.id}
                className="overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute top-4 left-4">
                      <div className={`p-3 rounded-xl ${program.color}`}>
                        <program.icon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 lg:p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {program.duration}
                      </span>
                    </div>
                    
                    <CardTitle className="text-2xl md:text-3xl mb-4">
                      {program.title}
                    </CardTitle>
                    
                    <CardDescription className="text-base leading-relaxed mb-6">
                      {program.description}
                    </CardDescription>

                    {/* Topics */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {program.topics.map((topic) => (
                          <li key={topic} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="w-fit">
                      <Link to="/contact">
                        Enroll Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with Clisanco. 
            Our expert instructors are ready to guide you every step of the way.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
