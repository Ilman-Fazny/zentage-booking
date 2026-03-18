import { db } from "./firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";
import { allSeats } from "./seatGenerator";

export const seedDatabase = async () => {
  try {
    console.log("Starting to seed database...");
    let count = 0;
    for (const seat of allSeats) {
      const seatRef = doc(collection(db, "seats"), seat.id);
      await setDoc(seatRef, seat);
      count++;
    }
    console.log(`Successfully seeded database with ${count} seats!`);
    alert(`Successfully uploaded ${count} seats to cloud.`);
  } catch (error) {
    console.error("Error seeding database: ", error);
    alert("Error uploading seats: " + error.message);
  }
};
