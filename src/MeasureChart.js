import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './Style/Bar.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
)

const config = {
  type: 'scatter',
  options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
    }
  }
};


function MeasureChart(props) {
  console.log("measure chart data here", props)

  // props.map(function (item) {
  //   return item.measure.value
  // })

  const data = {
    datasets: [{
      label: 'Scatter Dataset',
      data: props,
      backgroundColor: 'rgb(255, 99, 132)'
    }],
  };
  return (
    <>
      <div className='Bar'>
        <Bar
          data={data}
          height={400}
          config={config}
        />
      </div>
    </>
  )
}

export default MeasureChart

