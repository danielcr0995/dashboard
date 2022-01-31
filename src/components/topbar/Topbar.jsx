import React from 'react';
import "./topbar.css"
// import {NotificationsNoneOutlinedIcon} from '@mui/icons-material/';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from 'react-router-dom';


export default function Topbar() {
  return (
    <div className="topbar">
        <div className='topbarWrapper'>
            <div className='topbarLeft'>
            <Link to="/" className="link">
                <span className="title"> Dashboard </span>
            </Link>
            </div>
            <div className='topbarRight'>
                <div className='topbarIconContainer'>

                    <NotificationsNoneOutlinedIcon/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>

                    <EmailOutlinedIcon/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>

                    <SettingsIcon/>
                </div>
                <div className='userTopbar'>DC</div>
                 
            </div>
            
        </div>
        

    </div>)
    
}
