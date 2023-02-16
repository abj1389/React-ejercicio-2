import "./CustomButton.css";

const CustomButton = (props) => {
    return (
        <button onClick={props.handleClick} className="button">{props.name}</button>
    );
}

export default CustomButton;