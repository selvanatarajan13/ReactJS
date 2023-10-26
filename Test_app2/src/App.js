import './CSS/App.css';
import { Header } from './Header';
import Footer from './Footer';
import Content from './Content';

function App() {
  return (
    <div className='App'>
      <Header title="Mahendran Todo"/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;

// functional components
// props & props drilling
// CSS