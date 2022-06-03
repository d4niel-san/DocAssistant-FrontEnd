//#region Imports

import { Routes, Route } from "react-router-dom";
import { Calendar } from "./components/Calendar/Calendar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { SignIn } from "./components/SignIn/SignIn";

//#endregion

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/*" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
