function     stealMuch(C, N, valueArr, weightArr){

    // console.log(C, N, valueArr, weightArr);

    
}


function runProgram(input) {
   var input = input.trim().split("\n");

   var C = +input[0];
   var N = +input[1];

   var valueArr = input[2].trim().split(" ").map(Number);
   var weightArr = input[3].trim().split(' ').map(Number);

    stealMuch(C, N, valueArr, weightArr);
   
  }
  if (process.env.USERNAME === "siddhesh") {
    runProgram(`50 
3
60 100 120 
10 20 30`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }