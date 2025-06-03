
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const benefits = [
    {
      title: "Custom Designs",
      description: "Tailored packaging solutions that reflect your unique brand identity",
      icon: "🎨"
    },
    {
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality or creativity",
      icon: "⚡"
    },
    {
      title: "Brand-Lifting Packaging",
      description: "Transform first impressions into lasting customer relationships",
      icon: "📈"
    }
  ];

  const testimonials = [
    {
      quote: "InTheBox transformed our packaging and increased our brand recall by 40%",
      author: "Sarah Chen",
      company: "Artisan Soaps Co."
    },
    {
      quote: "The unboxing experience they created led to 30% more customer referrals",
      author: "Michael Rodriguez",
      company: "Gourmet Treats"
    },
    {
      quote: "Professional, creative, and delivered exactly what we envisioned",
      author: "Priya Sharma",
      company: "Handmade Jewelry Studio"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-lato text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Packaging that speaks before the{" "}
              <span className="text-brand">product does</span>
            </h1>
            <p className="font-lato text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Create unique unboxing experiences that elevate your brand and turn customers 
              into loyal advocates through thoughtful packaging design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-brand hover:bg-brand-dark text-white font-lato font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Link to="/contact">Let's Build Your Unboxing Experience</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-brand text-brand hover:bg-brand hover:text-white font-lato font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="font-lato text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose InTheBox?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-lato font-bold text-xl text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-lato text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="font-lato text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-white hover:shadow-lg transition-shadow duration-300 border-0 shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <CardContent className="p-8">
                  <p className="font-lato text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-lato font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="font-lato text-brand text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand to-brand-light">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="font-lato text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Packaging?
          </h2>
          <p className="font-lato text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create an unboxing experience that your customers will remember and share.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-white text-brand hover:bg-gray-100 font-lato font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Link to="/contact">Start Your Project Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
