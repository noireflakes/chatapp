import { use, useState, useEffect } from "react";
import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import { useRef } from "react";
import {
  collection,
  getDocs,
  onSnapshot,
  doc,
  query,
  orderBy,
} from "firebase/firestore";

import Navbar from "./components/navbar/navbar";
import SignIn from "./components/signin/signin";
import MessageDisplay from "./components/message-display/MessageDisplay";
import MessageForm from "./components/message-form/MessageForm";

function App() {
  const [isLogin] = useAuthState(auth);
  const messageRef = collection(db, "messages");
  const q = query(messageRef, orderBy("createdAt", "asc"));

  const [Messages, setMessages] = useState([]);
  const chatroomRef = useRef();

  //Update and Listen for new Messages
  useEffect(() => {
    if (!auth.currentUser) {
      return;
    }
    const unsubscribe = onSnapshot(q, (query) => {
      const messageData = [];
      query.forEach((data) => {
        const message = data.data();
        messageData.push({
          id: data.id,
          text: message.text,
          uid: message.uid,
          photoURL: message.photoURL,
          createdAt: message.createdAt,
          displayName: message.displayName,
        });
        console.log("this is the time", message.createdAt.toDate());
      });
      setMessages(messageData);
    });
    return () => unsubscribe();
  }, [isLogin]);

  //autoScroll when new Message
  useEffect(() => {
    if (chatroomRef.current) {
      chatroomRef.current.scrollTop = chatroomRef.current.scrollHeight;
    }
  }, [Messages]);

  return (
    <>
      {isLogin ? (
        <div className="page">
          <Navbar />

          <div className="chatroom" ref={chatroomRef}>
            {Messages.map((msg) => {
              return <MessageDisplay message={msg} key={msg.id} />;
            })}
          </div>

          <MessageForm />
        </div>
      ) : (
        <div className="homepage page">
          <h1>Chat App</h1>
          <SignIn />
        </div>
      )}
    </>
  );
}

export default App;
