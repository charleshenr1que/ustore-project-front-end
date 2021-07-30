import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import TableUsageService from 'src/services/TableUsageService';

const columns = [
  { id: 'type_service', label: 'Tipo de serviço', minWidth: 170},
  { id: 'usage_data', label: 'Uso de dados', minWidth: 100, format: (value) => value.toFixed(2) },
  { id: 'cost_service', label: 'Custo por serviço', minWidth: 100, format: (value) => value.toFixed(2) },
];

function createData(type_service, usage_data, cost_service) {
  return { type_service, usage_data, cost_service};
}

class UsageTypeTable extends React.Component {
  state= {
    list: [],
    page: 0,
    rowsPerPage: 10,
  }

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  }

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value, page: 0 })
  }

  componentDidMount() {
    TableUsageService.getTableUsage().then((response) => {
      this.setState({ list: response.data })
    })
  }
  render() {
    const {page, rowsPerPage} = this.state
    const rows = this.state.list.map(item => 
      createData(item.usage_type, item.usage_amount, item.unblended_cost)
      )
    return (
      <Paper style={{ width: '100%' }}>
        <TableContainer style={{ maxHeight: 700}}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={this.handleChangePage}
          onRowsPerPageChange={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

export default UsageTypeTable