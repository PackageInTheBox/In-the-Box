
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const caseStudies = [
    {
      title: "Artisan Soaps Co.",
      category: "Beauty & Wellness",
      challenge: "Generic packaging failing to convey premium quality",
      solution: "Custom kraft boxes with elegant typography and natural textures",
      results: ["+40% brand recall", "+25% repeat purchases", "Featured in lifestyle blogs"],
      image: "🧼",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Gourmet Treats",
      category: "Food & Beverage",
      challenge: "Packaging not suitable for gifting premium chocolates",
      solution: "Luxurious magnetic closure boxes with gold foil accents",
      results: ["+30% referrals", "+50% gift orders", "Premium market positioning"],
      image: "🍫",
      color: "from-amber-400 to-amber-600"
    },
    {
      title: "Handmade Jewelry Studio",
      category: "Fashion & Accessories",
      challenge: "Jewelry arriving damaged due to poor packaging",
      solution: "Protective velvet-lined boxes with custom inserts",
      results: ["Zero damage reports", "+35% customer satisfaction", "Instagram viral unboxing"],
      image: "💎",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Organic Skincare",
      category: "Beauty & Wellness",
      challenge: "Eco-conscious brand needed sustainable packaging",
      solution: "Biodegradable seed paper boxes with plantable tags",
      results: ["+60% social shares", "Environmental award", "+40% eco-conscious customers"],
      image: "🌱",
      color: "from-emerald-400 to-emerald-600"
    },
    {
      title: "Craft Coffee Roasters",
      category: "Food & Beverage",
      challenge: "Coffee bags looking generic on crowded shelves",
      solution: "Bold illustrations with coffee origin stories on packaging",
      results: ["+45% shelf appeal", "+20% new customers", "Retail chain partnership"],
      image: "☕",
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Boutique Candles",
      category: "Home & Lifestyle",
      challenge: "Premium candles in basic containers losing gift appeal",
      solution: "Elegant gift sets with branded matches and care instructions",
      results: ["+55% gift purchases", "+30% average order value", "Luxury market entry"],
      image: "🕯️",
      color: "from-pink-400 to-pink-600"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "40%", label: "Average Brand Recall Increase" },
    { number: "30%", label: "Average Sales Boost" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <h1 className="font-lato text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Our <span className="text-brand">Portfolio</span>
          </h1>
          <p className="font-lato text-xl text-gray-600 leading-relaxed">
            Real results for real businesses. See how we've helped brands transform 
            their packaging and boost their success.
          </p>
        </div>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-lato text-3xl lg:text-4xl font-black text-brand mb-2">
                  {stat.number}
                </h3>
                <p className="font-lato text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-20">
          <h2 className="font-lato text-3xl font-bold text-center text-gray-900 mb-12">
            Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-32 bg-gradient-to-br ${study.color} flex items-center justify-center`}>
                  <span className="text-5xl">{study.image}</span>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="font-lato font-bold text-xl text-gray-900 mb-1">
                      {study.title}
                    </h3>
                    <p className="font-lato text-sm text-brand font-medium">
                      {study.category}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-lato font-semibold text-gray-900 mb-1">Challenge:</h4>
                      <p className="font-lato text-sm text-gray-600">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-lato font-semibold text-gray-900 mb-1">Solution:</h4>
                      <p className="font-lato text-sm text-gray-600">
                        {study.solution}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-lato font-semibold text-gray-900 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="font-lato text-sm text-gray-600 flex items-start">
                            <span className="text-brand mr-2">•</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Before/After Concept */}
        <section className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20 animate-fade-in">
          <h2 className="font-lato text-3xl font-bold text-center text-gray-900 mb-8">
            The InTheBox Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-lato font-bold text-xl text-gray-900 mb-4 text-center">
                Before: Generic Packaging
              </h3>
              <ul className="space-y-3">
                <li className="font-lato text-gray-600 flex items-start">
                  <span className="text-red-500 mr-2">×</span>
                  Forgettable unboxing experience
                </li>
                <li className="font-lato text-gray-600 flex items-start">
                  <span className="text-red-500 mr-2">×</span>
                  Products lost in competition
                </li>
                <li className="font-lato text-gray-600 flex items-start">
                  <span className="text-red-500 mr-2">×</span>
                  Limited customer engagement
                </li>
                <li className="font-lato text-gray-600 flex items-start">
                  <span className="text-red-500 mr-2">×</span>
                  Price-based competition only
                </li>
              </ul>
            </div>
            <div className="bg-brand/5 rounded-lg p-6 shadow-md border border-brand/20">
              <h3 className="font-lato font-bold text-xl text-brand mb-4 text-center">
                After: InTheBox Design
              </h3>
              <ul className="space-y-3">
                <li className="font-lato text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Memorable, shareable experiences
                </li>
                <li className="font-lato text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Premium brand positioning
                </li>
                <li className="font-lato text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Increased customer loyalty
                </li>
                <li className="font-lato text-gray-700 flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Value-based differentiation
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center animate-fade-in">
          <h2 className="font-lato text-3xl font-bold text-gray-900 mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="font-lato text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create a case study with your brand as the star.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-brand hover:bg-brand-dark text-white font-lato font-bold text-lg px-8 py-4"
          >
            <Link to="/contact">Start Your Transformation</Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
