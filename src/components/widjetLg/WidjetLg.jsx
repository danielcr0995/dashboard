import React from 'react';
import "./widjetLg.css"
import { Visibility } from '@material-ui/icons';

function Button({type}){
    return <button className={"widjetLgButton "+ type}>{type}</button>
}

function WidjetLgListItem({name, initials, date, ammount, status}){
    return(
        <tr className="widjetLgTr">
            <td className="widjetLgUser">
                <div className='userWidjetImg'>{initials}</div>
                <span className="widjetLgUsername">{name}</span>
            </td>
            <td className="widjetLgDate">{date}</td>
            <td className="widjetLgAmount">${ammount}</td>
            <td className="widjetLgStatus">
                <Button type={status}/>
            </td>
            <td>
                <button className="widjetLgButton">
                    <Visibility className="widgetLgIcon"/>
                    View
                </button> 
            </td>
        </tr>
                
                
    )
}

export default function WidjetLg() {
  return (
    <div className="widjetLg">
        <span className="widjetLgTitle">User Transactions</span>
        <table className="widgetLgTable">
            <thead>
                <tr className="widjetLgTr">
                    <th className="widjetLgTh">Customer</th>
                    <th className="widjetLgTh">Date</th>
                    <th className="widjetLgTh">Ammount</th>
                    <th className="widjetLgTh">Status</th>
                    <th className="widjetLgTh"></th>                
                </tr>
            </thead>
            <tbody>
                <WidjetLgListItem
                    name="Daniel Correa"
                    initials="DC"
                    country="Ecuador"
                    date="01-01-2022"
                    ammount= {250}
                    status="Confirmed"
                />
                <WidjetLgListItem
                    name="Daniel Correa"
                    initials="DC"
                    country="Ecuador"
                    date="01-01-2022"
                    ammount= {850}
                    status="Pending"
                />
                <WidjetLgListItem
                    name="Daniel Correa"
                    initials="DC"
                    country="Ecuador"
                    date="01-01-2022"
                    ammount= {450}
                    status="Confirmed"
                />
                <WidjetLgListItem
                    name="Daniel Correa"
                    initials="DC"
                    country="Ecuador"
                    date="01-01-2022"
                    ammount= {150}
                    status="Canceled"
                />
                <WidjetLgListItem
                    name="Daniel Correa"
                    initials="DC"
                    country="Ecuador"
                    date="01-01-2022"
                    ammount= {350}
                    status="Pending"
                />
            </tbody>
            
            

        </table>
        
    </div>
    );
}
