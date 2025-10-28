import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
    <button id="btn" onClick={SignInGoogle}>
      sign in
    </button>
  );
}
export default SignIn;
