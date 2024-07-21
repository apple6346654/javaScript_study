let age = 21;
                                         //&&and연산 둘다참 , ||or 연산 둘중 하나만 참이면 참
if(age>20){                              // == ,!=
    console.log("오토바이 운전 가능");    // if 은 참이면 뒤에 코드를 실행하지 않고 바로 종료 한다.
}else if(age>=18){                       // if문 안에 if문 중첩 가능
    console.log("운전가능");
}else{
    console.log("운전불가능");
}


// let score = 90;

// if (score>=90 ) {
//     console.log("A");
// }else if (score>=80 && score<=89) {
//     console.log("B");
// }else if (score>=70 && score<=79) {
//     console.log("C");
// }else if (score>=60 && score<=69) {
//     console.log("D");
// }
// else {
//     console.log("F");
// }

let menu = 4 ;

let answer = menu <=3 ? "범위안에 숫자입니다." : "범위 밖의 숫자입니다."  //삼항연잔자
console.log(answer);
