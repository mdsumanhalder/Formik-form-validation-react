import './App.css';
import ContactForm from './components/ContactForm/ContactFom';
import ContactInfo from './components/ContactInfo/ContactInfo';
function App() {
  return (
    <div className="container">
      <h2>Contact us</h2>
    <div className="contact-container">
      < ContactInfo className="info" />
      <ContactForm className='form-main'/>
    </div>
    </div>
  );
}

export default App;
