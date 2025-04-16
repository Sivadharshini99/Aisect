import { useContext } from "react";
import { UserContext } from "../App";

//function component
function Header(props) {
  //receive data from another component
  console.log(props);

  let {
    user: { uName },
  } = useContext(UserContext); //hooks calling

  return (
    <header>
      <h1>Todo list</h1>
      <p
        style={{
          backgroundColor: "black",
          width: "30px",
          height: "30px",
          textAlign: "center",
          borderRadius: "50%",
        }}
      >
        {uName.slice(0, 1)}
      </p>
    </header>
  );
}
export default Header;
