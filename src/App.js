import "./App.css";
import Contact_header from "./Component/Contact-Header/contact-header";
import ContactForm from "./Component/ContactForm/contact_form";
import Navigation from "./Component/Navigation/Navigation";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Contact_header />
      <ContactForm />
    </div>
  );
}

export default App;