import HeroSection from "@/components/Hero";
import HomeCourseSec from "@/components/HomeCourseSec";
import LearningTips from "@/components/LearningTips";
import TopInstructors from "@/components/TopInstructor";

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
      </div>
      {/* Top three card section */}
      <div className="container mx-auto px-5 mt-10">
        <div className="mb-16 border-l-4 border-black pl-6">
          <h2 className="text-4xl md:text-6xl font-black font-mono uppercase tracking-tighter">
            Our_top_rated_courses
          </h2>
          <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest">
            register right now to get the facilities
          </p>
        </div>
      </div>
      <HomeCourseSec></HomeCourseSec>
      {/* Learning Tips Section */}
      <div className="container mx-auto">
        <LearningTips></LearningTips>
      </div>
      {/* Top Instructor Section */}
      <div className="container mx-auto my-7">
        <TopInstructors></TopInstructors>
      </div>
    </>
  );
}
