import React, { Dispatch, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { IUser } from '../../interfaces';
import { Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { emailValidator } from '../../utils';
import { actionEditUser } from '../../actions/index'

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



interface PropsType {
  user: IUser,
}

const EditForm = (props: PropsType) => {
  const { user } = props
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
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



  const fieldValidator = (): boolean => {
    return userData.name.length > 1 && !validation.length && userData.age ? false : true
  }


  const handleClick = (data: IUser): void => {
    dispatch(actionEditUser(data))
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


export default EditForm;
