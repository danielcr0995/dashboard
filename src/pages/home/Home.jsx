import React from 'react';
import Chart from '../../components/chart/Chart';
import FeatureInfo from '../../components/featureInfo/FeatureInfo';
import "./home.css"
import {userData} from "../../dummyData"
import WidjetSm from '../../components/widjetSm/WidjetSm';
import WidjetLg from '../../components/widjetLg/WidjetLg';

export default function Home() {
  return (
    <div className="home">
        <FeatureInfo/>
        <Chart title="User Analytics" data={userData} dataKey="active user" grid aspectx={4} aspecty={1} className="productSalesChart"/>
        <div className='homeWidjets'>
            <WidjetSm/>
            <WidjetLg/>
            
        </div>
    </div>
  );
}
