"use client";

import { useParams } from "next/navigation";

const CourseDetailsPage = () => {
  const { id } = useParams();

  return <div>This is courses details page {id}</div>;
};

export default CourseDetailsPage;
