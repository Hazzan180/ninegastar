import { Form, Input } from "../../components/Form/Form.component";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./auth.styles.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Utils/firebase/firebase.utils";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [hide, setHide] = useState(true);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // Variables
  const show = hide ? "password" : "text";

  //   click Handlers
  const handleOnChange = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleShowPassword = () => {
    setHide(!hide);
  };

  const HandleLogin = async (e) => {
    e.preventDefault();
    const { password, email } = formData;
    signInWithEmailAndPassword(email, password);
  };

  //   effects

  useEffect(() => {
    if (user) {
      navigate("/explore-music");
    }
  }, [user]);

  return (
    <div className="login-wrapper">
      <div className="auth-form-container">
        <h2>Login</h2>

        <p>
          dont have an account ?
          <Link to={"/sign-up"} className="link">
            <span>Sign up</span>
          </Link>
        </p>
        <Form
          title={"Login"}
          action={"Login"}
          onSubmit={HandleLogin}
          isLoading={loading}
        >
          <Input
            label={"Email"}
            type="email"
            required
            name="email"
            onChange={handleOnChange}
          />
          <Input
            label={"password"}
            type={show}
            required
            click={handleShowPassword}
            name="password"
            onChange={handleOnChange}
          />
        </Form>
      </div>

      <div className="auth-image-container">
        <img src="images/dance.jpg" alt="decorativ" />
      </div>
    </div>
  );
};
