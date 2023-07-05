import React, { useState } from "react";
import Contact from "./Contact";
import ContactAdder from "./ContactAdder";
import NavBar from "./Navbar";
import "./style/contact.css";

const App = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts")); // Get JSON data that is saved on localstorage and parse to create array from string

  const [contacts, setContacts] = useState(getContacts ? getContacts : []); // Create state for contacts

  // This function is called by the child. i.e. ContactAdder
  const addContactData = (contactData) => {
    const allContacts = [contactData, ...contacts];
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };
  const clearAllContacts = () =>{
    localStorage.clear();
    setContacts([])
  };

  return (
    <>
    <NavBar/>
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>

      <div className="contact_list">
        <h3>contact List </h3>

        {contacts.map((data) => (
          <Contact key={data.id} data={data}></Contact>
        ))}

        <button onClick={clearAllContacts} style={{background:"red"}}>clear all contaxt</button>
      </div>
    </>
  );
};

export default App;
