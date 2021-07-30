import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import React from 'react';
import TotalValueService from 'src/services/TotalValueService';
import ConvertService from 'src/services/ConvertService';

class Budget extends React.Component {

  state = {
    totalUnblendedCost: 0,

  }


  componentDidMount() {

    TotalValueService.getTotalUnblendedCost().then((response) => {
      this.setState({ totalUnblendedCost: response.data })

    })
  }

  render() {
    return (<Card
      sx={{ height: '100%' }}
    >
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
              CUSTO TOTAL
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
             R$ {ConvertService.convertDollar(this.state.totalUnblendedCost).toFixed(2)}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: red[600],
                height: 60,
                width: 60
              }}
            >
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        >
        </Box>
      </CardContent>
    </Card>
    )
  }
}


export default Budget;
