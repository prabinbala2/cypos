"use client";
import Feature from "@/components/shadcn-space/blocks/feature-02/feature";
import {
    Box,
    CirclePlay,
    CodeXml,
} from "lucide-react"

const featureData = [
    {
      icon: Box,
      title: "Affordable, with no Contract.",
      content: "Discover flexible and affordable POS solutions designed for small and medium businesses. With no long-term contracts or hidden commitments, CYGEN gives you complete freedom and peace of mind while managing your day-to-day sales operations efficiently.",
    },
    {
      icon: CirclePlay,
      title: "Best-in-class Technology.",
      content: "Experience powerful POS technology combined with modern mPOS and kiosk solutions. CYGEN helps businesses handle orders quickly and efficiently, making it easy to manage sales, track performance, and serve customers smoothly from anywhere.",
    },
    {
      icon: CodeXml,
      title: "End-to-end Solution.",
      content: "CYGEN provides a complete business solution including POS, mPOS, inventory management, eCommerce websites, and mobile apps. Our integrated system helps streamline operations, improve productivity, and support your business growth from one platform.",
    }
];

const Feature02 = () => {
  return (
    <>
      <Feature featureData={featureData} />
    </>
  );
};

export default Feature02;
