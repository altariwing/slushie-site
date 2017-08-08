/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-08-08 10:11:29
 * @version $Id$
 */


/*
window.onload=initialize;

*/

function initialize() {
    var data = document.getElementById("id");
    var rawdata = data.value;
    if (isldNo(rawdata) == true) {
        window.alert("身分證號: "+rawdata);
    } else
        window.alert("輸入錯誤");
}

function toNumber(ch) {
    switch (ch) {
        case 'A':
            return 10;
            break;
        case 'B':
            return 11;
            break;
        case 'C':
            return 12;
            break;
        case 'D':
            return 13;
            break;
        case 'E':
            return 14;
            break;
        case 'F':
            return 15;
            break;
        case 'G':
            return 16;
            break;
        case 'H':
            return 17;
            break;
        case 'I':
            return 34;
            break;
        case 'J':
            return 18;
            break;
        case 'K':
            return 19;
            break;
        case 'L':
            return 20;
            break;
        case 'M':
            return 21;
            break;
        case 'N':
            return 22;
            break;
        case 'O':
            return 35;
            break;
        case 'P':
            return 23;
            break;
        case 'Q':
            return 24;
            break;
        case 'R':
            return 25;
            break;
        case 'S':
            return 26;
            break;
        case 'T':
            return 27;
            break;
        case 'U':
            return 28;
            break;
        case 'V':
            return 29;
            break;
        case 'W':
            return 32;
            break;
        case 'X':
            return 30;
            break;
        case 'Y':
            return 31;
            break;
        case 'Z':
            return 33;
            break;
    }
}

function isldNo(a) {
    var firstNum = a.charAt(0);
    var sum = parseInt(toNumber(firstNum) / 10);
    sum += toNumber(a.charAt(0)) % 10 * 9;
    sum += parseInt(a.charAt(1)) * 8;
    sum += parseInt(a.charAt(2)) * 7;
    sum += parseInt(a.charAt(3)) * 6;
    sum += parseInt(a.charAt(4)) * 5;
    sum += parseInt(a.charAt(5)) * 4;
    sum += parseInt(a.charAt(6)) * 3;
    sum += parseInt(a.charAt(7)) * 2;
    sum += parseInt(a.charAt(8)) * 1;
    if ((10 - sum % 10) == a.charAt(9)) return true;
    else return false;
}