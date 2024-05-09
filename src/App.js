import './App.css';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';
import { RegistrationForm } from './components/RegistrationForm';
import { HorizontalLinearStepper } from './components/RegistrationProgressBar';

function App() {
  return (
    <div>
      {/* <Layout>
        <Home/>
      </Layout> */}
      {/* <RegistrationForm/> */}
      <HorizontalLinearStepper/>
    </div>
  );
}

export default App;
