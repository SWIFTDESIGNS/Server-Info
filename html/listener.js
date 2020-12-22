$(function () {
    window.onload = function (e) {
        window.addEventListener("message", (event) => {
            var item = event.data;
            if (item !== undefined && item.type === "ui") {
                if (item.display === true) {
                    $('#Commands').show();
                } else {
                    $('#Commands').hide();
                }
            }
        })
    }
})




