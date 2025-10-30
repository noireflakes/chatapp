import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

import "./navbar.css";

function Navbar() {
  const { uid, photoURL, displayName } = auth.currentUser;
  return (
    <nav>
      <div className="nav-content">
        <img src={photoURL} alt="profile" />
        <h4>{displayName || "no-name"}</h4>
      </div>
      <h1>ChatRoom</h1>
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    </nav>
  );
}

export default Navbar;
