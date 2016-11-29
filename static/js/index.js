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
            //time
            {
                data: 'time',
                targets: 3
            },
            //seating bowl
            {
                data: 'bowl',
                targets: 4
            },
            //action
            {
                data: 'action',
                responsivePriority: 2,
                targets: 5
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

    $("#awayTable").DataTable( {
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
            //time
            {
                data: 'time',
                targets: 3
            },
            //seat
            {
                data: 'seat',
                targets: 4
            }
        ],
        responsive: {
            details: {
                type: 'column',
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function ( row ) {
                        var data = row.data();
                        return '<b>Alabama at '+data.opponent +'<b>';
                    }
                }),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll({
                    tableClass: 'table'
                })
            }
        },
        order: [ 1, 'asc' ]
    });

    $("#postseasonTable").DataTable( {
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
            //game
            {
                data: 'game',
                responsivePriority: 1,
                targets: 2
            },
            //location
            {
                data: 'location',
                responsivePriority: 2,
                targets: 3
            },
            //opponent
            {
                data: 'opponent',
                responsivePriority: 4,
                targets: 4
            },
            //time
            {
                data: 'time',
                targets: 5
            },
            //seat
            {
                data: 'seat',
                targets: 6
            }
        ],
        responsive: {
            details: {
                type: 'column',
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function ( row ) {
                        var data = row.data();
                        return '<b>'+data.game +'<b>';
                    }
                }),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll({
                    tableClass: 'table'
                })
            }
        },
        order: [ 1, 'asc' ]
    });

    $("#penaltyTable").DataTable( {
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
            //reason
            {
                data: 'game',
                responsivePriority: 3,
                targets: 2
            },
            //number
            {
                data: 'number',
                responsivePriority: 2,
                targets: 3
            },
        ],
        responsive: {
            details: {
                type: 'column',
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function ( row ) {
                        var data = row.data();
                        return '<b>'+ data.date +'<b>';
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
