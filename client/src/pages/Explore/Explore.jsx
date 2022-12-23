import React from "react";
import ExploreTweets from "../../components/ExploreTweets/ExploreTweets";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";

const Explore = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="px-6">
        <LeftSidebar />
      </div>
      <div className="col-span-2 border-x-2 border-t-slate-800 px-6">
        <ExploreTweets />
      </div>
      <div className="px-6">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Explore;
