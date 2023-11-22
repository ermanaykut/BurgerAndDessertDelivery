import BurgerAxiosInstance from './burgerAxios';


class BurgerService {
  getBurgers = async () => {
    const response = await BurgerAxiosInstance.get('/burgers');
    return response;
  };
}

export default new BurgerService();
