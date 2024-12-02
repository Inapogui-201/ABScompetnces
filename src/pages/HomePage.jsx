import React from "react";
import Navbar from "../components/Navbar";
import VideoSlider from "../components/VideoSlider";
import AboutUsSection from "../components/AboutUsSection";
import TravelPartnerComponent from "../components/TravelPartnerComponent";
import MultiServices from "../components/MultiServices";
import TestimonialCard from "../components/TestimonialCard";
import EventsComponent from "../components/Events";
import ContactFooter from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <VideoSlider />
        <AboutUsSection />
        <TravelPartnerComponent />
        <MultiServices />
        <TestimonialCard />
        <EventsComponent />
        <ContactFooter />
      </main>
    </div>
  );
}
