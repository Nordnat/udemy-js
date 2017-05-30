// let johnHeight = 178,
//     johnAge = 27,
//     markHeight = 160,
//     markAge = 45,
//     anaHeight = 145,
//     anaAge = 81,
//     johnScores = johnAge * 5 + johnHeight,
//     markScores = markAge * 5 + markHeight,
//     anaScores = anaAge * 5 + anaHeight;

// if(johnScores > markScores && johnScores > anaScores) {
//     console.log('John Wins');
// }
// else if(anaScores > markScores && anaScores > johnScores)  {
//     console.log('Ana Wins');
// }
// else {
//     console.log('Mark Wins');
// }


// var john = {
//     name: 'john',
//     lastName: 'Smith',
//     yearOfBirthday: 1990,
//     calculateAge: function() {
//         let date1 = new Date(),
//             year = date1.getFullYear();
//         this.age = year - this.yearOfBirthday;
//     }
// }
// john.calculateAge();
// console.log(john.age);


// let years = [2001, 1985, 1994, 2014, 1973],
//     ages = [],
//     todayDate = new Date(),
//     year = todayDate.getFullYear();

//     for (i=0; i < years.length; i++) {
//         ages[i] = year - years[i];
//     }
//     console.log(ages);

// console.log(this);

caluclationAge(19);

function caluclationAge(year) {
    console.log(2016 - year);
    console.log(this);
}