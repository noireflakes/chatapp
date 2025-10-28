import "./messageDisplay.css";
function MessageDisplay({ message }) {
  return (
    <div className="message-cont">
      <img className="profile" src={message.photoURL} alt="" />

      <p>{message.text}</p>
    </div>
  );
}
export default MessageDisplay;
