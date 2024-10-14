import { useDarkMode } from '@/hooks/useDarkMode';

export const useGeneralResumeData = () => {
  const { darkMode } = useDarkMode();

  const dataGeneralResume = {
    labels: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    datasets: [
      {
        label: 'Ventas',
        data: [57, 150, 30, 123, 50, 60, 20, 224, 90, 138, 280, 100],
        backgroundColor: darkMode ? '#ffffff' : '#e2e8f0'
      }
    ]
  };

  const optionsGeneralResume = {
    responsive: true, // Para que el gráfico sea responsivo y se ajuste al tamaño del contenedor
    maintainAspectRatio: false, // Permitir que el gráfico llene todo el espacio disponible
    plugins: {
      legend: {
        labels: {
          color: darkMode ? '#64748b' : '#334155',
          font: {
            size: 10
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: darkMode ? '#64748b' : '#334155',
          font: {
            size: 10
          }
        },
        grid: {
          display: false
        }
      },
      y: {
        ticks: {
          color: darkMode ? '#64748b' : '#334155',
          font: {
            size: 10
          }
        },
        grid: {
          color: darkMode ? '#1e293b' : '#cbd5e1'
        }
      }
    }
  };

  return { dataGeneralResume, optionsGeneralResume };
};
