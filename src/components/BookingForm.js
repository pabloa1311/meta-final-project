import React, { useState } from "react";
import "../styles/BookingForm.css";

function BookingForm() {
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guest, setGuest] = useState("")
    const [submit, setSubmit] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        setSubmit(true)
    }

    const confirmation = () => {
        alert("Your reservation has been confirmed")
        setDate("")
        setTime("")
        setGuest("")
        setSubmit(false)
    }

  return (
    <div className="bookingForm">
        {submit ? 
        <>
        <h3>Please confirm your reservation for {guest} on {date} at {time}. Thank you</h3>
        <button onClick={confirmation}>Confirm</button>
        </>
         : 
        <>
        <h1>Please select all the options</h1>
        
      <form className="bookingForm__form" onSubmit={onSubmit}>
        <div>
          <label for="res-date">Choose date</label>
          <input type="date" id="res-date" value={date} onChange={(e) => {
            setDate(e.target.value)
          }}
          required
          />
        </div>

        <div>
          <label for="res-time">Choose time</label>
          <select id="res-time " 
          value={time}
          onChange={(e) => {
            setTime(e.target.value)
          }}
          required
          >
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
          <input 
          type="number" 
          placeholder="1" 
          min="1" 
          max="10" 
          id="guests"
          value={guest}
          onChange={(e) => {
            setGuest(e.target.value)
          }}
          required
          />
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
      </>
        }
        
    </div>
  );
}

export default BookingForm;
