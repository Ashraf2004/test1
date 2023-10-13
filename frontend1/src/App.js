
import './App.css';
import {Footer} from "./components/Header";  /** importing namespace component*/
import Head from "./components/Header"; /** importing default component, here we can use any name as function name as it is default*/
import Nav from "./components/Nav";
function App() {
  return (
    <div>
      <Head name="Ethnus"></Head>
      <Nav age="10"/>
      <Footer />
    </div>
  );
}

export default App;
