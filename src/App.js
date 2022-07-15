import "./App.css";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import RightSpace from "./components/RightSpace";
import ViewDrawer from "./components/ViewDrawer";

function App() {
  return (
    <div className="app">
      <Sidebar cssSidebar="sidebar" />
      <ViewDrawer cssDrawer="drawer" cssHandle="handle" />
      <Main cssMain="main" />
      <ViewDrawer cssDrawer="drawer" cssHandle="handle" />
      <RightSpace cssRightSpace="right-space" />
    </div>
  );
}

export default App;
