import './reset.css';
import './App.css';
import Header from './components/header/header';
import FormComponent from './components/form/form';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <h3 className="loan-type">BUSSINES LOAN</h3>
        <FormComponent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
