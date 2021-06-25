function findNGE(arr1) {
    let s = [0];
    let top = 0;

    for (let i = 1; i < arr1.length; i++){
        while (top != -1 && arr1[s[top]] < arr1[i]) {
            arr1[s[top]] = i;
            s.pop();
            top--;
        }

        s.push(i);
        top++;
    }
    while (top != -1) {
        arr1[s[top]] = -1;
        top--;
    }
    return arr1;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let testCases = Number(newInput[0]);

    for (let i = 1; i <= 2 * testCases; i += 2){
        let length = Number(newInput[i]);
        let arr = newInput[i + 1].split(" ").map(Number);

        let arr1 = arr.slice();
        arr1 = findNGE(arr1);

        console.log(arr1)
        let result = "";

        for (let j = 0; j < length; j++){
            if (arr1[j] != -1) {
                result += arr[arr1[j]] + " ";
            } else {
                result += "-1 ";
            }
        }
        console.log(result);
    }
    
}


let input = `1
4
1 3 2 4`;
runProgram(input);
