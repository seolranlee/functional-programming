// 순수 함수
function add(a, b) {
    return a + b;
}

// 1. 동일한 인자를 주면 동일한 결과를 return
console.log( add(10, 5) )   // 15
console.log( add(10, 5) )   // 15
console.log( add(10, 5) )   // 15

// 반대의 사례
// 그러나 이 c가 상수로 존재하면 add2도 순수함수가 된다.
var c = 10
function add2(a, b) {
    return a + b + c
}

console.log( add2(10, 2) )   // 22
console.log( add2(10, 3) )   // 23
console.log( add2(10, 4) )   // 24

// 2. 순수함수는 평가시점이 중요하지 않다.(중요)
// 여기선 반대의 사례. c가 변경되고 나서 평가했느냐 아니냐가 리턴 값이 달라짐.
c = 20

console.log( add2(10, 2) )   // 32
console.log( add2(10, 3) )   // 33
console.log( add2(10, 4) )   // 34

// 부수효과(외부의 상태를 변경, 들어온 인자의 상태를 직접 변경하는 함수)가 없다.
// 반대의 사례
var c = 20
function add3(a, b) {
    c = b   // 외부의 상태에 영향을 미치는 출력이 존재 => 부수효과가 존재
    return a + b
}

console.log('c: ', c)  // 20
console.log( add3(20, 30) ) // 결과 자체는 항상 동일할지라도
console.log('c: ', c)  // 30 c라는 상태를 함수를 오염시킨다.
console.log( add3(20, 30) )
console.log( add3(20, 30) )

var obj1 = { val: 10 }
function add4(obj, b) { // 넘어온 인자의 상태를 직접 변경하고 있다. 순수함수가 아니다. 
    obj.val += b
}
console.log(obj1.val)   // 10
add4(obj1, 20)
console.log(obj1.val)   // 30


// 함수형 프로그래밍은 객체의 값을 변경할 수 없는 건가?
// no! 조금 다른 방법을 통해서 변형해나간다. (원래 있던 값은 그대로 두고 새로운 값을 만들면서 복사해 새로운 값을 리턴하는 식으로)

// 다시 순수 함수
var obj1 = { val: 10 }
function add5(obj, b) {
    return { val: obj.val + b } // obj에 있는 val을 참조만 할 뿐 값을 직접 변경하지 않는다.
    // 새로운 객체를 리턴

    // 인자를 받은 값의 상태 변경 X
    // 외부 상태 변경X
}

console.log( obj1.val)  // 10
var obj2 = add5(obj1, 20)
console.log( obj1.val)  // 10
console.log( obj2.val)  // 30

// 함수형 프로그래밍은 초기화 된 원래 값을 건들지 않고 모든 값들에 대한 변화를 일으키지 않고 외부의 상태를 변화시키지 않으면서 인자로 받은 값을 변경시키지 않으면서 값을 다뤄나가는 프로그랭


