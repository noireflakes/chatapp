import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import "./signin.css";
function SignIn() {
  const btn = document.getElementById("btn");
  const SignInGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch {
      console.error("error", code);
    }
  };

  return (
    <div>
      <h5>Sign In:</h5>
      <a id="btn" onClick={SignInGoogle}>
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google"
        ></img>
      </a>
    </div>
  );
}
export default SignIn;
