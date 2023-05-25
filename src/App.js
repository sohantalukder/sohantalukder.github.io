import LeftMenu from "./Components/LeftMenu/LeftMenu";
import RightMenu from "./Components/RightMenu/RightMenu";
import Home from "./Pages/Home/Home";

function App() {
    return (
        <div className='bg-bgPrimary h-full w-full  grid grid-cols-12 justify-between  gap-7'>
            <LeftMenu />
            <Home />
            <RightMenu />
        </div>
    );
}

export default App;
