import { Link } from "react-router-dom";
import { Form, Input } from "../../components/Form/Form.component";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../Utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";

import "./auth.styles.css";
import { useEffect, useState } from "react";

export const SignUp = () => {
  const navigate = useNavigate();
  const [userError, setUserError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [hide, setHide] = useState(true);
  const show = hide ? "password" : "text";

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

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
  const handleSignUp = (e) => {
    e.preventDefault();
    setUserError("");
    const { confirmPassword, password, email } = formData;
    if (confirmPassword !== password) {
      setUserError("! password do not match");
    }

    createUserWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    if (user) {
      navigate("/explore-music");
    }
  }, [user]);

  return (
    <div className="login-wrapper">
      <div className="auth-form-container">
        <h2>Get Started</h2>
        <p>
          Already have an account ?
          <Link to={"/login"} className="link">
            <span>Login</span>
          </Link>
        </p>
        <Form
          title={"Create Account"}
          action={"Create Account"}
          onSubmit={handleSignUp}
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
          <Input
            label={"password"}
            type={show}
            required
            click={handleShowPassword}
            name="confirmPassword"
            onChange={handleOnChange}
          />
          {userError ||
            (error && (
              <p
                style={{
                  color: "var(--error)",
                }}
              >
                {userError || error.message}
              </p>
            ))}
        </Form>
      </div>

      <div className="auth-image-container">
        <img src="images/singer.jpg" alt="artist" />
      </div>
    </div>
  );
};
