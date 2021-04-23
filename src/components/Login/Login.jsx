import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import {login} from "../../redux/authReducer"
import { Redirect } from "react-router";
import style from "./../common/FormsControls/FormsControls.module.css"

const maxLength50 = maxLengthCreator(50)
const LoginForm = (props) => {
  return (<form onSubmit={props.handleSubmit}>
     {/* e.preventDefault
     get all form data and put them to object
     props.onSubmit(formData) */}
  <div>
    <Field placeholder={"Email"} name={"email"} component={Input} validate={[required, maxLength50]} />
  </div>
  <div>
    <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required, maxLength50]} />
  </div>
  <div>
    <Field component={Input} name={"rememberMe"} type={"Checkbox"} />remember me
  </div>
  {props.error && <div className={style.formSummaryError}>{props.error}</div>}
  <button>Login</button>
</form>)
  };

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)



const Login = (props) => {
  const onSubmit = (formData)=>{
    console.log(props)
props.login(formData.email, formData.password, formData.rememberMe);
  }

if(props.isAuth){
  return <Redirect to={"profile"} />
}

  return <div>
<h1>LOGIN</h1>
<LoginReduxForm onSubmit={onSubmit}/>
  </div>
  ;
};
const mapStateToProps = (state)=> ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
