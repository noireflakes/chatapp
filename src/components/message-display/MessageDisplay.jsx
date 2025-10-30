import "./messageDisplay.css";
import { auth } from "../../firebase";
function MessageDisplay({ message }) {
  //formats time
  function formatMessageTime(timestamp) {
    if (!timestamp) return "";

    const date = timestamp.toDate();
    const now = new Date();

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const messageDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    const diffMs = today - messageDate;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    const time = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    if (diffDays === 0) return `Today at ${time}`;
    if (diffDays === 1) return `Yesterday at ${time}`;
    if (diffDays > 1 && diffDays < 7) {
      const day = date.toLocaleDateString("en-US", { weekday: "long" });
      return `Last ${day} at ${time}`;
    }

    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  }

  //check if message is sent or receive
  const uid = message.uid;
  const timestamp = formatMessageTime(message.createdAt);
  let messageClass = "";
  if (auth.currentUser.uid == uid) {
    messageClass = "sent";
  } else {
    messageClass = "received";
  }

  return (
    <div className={`message-cont ${messageClass}`}>
      <img className="profile" src={message.photoURL} alt="profile" />
      <div className="content">
        <p className="username">{message.displayName}</p>
        <p className={messageClass}>{message.text}</p>
      </div>
      <p className="timestamp">{timestamp}</p>
    </div>
  );
}
export default MessageDisplay;
