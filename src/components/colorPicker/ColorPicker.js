import "./ColorPicker.css";
import { useSelector, useDispatch } from "react-redux";
import { red, blue, green, yellow } from "../../redux/colorChanger";
export default function ColorPicker() {
  const colors = ["red", "green", "blue", "yellow"];

  const color = useSelector((state) => state.defaultColor.value);
  const dispatch = useDispatch();

  const handleClick = (color) => {
    switch (color) {
      case "red":
        dispatch(red());
        break;
      case "blue":
        dispatch(blue());
        break;
      case "green":
        dispatch(green());
        break;
      case "yellow":
        dispatch(yellow());
        break;
      default:
        break;
    }
    console.log("clicked");
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
