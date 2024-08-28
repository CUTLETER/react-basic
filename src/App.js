import { Fragment } from "react";
import HookEffect from "./hook/HookEffect";
import HookRef from "./hook/HookRef";

function App() {
  return(
    <Fragment>
      <HookEffect />
      <br />
      <hr />
      <HookRef />
    </Fragment>
  )
}

export default App;