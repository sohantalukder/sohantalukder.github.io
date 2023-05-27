import LeftMenu from "./Components/LeftMenu/LeftMenu";
import RightMenu from "./Components/RightMenu/RightMenu";
import TopBar from "./Components/TopBar/TopBar";
import Home from "./Pages/Home/Home";

function App() {
    return (
        <div className='bg-bgPrimary  grid grid-cols-12 justify-between  gap-7'>
            <TopBar />
            <LeftMenu />
            <Home />
            <RightMenu />
        </div>
    );
}

export default App;
