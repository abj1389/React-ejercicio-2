import Titles from "./components/Tittles/Tittles";
import ListPhones from "./components/ListPhones/ListPhones";
import Message from "./components/Message/Message";
import CustomButton from "./components/CustomButon/CustomButton";
//hola
function App(){
  const okAlert = () => {
    alert("Pues ok tio...");
  }

  const daleAlert = () => {
    alert("Le has dado");
  }

  return (
    <div>
      <Titles name="Teléfonos"></Titles>
      <ListPhones></ListPhones>
      <Titles name="Mensajes"></Titles>
      <Message name="Laura"></Message>
      <Message name="Edu"></Message>
      <Titles name="Botones"></Titles>
      <CustomButton handleClick={daleAlert} name="Dale!"></CustomButton>
      <CustomButton handleClick={okAlert} name="Ok"></CustomButton>
    </div>
  );
}

export default App;