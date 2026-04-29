import HeroSection from "@/components/Hero";
import HomeCourseSec from "@/components/HomeCourseSec";

export default function Home() {
  return (
    <>
      <div className="my-10 container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-space">
          SKILLSPHERE
        </h1>
        <p className="font-inter -mt-2 lg:ml-3">ONLINE_LEARNING_PLATFORM</p>
      </div>
      <div className="mb-5">
        {/* Hero Section */}
        <HeroSection></HeroSection>
        {/* Top three card section */}
        <h2 className="uppercase text-3xl md:text-5xl lg:text-7xl text-center mt-5 mb-10 underline font-space">
          Our top rated courses
        </h2>
        <HomeCourseSec></HomeCourseSec>
      </div>
    </>
  );
}
