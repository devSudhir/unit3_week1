function runProgram(input){
 var newInput = input.split("\n");
    let testCases = Number(newInput[0]);
    for (let i = 1; i <= 2 * testCases; i += 2) {
        let length = Number(newInput[i]);
        let arr = newInput[i + 1].trim().split(" ").map(Number);
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
        

        // Doing another solution by reversing the array
        let s = [];
        s.push(0);
        let top = 0;
        /* console.log(arr);
        console.log(s); */
        for (let j = 1; j < length; j++){
            while (top != -1 && arr[s[top]] < arr[j]) {                
                arr[s[top]] = arr[j]
                s.pop();
                top--;
                /* console.log(arr[s[top]],top)                
                console.log(arr,"\n"); */
            }
            /* if (s.length != 0) {
                
            } */

            s.push(j);
            top++;
            //console.log("pushed",arr[s[top]],top,arr,"\n")
        }
        //console.log("after finding nge",s);
        while (top != -1) {
            arr[s[top]] = -1;
            s.pop();
            top--;
        }
        console.log("res",arr);
    }
}


let input = `1
5
1 2 3 4 5`;
runProgram(input);