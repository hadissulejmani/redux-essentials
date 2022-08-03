import "./App.css";
import { useSelector } from "react-redux";
import ColorPicker from "./components/colorPicker/ColorPicker";

function App() {
  const color = useSelector((state) => state.defaultColor.value);

  return (
    <div>
      <ColorPicker />
      <div className="color-panel" style={{ backgroundColor: color }}>
        <p>world</p>
      </div>
    </div>
  );
}

export default App;
