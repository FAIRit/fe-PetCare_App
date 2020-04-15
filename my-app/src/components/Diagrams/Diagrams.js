import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import React, { useState, useEffect } from "react";
import { getData } from "../../services/diagrams/Urea";
import Urea from './all-diagrams/Urea';
import Eosinophils from './all-diagrams/Eosinophils';
import Hemoglobin from './all-diagrams/Hemoglobin';
import Leukocytes from './all-diagrams/Leukocytes'
import Monocytes from './all-diagrams/Monocytes';
import MCH from './all-diagrams/MCH';
import MCV from './all-diagrams/MCV';


const Rechart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
      .then(data => setData(data));
  }, [])

  return (


<div>
      <p>Kreatynina</p>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" id ="kreatynina" dataKey="norma" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" id ="kreatynina" dataKey="wynik" stroke="#82ca9d" />
      </LineChart>
      <Urea/>
<Eosinophils/>
<Hemoglobin/>
<Leukocytes/>
<Monocytes/>
<MCH/>
<MCV/>
    </div>
  );

};

export default Rechart;