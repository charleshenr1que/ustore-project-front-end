import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import React from 'react';
import TotalUsage from 'src/services/TotalUsage';

class UsageTotal extends React.Component{

  state={
      totalUsage:0
  }

  componentDidMount(){
    TotalUsage.getTotaUsage().then((response) => {
      this.setState({ totalUsage: response.data })

    })

  }
  render(){
      return(
      <Card>
        <CardContent>
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: 'space-between' }}
          >
            <Grid item>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="h6"
              >
               TOTAL DE DADOS USADOS
              </Typography>
              <Typography
                color="textPrimary"
                variant="h3"
              >
               {(this.state.totalUsage).toFixed(2)}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: orange[600],
                  height: 56,
                  width: 56
                }}
              >
                <InsertChartIcon />
              </Avatar>
            </Grid>
          </Grid>
          <Box sx={{ pt: 3 }}>
            <LinearProgress
              value={75.5}
              variant="determinate"
            />
          </Box>
        </CardContent>
      </Card>)

  }

}


export default UsageTotal;
