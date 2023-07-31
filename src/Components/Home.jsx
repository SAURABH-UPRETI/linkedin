import React from "react"
import HomeLeftSidebar from "../Components/HomeLeftSidebar.jsx";
import HomeMiddle from "./HomeMiddle.jsx";
import HomeRightSidebar from "./HomeRightSidebar.jsx";
import Post from "./Post.jsx";
 const Home = () => {
  return (
    <div className="d-flex flex-row home mt-4 position-relative">
      <div className="row">
        <div className="col-3 ">
            <div className="d-flex flex-column px-2 home-left-sidebar-part-one text-center">
            <HomeLeftSidebar />
          </div>
        </div>
        <div className="col-6">
            <div className=" mid">
            <HomeMiddle />
            <div className=" post-section">
              <Post />
              <Post />
              <Post/>
            </div>
          </div>
        </div>
        <div className="col-3 position-relative">
        <div className="d-flex flex-column home-right-sidebar text-center">
        <HomeRightSidebar/>
      </div>
        </div>
    </div>
     
     
    </div>
  )
}

export default Home;