import React from 'react';
import "./newProduct.css"
import { Publish } from '@material-ui/icons';


export default function NewProduct() {
  return (
        <div className="newProduct">
            <div className="newUserTitleContainer">
                <h1 className="newUserTitle">New Product</h1>                
            </div>
            <div className="newUserContainer">
                <from className="newUserUpdateForm">
                    <div className="productUpdateUpload">
                        {/* <img src="https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/E3BIJDZQWJG4VM5R7JTG7MBAV4.jpg" alt="" className="productImgBig" />                         */}
                        <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                        <input type="file" id="file"/>
                    </div>
                
                    <div className="newUsernameUpdateItem">
                        <label >Name:</label>
                        <input className="newUserUpdateInput" type="text" placeholder="jonsnow@gmail.com" />

                    </div>
                    <div className="newUsernameUpdateItem">
                        <label >Location:</label>
                        <input className="newUserUpdateInput" type="text" placeholder="jon snow" />

                    </div>
                    <div className="newUsernameUpdateItem">
                        <label >Island:</label>
                        <input className="newUserUpdateInput" type="text" placeholder="Ecuador" />

                    </div>
                    <div className="newUsernameUpdateItem">
                        <label >Type:</label>
                        <input className="newUserUpdateInput" type="text" placeholder="+593 987654321" />

                    </div>
                    <div className="newUsernameUpdateItem">
                        <label >Price:</label>
                        <input className="newUserUpdateInput" type="text" placeholder="jonsnow@gmail.com" />

                    </div>
                    <div className="newUsernameUpdateItem">
                        <label >Duration:</label>
                        <input className="newUserUpdateInput" type="text" placeholder="jonsnow@gmail.com" />

                    </div>
                    <div className="newUsernameUpdateItem">
                        <label >Active:</label>
                        <select className="newUserSelect" name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                    </div>

                    <div className="newUsernameUpdateItem">
                        <label >Short desciption:</label>
                        <input className="newUserUpdateInput" type="text" placeholder="jonsnow@gmail.com" />

                    </div>
                    <div className="newUsernameUpdateItem">
                        <label >Long Description:</label>
                        <textarea className="newProductUpdateInputLD" type="text" placeholder="jonsnow@gmail.com" rows="7" columns="50" />

                    </div>
                    
                
                    
                    <button className="newUserSaveButton">Create</button>

                    
                </from>
            </div>


        </div>
    );
}
