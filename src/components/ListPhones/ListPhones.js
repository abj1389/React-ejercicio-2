import "./ListPhones.css";

const ListPhones = () => {
    const phones = ["iPhone", "Galaxy", "Redmi", "OnePlus"];

    return (
        <ul className="list">
            {phones.map(phone => <li className="list__phone">{phone}</li>)}
        </ul>
    );
}

export default ListPhones;