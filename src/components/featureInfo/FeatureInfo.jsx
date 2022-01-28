import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import "./featureInfo.css"

function Features(props){
    return (
        
        <div className="featuredItem">
            
            <span className='featuredTitle'>{props.title}</span>
            <div className="featuredMoneyContainer">
                <span className='featuredMoney'>${props.profit}</span>
                <span className='featuredMoneyRate'>
                    {props.percentage}%{ props.arrowComponent}
                </span>

            </div>
            <span className='featuredSub'>Compared to last month
            </span>

        </div>
    
    )
}

export default function FeatureInfo() {
  return (
    <div className='features'>
        <Features 
            title={"Revenue"}
            profit={2600}
            percentage={-11.4}
            arrowComponent={<ArrowDownward className='arrowIconDown'/>}
        />
        <Features 
            title={"Sales"}
            profit={5600}
            percentage={5.4}
            arrowComponent={<ArrowUpward className='arrowIconUp'/>}
        />
        <Features 
            title={"Cost"}
            profit={3000}
            percentage={0.4}
            arrowComponent={<ArrowDownward className='arrowIconDown'/>}
            
        />
    </div>
    );
}
