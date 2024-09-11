'use client'
import classNames from "classnames"

import BarChart from "@/components/molecules/Charts/Bar"
import LineChart from "@/components/molecules/Charts/Line"
import DoughnutChart from "@/components/molecules/Charts/Doughnut"


import { BlingColors } from "@/tokens/colors"


function Charts() {
  return (
    <>

      <LineChart
        container={{
          className: classNames('w-[500px]')
        }}
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
          datasets: [
            {
              data: [10, 150, 30, 1000, 50, 60, 20, 80, 90, 100],
              backgroundColor: [BlingColors['bling-blue'], BlingColors['bling-dark-bg-1']],
              borderColor: [BlingColors['bling-blue'], BlingColors['bling-dark-bg-1']]
            }
          ]
        }} options={{ responsive: true, }} />

      <BarChart
        container={{
          className: classNames('w-[500px]')
        }}
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
          datasets: [
            {
              data: [10, 150, 30, 1000, 50, 60, 20, 80, 90, 100],
              backgroundColor: [BlingColors['bling-blue'], BlingColors['bling-dark-bg-1']]


            }
          ]
        }} options={{ responsive: true, }} />

      <DoughnutChart
        container={{
          className: classNames('w-[500px]')
        }}
        data={{

          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
          datasets: [
            {
              label: 'My First Dataset',
              data: [10, 150, 30, 1000, 50, 60, 20, 80, 90, 100],
              backgroundColor: [BlingColors['bling-blue'], BlingColors['bling-dark-bg-1']],
              borderColor: [BlingColors['bling-blue'], BlingColors['bling-dark-bg-1']]
            }
          ]
        }} />

    </>
  )
}


export { Charts }