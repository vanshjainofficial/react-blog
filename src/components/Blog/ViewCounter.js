"use client";
import React, { useEffect, useState } from "react";

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  // Increment view counter in local storage
  useEffect(() => {
    const incrementView = () => {
      const storedViews = localStorage.getItem(slug);
      const newViews = storedViews ? parseInt(storedViews, 10) + 1 : 1;

      // Store the new view count in localStorage
      localStorage.setItem(slug, newViews);
      setViews(newViews);
    };

    if (!noCount) {
      incrementView();
    }
  }, [slug, noCount]);

  // Fetch the current view count from localStorage
  useEffect(() => {
    const storedViews = localStorage.getItem(slug);
    setViews(storedViews ? parseInt(storedViews, 10) : 0);
  }, [slug]);

  // Show the view count if `showCount` is true
  if (showCount) {
    return <div>{views} views</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
