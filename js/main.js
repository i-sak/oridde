// 리사이즈 이벤트리스너
window.onresize = chkSize;
function chkSize(e){
    console.log(window.innerWidth);
    // 브라우저 너비
    var width = window.innerWidth;
    var nav = document.getElementById("nav");
    var mob_btn_div = document.getElementById("mob_btn_div");
    var box_in_foot = document.getElementById("box_in_foot");
    // 900보다 작으면 안보이기
    if (width <= 900) {
        nav.style.display = "none";
        mob_btn_div.style.display = "block";
        box_in_foot.style.fontSize = "12px";
    } else {
        // 크면 보이기
        nav.style.display = "inline-block";
        mob_btn_div.style.display = "none";
    }
}


