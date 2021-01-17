import React from 'react'
import EditForm from '../components/editForm'
import { IUser, IUserData } from '../interfaces';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

type RouteParams = { id: string, param2?: string }


const EditPage: React.FC = () => {
  const users = useSelector((state: IUserData) => state.users);
  const params: RouteParams = useParams();
  const user: IUser = users.filter((u: IUser) => u.id.toString() === params.id)[0];
  return (
    <EditForm user={user} />
  )
}

export default EditPage;
