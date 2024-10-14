'use client';
import React, { Fragment, HTMLProps, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

import {
  Chart, ChartData, ChartOptions,
  BarElement, BarController,
  CategoryScale, Tooltip, LinearScale // Importa LinearScale
} from 'chart.js';

interface IBarChartProps {
  data: ChartData<'bar'>;
  options: ChartOptions<'bar'>;
  container?: HTMLProps<HTMLDivElement>;
}

const BarChartComponent: React.FC<IBarChartProps> = ({ data, options, container }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  // Registra LinearScale junto con los otros componentes
  Chart.register(BarElement, BarController, CategoryScale, Tooltip, LinearScale);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {

      if (chartRef.current) chartRef.current.destroy();
      chartRef.current = new Chart(ctx, {
        type: 'bar',
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

const BarChart = dynamic(async() => BarChartComponent, { ssr: false });

export {BarChart};
