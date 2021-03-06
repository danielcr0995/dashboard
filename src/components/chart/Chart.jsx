import React from 'react';
import { ResponsiveContainer, LineChart, XAxis, Line, Tooltip, CartesianGrid } from 'recharts';
import "./chart.css"



export default function Chart({title, data, dataKey, grid, aspectx,aspecty}) {
  return (
    <div className='chart'>
        <h3 className='chartTitle'> {title}</h3>
        <ResponsiveContainer width="100%" aspect={aspectx / aspecty} 
        >

            <LineChart data={data}>
                <XAxis dataKey={"name"} />
                
                <Line type="monotone" dataKey={dataKey} stroke="#041562" activeDot={{ r: 8 }} />
                <Tooltip/>
                {grid} && <CartesianGrid stroke="#e0dfdf" strokeDasharray={"5 5"}/>
                
            </LineChart>


        </ResponsiveContainer>
    </div>); 
}
