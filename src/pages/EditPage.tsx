import React from 'react'
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import EditForm from '../components/editForm'
import { IUser, IUserData } from '../interfaces';


type RouteParams = { id: string, param2?: string }
interface PropsType extends RouteComponentProps<RouteParams> {
  users: IUser[],
}

const EditPage: React.FC<PropsType> = ({ users, match }) => {
  const user: IUser = users.filter((u: IUser) => u.id.toString() === match.params.id)[0];
  return (
    <EditForm user={user}/>
  )
}
function MapStateToProps(state: IUserData): IUserData {
  return {
    users: state.users
  };
}

export default withRouter(connect(MapStateToProps)(EditPage));
