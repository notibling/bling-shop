import React from 'react';
import { Title } from '../atoms';
import { FaStar } from 'react-icons/fa';

interface ReviewData {
    stars: number;
    percentage: number;
}

interface ReviewsProps {
    reviewsCount: number;
    averageRating: number;
    reviewData: ReviewData[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviewsCount, averageRating, reviewData }) => {
    return (
        <>
            <div className="w-full m-0 rounded-md  text-slate-700">
                <div className="w-full  h-auto flex-col flex justify-between items-center">
                    <div className="w-full h-auto  p-2 flex flex-row flex-nowrap">
                        <div className="w-auto h-auto flex flex-row justify-start items-center">
                            <Title title="Reseñas" level="h4" />
                        </div>
                        <div className="w-full h-auto text-xs text-center  py-2 font-medium text-gray-500">
                            {reviewsCount} Reseñas totales
                        </div>
                        <div className="w-auto h-auto flex flex-row justify-end items-center text-xs gap-1">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} className={index < averageRating ? "text-yellow-400" : "text-slate-300"} />
                            ))}
                            <p className="ms-1  font-medium text-xs text-gray-500">{averageRating.toFixed(2)}</p>
                            <p className="ms-1  font-medium text-xs text-gray-500">de</p>
                            <p className="ms-1  font-medium text-xs text-gray-500">5</p>
                        </div>
                    </div>
                </div>

                <div className=" relative overflow-x-auto flex  rounded-md ">
                    <table className="w-full text-sm text-left p-1 text-slate-400  overflow-hidden">
                        <thead className="text-xs text-slate-700 uppercase bg-white ">
                            <tr className="bg-white">
                                <th scope="col" className="w-1/5 px-4 py-3 text-xs text-center">
                                    Estrellas
                                </th>
                                <th scope="col" className="w-3/5 px-4 py-3 text-xs text-center">
                                    Progreso
                                </th>
                                <th scope="col" className="w-1/5 px-4 py-3 text-xs text-center">
                                    Porcentaje
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviewData.map((data, index) => (
                                <tr key={index} className={index % 2 === 0 ? " bg-slate-100" : " bg-white"}>
                                    <td className="px-4 py-3 text-xs">{data.stars} Estrellas</td>
                                    <td className="px-4 py-1">
                                        <div className="w-full bg-slate-200 rounded-md h-3">
                                            <div className="h-3 bg-yellow-400 rounded-md" style={{ width: `${data.percentage}%` }}></div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-xs text-center">{data.percentage}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
export { Reviews }

export default Reviews;
