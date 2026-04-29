"use client";

import { useData } from "@/context/useData";
import CourseCard from "./CourseCard";
import Loader from "./Loader";

const AllCoursesCompo = () => {
  const { courses, loading } = useData();

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
      {courses.map((item) => (
        <CourseCard key={item.id} {...item}></CourseCard>
      ))}
    </div>
  );
};

export default AllCoursesCompo;
