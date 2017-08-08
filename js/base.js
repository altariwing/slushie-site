/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-08-08 10:01:56
 * @version $Id$
 */
    function pleasantry() {
        var today = new Date();
        var hour = today.getHours();
        var pleasan;
        if (hour < 5)
            pleasan = "好早喔~";
        else if (hour < 12)
            pleasan = "早安~";
        else if (hour < 18)
            pleasan = ("午安~");
        else
            pleasan = ("晚安~");
        return pleasan;
    } //end function pleasantry

    function addnickname() {
        var nickname = prompt("該怎麼稱呼呢?", "");
        if (nickname != null && nickname.length > 0) {
            if (confirm(nickname + ",確定嗎?")) {
                //location.href="http://www.kimo.com.tw";

                document.getElementById("hello").innerHTML =
                    pleasantry() + nickname + "! How are you today?";
            }

        }
    } //end addnickname

    
