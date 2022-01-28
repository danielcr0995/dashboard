import React from 'react';
import Chart from '../components/chart/Chart';
import FeatureInfo from '../components/featureInfo/FeatureInfo';
import "./home.css"
import {userData} from "../dummyData"

export default function Home() {
  return (
    <div className="home">
        <FeatureInfo/>
        <Chart tile="User Analytics" data={userData} dataKey="active user" grid/>
    </div>
  );
}
