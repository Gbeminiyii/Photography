import React from 'react'
import AboutSection from '../Components/AboutSection'
import ContactSection from '../Components/ContactSection/ContactSection'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import NewsletterSection from '../Components/NewsletterSection'
import ServicesSection from '../Components/services/ServicesSection'
import TeamSection from '../Components/team/TeamSection'

function LandingPage() {
  return (
    <>
        <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TeamSection />
        <NewsletterSection />
        <ContactSection />
        <Footer />
    </>
  )
}

export default LandingPage