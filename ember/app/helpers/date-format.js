import Ember from 'ember';

export function dateFormat(params/*, hash*/) {

    try {
      var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
      ];

      var day = params[0].getDate();
      var monthIndex = params[0].getMonth();
      var year = params[0].getFullYear();

      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    } // end try
    catch(err) {
      // when a new board is created, the created date is undefined for a moment
      // until it comes back from the server. This try/catch hanldles that brief moment
      console.log(err)}
  }

export default Ember.Helper.helper(dateFormat);
