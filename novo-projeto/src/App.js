import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import NavBar from "./components/NavBar";
import Login from "./pages/Login/";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <>
      {/* AuthProvider vai usar os valores de memoria */}
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/admin" element={
          <ProtectedRoute>
          <Admin/> 
          </ProtectedRoute>
          }/>
           <Route path="/add-product" element={
          <ProtectedRoute>
          <AddProduct/> 
          </ProtectedRoute>
          }/>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;