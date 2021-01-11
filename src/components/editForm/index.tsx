import React, { useEffect, useState } from 'react';
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



const EditForm: React.FC<PropsType> = ({ user, actionEditUser, history }) => {
  const classes = useStyles();

  const [userData, setUserData] = useState(user)
  const [open, setOpen] = useState(false)
  const [validation, setValidation] = useState('')
  const [firstName, setFirstName] = useState(user.name.split(' ')[0])
  const [lastName, setLastName] = useState(user.name.split(' ')[1])
  const [email, setEmail] = useState(user.email)
  const [age, setAge] = useState(user.age)

  useEffect(() => {
    setUserData(prev => prev = { ...prev, name: `${firstName} ${prev.name.split(' ')[1]}` })
  }, [firstName])


  useEffect(() => {
    setUserData(prev => prev = { ...prev, name: `${prev.name.split(' ')[0]} ${lastName}` })
  }, [lastName])


  useEffect(() => {
    if (!!emailValidator(email)) {
      setValidation(emailValidator(email))
      setUserData(prev => prev = { ...prev, age: age })
    } else {
      setUserData(prev => prev = { ...prev, age: age, email: email })
      setValidation(emailValidator(email))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, age])


  const emailRegex = new RegExp(/\S+@\S+\.\S+/);

  const emailValidator = (value: string): string =>
    emailRegex.test(value) ? "" : "Please enter a valid email.";


  const fieldValidator = (): boolean => {
    return userData.name.length > 1 && !validation.length && userData.age ? false : true
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
            value={firstName}
            label="First Name"
            onChange={e => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
          <TextField
            label="Email"
            error={!!validation}
            value={email}
            onChange={e => setEmail(e.target.value)}
            helperText={validation}
          />
          <TextField
            label="Age"
            type="number"
            value={age}
            InputProps={{ inputProps: { min: 0 } }}
            onChange={e => setAge(e.target.value)}
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
