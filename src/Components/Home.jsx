import React from "react"
import HomeLeftSidebar from "../Components/HomeLeftSidebar.jsx";
import HomeMiddle from "./HomeMiddle.jsx";
import HomeRightSidebar from "./HomeRightSidebar.jsx";
 const Home = () => {
  return (
    <div className="d-flex flex-row home mt-4">
      <div className="d-flex flex-column home-left-sidebar-part-one text-center">
        <HomeLeftSidebar />
      </div>
      <div className="px-3 mid">
        <HomeMiddle/>
      </div>
      <div className="d-flex flex-column home-right-sidebar text-center">
        <HomeRightSidebar/>
      </div>
    </div>
  )
}

export default Home;