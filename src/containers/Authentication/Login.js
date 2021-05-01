import Parse from "parse";

const Login = (event, input, setStatus) => {
  setStatus("loading");
  event.preventDefault();

  console.log(input);

  //Call API for login user
  Parse.User.logIn(input.UserName, input.Password)
    .then((response) => {
      const currentUser = Parse.User.current();
      //All attributes store at this Variable [SESSION]
      console.log(currentUser);

      if (typeof document !== "undefined") {
        setStatus("succeed");
        console.log("User LoggedIn", response);
      }
    })
    .catch((error) => {
      if (typeof document !== "undefined") {
        setStatus("error");
        console.error("Error while Logging in user", error);
      }
    });
};
export default Login;
