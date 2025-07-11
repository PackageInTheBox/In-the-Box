
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "",
    budget: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll get back to you within 24 hours with a personalized proposal.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      business: "",
      service: "",
      budget: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    "Packaging Design",
    "Rebranding",
    "Custom Potli Bags & Boxes",
    "Business Consulting",
    "Unboxing Experience Strategy",
    "Not Sure Yet"
  ];

  const budgetRanges = [
    "Under ₹10,000",
    "₹10,000 - ₹25,000",
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "Above ₹1,00,000",
    "Let's Discuss"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <h1 className="font-lato text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Let's Create Something <span className="text-brand">Amazing</span>
          </h1>
          <p className="font-lato text-xl text-gray-600 leading-relaxed">
            Ready to transform your packaging? Get in touch and let's build 
            an unboxing experience your customers will love.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg animate-fade-in">
              <CardHeader>
                <CardTitle className="font-lato text-2xl text-gray-900">
                  Tell Us About Your Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="font-lato font-medium text-gray-700">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 font-lato"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-lato font-medium text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 font-lato"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="font-lato font-medium text-gray-700">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 font-lato"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="business" className="font-lato font-medium text-gray-700">
                        Business Name
                      </Label>
                      <Input
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        className="mt-1 font-lato"
                        placeholder="Your business name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="service" className="font-lato font-medium text-gray-700">
                        Service Interested In
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 font-lato focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="budget" className="font-lato font-medium text-gray-700">
                        Budget Range
                      </Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 font-lato focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-lato font-medium text-gray-700">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-1 font-lato"
                      placeholder="Tell us about your project, current packaging challenges, and what you'd like to achieve..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-brand hover:bg-brand-dark text-white font-lato font-bold text-lg py-3"
                  >
                    Send My Project Details
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="border-0 shadow-lg animate-fade-in">
              <CardHeader>
                <CardTitle className="font-lato text-xl text-gray-900">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-lato font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="font-lato text-gray-600">founder@inthebox.co.in</p>
                </div>
                <div>
                  <h4 className="font-lato font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="font-lato text-gray-600">+91 70877 78689</p>
                </div>
                <div>
                  <h4 className="font-lato font-semibold text-gray-900 mb-1">Response Time</h4>
                  <p className="font-lato text-gray-600">Within 24 hours</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg animate-fade-in">
              <CardHeader>
                <CardTitle className="font-lato text-xl text-gray-900">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  asChild 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-lato"
                >
                  <a href="https://wa.me/917087778689" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us Now
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full border-brand text-brand hover:bg-brand hover:text-white font-lato"
                >
                  <a href="mailto:founder@inthebox.co.in">
                    Send Email
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-lato"
                >
                  <a href="https://calendly.com/inthebox" target="_blank" rel="noopener noreferrer">
                    Schedule a Call
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="border-0 shadow-lg bg-brand/5 animate-fade-in">
              <CardHeader>
                <CardTitle className="font-lato text-xl text-brand">
                  Why Choose InTheBox?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-brand">✓</span>
                  <p className="font-lato text-sm text-gray-700">Fast turnaround times</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-brand">✓</span>
                  <p className="font-lato text-sm text-gray-700">Affordable pricing for small businesses</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-brand">✓</span>
                  <p className="font-lato text-sm text-gray-700">Unlimited revisions until perfect</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-brand">✓</span>
                  <p className="font-lato text-sm text-gray-700">100% satisfaction guarantee</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20 animate-fade-in">
          <h2 className="font-lato text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Most packaging design projects are completed within 7-14 days, depending on complexity and revisions needed."
              },
              {
                question: "Do you help with production and printing?",
                answer: "Yes! We provide print-ready files and can connect you with trusted printing partners for seamless production."
              },
              {
                question: "What if I'm not happy with the design?",
                answer: "We offer unlimited revisions until you're completely satisfied. Your happiness is our guarantee."
              },
              {
                question: "Can you work with my existing brand guidelines?",
                answer: "Absolutely! We can work within your brand guidelines or help develop new ones if needed."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-lato font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-lato text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
