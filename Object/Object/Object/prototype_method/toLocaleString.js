/*
    Object.prototype.toLocaleString

    @param locales? string | string[]
    @param option? DateTimeFormatOptions(string)
    
    @return string

    toLocaleString() 메서드는 객체로 된 문자열을 반환합니다. 
    이 메서드는 지역별로 다른 객체로 재정의되어 표시됩니다.
*/
const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

console.log(date1.toLocaleString('ar-EG'));
// expected output: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

const number1 = 123456.789;

console.log(number1.toLocaleString('de-DE'));