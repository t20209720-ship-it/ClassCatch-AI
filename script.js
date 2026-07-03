const uploadBtn = document.getElementById("uploadBtn");
const lectureFile = document.getElementById("lectureFile");

uploadBtn.addEventListener("click", () => {
    lectureFile.click();
});

lectureFile.addEventListener("change", function(){

    if(this.files.length > 0){

        alert(
        "Selected file: " +
        this.files[0].name
        );

    }

});