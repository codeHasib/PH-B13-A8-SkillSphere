"use client";

import { useData } from "@/context/useData";
import CourseCard from "./CourseCard";
import Loader from "./Loader";

const HomeCourseSec = () => {
  const { courses, loading } = useData();

  if (loading) {
    return <Loader></Loader>;
  }

  const topThree = [...courses].sort((a, b) => b.rating - a.rating).slice(0, 3);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto px-4 my-5">
      {topThree.map((item) => (
        <CourseCard key={item.id} {...item}></CourseCard>
      ))}
    </div>
  );
};

export default HomeCourseSec;
