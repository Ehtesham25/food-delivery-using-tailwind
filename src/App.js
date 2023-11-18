import { AnimatePresence } from "framer-motion";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Header, MainContainer, CreateItem,Test } from "./components";

function App() {
  return (
    <AnimatePresence mode="wait" >
      <div className='w-screen h-auto flex flex-col bg-gray-100 '>
        <Header />
        <main className="mt-14 md:mt-20 px-0 md:px-12 py-4 w-full ">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/create" element={<CreateItem />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};
export default App;
