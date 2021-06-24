function runProgram(input) {
    var newInput = input.split("\n");
    var loop = Number(newInput[0]);
    for (let i = 1; i <= loop; i++){
        let stack = [];
        let top = -1;
        let str = newInput[i].split("");
        console.log(str);
        let balance = true;
        for (let j = 0; j < str.length; j++){
            if (str[j] == "(" || str[j] == "{" || str[j] == "[") {
                stack.push(str[j]);
                top++;
                console.log(stack);
            } else {
                if (str[j] == ")" && stack[top] == "(") {
                    stack.pop();
                    top--;
                    console.log(stack);
                } else if (str[j] == "}" && stack[top] == "{") {
                    stack.pop();
                    top--;
                    console.log(stack);
                } else if (str[j] == "]" && stack[top] == "[") {
                    stack.pop();
                    top--;
                    console.log(stack);
                } else {
                    balance = false;
                    break;
                }
            }
        }
        if (top == -1 && balance) {
            console.log("balanced");
        } else {
            console.log("not balanced")
        }
    }
}
let input = `3
}(()){}
(()
)))))
`;
runProgram(input);
/* 
balanced
balanced
not balanced */