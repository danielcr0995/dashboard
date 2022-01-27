import React from 'react';
import "./topbar.css"
// import {NotificationsNoneOutlinedIcon} from '@mui/icons-material/';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className='topbarWrapper'>
            <div className='topbarLeft'>
                <span className="title"> Dashboard </span>
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
                <div className='user'>DC</div>
                 
            </div>
            
        </div>
        

    </div>)
    
}
