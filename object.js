let patient = {                   //   <- 객체라고 부른다
    name: "jimin",                //   name: "jimin"  <- 키:키값  이라고 부른다.
    age :17,
    disease: "cold"
}

console.log(patient);
console.log(patient.name);     // . 과 [] 둘이 똑같다.  (이름만 가져오기)
console.log(patient["name"]);  // . 과 [] 둘이 똑같다.  (이름만 가져오기)

console.log("---------------------");

patient.name = "jsy"  // 이런식으로 객체 안에 키값을 변경 할 수있다.
patient.age ="25"
console.log(patient);


console.log("---------------------");

let patientList = [{name:"kmj", age: 25},{name:"wmi", age: 28},{name:"jwm", age: 30}];
console.log(patientList);
console.log("첫번쨰 사람은",patientList[0]);
console.log("첫번쨰 사람의 나이만 가지고 오면?",patientList[0].age);


