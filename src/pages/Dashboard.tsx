
import React from 'react'
import { connect } from 'react-redux';
import UserList from '../components/userList'
import { IUserData } from '../interfaces';


 const Dashboard:React.FC<IUserData> = ({users}) => {
  return (
    <div>
      <UserList users={users}/>
    </div>
  )
}

function MapStateToProps(state: IUserData): IUserData {
  return {
    users: state.users
  };
}

export default connect(MapStateToProps)(Dashboard);
