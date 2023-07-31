import React from 'react'
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import SendIcon from '@mui/icons-material/Send';
const Post = () => {
  return (
      <>
          <div className='d-flex post flex-column p-3 mb-2'>
              <div className='d-flex'></div>
              <hr />
              <div className='row'>
                  <div className='col-2'>
                  <img className='profile-pic' src="https://media.licdn.com/dms/image/D4D35AQEQaxfdOGWHxw/profile-framedphoto-shrink_100_100/0/1690433248834?e=1691074800&v=beta&t=Z-ksNBUIey3bHcf6hlHynUT4nBz-odTT38EMYZr3uzg"></img>

                  </div>
                  <div className='col-7 py-3'>
                      <h6 className='p-0 m-0'>Saurabh Upreti</h6>
                      <p className='user-des'>MERN Stack Developer</p>
                  </div>
                  <div className='col-3 py-3'>
                      <span className='follow'> + Follow</span>
                  </div>
              </div>
              <div className='d-flex flex-column'>
                  <p className='mt-1 post-des'>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus ipsa dolorem omnis velit error voluptatibus saepe, nostrum corrupti, officia in dolorum enim. Amet sapiente iusto at, et asperiores quos laudantium!
                  </p>
                  <img src='https://media.licdn.com/dms/image/D4D22AQGnbQ0etufdBA/feedshare-shrink_2048_1536/0/1690699622596?e=1693440000&v=beta&t=fbb_JCCMrvE48Kj435whG8sBJIbihlNqNnyaP7syiwY'></img>
                  <div className=''>
                      <button aria-label="1 reaction" class="t-black--light display-flex social-details-social-counts__count-value
                                    t-12
                                    hoverable-link-text
                                    " type="button">
                                <img class="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--0 reactions-icon__consumption--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light" src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="like" data-test-reactions-icon-type="LIKE" data-test-reactions-icon-theme="light"/>
                                        <span aria-hidden="true" class="social-details-social-counts__reactions-count">
                            1          </span>
                      </button>
                  </div>
              </div>
              <hr />
              <div className='row px-3 text-center post-action'>
                  <div className='col-3'>
                      <span><ThumbUpOffAltRoundedIcon style={{transform: 'scaleX(-1)',}}/> Like</span>
                  </div>
                  <div className='col-3'>
                      <span><MessageRoundedIcon /> Comment</span>
                  </div>
                  <div className='col-3'>
                     <span> <RepeatRoundedIcon/> Repost</span>
                  </div>
                  <div className='col-3'>
                     <span> <SendIcon style={{transform:'rotate(-45deg)'}}/> Send</span>
                  </div>
              </div>
      </div>
      </>
  )
}

export default Post