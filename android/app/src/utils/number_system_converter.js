function decimal_to_binary(decimal, setBinary) {
    let decimalNum = Number(decimal);
    let binaryNum = "";
    while (Math.floor(decimalNum) !== 0) {
        console.log(Math.floor(decimalNum) / 2);
        if (Math.floor(decimalNum) % 2 === 0) {
            binaryNum = 0 + binaryNum;
        } else {
            binaryNum = 1 + binaryNum;
        }
        decimalNum = Math.floor(decimalNum) / 2;
    }
    setBinary(binaryNum)
}
function binary_to_decimal(binary, setDecimal){
    let decimal = 0;
    let i = binary.length - 1;
    while (i > - 1) {
        if("1" === binary[(binary.length-1) -i])decimal += Math.pow(2, i);
        i--;
    }
    setDecimal(decimal.toString());
}
export default  {decimal_to_binary, binary_to_decimal }