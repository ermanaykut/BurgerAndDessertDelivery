
import DessertAxiosInstance from './dessertAxios';

class DessertService {
  getDesserts = async () => {
    const response = await DessertAxiosInstance.get('/desserts');
    return response;
  };
}

export default new DessertService();
