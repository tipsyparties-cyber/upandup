import { Hero } from "@/components/home/hero";
import { Positioning } from "@/components/home/positioning";
import { BenefitsGrid } from "@/components/home/benefits-grid";
import { Comparison } from "@/components/home/comparison";
import { ProjectTeaser } from "@/components/home/project-teaser";
import { HomeCta } from "@/components/home/home-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <BenefitsGrid />
      <Comparison />
      <ProjectTeaser />
      <HomeCta />
    </>
  );
}
