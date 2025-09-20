import { useState } from "react";
import Button from "./components/Button/Button.props";

function App() {
  const [counter, setCounter] = useState<number>(0);

  const addCounter = (e: MouseEvent) => {
    console.log(e);
  };

  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
    </>
  );
}

export default App;
