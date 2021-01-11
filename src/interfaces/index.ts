import { EDIT_USER } from "../constants";

type Geo = {
  lat: string | number;
  lng: string | number;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo?: Geo;
};

export interface IUser {
  readonly id: number | string;
  name: string;
  email: string;
  is_admin: boolean;
  age: number | string;
  address: Address;
  username: string;
  firstName?: string;
  lastName?: string;
}

export interface IUserData {
  users: IUser[];
}


//ACTIONS

export interface IEditUserAction {
  type: typeof EDIT_USER;
  payload: {
    user: IUser;
  };
}
