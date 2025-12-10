import "./App.css";
import {
  Navbar,
  HeroSection,
  AboutSection,
  ServicesSection,
  WhyUsSection,
  MedicalAssistanceSection,
  AchievementsSection,
  AppointmentSection,
  TestimonialSection,
  ContactSection,
  FAQSection,
  MapSection,
  FooterSection,
} from "./features/exportFeatures";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <MedicalAssistanceSection />
      <AchievementsSection />
      <AppointmentSection />
      <TestimonialSection />
      <ContactSection />
      <FAQSection />
      <MapSection />
      <FooterSection />
    </>
  );
}

export default App;
