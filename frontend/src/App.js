import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import EnterPage from "./EnterPage";
import InstantMessaging from "./InstantMessaging";
import Dashboard from './Dashboard';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<EnterPage />} />
          <Route path='instantmessaging' element={<InstantMessaging />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
