import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import Budget from 'src/components/dashboard//Budget';
import CostByDay from 'src/components/dashboard/CostByDay';
import BarChart from 'src/components/dashboard//BarChart';
import TasksProgress from 'src/components/dashboard/UsageTotal';
import CostDay from 'src/components/dashboard/CostDay';
import PieChartUsage from 'src/components/dashboard/PieChartUsage';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <CostDay />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TasksProgress />
          </Grid>
         
          <Grid
            item
            lg={6}
            md={12}
            xl={6}
            xs={12}
          >
            <BarChart />
          </Grid>

          <Grid
            item
            lg={6}
            md={6}
            xl={6}
            xs={12}
          >
            <PieChartUsage sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <CostByDay sx={{ height: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
