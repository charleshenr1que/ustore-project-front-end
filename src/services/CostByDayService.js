import axios from 'axios'

const COST_BY_DAYS = 'http://localhost:8080/itens/cost-by-days';

class CostByDayService {

    getCostByDays() {
        return axios.get(COST_BY_DAYS)
    }

}

export default new CostByDayService()