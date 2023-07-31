import React from "react"
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NewspaperIcon from '@mui/icons-material/Newspaper';


const HomeMiddle = () => {
  return (
      <>
          <div className="home-middle p-2">
              <div className="row part-one p-2">
                  <div className="col-sm-1">
                  <img src="https://media.licdn.com/dms/image/D4D35AQEQaxfdOGWHxw/profile-framedphoto-shrink_100_100/0/1690433248834?e=1691074800&v=beta&t=Z-ksNBUIey3bHcf6hlHynUT4nBz-odTT38EMYZr3uzg"></img>
                  </div>
                  <div className="col-sm-11 px-3">
                      <button className="text-start">Start a post</button>
                  </div>
              </div>
              <div className="row part-two px-1 mt-1">
                  <div className="col-3">
                      <button><ImageIcon style={{ color: 'rgb(55,143,233)', marginRight:'.2rem'}}/>Photo</button>
                  </div>
                  <div className="col-3">
                  <button><SmartDisplayIcon style={{color:'rgb(95,155,65)', marginRight:'.3rem'}}/>Video</button>
                  </div>
                  <div className="col-3">
                  <button><CalendarMonthIcon style={{color:'rgb(195,125,22)', marginRight:'.3rem'}}/>Event</button>
                  </div>
                  <div className="col-3 p-0 m-0">
                  <button><NewspaperIcon style={{color:'rgb(225,103,69)', marginRight:'.3rem'}}/>Write Article</button>
                  </div>
              </div>
              <div className="d-flex flex-row  position-relative part-three"> 
                    <hr className="hr"/>
                  <div className="dropdown">
                  
                <button className=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Short by:<span>Top</span>
                </button>
                <ul className="dropdown-menu" >
                    <li><a className="dropdown-item" href="#">Top</a></li>
                    <li><a className="dropdown-item" href="#">Recent</a></li>
                </ul>
             </div>
          </div>
          </div>
          
       
      
      </>
  )
}

export default HomeMiddle