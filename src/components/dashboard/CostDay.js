import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import React from 'react';
import ConvertService from 'src/services/ConvertService';
import TotalValueService from 'src/services/TotalValueService';

class CostDay extends React.Component {

  state = {
    totalUnblendedCost: 0,
  }
  componentDidMount() {

    TotalValueService.getTotalUnblendedCost().then((response) => {
      this.setState({ totalUnblendedCost: response.data })

    })
  }

  render() {
    return (
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
                MÉDIA DE CUSTO (DIA)
              </Typography>
              <Typography
                color="textPrimary"
                variant="h3"
              >
                R$ {ConvertService.convertDollar(this.state.totalUnblendedCost / 31).toFixed(2)}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: green[600],
                  height: 56,
                  width: 56
                }}
              >
                <AttachMoneyIcon />
              </Avatar>
            </Grid>
          </Grid>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              pt: 2
            }}
          >
            <ArrowUpwardIcon sx={{ color: green[900] }} />
          </Box>
        </CardContent>
      </Card>
    )
  }
}

export default CostDay;
