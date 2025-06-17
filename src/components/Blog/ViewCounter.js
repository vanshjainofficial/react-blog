"use client";
import React from "react";

const ViewCounter = ({ showCount = true }) => {
  if (!showCount) return null;
  return <div>1k+ views</div>;
};

export default ViewCounter;
