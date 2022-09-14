//      ----------------  Page Cursor  -------------------
document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        t.style.left = n.clientX + "px",
                t.style.top = n.clientY + "px",
                e.style.left = n.clientX + "px",
                e.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
}
function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
}
function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}
//      ------------------------------------------------





function insrt(num) {
        $('.calc-display').val($('.calc-display').val() + num);
}
function eql() {
        $('.calc-display').val(eval($('.calc-display').val()));
}
function c() {
        $('.calc-display').val('');
}
function del() {
        value = $('.calc-display').val();
        $('.calc-display').val(value.substring(0, value.length - 1));
}

















