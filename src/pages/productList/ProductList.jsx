// import React from 'react';
import React, { useState } from 'react';
import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import { EditOutlined } from '@material-ui/icons';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {products} from "../../dummyData.js"
import { Link } from 'react-router-dom';


export default function ProductList() {

    const [data, setData]=useState(products)
  const handleClick=(id)=>{
    setData(data.filter(item=> item.id!==id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 170},// renderCell: (params)=>{
    //     return (
    //             <div className="productListUser">
    //                 <img className='tourListImg'  src={params.img} alt=""/> 
    //                 {params.name}
    //             </div>
    //         )
    //     }
    // },
    { field: 'island', headerName: 'Island', width: 200 },
    { field: 'type', headerName: 'Type', width: 200 },
    { field: 'duration', headerName: 'Duration', width: 130 }, 
    { field: 'price', headerName: 'Price', width: 130 }, 
    { field: 'sold', headerName: 'Sold', width: 70 },
    

    { field: 'action', headerName: 'Action', width: 100, 
        renderCell:  (params)=> {
            return (
                <div className='actionButtons'>
                    
                    <Link to={"/products/"+params.id}>                                                              
                      <EditOutlined className='userEditIcon'/>
                    </Link>
                    <DeleteOutlinedIcon className='userDeleteIcon' onClick={()=>handleClick(params.id)}/>
                </div>
            )
        }
    }, 
       
    
  ];

  return (
    <div className="productList">
        <div className="userTitleContainer">
          <h1 className="userTitle">Products</h1>
          <Link to="/products/newProduct">
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
