import {
  Card,
  CardContent,
  CardHeader,
  Divider
} from '@material-ui/core';
import React from 'react';
import Chart from "react-google-charts";
import CostByDayService from 'src/services/CostByDayService';
import ConvertService from 'src/services/ConvertService';


class CostByDay extends React.Component {

  state = {
    costByDays: [],
  }

  componentDidMount() {
    CostByDayService.getCostByDays().then((response) => {
      this.setState({ costByDays: response.data })

    })
  }

  renderDays() {
    const result = [['Dias', 'Custo']]
    result.push(...this.state.costByDays.map(costByDay => {
      return [costByDay.usage_start_date, ConvertService.convertDollar(costByDay.sum)]
    }))
    return result
  }

  render() {
    console.log(this.renderDays())
    return (
      <Card>
        <CardHeader title="CUSTOS POR DIAS"/>
        <Divider />
        <CardContent>
          <Chart className="graf2"
            width={'auto'}
            height={'450px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={this.renderDays()}
            options={{
              hAxis: {
                title: 'Dias',
              },
              vAxis: {
                title: 'Custos',
              },
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </CardContent>
      </Card>
    )
  }
}


export default CostByDay