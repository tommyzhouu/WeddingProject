import { useState } from "react";

const RSVPForm = ({ onRSVP }) => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRSVP({ name, guests });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">RSVP</h2>
      <input 
        type="text" 
        placeholder="Your Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
        className="border p-2 w-full mb-2"
      />
      <input 
        type="number" 
        min="1" 
        value={guests} 
        onChange={(e) => setGuests(e.target.value)} 
        required 
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit RSVP
      </button>
    </form>
  );
};

export default RSVPForm;
