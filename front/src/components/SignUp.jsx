import { useState } from "react";
const SignUp = () => {
  const [alertVisible, setAlertVisible] = useState("hidden");
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    let mail = e.target[0].value;
    let name = e.target[1].value;
    let pass1 = e.target[2].value;
    let pass2 = e.target[3].value;

    if (mail === "" || name === "" || pass1 === "" || pass2 === "") {
      setAlertVisible('block')
    } else {

    }
  };

  const FormInput = (props) => {
    return (
      <input
        type={props.type}
        value={props.value}
        className={
          "p-2 bg-transparent border-solid border-2 border-neutral-600 rounded-lg w-4/5 m-1 hover:border-neutral-400 focus:border-neutral-200 focus:outline-none enabled:outline-none duration-300 placeholder:text-neutral-600 " +
          props.className
        }
        placeholder={props.placeholder}
      />
    );
  };

  return (
    <div className="mt-8 w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="text-neutral-200 h-auto w-1/4 text-center p-4"
      >
        <h2>Create your account</h2>
        <FormInput type="type" placeholder="Enter your email"/>
        <FormInput type="text" placeholder="Username"/>
        <FormInput type="password" placeholder="Password"/>
        <br />
        <FormInput type="password" placeholder="Repeat your password"/>
        <br />
        <FormInput className="w-1/2" type="submit" value="Submit" />
        <br />
        <div className={"text-gruvbox-red " + alertVisible}>
          You need to fill all the fields
        </div>
      </form>
    </div>
  );
};

export default SignUp;
