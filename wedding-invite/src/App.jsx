import RSVPForm from "./components/RSVPForm";

function App() {
  const handleRSVP = async (data) => {
    await fetch("https://your-backend-url/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">You're Invited!</h1>
      <RSVPForm onRSVP={handleRSVP} />
    </div>
  );
}

export default App;

