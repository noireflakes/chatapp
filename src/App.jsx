import { use, useState, useEffect } from "react";
import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";

import {
  collection,
  getDocs,
  onSnapshot,
  doc,
  query,
  orderBy,
} from "firebase/firestore";

import SignIn from "./components/signin/signin";
import MessageDisplay from "./components/message-display/MessageDisplay";
import MessageForm from "./components/message-form/MessageForm";
import { subscribe } from "firebase/data-connect";

function App() {
  const [isLogin] = useAuthState(auth);
  const messageRef = collection(db, "messages");
  const q = query(messageRef, orderBy("createdAt", "asc"));

  const [Messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubcribe = onSnapshot(q, (query) => {
      const messageData = [];
      query.forEach((data) => {
        const message = data.data();
        messageData.push({
          id: data.id,
          text: message.text,
          uid: message.uid,
          photoURL: message.photoURL,
        });
      });
      setMessages(messageData);
    });
    return () => unsubcribe();
  }, []);

  useEffect(() => {
    console.log("this is the usestate for message", Messages);
  });

  function messagestate() {
    console.log("this is the usestate for message", Messages);
  }

  return (
    <>
      {isLogin ? (
        <div>
          <button className="sign-out" onClick={() => auth.signOut()}>
            Sign Out
          </button>
          <div className="chatroom">
            {Messages.map((msg) => {
              return <MessageDisplay message={msg} key={msg.id} />;
            })}
          </div>

          <MessageForm />
          <button onClick={messagestate}>messagstate</button>
        </div>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default App;
