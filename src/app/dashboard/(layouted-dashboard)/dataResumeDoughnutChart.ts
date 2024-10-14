// dataResumeDoughnutChart.ts

export const dataResumeDoughnutChart = {
  labels: ['Pérdidas', 'En Movimiento', 'Ganancias'],
  datasets: [
    {
      data: [20, 50, 30],
      backgroundColor: ['rgba(239, 68, 68, 0.5)', 'rgba(59, 130, 246,  0.5)', 'rgba(16, 185, 129, 0.5)'],
      borderColor: ['rgba(239, 68, 68, 1)', 'rgba(59, 130, 246,  1)', 'rgba(16, 185, 129, 1)'],
      borderWidth: 1,
      hoverBackgroundColor: ['rgba(239, 68, 68, 1)', 'rgba(59, 130, 246,  1)', 'rgba(16, 185, 129, 1)'],
      hoverBorderColor: ['rgba(239, 68, 68, 1)', 'rgba(59, 130, 246,  1)', 'rgba(16, 185, 129, 1)'],
      hoverBorderWidth: 2,
      offset: 10,
      borderAlign: 'center',
      circumference: 360,
      cutout: '75%',
      rotation: 0,
      animateRotate: true,
      animateScale: false,
      title: 'HOLA'
    }
  ]
};

  