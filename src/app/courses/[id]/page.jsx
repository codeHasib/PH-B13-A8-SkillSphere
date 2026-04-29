"use client";

import CourseDetailsCompo from "@/components/CourseDetailsCompo";
import CurriculumCompo from "@/components/CurriculamCompo";
import Loader from "@/components/Loader";
import { useData } from "@/context/useData";
import { useSession } from "@/lib/auth-client";
import { redirect, useParams } from "next/navigation";

const CourseDetailsPage = () => {
  const { id } = useParams();
  const { data, isPending } = useSession();
  const { courses, loading } = useData();
  const currentCourse = courses.find((item) => item.id == id);

  if (isPending) {
    return <Loader></Loader>;
  }

  if (!data) {
    redirect("/auth/signin");
  }

  return (
    <div className="px-5">
      <CourseDetailsCompo course={currentCourse}></CourseDetailsCompo>
      <CurriculumCompo></CurriculumCompo>
    </div>
  );
};

export default CourseDetailsPage;
