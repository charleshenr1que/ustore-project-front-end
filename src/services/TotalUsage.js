import axios from 'axios'

const TOTAL_USAGE = 'http://localhost:8080/itens/total-usage';

class TotalUsage {

    getTotaUsage() {
        return axios.get(TOTAL_USAGE)
    }

}

export default new TotalUsage()