import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PopularDestinations from "@/components/PopularDestinations";
import ServiceProviders from "@/components/ServiceProviders";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <PopularDestinations />
      <ServiceProviders />
      <Testimonials />
      <CallToAction />
    </>
  );
}