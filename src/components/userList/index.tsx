import * as React from 'react';
import { DataGrid, ColDef, CellParams } from '@material-ui/data-grid';
import EditMenu from '../editMenu';
import { userState } from '../../interfaces';
import { Checkbox, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from "../../actions";

const columns: ColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'First name', width: 230 },
  { field: 'email', headerName: 'Email', width: 230 },
  {
    field: 'is_admin', headerName: 'Admin', width: 130,
    disableColumnMenu: true,
    disableClickEventBubbling: true,
    renderCell: (params: CellParams) => {
      return <Checkbox
        defaultChecked={params.row.is_admin}
        color="primary"
        disabled
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />;
    }
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: "",
    headerName: "Action",
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    disableClickEventBubbling: true,
    renderCell: (params: CellParams) => {
      return <EditMenu key={params.row.id} id={params.row.id} />;
    }
  },
];


const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: userState) => state.users);
  const loading = useSelector((state: userState) => state.loading);
  return (
    <>
      <div className="user-list-wrapper" style={{ height: 400, width: '100%' }}>
        <DataGrid rows={users} columns={columns} pageSize={5} loading={loading} />
      </div>
      {
        !users.length && (
          <Button onClick={() => dispatch(fetchPosts())}>load users</Button>
        )
      }
    </>
  );
}


export default UserList;
