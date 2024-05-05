import Navbar from "@/components/navbar";
import Home from "@/sections/home";
import Services from "@/sections/services";
import Activities from "@/sections/activities";
import Contact from "@/sections/contact";

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Home />
      <Services />
      <Activities />
      <Contact />
      <footer></footer>
    </main>
  );
}
