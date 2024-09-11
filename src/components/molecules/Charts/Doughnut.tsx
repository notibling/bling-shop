'use client'
import React, { Fragment, HTMLProps, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import {
  Chart, ChartData,
  ArcElement, DoughnutController, CategoryScale,
  Tooltip
} from "chart.js";

interface IDoughnutChartProps {
  data: ChartData<'doughnut'>;
  container?: HTMLProps<HTMLDivElement>;
  options?: any; // Añade esta línea para aceptar opciones personalizadas
}

const DoughnutChartComponent: React.FC<IDoughnutChartProps> = ({ data, container, options }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);
  Chart.register(ArcElement, DoughnutController, CategoryScale, Tooltip);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) {

      if (chartRef.current) chartRef.current.destroy();
      chartRef.current = new Chart(ctx, {
        type: 'doughnut',
        data,
        options, // Añade las opciones aquí
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data, options]) // Añade options aquí

  const ContainerComponent = container ? 'div' : Fragment;

  return (
    <ContainerComponent {...(container ?? {})}>
      <canvas ref={canvasRef} />
    </ContainerComponent>
  )
}

const DoughnutChart = dynamic(async () => DoughnutChartComponent, { ssr: false });

export {DoughnutChart};
