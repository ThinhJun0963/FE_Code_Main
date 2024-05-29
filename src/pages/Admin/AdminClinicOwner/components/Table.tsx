import * as React from 'react'
import { DataGrid, GridColDef, GridFilterModel, GridRowsProp } from '@mui/x-data-grid'
import Button from '@mui/material/Button';

interface TableProps {
    columns: GridColDef[];
    rows: GridRowsProp;
    filterModel?: GridFilterModel;
    checkboxSelection?: boolean;
    disableRowSelectionOnClick?: boolean;
}


function Table({ columns, rows, filterModel, ...rest }: TableProps) {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                filterModel={filterModel}
                {...rest}
            />
        </div>
    )
}

export default Table