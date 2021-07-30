import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import UsageTypeTable from 'src/components/table/UsageTypeTable';
import customers from 'src/__mocks__/customers';

const CustomerList = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Box >
          <UsageTypeTable customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default CustomerList;
