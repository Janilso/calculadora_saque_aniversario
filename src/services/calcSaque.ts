import { AxiosError, AxiosResponse } from 'axios';
import { IRequestCalc, IResponseCalc } from '../interfaces';
import api from './api';
import { ENDPOINTS } from './endpoints';

interface IResponseCalcService extends AxiosResponse {
    data: IResponseCalc;
}

const calcSaqueService = {
    postCalculo: (payload: IRequestCalc) => {
        return new Promise((resolve: (value: IResponseCalc) => void, reject) => {
            api.post(ENDPOINTS.URL_CALC_SAQUE, payload)
                .then((response: IResponseCalcService) => resolve(response.data))
                .catch((err: AxiosError) =>
                    reject(err?.response?.data ?? { mensage: 'Error request' }),
                );
        });
    },
};

export default calcSaqueService;
