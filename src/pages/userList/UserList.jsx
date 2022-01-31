import React, { useState } from 'react';
import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import { EditOutlined } from '@material-ui/icons';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {users} from "../../dummyData.js"
import { Link } from 'react-router-dom';

  
   

export default function UserList() {
  const [data, setData]=useState(users)
  const handleClick=(id)=>{
    setData(data.filter(item=> item.id!==id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 170},//, renderCell: (params)=>{
        // return (
        //         <div>
        //             <div className='userAvatar'> {params.rows.avatar}</div>
        //             {params.rows.name}
        //         </div>
        //     )
        // }
    //},
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'country', headerName: 'Country', width: 200 },
    { field: 'transaction', headerName: 'Transaction', width: 130 }, 
    { field: 'action', headerName: 'Action', width: 100, 
        renderCell:  (params)=> {
            return (
                <div className='actionButtons'>
                    
                    <Link to={"/users/"+params.id}>                                                              
                      <EditOutlined className='userEditIcon'/>
                    </Link>
                    <DeleteOutlinedIcon className='userDeleteIcon' onClick={()=>handleClick(params.id)}/>
                </div>
            )
        }
    }, 
       
    
  ];

  return (
    

      
    <div className='user-list'>
        <div className="userTitleContainer">
          <h1 className="userTitle">Users</h1>
          <Link to="/users/newUser">
              <button className="userAddButton">Create</button>
          </Link>
        </div>
        
          <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={14}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
        
      </div> 
    
  );
}


