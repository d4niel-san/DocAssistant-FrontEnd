//#region Imports
import { Routes, Route } from "react-router-dom";
import { SignIn } from "./components/SignIn/SignIn";

//#endregion

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/*" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
