import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import ServiceMatrix from './ServiceMatrix';
import ProductsMatrix from './ProductsMatrix';
import Stats from './Stats';
import About from './About';
import Gallery from './Gallery';
import ContactSection from './ContactSection';
import Footer from '../Footer';
import WhatsAppButton from '../WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServiceMatrix />
      <ProductsMatrix />
      <Stats />
      <About />
      <Gallery />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}