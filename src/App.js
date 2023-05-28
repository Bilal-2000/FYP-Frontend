import logo from './logo.svg';
import './App.css';
import Home from './paths/Home';
import SignIn from './paths/components/register/SignIn';
import Upload from './paths/Upload';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './paths/components/register/context/AuthProvider';
import RequireAuth from './paths/components/register/hooks/RequireAuth';
import Records from './paths/Records';
import ForgotPassword from './utils/ForgotPassword';
import ResetPassword from './paths/components/register/ResetPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/Forgot" element={<ForgotPassword />} />
            <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
            <Route path="/" element={<Home />} />
            <Route element={<RequireAuth />}>
              <Route path="/Upload" element={<Upload />} />
              <Route path="/Records" element={<Records />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
