import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Twitter, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const founders = [
  {
    id: 1,
    name: "Ouma Ogutu Nicholas",
    title: "Co founder and Chief Financial Officer (CFO)",
    bio: "Nicholas oversees the financial operations of Clisanco Technologies and provides strategic leadership in implementation of daily activities of Clisanco Technologies. With experience in financial management, and ICT Infrastructure management, he ensures that Clisanco technologies achieves its financial goals and obligations. Nicholas is a strategic finance leader with over 5 years of experience in financial management and organizational growth. As Chief Finance Officer at Clisanco Technologies, he oversees financial planning, budgeting, and risk management to ensure sustainable operations. His expertise in financial strategy, compliance, and resource optimization supports the company’s mission to expand access to digital skills training across Africa while maintaining strong financial accountability.",
    image: "src/images/picture.png",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "oumaogutu94@gmail.com",
    },
  },
  {
    id: 2,
    name: "Samuel Othieno",
    title: "Co-Founder, Chief Operating Officer (COO) & Chief Product Officer (CPO)",
    bio: "Samuel provides strategic leadership in operations, customer experience, and product development at Clisanco Technologies Limited. With over 10 years of experience in digital skills development, technology-driven initiatives, and operational management, he ensures that Clisanco Technologies delivers high-impact training, workforce development, and innovative technology solutions across Kenya and Africa. As a Co-Founder and executive leader, Samuel oversees every aspect of Clisanco’s programs—aligning internal operations, product strategy, and partner engagement to guarantee that learners, clients, and partners receive world-class support and transformative opportunities throughout their journey.",
    image: "src/images/picture2.png",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@clisanco.co.ke",
    },
  },
  {
    id: 3,
    name: "Cliff Amadi Orina",
    title: "Co founder and Chief Executive Officer",
    bio: "Cliff (Amadi) Orina is an economist and CEO focused on building inclusive pathways for youth, girls, and young women to thrive in the digital economy. His work centers on workforce development, remote work, and the gig economy in Africa, bridging skills, opportunity, and access. He is Lean Six Sigma YB and GB certified, with expertise in program design, coordination, and results-driven learning.",
    image: "src/images/picture3.png",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@clisanco.co.ke",
    },
  },
  
];

const Founders = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-gradient">Founders</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The passionate team behind Clisanco Technologies, dedicated to transforming 
              lives through quality digital skills education.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder) => (
              <Card key={founder.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid sm:grid-cols-[200px,1fr] gap-0">
                  {/* Image */}
                  <div className="relative h-64 sm:h-full">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <CardContent className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                    <p className="text-primary font-medium mb-4">{founder.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {founder.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex space-x-3">
                      <a
                        href={founder.social.linkedin}
                        className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${founder.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={founder.social.twitter}
                        className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${founder.name}'s Twitter`}
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a
                        href={`mailto:${founder.social.email}`}
                        className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`Email ${founder.name}`}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">A Message from Our Leadership</h2>
            <blockquote className="text-lg text-muted-foreground leading-relaxed italic mb-8">
              "At Clisanco Technologies, we believe that everyone deserves access to quality 
              digital education. Our mission is to empower individuals with the skills they 
              need to succeed in today's technology-driven world. We're not just teaching 
              skills – we're building futures."
            </blockquote>
            <p className="font-semibold text-primary">— The Founding Team</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Learn From Us?</h2>
          <p className="opacity-90 mb-8 max-w-2xl mx-auto">
            Join our community of learners and start your journey towards 
            a successful career in technology.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/programs">
              Explore Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Founders;
