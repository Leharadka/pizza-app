import { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';



function App() {
  const [counter, setCounter] = useState<number>(0);

  const addCounter = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
      <Button appearence="big" onClick={addCounter}>
        Кнопка
      </Button>
      <Input placeholder="email" />
      <div>
        <Link to="/">Меню</Link>
        <Link to="/cart">Корзина</Link>
      </div>
      
    </>
  );
}

export default App;
