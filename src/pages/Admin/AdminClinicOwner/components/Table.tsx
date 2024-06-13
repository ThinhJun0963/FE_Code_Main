import * as React from 'react'
import { DataGrid, GridColDef, GridFilterModel, GridRowsProp } from '@mui/x-data-grid'
import Button from '@mui/material/Button';

interface TableProps {
    columns: GridColDef[];
    rows: GridRowsProp;
    // filterModel?: GridFilterModel;
}


function Table({ columns, rows }: TableProps) {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                // filterModel={filterModel}
                disableColumnFilter  
                disableColumnMenu   
                localeText={{ footerRowSelected: () => void('') }} 
                pagination
                sx={{
                    '& .MuiDataGrid-cell:focus, & .MuiDataGrid-row:focus, & .MuiDataGrid-colCell:focus': {
                        outline: 'none !important',
                    },
                   '& .MuiDataGrid-columnHeader:focus': {
                        outline: 'none !important',
                    },
                }}
            />
        </div>
    )
}

export default Table