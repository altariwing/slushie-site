/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-08-08 11:50:54
 * @version $Id$
 */

var dateObject = new Date;
var year = dateObject.getFullYear();
var month = dateObject.getMonth() + 1; //月份0~11
var date = dateObject.getDate()
var day = dateObject.getDay(); //星期0~6(日到六)

function isLeapYear(year) {
	return (year%400==0) || ((year%4==0) && (year%100!=0));
}

function iamaCalendar() {
    document.getElementById("caption").innerHTML = Date();
}