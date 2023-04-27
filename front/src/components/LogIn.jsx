import { useState } from "react";

const LogIn = () => {
  const [alertVisible, setAlertVisible] = useState("hidden");
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    let name = e.target[0].value;
    let pass = e.target[1].value;

    if (pass === "" || name === "") {
      setAlertVisible("block");
      return;
    } else {
      setAlertVisible("hidden");
    }
  };

  return (
    <div className="mt-8 w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="text-neutral-200 h-auto w-1/4 text-center p-4"
      >
        <h2>Log in to your account</h2>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <div className={"text-gruvbox-red " + alertVisible}>
          You need to fill all the fields
        </div>
      </form>
    </div>
  );
};

export default LogIn;
