"use client";
import React, { useEffect, useState } from "react";

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);


  useEffect(() => {
    const incrementView = () => {
      const storedViews = localStorage.getItem(slug);
      const newViews = storedViews ? parseInt(storedViews, 10) + 1 : 1;


      localStorage.setItem(slug, newViews);
      setViews(newViews);
    };

    if (!noCount) {
      incrementView();
    }
  }, [slug, noCount]);


  useEffect(() => {
    const storedViews = localStorage.getItem(slug);
    setViews(storedViews ? parseInt(storedViews, 10) : 0);
  }, [slug]);


  if (showCount) {
    return <div>{views} views</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
