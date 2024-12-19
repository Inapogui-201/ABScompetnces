import React from "react";
import Navbar from "../components/Navbar";
import VideoSlider from "../components/VideoSlider";
import AboutUsSection from "../components/AboutUsSection";
import MultiServices from "../components/MultiServices";
import TestimonialCard from "../components/TestimonialCard";
import EventsComponent from "../components/Events";
import ContactFooter from "../components/Footer";
import PartnersShowcase from "../components/PartnersShowcase";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <VideoSlider />
        <AboutUsSection />
        <MultiServices />
        <TestimonialCard />
        <EventsComponent />
        <PartnersShowcase />
        <ContactFooter />
      </main>
    </div>
  );
}
