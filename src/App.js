import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Head from "./components/header";
import Foot from "./components/footer";
import F1 from "./components/F1"
function App() {
  return (
    <div>
      <Head />
      <Foot />
      <F1/>
    </div>
  );
}

export default App;
