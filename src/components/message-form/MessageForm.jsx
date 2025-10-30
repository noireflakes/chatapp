import { auth } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";

import "./MessageForm.css";

function MessageForm() {
  const messageRef = collection(db, "messages");
  const [FormValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL, displayName } = auth.currentUser;
    try {
      const message = await addDoc(messageRef, {
        text: FormValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL,
        displayName,
      });
    } catch (error) {
      console.error(`error print:`, error);
    }
    setFormValue("");
  };
  return (
    <div className="form-cont">
      <form onSubmit={sendMessage}>
        <input
          type="text"
          onChange={(e) => {
            setFormValue(e.target.value);
          }}
          placeholder="Message Here"
          value={FormValue}
        />
        <button className="sendbtn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
export default MessageForm;
