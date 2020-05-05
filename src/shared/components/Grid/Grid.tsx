import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const Grid = (props:any) => {
  return (
      <React.Fragment>
        <BootstrapTable
          keyField="id"
          data={ props.data }
          columns={ props.columns }
      />
      </React.Fragment>
    );
}

export default Grid


