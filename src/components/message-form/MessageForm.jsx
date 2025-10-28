import { auth } from "../../firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";

function MessageForm() {
  const messageRef = collection(db, "messages");
  const [FormValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    try {
      const message = await addDoc(messageRef, {
        text: FormValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL,
      });
      console.log("message send");
    } catch (error) {
      console.error(`error print:`, error);
    }
    setFormValue("");
  };
  return (
    <div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          onChange={(e) => {
            setFormValue(e.target.value);
          }}
          placeholder="Message Here"
          value={FormValue}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
export default MessageForm;
