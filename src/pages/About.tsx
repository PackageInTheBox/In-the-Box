
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <h1 className="font-lato text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            About <span className="text-brand">InTheBox</span>
          </h1>
          <p className="font-lato text-xl text-gray-600 leading-relaxed">
            We believe that packaging is the first conversation between your brand and your customer. 
            Let's make it count.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-lato text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="font-lato text-lg text-gray-700 mb-6 leading-relaxed">
                Founded with a simple belief: small businesses deserve packaging that makes big impressions. 
                We started InTheBox to help entrepreneurs and small business owners compete with larger brands 
                through thoughtful, creative packaging design.
              </p>
              <p className="font-lato text-lg text-gray-700 leading-relaxed">
                What began as a passion project has grown into a trusted partner for hundreds of businesses 
                looking to elevate their brand presence through exceptional unboxing experiences.
              </p>
            </div>
            <div className="bg-gradient-to-br from-brand/10 to-brand-light/10 rounded-2xl p-8 animate-fade-in">
              <div className="text-center">
                <div className="text-6xl mb-4">📦</div>
                <h3 className="font-lato font-bold text-2xl text-brand mb-2">
                  500+ Projects Delivered
                </h3>
                <p className="font-lato text-gray-600">
                  Helping brands create memorable first impressions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-8">
                <h3 className="font-lato font-bold text-2xl text-brand mb-4">
                  Our Vision
                </h3>
                <p className="font-lato text-gray-700 leading-relaxed">
                  To make premium packaging design accessible to every small business, 
                  enabling them to create customer experiences that drive loyalty and growth.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-8">
                <h3 className="font-lato font-bold text-2xl text-brand mb-4">
                  Our Mission
                </h3>
                <p className="font-lato text-gray-700 leading-relaxed">
                  To transform the way customers perceive your brand through innovative packaging 
                  solutions that tell your story and create lasting emotional connections.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Founder's Message */}
        <section className="bg-gray-50 rounded-2xl p-8 lg:p-12 animate-fade-in">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-lato text-3xl font-bold text-gray-900 mb-6">
              Founder's Message
            </h2>
            <p className="font-lato text-lg text-gray-700 mb-6 leading-relaxed italic">
              "I started InTheBox because I believe every business, no matter how small, deserves 
              packaging that makes their customers feel special. When someone opens your package, 
              that moment should feel like unwrapping a gift."
            </p>
            <p className="font-lato text-lg text-gray-700 leading-relaxed">
              "We're not just designing boxes and bags – we're crafting experiences that turn 
              first-time buyers into lifelong advocates for your brand."
            </p>
            <div className="mt-8">
              <p className="font-lato font-semibold text-brand text-lg">
                - Founder, InTheBox
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mt-20">
          <h2 className="font-lato text-3xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Creativity First",
                description: "Every design should surprise and delight, making your brand memorable.",
                icon: "💡"
              },
              {
                title: "Quality Always",
                description: "We never compromise on materials or craftsmanship for our packaging solutions.",
                icon: "⭐"
              },
              {
                title: "Partnership",
                description: "Your success is our success. We're invested in your brand's growth.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="font-lato font-bold text-xl text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="font-lato text-gray-600 leading-relaxed">
                    {value.description}
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

export default About;
