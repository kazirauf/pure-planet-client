import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";


const Hero = () => {
  return (
<div
  className="hero min-h-[700px]"
  style={{
    backgroundImage: "url(https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="lg:max-w-2xl md:max-w-lg">
      <h1 className="mb-5 lg:text-5xl md:text-3xl font-bold">Find the perfect tree for your garden at our online nursery</h1>
      <p className="mb-5">
      Explore our online nursery for a wide variety of trees, adding natural beauty and shade to your garden. 
      </p>
      <button className="btn bg-gradient-to-r from-orange-600 to-orange-300 text-white">Explore All 🌳</button>
    </div>
  </div>
</div>
  );
};

export default Hero;
