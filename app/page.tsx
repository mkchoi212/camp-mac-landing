import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Headline from "@/components/Headline";
import WorkflowDemo from "@/components/WorkflowDemo";
import Bento from "@/components/Bento";
import Reviews from "@/components/Reviews";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex w-full flex-col items-center bg-white">
      <Navbar />
      <Hero />
      <Headline />
      <WorkflowDemo />
      <Bento />
      <Reviews />
      <Cta />
      <Footer />
    </div>
  );
}
