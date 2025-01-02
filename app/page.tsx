
import HeroSection from "./components/HeroSection";
import Post from "./components/Post";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className=" bg-white">
      <HeroSection/>
      <Post/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}
