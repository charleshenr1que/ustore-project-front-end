import axios from 'axios'

const USER_REST_API_URL = 'http://localhost:8080/itens';

const PRODUCT_REST_COST_BY_PRODUCT_CODE = 'http://localhost:8080/itens/cost-by-product-code'

class UserService {

    getUsers() {
        return axios.get(USER_REST_API_URL)
    }

    getCostByProduct() {
        return axios.get(PRODUCT_REST_COST_BY_PRODUCT_CODE)
    }

}

export default new UserService()