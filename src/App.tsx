
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes/Router";
function App() {
  

  return (
    <div className="flex justify-center app">
      <div className="flex flex-col w-full h-screen max-w-xl font-bold text-white bg-gradient-to-b from-[#010D1C] to-[#220039]">
      
        <Router>
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.elemment}
              />
            ))}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
