//Coding Challenge #1
    console.log('-------Coding Challenge #1');
// Data 1:
    let massMark = 78;
    let heightMark = 1.69;
    let massJohn = 92;
    let heightJohn = 1.95;

    let BMIMark = massMark / heightMark ** 2;
    let BMIJohn = massJohn / heightJohn ** 2;

    let markHigherBMI = BMIMark > BMIJohn;
    console.log(markHigherBMI);

// Data 2:
    massMark = 95;
    heightMark = 1.88;
    massJohn = 85;
    heightJohn = 1.76;

    BMIMark = massMark / heightMark ** 2;
    BMIJohn = massJohn / heightJohn ** 2;

    markHigherBMI = BMIMark > BMIJohn;
    console.log(markHigherBMI);

//Coding Challenge #2
    console.log('-------Coding Challenge #2');
    if (BMIMark > BMIJohn) {
        console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
    } else {
        console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
    }

//Coding Challenge #3
console.log('-------Coding Challenge #3');
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
    let scoreDolphins = (96 + 108 + 89) / 3;
    let scoreKoalas = (88 + 91 + 110) / 3;
    console.log(scoreDolphins, scoreKoalas);

    if (scoreDolphins > scoreKoalas) {
        console.log('Dolphins win the trophy!');
    } else if (scoreKoalas > scoreDolphins) {
        console.log('Koalas win the trophy!');
    } else if (scoreDolphins === scoreKoalas) {
        console.log('Both win the trophy!');
    }

// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
    scoreDolphins = (97 + 112 + 101) / 3;
    scoreKoalas = (109 + 95 + 123) / 3;
    console.log(scoreDolphins, scoreKoalas);

    if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
        console.log('Dolphins win the trophy!');
    } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
        console.log('Koalas win the trophy!');
    } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
        console.log('Both win the trophy!');
    }

// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
    scoreDolphins = (97 + 112 + 101) / 3;
    scoreKoalas = (109 + 95 + 106) / 3;
    console.log(scoreDolphins, scoreKoalas);

    if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
        console.log('Dolphins win the trophy!');
    } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
        console.log('Koalas win the trophy!');
    } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
        console.log('Both win the trophy!');
    } else {
        console.log('No one wins the trophy!');
    }

//Coding Challenge #4
    console.log('-------Coding Challenge #4');
    // Data: Test for bill values 275, 40 and 430
    let bill = 275;
    let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

    bill = 40;
    tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

    bill = 430;
    tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);