import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { blue } from "./redux/colorChanger";
import colorChanger from "./redux/colorChanger";

function App() {
  const color = useSelector((state) => state.defaultColor.value);

  const dispatch = useDispatch();

  const handleclick = () => {
    console.log("clicked");
    dispatch(blue());
  };

  return (
    <div
      className="color-panel"
      onClick={() => handleclick()}
      style={{ backgroundColor: color }}
    >
      <p>world</p>
    </div>
  );
}

export default App;
