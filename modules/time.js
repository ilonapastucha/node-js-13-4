function convertTime (a) {
    return (a / 3600).toFixed(0) + " h " + ((a % 3600) / 60).toFixed(0) + " min " + (a % 60).toFixed(0) + " sec";
  }
  
  module.exports = convertTime;