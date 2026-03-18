const generateSeats = () => {
    const seats = [];

    // 1. Ground Floor - Center Block (Rows A to N, Seats 8 to 15)
    const centerRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];
    centerRows.forEach(row => {
        for (let num = 8; num <= 15; num++) {
            seats.push({
                id: `${row}${num}`,
                category: "Ground Center",
                status: "available", // default status
                price: 500
            });
        }
    });

    // 2. Ground Floor - Left & Right Blocks (Rows A to Q, Seats 1-7 and 16-22)
    const sideRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'];
    sideRows.forEach(row => {
        // Left side (1-7)
        for (let num = 1; num <= 7; num++) {
            seats.push({ id: `${row}${num}`, category: "Ground Left", status: "available", price: 500 });
        }
        // Right side (16-22)
        for (let num = 16; num <= 22; num++) {
            seats.push({ id: `${row}${num}`, category: "Ground Right", status: "available", price: 500 });
        }
    });

    // 3. Balcony (Rows UA to UI)
    const balconyRows = ['UA', 'UB', 'UC', 'UD', 'UE', 'UF', 'UG', 'UH', 'UI'];
    balconyRows.forEach(row => {
        for (let num = 1; num <= 20; num++) { // Assuming ~20 seats per balcony row
            seats.push({ id: `${row}${num}`, category: "Balcony", status: "available", price: 500 });
        }
    });

    return seats;
};

export const allSeats = generateSeats();