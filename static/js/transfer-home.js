$(document).ready(function(){
    $("#homeTable").DataTable( {
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
                responsivePriority: 3,
                targets: 1
            },
            //opponent
            {
                data: 'opponent',
                responsivePriority: 1,
                targets: 2
            },
            //averageprice
            {
                data: 'averageprice',
                responsivePriority: 4,
                targets: 3
            },
            //seating bowl
            {
                data: 'bowl',
                targets: 4
            },
            //action
            {
                data: 'action1',
                responsivePriority: 2,
                targets: 5
            },
            //action
            {
                data: 'action2',
                responsivePriority: 2,
                targets: 6
            }
        ],
        responsive: {
            details: {
                type: 'column',
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function ( row ) {
                        var data = row.data();
                        return '<b>Alabama vs. '+data.opponent +'<b>';
                    }
                }),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll({
                    tableClass: 'table'
                })
            }
        },
        order: [ 1, 'asc' ]
    });
});
