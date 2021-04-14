import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (<form onSubmit={props.handleSubmit}>
     {/* e.preventDefault
     get all form data and put them to object
     props.onSubmit(formData) */}
  <div>
    <Field placeholder={"Login"} name={"login"} component={"input"}/>
  </div>
  <div>
    <Field placeholder={"Password"} name={"password"}  component={"input"} />
  </div>
  <div>
    <Field component={"input"} name={"rememberMe"} type={"Checkbox"} />remember me
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
