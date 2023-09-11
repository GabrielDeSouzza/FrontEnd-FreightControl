import axios from 'axios';
import { ICEPResponse } from 'types/ICepResponse';

export function searchCEP(cep: string) {
  return axios({
    method: 'GET',
    url: `https://viacep.com.br/ws/${cep}/json/`,
    responseType: 'json',
  })
    .then((response) => {
      return response.data;
    })
    .then((response): ICEPResponse => {
      return {
        neighborhood: response.bairro,
        cep: response.cep,
        city: response.localidade,
        complement: response.complemento,
        public_adress: response.logradouro,
        uf: response.uf,
      };
    })
    .catch((error) => {
      return error;
    });
}
