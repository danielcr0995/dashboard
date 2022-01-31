import React from 'react';
import "./newUser.css"
import { Publish } from '@material-ui/icons';

export default function NewUser() {
  return (
        <div className="newUser">
            <div className="newUserTitleContainer">
                <h1 className="newUserTitle">New User</h1>                
            </div>
            <div className="newUserContainer">
                <from className="newUserUpdateForm">
                    <div className="userUpdateUpload">
                        <div className="userAvatarBig">JS</div>
                        <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                        <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                
                    <div className="newUsernameUpdateItem">
                        <label >Username:</label>
                        <input className="newUserUpdateInput" type="text" placeholder="jonsnow@gmail.com" />

                    </div>
                    <div className="newUsernameUpdateItem">
                        <label >Name:</label>
                        <input className="newUserUpdateInput" type="text" placeholder="jon snow" />

                    </div>
                    <div className="newUsernameUpdateItem">
                        <label >Country:</label>
                        <input className="newUserUpdateInput" type="text" placeholder="Ecuador" />

                    </div>
                    <div className="newUsernameUpdateItem">
                        <label >Number:</label>
                        <input className="newUserUpdateInput" type="text" placeholder="+593 987654321" />

                    </div>
                    <div className="newUsernameUpdateItem">
                        <label >Email:</label>
                        <input className="newUserUpdateInput" type="text" placeholder="jonsnow@gmail.com" />

                    </div>
                    <div className="newUsernameUpdateItem">
                        <label >Active:</label>
                        <select className="newUserSelect" name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                    </div>

                
                    
                    <button className="newUserSaveButton">Create</button>

                    
                </from>

            </div>
            

            
        </div>
    );
}
