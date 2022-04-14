import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, UserLogin } from "../../../../state/reducer/userSlice";

export const useLogin = () => {
  const dispatch = useDispatch();

  const [{ username, uerror }, setUsername] = useState({
    username: "",
    uerror: "",
  });
  const [{ password, perror }, setPassword] = useState({
    password: "",
    perror: "",
  });
  const [loging, setLoging] = useState(false);

  useEffect(() => {
    if (loging) {
      signin();
      setLoging(false);
    }
  }, [loging]);

  const signin = () => {
    if (username && username !== "" && password && password !== "") {
      const trimmedUsername = username.trim();
      const trimmedPassword = password.trim();
      const data: UserLogin = {
        username: trimmedUsername,
        password: trimmedPassword,
      };
      dispatch(userLogin(data));
    } else {
      if (!username || username === "") {
        setUsername((prev) => ({ ...prev, uerror: "Please fill in username" }));
      } else {
        setUsername((prev) => ({ ...prev, uerror: "" }));
      }
      if (!password || password === "") {
        setPassword((prev) => ({ ...prev, perror: "Please fill in username" }));
      } else {
        setPassword((prev) => ({ ...prev, perror: "" }));
      }
    }
  };

  return {
    inputs: { perror, uerror },
    setPassword,
    setUsername,
    setLoging,
    loging,
  };
};
