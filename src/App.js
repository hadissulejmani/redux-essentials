import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { blue } from "./redux/colorChanger";
import colorChanger from "./redux/colorChanger";
import ColorPicker from "./components/colorPicker/ColorPicker";

function App() {
  const color = useSelector((state) => state.defaultColor.value);

  const dispatch = useDispatch();

  const handleclick = () => {
    console.log("clicked");
    dispatch(blue());
  };

  return (
    <div>
      <ColorPicker />
      <div
        className="color-panel"
        onClick={() => handleclick()}
        style={{ backgroundColor: color }}
      >
        <p>world</p>
      </div>
    </div>
  );
}

export default App;
