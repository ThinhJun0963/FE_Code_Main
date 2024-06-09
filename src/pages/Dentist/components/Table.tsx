import {
  DataGrid,
  GridColDef,
  GridFilterModel,
  GridRowsProp,
  GridRowParams,
} from "@mui/x-data-grid";

interface TableProps {
  columns: GridColDef[];
  rows: GridRowsProp;
  filterModel?: GridFilterModel;
  checkboxSelection?: boolean;
  disableRowSelectionOnClick?: boolean;
  onRowClick?: (params: GridRowParams) => void;
}

function Table({
  columns,
  rows,
  filterModel,
  onRowClick,
  ...rest
}: TableProps) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        filterModel={filterModel}
        onRowClick={onRowClick}
        {...rest}
      />
    </div>
  );
}

export default Table;
