import axios from 'axios'

const TOTAL_UNBLENDED_COST = 'http://localhost:8080/itens/total-unblended-cost';

class TotalValueService {

    getTotalUnblendedCost() {
        return axios.get(TOTAL_UNBLENDED_COST)
    }

}

export default new TotalValueService()