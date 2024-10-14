'use client';
import React, { useState } from 'react';
import './Calendar.css'; // Puedes definir estilos CSS aquí para que coincidan con el diseño

interface CalendarProps {
  initialYear: number;
  initialMonth: number;
  // eslint-disable-next-line no-unused-vars
  onDateRangeSelect: (startDate: Date, endDate: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ initialYear, initialMonth, onDateRangeSelect }) => {
  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handleDateClick = (date: Date) => {
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    } else if (selectedStartDate && !selectedEndDate) {
      setSelectedEndDate(date);
      onDateRangeSelect(selectedStartDate, date);
    }
  };

  const isDateInRange = (date: Date) => {
    if (!selectedStartDate) return false;
    if (selectedEndDate) {
      return date >= selectedStartDate && date <= selectedEndDate;
    }
    return date.getTime() === selectedStartDate.getTime();
  };

  const renderDays = () => {
    const daysArray = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(<div key={`empty-${i}`} className='empty-day' />);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = isDateInRange(date);
      daysArray.push(
        <button
          key={day}
          className={`day ${isSelected ? 'selected' : ''}`}
          onClick={() => handleDateClick(date)}
        >
          {day}
        </button>
      );
    }
    return daysArray;
  };

  return (
    <div className='calendar test-component'>
      <div className='calendar-header'>
        <button onClick={handlePrevMonth}>◄</button>
        <span>{new Date(year, month).toLocaleString('default', { month: 'long' })} {year}</span>
        <button onClick={handleNextMonth}>►</button>
      </div>
      <div className='calendar-body'>
        <div className='day-names '>
          {['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'].map((day) => (
            <div key={day} className='day-name'>{day}</div>
          ))}
        </div>
        <div className='days-grid'>
          {renderDays()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
