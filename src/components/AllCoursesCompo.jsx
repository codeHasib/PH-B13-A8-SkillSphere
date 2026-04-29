"use client";

import { useData } from "@/context/useData";
import CourseCard from "./CourseCard";
import Loader from "./Loader";
import SearchBox from "./SearchBox";
import { useState } from "react";

const AllCoursesCompo = () => {
  const { courses, loading } = useData();
  const [searchInput, setSearchInput] = useState("");

  function search(e) {
    setSearchInput(e.target.value.toLowerCase());
  }

  const filteredCourses = searchInput
    ? courses.filter((item) =>
        item.title.toLowerCase().includes(searchInput)
      )
    : courses;

  if (loading) return <Loader />;

  return (
    <>
      <SearchBox search={search} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((item) => (
            <CourseCard key={item.id} {...item} />
          ))
        ) : (
          <div className="py-10 text-center px-4 border text-xl font-light col-span-full uppercase">
            Nothing to show
          </div>
        )}
      </div>
    </>
  );
};

export default AllCoursesCompo;