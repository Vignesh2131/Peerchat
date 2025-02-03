import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import ProfilePage from "./pages/ProfilePage"
import { useAuthStore } from "./store/useAuthStore"
import { useEffect } from "react"
import { Loader } from "lucide-react/icons"
import {Toaster} from "react-hot-toast"
import { Navigate } from "react-router-dom"
import { useThemeStore } from "./store/useThemeStore"
const App = () => {
  const { authUser, checkAuth, isCheckingAuth} = useAuthStore();
  const { theme } = useThemeStore()
  useEffect(()=>{
    checkAuth();
  }, [checkAuth])
  if (isCheckingAuth && !authUser) return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin"/>
    </div>
  )
  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser?<HomePage />:<Navigate to="/login"/>} />
        <Route path="/signup" element={!authUser?<Signup />:<Navigate to="/"/>} />
        <Route path="/login" element={!authUser?<Login />:<Navigate to="/"/>} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={authUser?<ProfilePage />:<Navigate to="/login"/>} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App