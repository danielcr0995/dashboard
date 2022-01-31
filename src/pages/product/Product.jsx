import React from 'react';
import "./product.css";
import { CalendarToday, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';

export default function Product() {
  return (
    <div className='product'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit Product</h1>
            <Link to="/products/newProduct">
                <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="productContainer">
            <div className="productTop">
                <div className="productTopLeft">
                    <div className="userShowTop">
                        {/* <div className="userAvatar">JS</div> */}
                        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/E3BIJDZQWJG4VM5R7JTG7MBAV4.jpg" alt="" className="productImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowName">Tuneles</span>
                            <span className="productShowLocation">Galapagos</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <div className="userShowBottomTitle"> Product details</div>
                        <div className="userInfo">
                            <LocationOnOutlinedIcon className="userShowIcon"/>
                            <span className="userShowBottomUsername">Isabela</span>
                        </div>
                        <div className="userInfo">

                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowBottomUsername">Day tour</span>
                        </div>
                        <div className="userInfo">
                            <GavelOutlinedIcon className="userShowIcon"/>
                            <span className="userShowBottomUsername">10</span>
                        </div>
                        <div className="userInfo">
                            <AccessTimeOutlinedIcon className="userShowIcon"/>
                            <span className="userShowBottomEmail">5 hours</span>
                        </div>
                        <div className="userInfo">
                            <AttachMoneyOutlinedIcon className="userShowIcon"/>
                            <span className="userShowBottomEmail">100</span>
                        </div>
                        <div className="userInfo">
                            <DescriptionOutlinedIcon className="userShowIcon"/>
                            <span className="userShowBottomEmail">Tour in Isabela island</span>
                        </div>
                        <div className="userInfo">
                            
                            <DescriptionOutlinedIcon className="userShowIcon"/>
                            <span className="userShowBottomEmail">Tour in Isabela island</span>
                        </div>
                    </div>

                </div>
                <div className="productTopRight">
                    <Chart title="Tour sales" data={productData} dataKey="sales" grid aspectx={2} aspecty={1}/>
                </div>
            </div>
            
            <div className="productBottom">
                <div className="userUpdateTitle">Edit</div>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="usernameUpdateItem">
                            <label >Name:</label>
                            <input className="userUpdateInput" type="text" placeholder="jonsnow@gmail.com" />

                        </div>
                        <div className="usernameUpdateItem">
                            <label >Location:</label>
                            <input className="userUpdateInput" type="text" placeholder="jon snow" />

                        </div>
                        <div className="usernameUpdateItem">
                            <label >Island:</label>
                            <input className="userUpdateInput" type="text" placeholder="Ecuador" />

                        </div>
                        <div className="usernameUpdateItem">
                            <label >Type:</label>
                            <input className="userUpdateInput" type="text" placeholder="+593 987654321" />

                        </div>
                        <div className="usernameUpdateItem">
                            <label >Duration:</label>
                            <input className="userUpdateInput" type="text" placeholder="jonsnow@gmail.com" />

                        </div>
                        <div className="usernameUpdateItem">
                            <label >Price:</label>
                            <input className="userUpdateInput" type="text" placeholder="jonsnow@gmail.com" />

                        </div>
                        <div className="usernameUpdateItem">
                            <label >Short Descrption:</label>
                            <input className="userUpdateInput" type="text" placeholder="jonsnow@gmail.com" />

                        </div>
                        <div className="usernameUpdateItem">
                            <label >Long Description:</label>
                            <input className="userUpdateInput" type="text" placeholder="jonsnow@gmail.com" />

                        </div>

                    </div>
                    <div className="updateRight">
                        <div className="userUpdateUpload">
                            {/* <div className="userAvatarBig">JS</div> */}
                            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/E3BIJDZQWJG4VM5R7JTG7MBAV4.jpg" alt="" className="productImgBig" />
                            <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>

                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}
