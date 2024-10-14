'use client';
import React, { Fragment, HTMLProps, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

import {
  Chart, ChartData, ChartOptions,
  LineElement, LineController, Tooltip,
  CategoryScale, LinearScale, PointElement
} from 'chart.js';

interface ILineChartProps {
  data: ChartData<'line'>;
  options: ChartOptions<'line'>;
  container?: HTMLProps<HTMLDivElement>;
}

const LineChartComponent: React.FC<ILineChartProps> = ({ data, options, container }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);
  Chart.register(LineElement, LineController, CategoryScale, LinearScale, PointElement, Tooltip);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {

      if (chartRef.current) chartRef.current.destroy();
      chartRef.current = new Chart(ctx, {
        type: 'line',
        data,
        options
      });
    }


    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data, options]);

  const ContainerComponent = container ? 'div' : Fragment;

  return (
    <ContainerComponent {...(container ?? {})}>
      <canvas ref={canvasRef} />
    </ContainerComponent>
  );
};


const LineChart = dynamic(async() => LineChartComponent, { ssr: false });

export default {LineChart};