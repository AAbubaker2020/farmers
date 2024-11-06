'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Facebook, Twitter, Youtube, Menu, X } from 'lucide-react';

export function LandingPageComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateMenuVisibility = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    updateMenuVisibility();
    window.addEventListener("resize", updateMenuVisibility);
    return () => window.removeEventListener("resize", updateMenuVisibility);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png?height=40&width=40" alt="Local Farmer Community Logo" width={40} height={40} className="rounded-full" />
            <span className="text-lg md:text-xl font-semibold text-green-800">Local Farmer Community</span>
          </Link>

          {/* Desktop and Mobile Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 md:space-x-6">
              <li><Link href="/" className="text-green-800 hover:text-green-600">Home</Link></li>
              <li><Link href="/" className="text-green-800 hover:text-green-600">About</Link></li>
              <li><Link href="/" className="text-green-800 hover:text-green-600">Mission & Vision</Link></li>
              <li><Link href="/" className="text-green-800 hover:text-green-600">Resources</Link></li>
              <li>
                <Button asChild variant="default" className="bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/">Sign Up</Link>
                </Button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-green-800" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Slide-out Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden">
            <ul className="flex flex-col items-start p-6 space-y-4">
              <li><Link href="/" className="text-green-800 hover:text-green-600 w-full" onClick={toggleMenu}>Home</Link></li>
              <li><Link href="/" className="text-green-800 hover:text-green-600 w-full" onClick={toggleMenu}>About</Link></li>
              <li><Link href="/" className="text-green-800 hover:text-green-600 w-full" onClick={toggleMenu}>Mission & Vision</Link></li>
              <li><Link href="/" className="text-green-800 hover:text-green-600 w-full" onClick={toggleMenu}>Resources</Link></li>
              <li>
                <Button asChild variant="default" className="bg-green-600 hover:bg-green-700 text-white w-full text-center">
                  <Link href="/" onClick={toggleMenu}>Sign Up</Link>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[600px] flex items-center justify-center text-center text-white">
          <Image
            src="/trucks_hero_page.jpeg?height=600&width=1600"
            alt="Farmers working in a field"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="relative z-20 max-w-4xl mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Empowering Local Farmers with Data, Community, and Knowledge</h1>
            <p className="text-base sm:text-lg md:text-xl mb-8">Join the Local Farmer Community to access vital resources, connect with fellow farmers, and share sustainable practices for a thriving agricultural future.</p>
            <div className="flex justify-center space-x-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/">Join the Community</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-green-800 hover:bg-green-100">
                <Link href="/">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-8 md:py-16 bg-stone-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-green-800">Key Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[ 
                { title: "Access Data & Market Trends", description: "Stay informed with up-to-date data on crop prices, weather conditions, and market insights." },
                { title: "Connect & Collaborate", description: "Build connections with farmers across the USA, sharing knowledge, experiences, and solutions." },
                { title: "Learn & Grow", description: "Discover best practices and resources tailored to your region and crops." }
              ].map((benefit, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-green-700">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Testimonials Section */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-green-800">Community Testimonials</h2>
            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {[
                  { quote: "This platform has revolutionized how I manage my farm. The data insights are invaluable!", author: "John Doe, Corn Farmer" },
                  { quote: "Connecting with other farmers has helped me implement sustainable practices I never knew about.", author: "Jane Smith, Organic Vegetable Grower" },
                  { quote: "The resources available have helped me increase my crop yield by 20% this year.", author: "Mike Johnson, Wheat Farmer" }
                ].map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <p className="text-lg mb-4 text-gray-700">&quot;{testimonial.quote}&quot;</p>
                        <p className="font-semibold text-green-700">{testimonial.author}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section className="py-8 md:py-16 bg-stone-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-green-800">Feature Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[ 
                { title: "Forums", description: "Engage in discussions with fellow farmers" },
                { title: "Data Dashboards", description: "Access real-time agricultural data and insights" },
                { title: "Learning Resources", description: "Expand your knowledge with curated educational content" }
              ].map((feature, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-4 md:p-6 text-center">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-green-700">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Access Anytime, Anywhere Section */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-start">
              <Image
                src="/app_farm.jpg?height=400&width=300"
                alt="Mobile app preview"
                width={250}
                height={333}
                className="rounded-lg shadow-lg w-[200px] sm:w-[250px] md:w-[300px] h-auto"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-800">Access Anytime, Anywhere</h2>
              <p className="text-lg text-gray-700 mb-6">Stay connected to your farming community and access vital resources on-the-go with our mobile-friendly platform.</p>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:underline">About Us</Link></li>
                <li><Link href="/" className="hover:underline">Mission & Vision</Link></li>
                <li><Link href="/" className="hover:underline">Resources</Link></li>
                <li><Link href="/" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:underline">Terms of Service</Link></li>
                <li><Link href="/" className="hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link href="/" aria-label="Twitter"><Twitter className="h-6 w-6" /></Link>
                <Link href="/" aria-label="Facebook"><Facebook className="h-6 w-6" /></Link>
                <Link href="/" aria-label="YouTube"><Youtube className="h-6 w-6" /></Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} Local Farmer Community. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
