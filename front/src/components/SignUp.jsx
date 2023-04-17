const SignUp = () => {
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    let mail = e.target[0].value;
    let name = e.target[1].value;
    let pass1 = e.target[2].value;
    let pass2 = e.target[3].value;

    if (mail === "" || name === "" || pass1 === "" || pass2 === "") {
    }
  };

  const FormInput = ({ type, value, className }) => {
    return (
      <input
        type={type}
        value={value}
        className={"p-2 bg-transparent border-solid border-2 border-gruvbox-bg2 rounded-lg w-4/5 m-1 hover:border-gruvbox-bg4 focus:border-gruvbox-light-font focus:outline-none enabled:outline-none duration-300 " + className}
      />
    );
  };

  return (
    <div className="mt-8 w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="text-gruvbox-light-font h-auto w-1/4 text-center p-4"
      >
        <h2>Create your account</h2>
        <label>Enter your email</label>
        <FormInput type="type" />
        <label>Username</label>
        <FormInput type="text" />
        <label>Password</label>
        <FormInput type="password" />
        <br />
        <label>Repeat your password</label>
        <FormInput type="password" />
        <br />
        <FormInput className="w-1/2" type="submit" value="Submit"/>
        <br />
        <div className="text-gruvbox-red ">You need to fill all the fields</div>
      </form>
    </div>
  );
};

export default SignUp;
