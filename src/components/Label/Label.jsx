import React, { useState } from "react";
import cardClass from '../styles/Card.module.css'
import CalendarIcon from "../../assets/icons/CalendarIcon";
import Calendar from 'react-calendar'

const Label = (props) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };


  const handleDateChange = (date) => {
    props.handleDateChange(date);
    setShowDatePicker(false)
  }

  return (
    <div className={cardClass.label}>
      <h1>Order</h1>
      <div onClick={toggleDatePicker} className={`${styles.calendarIcon} ${showDatePicker === true ? styles.active : ''}`}>
        <CalendarIcon showDatePicker={showDatePicker}/>
      </div>
      {showDatePicker && (
        <div className={styles.datePicker}>
          <Calendar
            selected={props.selectedDate}
            dateFormat="dd MMMM yyyy" 
            onChange={handleDateChange}
            onBlur={() => setShowDatePicker(false)}
            inline
          />
        </div>
      )}
    </div>
  );
};

export default Label;
