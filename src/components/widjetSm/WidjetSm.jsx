import { Visibility } from '@material-ui/icons';
import React from 'react';
import "./widjetSm.css"

function WidjetSmListItem({name, initials, country}){
    return(
        <li className="widjetSmListItem">
            <div className='userWidjetImg'>{initials}</div>
            <div className="userWidjetContent">
                <div className="widjetSmUser">
                    <span className="widjetSmUsername">{name}</span>
                    <span className="widjetSmCountry">{country}</span>
                </div>
                <button className="widjetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    View
                </button> 
                   
            </div>
            
                            
        </li>
    )
}

export default function WidjetSm() {
  return (
    <div className="widjetSm">
        <span className="widjetSmTitle">New Join Users</span>
        <ul className="widjetSmList">
            <WidjetSmListItem
                name="Daniel Correa"
                initials="DC"
                country="Ecuador"
            />
            <WidjetSmListItem
                name="Daniel Correa"
                initials="DC"
                country="Ecuador"
            />
            <WidjetSmListItem
                name="Daniel Correa"
                initials="DC"
                country="Ecuador"
            />
            <WidjetSmListItem
                name="Daniel Correa"
                initials="DC"
                country="Ecuador"
            />
        </ul>
    </div>
    );
}
