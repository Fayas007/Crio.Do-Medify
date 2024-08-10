import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import SearchSection from "../Components/SearchSection";
import OffersSection from "../Components/OffersSection";
import Specialisation from "../Components/Specialisation";
import Specialist from "../Components/Specialist";
import CareSection from "../Components/CareSection";
import Blogs from "../Components/Blogs";


const Page = () =>{
    return <>
    <Header/>
    <Hero/>
    <SearchSection/>
    <OffersSection/>
    <Specialisation/>
    <Specialist/>
    <CareSection/>
    <Blogs/>
</>
}

export default Page;