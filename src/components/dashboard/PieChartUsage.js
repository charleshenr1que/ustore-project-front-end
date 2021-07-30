import {
  Card,
  CardContent,
  CardHeader,
  Divider
} from '@material-ui/core';
import React from 'react';
import Chart from "react-google-charts";
import PieChartService from 'src/services/PieChartService';


class PieChartUsage extends React.Component {

  state = {
    usageByRegion: {
      'ap-northeast-1': 0,
      'ap-northeast-2': 0,
      'ap-south-1': 0,
      'ap-southeast-1': 0,
      'ap-southeast-2': 0,
      'eu-central-1': 0,
      'eu-west-1': 0,
      'sa-east-1': 0,
      'us-east-1': 0,
      'us-east-2': 0,
      'us-west-1': 0,
      'us-west-2': 0,

    }
  }

  componentDidMount() {

    PieChartService.getUsageByRegion().then((response) => {
      this.setState({ usageByRegion: response.data })
    })
  }

  render() {
    return (
      <Card>
        <CardHeader title="USO DE SERVIÇOS POR REGIÕES"/>
        <Divider />
        <CardContent>
          <Chart className="graf2"
            width={'auto'}
            height={'450px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Task', 'Hours per Day'],
              ['Asia Pacific (Mumbai)', this.state.usageByRegion['ap-south-1']],
              ['EU (Ireland)', this.state.usageByRegion['eu-west-1']],
              ['Asia Pacific (Seoul)', this.state.usageByRegion['ap-northeast-2']],
              ['Asia Pacific (Tokyo)', this.state.usageByRegion['ap-northeast-1']],
              ['South America (São Paulo)', this.state.usageByRegion['sa-east-1']],
              ['Asia Pacific (Singapore)', this.state.usageByRegion['ap-southeast-1']],
              ['Asia Pacific (Sydney)', this.state.usageByRegion['ap-southeast-2']],
              ['EU (Frankfurt)', this.state.usageByRegion['eu-central-1']],
              ['US East (N. Virginia)', this.state.usageByRegion['eu-west-1']],
              ['US East (Ohio)', this.state.usageByRegion['us-east-2']],
              ['US West (N. California)', this.state.usageByRegion['us-west-1']],
              ['US West (Oregon)', this.state.usageByRegion['us-west-2']],
            ]}
            rootProps={{ 'data-testid': '1' }}
          />
        </CardContent>
      </Card>

    )
  }

}

export default PieChartUsage
