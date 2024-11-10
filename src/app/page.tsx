import About from "@/components/about";
import Choose from "@/components/choose";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Team from "@/components/team";


export default function Home() {
  return (
   <main className="bg-[#ffffff] min-h-screen min-w-screen">
    
       <Hero />
       <Services />
       <About />
       <Choose />
       <Team />
      <Footer />
    
    

   
   </main>
  );
}
