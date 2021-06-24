function runProgram(input){
 var newInput = input.split("\n");
    let testCases = Number(newInput[0]);
    for (let i = 1; i <= 2 * testCases; i += 2) {
        let length = Number(newInput[i]);
        let arr = newInput[i + 1].split(" ").map(Number);
        /* let result = [-1];
        let stack = [arr[length - 1]];
        let top = 0;
        console.log("stack",stack);
        for (let j = length - 2; j >= 0; j--){
            while (top != -1 && stack[top] < arr[j]) {
                stack.pop();
                top--;
                console.log("stack",stack);
            }
            if (top == -1) {
                result.unshift(-1);
                //console.log("stack",stack);
            } else {
                result.unshift(stack[top]);
                //console.log("stack",stack);
            }
            stack.push(arr[j]);
            console.log(stack);
            top++;
            console.log("res",result);
        }
        console.log(result.join(" ")); */

        let s = [];
        s.push(arr[0]);

        for (let j = 1; j < length; j++){
            while (s.length != 0 && s[s.length - 1] < arr[j]) {
                s.pop();
            }
            if (s.length != 0) {
                
            }

        }
    }
}


let input = `1
4
1 3 2 4`;
runProgram(input);