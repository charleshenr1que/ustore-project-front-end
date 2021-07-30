
import axios from "axios";

const  DOLLAR_COT = 'https://economia.awesomeapi.com.br/last/USD-BRL';

class ConvertService{
   
    state ={
      data:[{}]
       
        
    }
    componentDidMount() {
        axios.get(DOLLAR_COT).then(response => { 
            this.setState({ DataView: response.data })
        
        })
     
    }
    convertDollar(value) {
        return value * 5.12
    }
    

}



export default new ConvertService()