import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import SearchSection from "../Components/SearchSection";
import OffersSection from "../Components/OffersSection";
import Specialisation from "../Components/Specialisation";
import Specialist from "../Components/Specialist";
import CareSection from "../Components/CareSection";
import Blogs from "../Components/Blogs";
import Family from "../Components/Family";
import FAQSection from "../Components/FAQSection";
import DownloadSection from "../Components/DownloadSection";


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
    <Family/>
    <FAQSection/>
    <DownloadSection/>
</>
}

export default Page;