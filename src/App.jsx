import { useState } from "react";
import "./App.css";
import FormInputs from "./components/FormInputs";

function App() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confrimPassword: "",
  });

  let inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage: "Username should be 3-16 not any special charter",
      label: "User Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      require: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "Invalid Email",
      label: "Email",
      require: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "birthday",

      label: "Birthday",
      require: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "should be 8-20 include letter number special char",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      label: "Password",
      require: true,
    },
    {
      id: 5,
      name: "confrimPassword",
      type: "password",
      placeholder: "Confrim Password",
      errorMessage: "Passowrds Don't Match",
      pattern: userData.password,
      label: "Confrim Password",
      require: true,
    },
  ];

  const submitHandel = (e) => {
    e.preventDefault();
  };
  const onchangeHandel = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  console.log(userData);
  return (
    <div className="app">
      <form className="form" onSubmit={submitHandel}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInputs
            value={userData[input.name]}
            key={input.id}
            {...input}
            onChange={onchangeHandel}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
