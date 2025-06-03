
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Packaging Design",
      description: "Custom packaging solutions that reflect your brand identity and create memorable unboxing experiences.",
      features: [
        "Custom box and bag design",
        "Brand-aligned color schemes",
        "Sustainable material options",
        "Print-ready artwork delivery"
      ],
      icon: "📦",
      price: "Starting from ₹5,000"
    },
    {
      title: "Rebranding",
      description: "Complete brand transformation including logo, packaging, and marketing materials for a cohesive brand experience.",
      features: [
        "Logo design and brand identity",
        "Packaging redesign",
        "Marketing material design",
        "Brand guidelines document"
      ],
      icon: "🎨",
      price: "Starting from ₹15,000"
    },
    {
      title: "Custom Potli Bags & Boxes",
      description: "Handcrafted traditional and modern packaging solutions perfect for gifting and premium product presentation.",
      features: [
        "Traditional potli bag designs",
        "Premium gift boxes",
        "Custom fabric and material selection",
        "Embroidery and printing options"
      ],
      icon: "🎁",
      price: "Starting from ₹200 per piece"
    },
    {
      title: "Business Consulting",
      description: "Strategic guidance on packaging choices, brand positioning, and customer experience optimization.",
      features: [
        "Packaging strategy consultation",
        "Brand positioning advice",
        "Customer journey mapping",
        "Competitive analysis"
      ],
      icon: "💼",
      price: "₹2,500 per session"
    },
    {
      title: "Unboxing Experience Strategy",
      description: "End-to-end planning of your customer's unboxing journey to maximize brand impact and social sharing.",
      features: [
        "Unboxing journey mapping",
        "Social media optimization",
        "Customer touchpoint design",
        "Experience measurement setup"
      ],
      icon: "✨",
      price: "Starting from ₹8,000"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We understand your brand, goals, and packaging needs through a detailed consultation."
    },
    {
      step: "02",
      title: "Design Concepts",
      description: "Our team creates initial design concepts based on your brand identity and requirements."
    },
    {
      step: "03",
      title: "Refinement",
      description: "We refine the chosen concept based on your feedback until it's perfect."
    },
    {
      step: "04",
      title: "Production Ready",
      description: "Final artwork delivery with production specifications and vendor connections."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <h1 className="font-lato text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Our <span className="text-brand">Services</span>
          </h1>
          <p className="font-lato text-xl text-gray-600 leading-relaxed">
            Comprehensive packaging and branding solutions tailored for small businesses 
            ready to make a big impact.
          </p>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="font-lato text-xl text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-lato text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="font-lato text-sm text-gray-700 flex items-start">
                        <span className="text-brand mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <p className="font-lato font-semibold text-brand text-lg mb-4">
                      {service.price}
                    </p>
                    <Button 
                      asChild 
                      className="w-full bg-brand hover:bg-brand-dark text-white font-lato"
                    >
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20 animate-fade-in">
          <h2 className="font-lato text-3xl font-bold text-center text-gray-900 mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center font-lato font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-lato font-bold text-lg text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="font-lato text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center animate-fade-in">
          <h2 className="font-lato text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-lato text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your packaging needs and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-brand hover:bg-brand-dark text-white font-lato font-bold text-lg px-8 py-4"
            >
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-brand text-brand hover:bg-brand hover:text-white font-lato font-semibold text-lg px-8 py-4"
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
