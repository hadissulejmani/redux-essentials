import "./ColorPicker.css";
import { useDispatch } from "react-redux";
import { changeByColor } from "../../redux/colorChanger";
export default function ColorPicker() {
  const colors = ["red", "green", "blue", "yellow"];
  const dispatch = useDispatch();

  const handleClick = (color) => {
    dispatch(changeByColor(color));
  };

  return (
    <div className="color-picker">
      <ul>
        {colors.map((color) => (
          <li
            key={color}
            style={{ backgroundColor: color }}
            onClick={() => handleClick(color)}
          ></li>
        ))}
      </ul>
    </div>
  );
}
