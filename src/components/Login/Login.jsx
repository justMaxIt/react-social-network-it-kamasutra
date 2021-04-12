import React from "react";

const Login = (props) => {
  return <div>
<h1>LOGIN</h1>
<form>
  <div>
    <input placeholder={"Login"} />
  </div>
  <div>
    <input placeholder={"Password"} />
  </div>
  <div>
    <input type={"Checkbox"} />remember me
  </div>
  <button>Login</button>
</form>
  </div>
  ;
};

export default Login;
