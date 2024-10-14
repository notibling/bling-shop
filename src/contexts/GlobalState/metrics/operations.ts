import { axios } from '@/common/AxiosClient';
import { Response } from '@/entities/Response';


interface IGeneralMetrics {
  today: number;
  thisWeek: number;
  thisMonth: number;
  thisYear: number;
}
type IGetGeneralMetricsResponse = Response<{
  account: IGeneralMetrics;
  sales: IGeneralMetrics;
}>;

const getGeneralMetrics = async(): Promise<IGetGeneralMetricsResponse> => {
  const response = await axios.get('/metrics/general');

  return response.data;
};

export {
  getGeneralMetrics,

  type IGeneralMetrics,
  type IGetGeneralMetricsResponse
};