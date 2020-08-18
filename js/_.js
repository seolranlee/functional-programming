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