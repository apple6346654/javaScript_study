
//구구단
for(let i =1; i<=9; i++){
    for(let j =1; j<=9; j++){
        console.log(i + "*"+ j + "=" ,i*j);
    }
    
}

//1부터 100까지 더하기
// let j = 0 ;
// for(let i = 1; i<=100; i++){
//     j=j+i ;
//     console.log(j);
    
// }

//1부터 100까지 홀수만 출력
// for(let i = 1; i<=100; i++){
//     if(i%2==1){score
//         console.log(i);점수
//     }
// }

//369게임 1부터50까지

for(let i=1;i<=50;i++){
    let stringValue = i.toString()
    let result = ""
    for(let j=0;j<stringValue.length;j++){
      if(stringValue[j] == "3" ||stringValue[j] == "6" ||stringValue[j] == "9" ){
        result+="짝"
      }
    }
    console.log(result.length>0?result:i)
  }