function calculateGifts(visitCount, purchaseAmount) {
  var welcomeGift = 0;
  var additionalGift = 0;

  if (visitCount > 0) {
    welcomeGift = 100;
  }

  if (purchaseAmount > 1000) {
    if (purchaseAmount > 5000) {
      additionalGift = 3000;
    } else if (purchaseAmount > 3000) {
      additionalGift = 1500;
    } else {
      additionalGift = 500;
    }
  }

  console.log("Welcome Gift: " + welcomeGift + "GV");
  console.log("Additional Gift: " + additionalGift + "GV");
}

calculateGifts(1, 1500); 


function checkAdmissionStatus(marks) {

  marks = parseFloat(marks);
  var admissionStatus = "";
  if (marks < 50) {
    admissionStatus = "Admission Application Rejected";
  } else if (marks >= 50 && marks <= 70) {
    admissionStatus = "Acceptable to admit";
  } else if (marks > 70 && marks <= 90) {
    admissionStatus = "Good to admit";
  } else if (marks > 90) {
    admissionStatus = "Outstanding to admit";
  } else {
    admissionStatus = "Invalid marks entered";
  }

  console.log("Admission Status: " + admissionStatus);
}

checkAdmissionStatus(49);


function calculateDiscount() {
  var today = new Date();
  var tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  var day = tomorrow.getDay();
  var discountRate = 0;
  switch (day) {
    case 1: // Monday
      discountRate = 15;
      break;
    case 2: // Tuesday
      discountRate = 10;
      break;
    case 3: // Wednesday
      discountRate = 12;
      break;
    case 4: // Thursday
      discountRate = 11;
      break;
    case 5: // Friday
      discountRate = 13;
      break;
    case 6: // Saturday
      discountRate = 14;
      break;
    case 0: // Sunday
      discountRate = 15;
      break;
    default:
      break;
  }

  console.log('Discount for tomorrow (' + tomorrow.toDateString() + '): ' + discountRate + '%');
}
calculateDiscount();
