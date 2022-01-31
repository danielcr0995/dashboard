import React from 'react';
import "./sidebar.css";
import LineStyleOutlinedIcon from '@mui/icons-material/LineStyleOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
  <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
            
            <h3 className='sidebarTitle'>Dashboard</h3>
        
            <ul className='sidebarList'>
                <Link to="/" className="link">
                    <li className='sidebarListItem active'>
                        <LineStyleOutlinedIcon className="sidebarIcon"/>
                        Menu
                    </li>
                </Link>
                <li className='sidebarListItem'>
                    <TimelineOutlinedIcon className="sidebarIcon"/>
                    Analytics
                </li>
                <li className='sidebarListItem'>
                    <TrendingUpOutlinedIcon className="sidebarIcon"/>
                    Sales
                </li>

            </ul>
            <h3 className='sidebarTitle'>Quick Menu</h3>
            <ul className='sidebarList'>
                <Link to="/users" className="link">
                    <li className='sidebarListItem '>
                        <PersonOutlineOutlinedIcon className="sidebarIcon"/>
                        User
                    </li>
                </Link>
                <Link to="/products" className="link">
                    <li className='sidebarListItem'>
                        <StorefrontOutlinedIcon className="sidebarIcon"/>
                        Products
                    </li>
                </Link>
                <li className='sidebarListItem'>
                    <AttachMoneyOutlinedIcon className="sidebarIcon"/>
                    Transactions
                </li>
                <li className='sidebarListItem'>
                    <AssessmentOutlinedIcon className="sidebarIcon"/>
                    Report
                </li>

            </ul>
            <h3 className='sidebarTitle'>Notifications</h3>
            <ul className='sidebarList'>
                <li className='sidebarListItem '>
                    <EmailOutlinedIcon className="sidebarIcon"/>
                    Mail
                </li>
                <li className='sidebarListItem'>
                    <ChatBubbleOutlineOutlinedIcon className="sidebarIcon"/>
                    Feedback
                </li>
                <li className='sidebarListItem'>
                    <ForumOutlinedIcon className="sidebarIcon"/>
                    Messages
                </li>

            </ul>
            <h3 className='sidebarTitle'>Notifications</h3>
            <ul className='sidebarList'>
                <li className='sidebarListItem '>
                    <WorkOutlineOutlinedIcon className="sidebarIcon"/>
                    Manage
                </li>
                <li className='sidebarListItem'>
                    <TimelineOutlinedIcon className="sidebarIcon"/>
                    Analytics
                </li>
                <li className='sidebarListItem'>
                    <ReportGmailerrorredOutlinedIcon className="sidebarIcon"/>
                    Reports
                </li>

            </ul>
         </div>

      </div>
  </div>);
}
