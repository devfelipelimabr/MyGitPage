document.addEventListener("DOMContentLoaded", function() {
    var cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", function(event) {
        var scrollX = window.scrollX || document.documentElement.scrollLeft || document.body.scrollLeft;
        var scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

        cursor.style.left = event.clientX + scrollX + "px";
        cursor.style.top = event.clientY + scrollY + "px";
    });
});
