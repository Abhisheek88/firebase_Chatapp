import React from 'react'
import './Detail.css'
import { auth } from '../../lib/firebase'

const Detail = ()=> {
  return (
    <div className='detail'>
        <div className="user">
            <img src="./avatar.png" alt="" />
            <h2>Abhishek</h2>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="info">
            <div className="option">
                <div className="title">
                    <span>Chat Settings</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>
            <div className="option">
                <div className="title">
                    <span>Privacy % help</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div>
            {/* <div className="option">
                <div className="title">
                    <span>Shared photos</span>
                    <img src="./arrowDown.png" alt="" />
                </div>
                <div className="photos">
                    <div className="photoItem">
                        <div className="photoDetail">
                        <img src="https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg" alt="" />
                        <span>photo_2024_2.png</span>
                        </div>
                    <img src="./download.png" alt="" className='icon' />
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                        <img src="https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg" alt="" />
                        <span>photo_2024_2.png</span>
                        </div>
                    <img src="./download.png" alt="" className='icon' />
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                        <img src="https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg" alt="" />
                        <span>photo_2024_2.png</span>
                        </div>
                    <img src="./download.png" alt="" className='icon' />
                    </div>
                    
                </div>
            </div> */}
            {/* <div className="option">
                <div className="title">
                    <span>Shared Files</span>
                    <img src="./arrowUp.png" alt="" />
                </div>
            </div> */}
            <button>Block User</button>
            <button className='logout' onClick={()=> auth.signOut()}>Logout</button>
           
        </div>
    </div>
  )
}

export default Detail