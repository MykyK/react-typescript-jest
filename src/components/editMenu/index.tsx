import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';
import { withRouter, RouteComponentProps } from 'react-router-dom';


interface PropsType extends RouteComponentProps {
  id: string | number,
}


 const EditMenu:React.FC<PropsType> = ({history, id}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>):void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = ():void => {
    setAnchorEl(null);
  };

  const handleRoute = ():void => {
    history.push(`user/${id}`)
  }

  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}><EditIcon/></IconButton >
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleRoute}>Edit</MenuItem>
      </Menu>
    </div>
  );
}

export default withRouter(EditMenu);
