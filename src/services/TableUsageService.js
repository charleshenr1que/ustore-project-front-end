import axios from 'axios'

const TABLE_USAGE_SERVICE = 'http://localhost:8080/itens/table-service';

class TableUsageService {

    getTableUsage() {
        return axios.get(TABLE_USAGE_SERVICE)
    }

}

export default new TableUsageService()