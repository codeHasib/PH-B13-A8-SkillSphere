import AllCoursesCompo from "@/components/AllCoursesCompo";

const CoursesPage = () => {
  return (
    <div className="container mx-auto px-5 mt-10">
      <div>
        <div className="mb-16 border-l-4 border-black pl-6">
          <h2 className="text-4xl md:text-6xl font-black font-mono uppercase tracking-tighter">
            All_Course
          </h2>
          <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest">
            register right now to get the facilities
          </p>
        </div>
      </div>
      <AllCoursesCompo></AllCoursesCompo>
    </div>
  );
};

export default CoursesPage;
