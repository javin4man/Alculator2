'use strict';

// // jshint devel:true
// //console.log('\'Allo \'Allo!');//

// var age = ["21-25", "26-30", "31-35", "35+"];

// var height = [4 foot 8 inches to 5 foot 2 inches, 5 foot 3 inches to 5 foot 7 inches, 5 foot 8 inches to 6 foot 2 inches, 6 foot 3 inches to 6 foot 8 inches];

// var weight = [95 lbs to 125 lbs, 126 lbs to 156 lbs,
// 157 lbs to 187 lbs,  188 lbs to 218 lbs, 219 lbs to 250 + lbs];

//if age[0 or 1] && height [0 or 1] && weight[0 or 1]
  // then drinks = 2;

// if age[2 or 3] && height [2 or 3] && weight[2 or 3]
//   then drinks = 3;

// if age[any] && height [2 or 3] && weight[4 or 5]
//   then drinks = 4;
$('#submit').click(function() {

  var chosenAge = $('#age').val();
  var chosenHeight = $('#height').val();
  var chosenWeight = $('#weight').val();

  console.log('Age: ' + chosenAge + ' Height: ' + chosenHeight + ' Weight: ' + chosenWeight);
  if(chosenAge < 2 && chosenHeight < 2 && chosenWeight < 2){
    $('#result').val('2 drinks');
    console.log('we made it');
  }
  else if(chosenAge > 0 && (chosenWeight === 2 || chosenWeight === 3 ) && chosenHeight > 2 ){
    $('#result').val('3 drinks');

  }
  else if(chosenAge > -1 && chosenWeight > 3 && chosenHeight > 1 ){
   $('#result').val('4 drinks');
  }

  else {
    $('#result').val('should you be drinking?');
  }
   console.log('Age: ' + chosenAge + ' Height: ' + chosenHeight + ' Weight: ' + chosenWeight);

});
