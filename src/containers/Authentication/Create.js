import Parse from "parse";

const Create = (event, input, setStatus) => {
  //setStatus connected to STATUS_FLAG dispacher prop of parent
  setStatus("loading");
  event.preventDefault();

  const user = new Parse.User();

  //setting create user info for use in API
  user.set("username", input.UserName);
  user.set("email", input.Email);
  user.set("password", input.Password);

  user
    .signUp()
    .then((response) => {
      //Set  Response state
      setStatus("succeed");
      if (typeof document !== "undefined")
        console.log("User signed up", response);
    })
    .catch((error) => {
      setStatus("error");
      if (typeof document !== "undefined") {
        //Set response state
        console.error("Error while signing up user", error);
      }
    });
};

export default Create;
