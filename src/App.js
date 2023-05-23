import "./App.css";
import LeftMenu from "./Components/LeftMenu/LeftMenu";
import RightMenu from "./Components/RightMenu/RightMenu";
import Home from "./Pages/Home/Home";

function App() {
    return (
        <div className='bg-bgPrimary h-full w-full flex justify-between'>
            <LeftMenu />
            <Home />
            <RightMenu />
        </div>
    );
}

export default App;
