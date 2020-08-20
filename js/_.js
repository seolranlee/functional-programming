// 3. 커링
// 1. _curry, _curryr(오른쪽에서부터 인자를 적용해 나가는 curryr) (함수를 값으로 들고 있다가 원하는 시점까지 미뤄뒀다가 최종적으로 평가하는 기법)
function _curry(fn) {
    return function (a, b) {
        // 인자가 2개 들어오면 한번에 즉시 평가.
        // 인자가 하나만 들어오면 안쪽에 함수를 리턴해서 한번 더 평가시점을 미루는 형식.
        return arguments.length == 2 ? fn(a, b) : function (b) { return fn(a, b) }
    }
}

// 인자를 맨 오른쪽에서부터 적용해 나간다.
function _curryr(fn) {
    return function (a, b) {
        return arguments.length == 2 ? fn(a, b) : function (b) { return fn(b, a) } // 인자를 맨 오른쪽에서부터 적용해 나간다.
    }
}

// 커리함수
// 인자로 본체 함수를 받고
// 커리 함수를 실행하면 즉시 함수를 리턴

// 2. _get 만들어 좀 더 간단하게 하기
// object에 있는 값을 안전하게 참조 
var _get = _curryr(function (obj, key) {
    return obj == null ? undefined : obj[key]
})

// 2. _filter, _map으로 리팩토링
function _filter(list, predi) {
    var new_list = []
    _each(list, function(val) {
        if (predi(val)) new_list.push(val)
    })
    return new_list
}

// _map함수를 보면 데이터 형이 어떻게 생겼는지 보이지 않는다.(다형성이 높다.)
function _map(list, mapper) {
    var new_list = []
    _each(list, function(val) {
        new_list.push(mapper(val))
    })
    return new_list
}

function _each(list, iter) {  // 해당 i번째 값을 순회하는 함수
    for (var i = 0; i < list.length; i++) {
        iter(list[i])   // for문을 돌면서 안에서 하는 일을 완전히 위임
    }
    return list
}