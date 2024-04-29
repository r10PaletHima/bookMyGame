import './App.css';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Home/>
      </Layout>
    </div>
  );
}

export default App;
