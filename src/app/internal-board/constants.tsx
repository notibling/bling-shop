import { FaHourglass } from "react-icons/fa";

interface IGroup {
  label: string;
  items: {
    label: string;
    href: string;
    icon?: JSX.Element;
  }[]
}

// * Groups -> items[]
const InternalBoardMenuItems: IGroup[] = [
  {
    label: 'Categorias',
    items: [
      {
        label: 'Administrar categorias',
        href: '/internal-board/categories',
        icon: <FaHourglass />
      },
      {
        label: 'Crear categoría',
        href: '/internal-board/categories?action=create',
        icon: <FaHourglass />
      }
    ]
  },
  {
    label: 'Atributos',
    items: [
      {
        icon: <FaHourglass />,
        href: '/internal-board/attributes',
        label: 'Crear atributos'
      }
    ]
  },
  {
    label: 'Informes',
    items: [
      {
        icon: <FaHourglass />,
        href: '/internal-board',
        label: 'Estadisticas generales'
      },
      {
        icon: <FaHourglass />,
        href: '/internal-board/statistics',
        label: 'Datos de empresa'
      },
      {
        icon: <FaHourglass />,
        href: '/internal-board/statistics',
        label: 'Datos de persona'
      },
      {
        icon: <FaHourglass />,
        href: '/internal-board/statistics',
        label: 'Informe de transacciones'
      }
    ]
  }
]

export { InternalBoardMenuItems }