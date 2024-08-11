import React from 'react';
import Image from '/src/components/Web/ImageSlider';
import TypingAnimation from "@/components/magicui/typing-animation";
import ShimmerButton from "@/components/magicui/shimmer-button";
import ShinyButton from "@/components/magicui/shiny-button";
import Nav from '@/components/Web/Navbar2';
import { NavLink } from 'react-router-dom';
import PulsatingButton from "/src/components/ui/pulsating-button";



const Home = () => {
  return (
    <>
      <div className='relative h-auto w-screen flex flex-col items-start justify-start top-20'>
        <Image />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center">
          <div className="pl-20 pt-7">
            <TypingAnimation
              className="text-4xl font-bold text-white dark:text-white"
              text="Swipe, Tap, Snack: Groceries for Your Lifestyle"
            />
          </div>
          <div className="pt-10">
            <NavLink to="/fruits" ><ShimmerButton className="shadow-2xl border-r-2">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Shop Now
              </span>
            </ShimmerButton></NavLink>
          </div>
        </div>
      </div>
<Nav />
<div className="pt-14 pl-96 flex flex-row gap-4 text-white">

 <PulsatingButton className="bg-red-500 border-red-500">Cash On Delivery</PulsatingButton>;
 <PulsatingButton className="bg-red-500 border-red-500">Subscription Box</PulsatingButton>;
 <PulsatingButton className="bg-red-500 border-red-500">Free Delivery on First COD Order</PulsatingButton>;
 <PulsatingButton className="bg-red-500 border-red-500">Flash Sale Alerts</PulsatingButton>;
 </div>

    </>
  );
}

export default Home;
