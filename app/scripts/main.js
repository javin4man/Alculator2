// // jshint devel:true
// //console.log('\'Allo \'Allo!');//

// var age = ["21-25", "26-30", "31-35", "35+"];

var height = [4'8" to 5'2", 5'3 to 5'7", 5'8 to 6'2", 6'3 to 6'8"];

var weight = [95 lbs to 125 lbs, 126 lbs to 156 lbs,
// 157 lbs to 187 lbs,  188 lbs to 218 lbs, 219 lbs to 250 + lbs];

//if age[0 or 1] && height [0 or 1] && weight[0 or 1]
  // then drinks = 2;

// if age[2 or 3] && height [2 or 3] && weight[2 or 3]
//   then drinks = 3;

// if age[any] && height [2 or 3] && weight[4 or 5]
//   then drinks = 4;

var chosenAge = $('#age').val();
if(chosenAge < 2 && chosenWeight < 2){
  $('#result').val('2 drinks');
}

var chosenAge = $('#age').val();
if(chosenAge === 2, 3  && chosenWeight ===2, 3 && chosenHeight ===2, 3 ){
  $('#result').val('3 drinks');
}

var chosenAge = $('#age').val();
if(chosenAge < 0  && chosenWeight ===2, 3 && chosenHeight ===4, 5 ){
  $('#result').val('3 drinks');
