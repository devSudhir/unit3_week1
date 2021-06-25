function runProgram(input){
 var newInput = input.split("\n");
    let testCases = Number(newInput[0]);
    for (let i = 1; i <= 2 * testCases; i += 2) {
        let length = Number(newInput[i]);
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        let s = [];        
        s.push(0);
        let top = 0;
        let result1 = [1];

        let s2 = [];
         s2.push(0);
        let top2 = 0;
        let result2 = new Array(length);
        /* console.log(arr[s[top]], top, s[top])
        console.log("result1", result1); */
        //console.log(arr,result2)
        for (let j = 1; j < length; j++) {
            while (top != -1 && arr[s[top]] < arr[j]) {
                s.pop();
                top--;
                //console.log("while",arr[s[top]], top, s[top])
                //console.log("while res2 before",result2,s2,top2)
                result2[s2[top2]] = j - s2[top2];
                s2.pop();
                top2--;
                //console.log("while res2 after",result2,s2,top2)
            }
            if (top == -1) {
                result1.push(j + 1) ;
            } else {
                result1.push(j - s[top]);
            }
            //console.log("result1", result1);
            s.push(j);
            top++;

            s2.push(j);
            top2++;
           //console.log(result2,s2,top2)
        }
        while (top2 != -1) {
            result2[s2[top2]] = length - s2[top2];
            top2--;
        }
        console.log("res2",result2.join(" "))
        console.log("res1", result1.join(" "));
        
        let output = [];
        for (let i = 0; i < length; i++){
            output.push(result2[i] + result1[i]) ;
        }

        console.log(output.join(" "),"\n")
    }
}
let input = `3
7
100 80 60 70 60 75 85
5
3 5 0 9 8
7
9 10 5 7 8 13 21`;
runProgram(input);