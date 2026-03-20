import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import Seat from './components/Seat';

function App() {
  const [seats, setSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);

  // REAL-TIME CONNECTION: This listens for changes in Firebase
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "seats"), (snapshot) => {
      const seatData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSeats(seatData);
    });
    return () => unsubscribe();
  }, []);

  const handleSeatClick = (id) => {
    setSelectedSeat(id === selectedSeat ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <header className="text-center mb-10">
        <h5 className="text-4xl font-serif text-cyan-500">SASNAKA SANSADA</h5>
        <h1 className="text-4xl font-serif text-cyan-500">TALENT SHOW</h1>
        <h2 className="text-4xl font-serif text-cyan-500">ZENTAGE</h2>
        <p className="text-slate-400">BOOKING SYSTEM</p>
        <p className="text-slate-400">SELECT YOUR SEAT FOR THE EVENT</p>
      </header>

      {/* THE STAGE */}
      <div className="w-full h-4 bg-cyan-800 shadow-[0_0_20px_rgba(6,182,212,0.5)] mb-20 rounded-b-3xl text-center text-xs text-cyan-200">
        STAGE
      </div>

      {/* SEAT GRID */}
      <div className="flex flex-wrap justify-center max-w-5xl mx-auto">
        {seats.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true })).map(seat => (
          <Seat
            key={seat.id}
            seat={seat}
            isSelected={selectedSeat === seat.id}
            onSeatClick={handleSeatClick}
          />
        ))}
      </div>

      {/* FLOATING BOOKING BAR */}
      {selectedSeat && (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-800 p-6 border-t border-cyan-500 flex justify-between items-center animate-bounce-in">
          <p>Selected Seat: <span className="font-bold text-cyan-400">{selectedSeat}</span></p>
          <button className="bg-cyan-600 px-6 py-2 rounded font-bold hover:bg-cyan-500">
            Proceed to Register
          </button>
        </div>
      )}
    </div>
  );
}

export default App;