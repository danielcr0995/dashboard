import { CalendarToday, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react';
import "./user.css"
import { Link } from 'react-router-dom';

export default function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/users/newUser">
                <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <div className="userAvatar">JS</div>
                    <div className="userShowTopTitle">
                        <span className="userShowName">Jon Snow</span>
                        <span className="userShowCountry">Ecuador</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <div className="userShowBottomTitle"> Account details</div>
                    <div className="userInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowBottomUsername">jonsnow@gmail.com</span>
                    </div>
                    <div className="userInfo">

                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowBottomUsername">10-12-1995</span>
                    </div>
                    <div className="userInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowBottomUsername">+593 999 999 999</span>
                    </div>
                    <div className="userInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowBottomEmail">jonsnow@gmail.com</span>
                    </div>
                </div>

            </div>
            <div className="userUpdate">
                <div className="userUpdateTitle">Edit</div>
                <from className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="usernameUpdateItem">
                            <label >Username:</label>
                            <input className="userUpdateInput" type="text" placeholder="jonsnow@gmail.com" />

                        </div>
                        <div className="usernameUpdateItem">
                            <label >Name:</label>
                            <input className="userUpdateInput" type="text" placeholder="jon snow" />

                        </div>
                        <div className="usernameUpdateItem">
                            <label >Country:</label>
                            <input className="userUpdateInput" type="text" placeholder="Ecuador" />

                        </div>
                        <div className="usernameUpdateItem">
                            <label >Number:</label>
                            <input className="userUpdateInput" type="text" placeholder="+593 987654321" />

                        </div>
                        <div className="usernameUpdateItem">
                            <label >Email:</label>
                            <input className="userUpdateInput" type="text" placeholder="jonsnow@gmail.com" />

                        </div>

                    </div>
                    <div className="updateRight">
                        <div className="userUpdateUpload">
                            <div className="userAvatarBig">JS</div>
                            <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>

                    </div>
                </from>
            </div>
        </div>
    </div>
    ); 
}
