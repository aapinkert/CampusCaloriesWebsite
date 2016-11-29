$(document).ready(function(){
    $('#confimationBtn').click(function() {
        event.preventDefault();
        if(!$("#checkboxConfirm").prop('checked')){
            bootbox.alert({
                message: "Please confirm the terms and conditions. ",
                callback: function () {
                    location.reload();
                }
            })
        }
        else{
            window.location.href = "exchange-buy-confirm.html"
        }
    });
});
