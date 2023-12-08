function addressModify(address: string): string {
    var words = address.split(' ')
    words[0] = addressFullName(words[0])
    return words.join(" ")
}
function addressFullName(add: string): string {
    const names: { [key:string]: string[]} = {
        "대전광역시": ["대전", "대전시", "대전직할시"],
        "서울특별시": ["서울", "서울시", "Seoul"],
        "인천광역시": ["인천", "인천시", "Incheon", "ICN"],
        "광주광역시": ["광주", "광주시", "Gwangju"],
        "대구광역시": ["대구", "대구시", "대구직할시"],
        "울산광역시": ["울산", "울산시", "울산직할시"],
        "부산광역시": ["부산", "부산시", "Busan"],
        "경기도": ["경기"],
        "강원도": ["강원"],
        "충청북도": ["충북"],
        "충청남도": ["충남"],
        "전라북도": ["전북"],
        "전라남도": ["전남"],
        "경상북도": ["경북"],
        "경상남도": ["경남"]
    }
    for (var city in names) {
        if (names[city].includes(add)) {
            return city
        }
    }
    return add
}

export default addressModify