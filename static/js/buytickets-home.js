$(document).ready(function(){
    $(".packageTable").DataTable( {
        bFilter: false,
        bPaginate: false,
        bSort: false,
        bInfo: false,
        columnDefs: [
            //control
            {
                className: 'control',
                orderable: false,
                defaultContent: "",
                targets:   0
            },
            //date
            {
                data: 'date',
                responsivePriority: 1,
                targets: 1
            },
            //opponent
            {
                data: 'opponent',
                responsivePriority: 2,
                targets: 2
            },
            //price
            {
                data: 'price',
                responsivePriority: 3,
                targets: 3
            }
        ],
        responsive: {
            details: {
                type: 'column',
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function ( row ) {
                        var data = row.data();
                        return '<b>Ticket Details<b>';
                    }
                }),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll({
                    tableClass: 'table'
                })
            }
        },
        order: [ 1, 'dsc' ]
    });
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
            window.location.href = "buytickets-confirm.html"
        }
    });
});
