import React from "react";
import Navbar from "../template/Navbar";
import Banner from "./ComponentHome/CarouselBannerr";
import FilmCard from "./ComponentHome/FilmCard";
import Footer from "../template/Footer";
import AllSystem from "../template/AllSystem";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="mx-auto container">
        <FilmCard />
      </div>
      <div className="mx-auto container py-5">
        <AllSystem />
      </div>
      <Footer />
    </>
  );
};

export default Home;
