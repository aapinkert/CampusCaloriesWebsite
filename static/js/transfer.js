$(document).ready(function(){
    $('#confimationBtn').click(function() {
        event.preventDefault();
        var emailRegex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        var emailVal = $("#emailX").val();
        if(!emailVal){
            bootbox.alert({
                message: "Please enter a valid email.",
                callback: function () {
                    location.reload();
                }
            })
        }
        else if(!$("#checkboxConfirm").prop('checked')){
            bootbox.alert({
                message: "Please confirm the terms and conditions. ",
                callback: function () {
                    location.reload();
                }
            })
        }
        else{
            window.location.href = "transfer-confirm.html"
        }
    });
});
