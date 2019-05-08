function move() {
    var progress = document.getElementById("progress");
    var progress_width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (progress_width >= 100) {
            clearInterval(id);
        } else {
            progress_width++;
            progress.style.width = progress_width + '%';
        }
    }
}