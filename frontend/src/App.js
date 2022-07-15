import Index from "./pages/Index";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const reducer = combineReducers({});

const store = configureStore({ reducer });

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        {/* <ModalSwitch /> */}
      </BrowserRouter>
    </Provider>
  );
}

// const ModalSwitch = () => {
//   let location = useLocation();
//   let background = location.state && location.state.background;

//   return (
//     <div>
//       <Routes location={background || location}>
//         <Route path="/" element={<Index />} />
//       </Routes>
//       {background && (
//         <Routes>
//           <Route path="/feat/:id" element={<FeaturedModal />} />
//         </Routes>
//       )}
//     </div>
//   );
// };

export default App;
