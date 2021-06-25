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

function findNSE(arr2) {
    let s = [0];
    let top = 0;

    for (let i = 1; i < arr2.length; i++){
        while (top != -1 && arr2[s[top]] > arr2[i]) {
            arr2[s[top]] = i;
            s.pop();
            top--;
        }

        s.push(i);
        top++;
    }
    while (top != -1) {
        arr2[s[top]] = -1;
        top--;
    }
    return arr2;
}
function runProgram(input) {
    let newInput = input.split("\n");
    let length = Number(newInput[0]);
    let arr = newInput.slice(1).map(Number);
    let arr1 = arr.slice();
    arr1 = findNGE(arr1);
    
    let arr2 = arr.slice();
    arr2 = findNSE(arr2);
    
    let result = "";
    for (let i = 0; i < length; i++){
        if (arr[arr2[arr1[i]]] != undefined) {
            result += arr[arr2[arr1[i]]] + " ";
        } else {
            result += "-1 "
        }          

    }
    console.log(result);
}
let input = `100
91
59
85
60
57
72
12
3
27
16
58
41
94
77
64
97
20
32
37
7
2
57
94
35
70
38
60
97
100
5
76
38
8
16
61
45
77
6
89
86
31
88
48
13
93
75
38
93
25
80
99
98
78
30
42
57
17
96
95
25
12
94
57
81
35
5
74
89
45
18
69
67
67
11
96
23
59
97
73
26
68
77
50
19
17
79
54
76
64
69
98
9
42
48
61
70
19
49
79
80`;
runProgram(input);