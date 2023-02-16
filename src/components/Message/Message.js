import "./Message.css";

const Message = (props) => {
    return(
        <p className="message">Hola {props.name}!</p>
    );
}

export default Message;