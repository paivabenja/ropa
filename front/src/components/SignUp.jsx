import "../styles/SignUp.css";

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

  const input =
    "p-2 bg-transparent border-solid border-2 border-gruvbox-bg2 hover:border-gruvbox-bg4 focus:border-gruvbox-light-font focus:outline-none enabled:outline-none";

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="signup text-gruvbox-light-font h-auto w-1/4 text-center p-4"
      >
        <h2 className="borde">Create your account</h2>
        <label>Enter your email</label>
        <input type="email" className={input} />
        <label>Username</label>
        <input type="text" className={input} />
        <label>Password</label>
        <input type="password" className={input} />
        <br />
        <label>Repeat your password</label>
        <input type="password" className={input} />
        <br />
        <input type="submit" value="submit" className={input} />
        <br />
        <h4 className="text-gruvbox-red ">You need to fill all the fields</h4>
      </form>
    </div>
  );
};

export default SignUp;
