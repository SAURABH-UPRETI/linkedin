import React from "react"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const HomeLeftSidebar = () => {
  return (
    <>
    <div className="d-flex flex-column home-left-sidebar pb-2">
      <div className="d-flex flex-column user">
        <img src="https://media.licdn.com/dms/image/C4E16AQFsOMkHrgCQNg/profile-displaybackgroundimage-shrink_200_800/0/1610794986408?e=1695859200&v=beta&t=hDSg893ZNqtLxOiwrh1osjxpG_XyAdPExcOKXo0rHls"></img>
        <label className="mt-5"> Saurabh Upreti</label>
        <span> MERN Stack Developer</span>
        <img className="img" src="https://media.licdn.com/dms/image/D4D35AQEQaxfdOGWHxw/profile-framedphoto-shrink_100_100/0/1690433248834?e=1691074800&v=beta&t=Z-ksNBUIey3bHcf6hlHynUT4nBz-odTT38EMYZr3uzg"></img>
      </div>
      <hr/>
      <div className="d-flex flex-column px-3 text-start">
        <div className="row">
        <div className="col-10"><span>Who's viewed your profile</span></div>
        <div className="col-2"><span style={{color:'rgb(10,102,194)'}}>43</span></div>
        </div>
        <div className="row">
        <div className="col-10"><span>Impressions of your post</span></div>
        <div className="col-2"><span style={{color:'rgb(10,102,194)'}}>444</span></div>
        </div>
      </div>
      <hr/>
        <div className="px-3 tools text-start">
          <label htmlFor="">Access exclisive tools & insights</label><br/>
          <li-icon aria-hidden="true" type="premium-chip" class="feed-identity-module__premium-icon mr1 flex-shrink-zero"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z" fill="#f8c77e"></path>
      <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z" fill="#e7a33e"></path>
        </svg></li-icon>
        <span>Get hired faster. Try Premium free </span>
        </div>
      <hr />
      <div className="d-flex flex-row px-3 py-0 my-item">
        <BookmarkIcon style={{ fontSize:'1.3rem'}} /> <span>My Items</span>
      </div>
      </div>
    <div className="d-flex flex-column home-left-sidebar pb-2 mt-2">
      
      <div className="d-flex flex-column text-start mt-3">
          <Accordion style={{ boxShadow: 'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'.8rem'}}>Recent</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{position:'relative'}}>
          <span style={{fontSize:'1.3rem', position:'absolute', top:'-10%',}}># </span> <label style={{ fontSize:'.8rem', marginLeft:'1.3rem'}}>Technology</label>
          </Typography>
        </AccordionDetails>
      </Accordion>
        <span className="px-1">Group</span>
        <span className="px-1 py-3">Event</span>
        <Accordion style={{ boxShadow: 'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'.8rem'}}><span style={{color:'rgb(10,102,194)', fontWeight:'600'}}>Followed Hashtags</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{position:'relative'}}>
          <span style={{fontSize:'1.3rem', position:'absolute', top:'-10%',}}># </span> <label style={{ fontSize:'.8rem', marginLeft:'1.3rem'}}>Technology</label>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
        {/* <div className="px-3 tools text-start">
          <label htmlFor="">Access exclisive tools & insights</label><br/>
          <li-icon aria-hidden="true" type="premium-chip" class="feed-identity-module__premium-icon mr1 flex-shrink-zero"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z" fill="#f8c77e"></path>
      <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z" fill="#e7a33e"></path>
        </svg></li-icon>
        <span>Get hired faster. Try Premium free </span>
        </div>
      <div className="d-flex flex-row px-3 py-0 my-item">
        <BookmarkIcon style={{ fontSize:'1.3rem'}} /> <span>My Items</span>
      </div> */}
    </div>
    </>
    
  )
}

export default HomeLeftSidebar