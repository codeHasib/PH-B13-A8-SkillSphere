import HeroSection from "@/components/Hero";

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
        <HeroSection></HeroSection>
      </div>
    </>
  );
}
