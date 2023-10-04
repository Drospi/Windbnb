import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Nav } from "./components/Nav";
import { Modal } from "./components/Modal";

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [guest, setGuest] = useState(0);
  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);

  let cityN = title.toLowerCase().trim();
  const cityFiltro = data.filter(
    (city) =>
      (city.city.toLowerCase().includes(cityN) ||
      city.country.toLowerCase().includes(cityN))&&city.maxGuests>=guest
  );


  // Puedes ver la variable data en consola.
  console.log(data);
  return (
    <>
      <body>
        <Nav tit={title} fu={setTitle} fug={setGuest} titFug={guest}></Nav>
        <div className="value">
          <h1>Stays in {title==''?'Whole':title}, Finland</h1>
          <p>{cityFiltro.length} stays</p>
        </div>
        {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
        <div className="cards">
          {cityFiltro.map((el, i) => {
            return <Card e={el} key={i}></Card>;
          })}
        </div>
        <Modal tit={title} fu={setTitle} fug={setGuest} titFug={guest}></Modal>
      </body>
    </>
  );
}

export default App;
