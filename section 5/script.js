// Fucnction constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }


// Person.prototype.calculateAge = function() {
//     console.log(2016 - this.yearOfBirth);
// }

// Person.prototype.lastName = 'Smith';

// // instanciention 
// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


// Obj.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
{
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});
*/


/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for(var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAges(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));    
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var isFull = arrayCalc(ages, isFullAges);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(isFull);
console.log(rates);
*/

// IIFE
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log( name + ', can you explain designer?');
        }
    } else if(job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');
*/
/*
function retirement(retirementAge) {
    var a = ' years left until retirement';

    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

retirement(66)(1990);
*/


/*
function interviewQuestion(job) {

    return function(name) {
        if (job === 'designer') {
            console.log( name + ', can you explain designer?');
        } else if(job === 'teacher') {
            console.log('What subject do you teach ' + name + '?');
        } else {
            console.log('Hello');
        }
    }
}
interviewQuestion('designer')('john');

*/


// Bind, call and apply
/*
var john = {
    name: 'John',
    age: 28,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentelmen!, I\'am a' + this.name + ', and I\'m ' + this.job + ', and I\'m ' + this.age + ' years old');
        } else if(style === 'friendly') {
            console.log('Hey! What\'s up? ' + timeOfDay + ', Ladies and gentelmen!, I\'am a' + this.name + ', and I\'m ' + this.job + ', and I\'m ' + this.age + ' years old. Have nice ' + timeOfDay);
        
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
*/
// -----------------------------
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for(var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);

*/
// basic level of q app

/*
(function() {
    function Question(question, anwsers, correct) {
        this.question = question;
        this.anwsers = anwsers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.anwsers.length; i++) {
            console.log(i + ': ' + this.anwsers[i]);
        }
    }

    Question.prototype.checkAnwser = function(ans) {
        if(ans === this.correct) {
            console.log('correct anwser!');
        } else {
            console.log('wrong!');
        }
    }

    var q1 = new Question(
        'Is JS the coolest language in the world',
        ['Yes', 'No'],
        0
    );
    var q2 = new Question(
        'What is the name',
        ['John', 'Mikel', 'Jonas'],
        2
    );
    var q3 = new Question(
        'Describe cooding',
        ['Boring', 'Hard', 'Fun', 'Tidious'],
        2
    );

    var questions = [q1, q2, q3];
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var anwser = parseInt(prompt('Select anwser'));

    questions[n].checkAnwser(anwser);
})();
*/



// expert part

(function() {
    function Question(question, anwsers, correct) {
        this.question = question;
        this.anwsers = anwsers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.anwsers.length; i++) {
            console.log(i + ': ' + this.anwsers[i]);
        }
    }

    Question.prototype.checkAnwser = function(ans, callback) {
        if(ans === this.correct) {
            console.log('correct anwser!');
            sc = callback(true);
        } else {
            console.log('wrong!');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('-------------------------');
    }

    var q1 = new Question(
        'Is JS the coolest language in the world',
        ['Yes', 'No'],
        0
    );
    var q2 = new Question(
        'What is the name',
        ['John', 'Mikel', 'Jonas'],
        2
    );
    var q3 = new Question(
        'Describe cooding',
        ['Boring', 'Hard', 'Fun', 'Tidious'],
        2
    );

    function nextQuestion() {
        var questions = [q1, q2, q3];
        
        function score() {
            var sc = 0;
            return function(correct) {
                if(correct) {
                    sc++;
                }
                return sc;
            } 
        }

        var keepScore = score();

        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var anwser = prompt('Select anwser');


        if(anwser !== 'exit') {
            questions[n].checkAnwser(parseInt(anwser), keepScore);
            nextQuestion();
        }
    }


    nextQuestion();


})();

