import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { IEditUserAction, IUser } from '../../interfaces';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { actionEditUser } from './../../actions';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }),
);



interface PropsType extends RouteComponentProps {
  user: IUser,
  actionEditUser: (arg: IUser) => IEditUserAction
}

enum HandleTypes {
  FirstName = 'FirstName',
  LastName = 'LastName',
  Email = 'Email',
  Age = 'Age'
}

const EditForm: React.FC<PropsType> = ({ user, actionEditUser, history }) => {
  const classes = useStyles();

  const [userData, setUserData] = useState(user)
  const [open, setOpen] = useState(false)
  const [validation, setValidation] = useState('')

  const emailRegex = new RegExp(/\S+@\S+\.\S+/);

  const emailValidator = (value: string): string =>
    emailRegex.test(value) ? "" : "Please enter a valid email.";


  const fieldValidator = (): boolean => {
    return userData.name.length > 1 && !validation.length && userData.age ? false : true
  }
  const handleSetData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: string): void => {
    if (type === 'FirstName') {
      setUserData(prev => prev = { ...prev, name: `${e.target.value} ${prev.name.split(' ')[1]}` })
    } else if (type === 'LastName') {
      setUserData(prev => prev = { ...prev, name: `${prev.name.split(' ')[0]} ${e.target.value}` })
    }
    else if (type === 'Email') {
      if (!!emailValidator(e.target.value)) {
        setValidation(emailValidator(e.target.value))
      } else {
        setUserData(prev => prev = { ...prev, email: e.target.value })
        setValidation(emailValidator(e.target.value))
      }
    }
    else if (type === 'Age') {
      setUserData(prev => prev = { ...prev, age: e.target.value })
    }
  }

  const handleClick = (data: IUser): void => {
    actionEditUser(data)
    setOpen(true)
    setTimeout(() => {
      setOpen(false)
      history.push('/')
    }, 600)
  }

  return (
    <>
      <form className={classes.root} autoComplete="off">
        <div className="text-field-wrapper">
          <TextField
            inputProps={{ "data-testid": "first-name-input" }}
            label="First Name" defaultValue={user.name.split(' ')[0]}
            onChange={e => handleSetData(e, HandleTypes.FirstName)}
          />
          <TextField
            inputProps={{ "data-testid": "last-name-input" }}
            label="Last Name"
            onChange={e => handleSetData(e, HandleTypes.LastName)}
            defaultValue={user.name.split(' ')[1]}
          />
          <TextField
            inputProps={{ "data-testid": "email-input" }}
            label="Email"
            error={!!validation}
            onChange={e => handleSetData(e, HandleTypes.Email)}
            defaultValue={user.email}
            helperText={validation}
          />
          <TextField
            inputProps={{ "data-testid": "age-input" }}
            label="Age"
            type="number"
            defaultValue={user.age}
            onChange={e => handleSetData(e, HandleTypes.Age)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div className="button_wrapper">
            <Button
              disabled={fieldValidator()}
              variant="contained"
              color="primary"
              onClick={() => handleClick(userData)}
            >
              Submit
          </Button>
            <Button
              variant="contained"
              onClick={() => history.push('/')}
            >
              Back
          </Button>
          </div>
        </div>
      </form>
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
}


export default withRouter(
  connect(
    null,
    { actionEditUser }
  )(EditForm))
