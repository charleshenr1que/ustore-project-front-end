import {
  Card,
  CardContent,
  CardHeader,
  Divider
} from '@material-ui/core';
import React from 'react';
import Chart from "react-google-charts";
import ConvertService from 'src/services/ConvertService';
import UserService from 'src/services/UserService';

class BarChart extends React.Component {

  state = {
    costByProductCode: {
      AWSCloudTrail: 0,
      AWSDataTransfer: 0,
      AWSELB: 0,
      AWSQueueService: 0,
      AmazonCloudWatch: 0,
      AmazonEC2: 0,
      AmazonS3: 0,
    }

  }

  componentDidMount() {

    UserService.getCostByProduct().then((response) => {
      this.setState({ costByProductCode: response.data })

    })
  }

  render() {
    return (
      <Card>
        <CardHeader title="CUSTOS POR SERVIÇOS"/>
        <Divider />
        <CardContent>
          <Chart className="graf"
            width={'auto'}
            height={450}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['City', 'AmazonS3', 'AWS Data Transfer', 'AWSELB', 'Amazon CloudWatch', 'AWS Cloud Trail', 'AmazonEC2'],
              ['Serviço', ConvertService.convertDollar(this.state.costByProductCode.AmazonS3), ConvertService.convertDollar(this.state.costByProductCode.AWSDataTransfer), ConvertService.convertDollar(this.state.costByProductCode.AWSELB), ConvertService.convertDollar(this.state.costByProductCode.AmazonCloudWatch),
                ConvertService.convertDollar(this.state.costByProductCode.AWSCloudTrail), ConvertService.convertDollar(this.state.costByProductCode.AmazonEC2)],
            ]}
            options={{
              chartArea: { width: '50%' },
              vAxis: {
                title: 'Custos',
              },
            }}
            legendToggle
          />
        </CardContent>
      </Card>
    )
  }
}


export default BarChart