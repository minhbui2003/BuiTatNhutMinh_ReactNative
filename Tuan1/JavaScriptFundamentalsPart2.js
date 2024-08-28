//Coding Challenge #1
    console.log('-------Coding Challenge #1');
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
    const calcAverage1 = (score1, score2, score3) => (score1 + score2 + score3) / 3;
    let scoreDolphins = calcAverage1(44, 23, 71);
    let scoreKoalas = calcAverage1(65, 54, 49);
    console.log(scoreDolphins, scoreKoalas);

    const checkWinner = function (avgDolphins, avgKoalas) {
        if (avgDolphins >= 2 * avgKoalas) {
            console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
        } else if (avgKoalas >= 2 * avgDolphins) {
            console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
        } else {
            console.log('No team wins');
        }
    }
    checkWinner(scoreDolphins, scoreKoalas);

// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
    scoreDolphins = calcAverage1(85, 54, 41);
    scoreKoalas = calcAverage1(23, 34, 27);
    console.log(scoreDolphins, scoreKoalas);
    checkWinner(scoreDolphins, scoreKoalas);

//Coding Challenge #2
// Data: 125, 555 and 44
    console.log('-------Coding Challenge #2');
    const calcTip1 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    let bills1 = [125, 555, 44];
    let tips1 = [calcTip1(bills1[0]), calcTip1(bills1[1]), calcTip1(bills1[2])];
    let total = [bills1[0] + tips1[0], bills1[1] + tips1[1], bills1[2] + tips1[2]];
    console.log(bills1, tips1, total);

//Coding Challenge #3
    console.log('-------Coding Challenge #3');
    const mark = {
        fullName: 'Mark Miller',
        mass: 78,
        height: 1.69,
        calcBMI: function () {
            this.BMI = this.mass / this.height ** 2;
            return this.BMI;
        }
    };

    const john = {
        fullName: 'John Smith',
        mass: 92,
        height: 1.95,
        calcBMI: function () {
            this.BMI = this.mass / this.height ** 2;
            return this.BMI;
        }
    };

    mark.calcBMI();
    john.calcBMI();
    console.log(mark.BMI, john.BMI);

    if (mark.BMI > john.BMI) {
        console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`);
    }else {
        console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`);
    }

//Coding Challenge #4
    console.log('-------Coding Challenge #4');
// Data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
    const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
    const tips = [];
    const totals = [];

    for (let i = 0; i < bills.length; i++) {
        const tip = calcTip(bills[i]);
        tips.push(tip);
        totals.push(tip + bills[i]);
    }
    console.log(bills, tips, totals);

    const calcAverage = function (arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            // sum = sum + arr[i];
            sum += arr[i];
        }
        return sum / arr.length;
    }
    console.log(calcAverage(totals));