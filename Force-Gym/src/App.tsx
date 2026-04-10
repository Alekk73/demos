import { Contact } from "./components/Contact";
import { Facilities } from "./components/Facilities";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nabvar } from "./components/Nabvar";
import { Plans } from "./components/Plans";
import { Schedules } from "./components/Schedules";
import { Services } from "./components/Services";
import { Testimonies } from "./components/Testimonies";

const App = () => {
  return (
    <div className="bg-[#0A0A0A] text-[#FFFFFF] min-h-screen font-sans">
      <Nabvar />
      <Hero />
      <Services />
      <Schedules />
      <Plans />
      <Facilities />
      <Testimonies />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
