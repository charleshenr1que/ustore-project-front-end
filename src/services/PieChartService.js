
import axios from 'axios'

const PRODUCT_USAGEBYREGION = 'http://localhost:8080/itens/usage-regions';

class PieChartService {

    getUsageByRegion() {
        return axios.get(PRODUCT_USAGEBYREGION)
    }

}

export default new PieChartService()