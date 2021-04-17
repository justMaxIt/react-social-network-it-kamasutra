import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)
const LoginForm = (props) => {
  return (<form onSubmit={props.handleSubmit}>
     {/* e.preventDefault
     get all form data and put them to object
     props.onSubmit(formData) */}
  <div>
    <Field placeholder={"Login"} name={"login"} component={Input} validate={[required, maxLength10]} />
  </div>
  <div>
    <Field placeholder={"Password"} name={"password"}  component={Input} validate={[required, maxLength10]} />
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
console.log(formData);
  }
  return <div>
<h1>LOGIN</h1>
<LoginReduxForm onSubmit={onSubmit}/>
  </div>
  ;
};

export default Login;
