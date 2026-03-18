import { seedDatabase } from "./AdminSeed";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-vintage-blue">Zentage Admin</h1>
      <button
        onClick={seedDatabase}
        className="bg-blue-600 text-white p-4 m-4 rounded"
      >
        UPLOAD SEATS TO CLOUD
      </button>
    </div>
  );
}

export default App;