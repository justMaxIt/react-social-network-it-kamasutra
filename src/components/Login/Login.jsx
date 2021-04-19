import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import {login} from "../../redux/authReducer"

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
  <button>Login</button>
</form>)
  };

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)



const Login = (props) => {
  const onSubmit = (formData)=>{
props.login(formData.email, formData.password, formData.rememberMe);
  }
  return <div>
<h1>LOGIN</h1>
<LoginReduxForm onSubmit={onSubmit}/>
  </div>
  ;
};

export default connect(null, {login})(Login);
