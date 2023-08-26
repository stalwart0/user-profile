import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "../src/Components/Tabs";
import Tabs from "../src/Components/Tabs";
import "./App.css";
import Home from "./Components/Home";
import RootLayout from "./Components/RootLayout";
function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<RootLayout></RootLayout>}>
  //       <Route index element={<Home></Home>}></Route>
  //       <Route path="/profile" element={<Tabs></Tabs>}></Route>
  //     </Route>
  //   )
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="profile">
            <Route path=":userId" element={<Tabs />} />
            <Route index element={<Navigate to="/" />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
