// useCreateDate is a custom hook that returns a string representation of the current date and time
const useCreateDate = () => {
    // Get the current date and time
    const dateObj = new Date();
    
    // Get the current month as a number (0-11)
    const month = dateObj.getMonth();
    
    // Convert the number to a string representation of the month name
    let monthName;
    switch(month) {
      case 0: monthName = "Jan"; break;
      case 1: monthName = "Feb"; break;
      case 2: monthName = "Mar"; break;
      case 3: monthName = "Apr"; break;
      case 4: monthName = "May"; break;
      case 5: monthName = "Jun"; break;
      case 6: monthName = "Jul"; break;
      case 7: monthName = "Aug"; break;
      case 8: monthName = "Sep"; break;
      case 9: monthName = "Oct"; break;
      case 10: monthName = "Nov"; break;
      case 11: monthName = "Dec"; break;
      default: monthName = "Invalid month"; // This shouldn't happen, but included for completeness
    }
  
    // Get the current minutes, and add a leading 0 if necessary
    let minutes = dateObj.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    // Construct the string representation of the date and time
    const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${dateObj.getHours()}:${minutes}]`;
    
    // Return the date and time string
    return date;
  }
  
  export default useCreateDate
  