function countvote(array) {
    let countA = 0;
    let countB = 0;
    let countC = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'A') {
            countA++;
        } else if (array[i] === 'B') {
            countB++;
        } else if (array[i] === 'C') {
            countC++;
        }
    }

    if (countA + countB + countC === 0) {
        return 'No votes';
    }

    if (countA > countB && countA > countC) {
        return 'A';
    } else if (countB > countA && countB > countC) {
        return 'B';
    } else if (countC > countA && countC > countB) {
        return 'C';
    } else {
        return 'Tie';
    }
}

console.log(countvote(['A', 'B', 'A', 'C', 'A']));
