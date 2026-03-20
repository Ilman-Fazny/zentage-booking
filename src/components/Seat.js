import React from 'react';

const Seat = ({ seat, isSelected, onSeatClick }) => {
    // Logic for colors based on status
    let bgColor = "bg-blue-900"; // Default Vintage Blue
    if (seat.status === "booked") bgColor = "bg-gray-500 cursor-not-allowed";
    if (seat.status === "invitee") bgColor = "bg-yellow-600 cursor-not-allowed";
    if (isSelected) bgColor = "bg-cyan-400 animate-pulse"; // Highlight when user clicks

    return (
        <div
            onClick={() => (seat.status === "available") && onSeatClick(seat.id)}
            className={`w-8 h-8 m-1 rounded-t-lg flex items-center justify-center text-[10px] text-white cursor-pointer transition-all ${bgColor}`}
            title={`${seat.id} - ${seat.category}`}
        >
            {seat.id}
        </div>
    );
};

export default Seat;