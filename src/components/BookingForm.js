import React from "react";
import "../styles/BookingForm.css";

function BookingForm() {
  return (
    <div className="bookingForm">
        <h1>Please select all the options</h1>
      <form className="bookingForm__form">
        <div>
          <label for="res-date">Choose date</label>
          <input type="date" id="res-date" />
        </div>

        <div>
          <label for="res-time">Choose time</label>
          <select id="res-time ">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </div>

        <div>
          <label for="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" />
        </div>

        <div>
          <label for="occasion">Occasion</label>
          <select id="occasion">
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>

        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}

export default BookingForm;
