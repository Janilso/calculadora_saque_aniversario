const API_URI = process.env.REACT_APP_API_URI;
const BASE_URL = `${API_URI || ''}/api`;

const ENDPOINTS = {
    URL_CALC_SAQUE: `${BASE_URL}/calculadoraSaqueAniversario`,
};

export { BASE_URL, ENDPOINTS };
