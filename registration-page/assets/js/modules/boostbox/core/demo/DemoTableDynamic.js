(function(namespace, $) {
	"use strict";

	var DemoTableDynamic = function() {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function() {
			o.initialize();
		});

	};
	var p = DemoTableDynamic.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function() {
		this._initDataTables();
	};

	// =========================================================================
	// DATATABLES
	// =========================================================================

	p._initDataTables = function() {
		if (!$.isFunction($.fn.dataTable)) {
			return;
		}

		var o = this;

		// Add extra functionality to DataTables
		this._extendDataTables();

		// Init the demo DataTables
		this._createDataTable1();
		this._createDataTable2();
	}

	p._createDataTable1 = function() {
		$('#datatable1').dataTable({
			"sDom": 'lCfrtip',
			"sPaginationType": "full_numbers",
			"aaSorting": [],
			"aoColumns": [
				null,
				null,
				null,
				{"sType": "numeric-comma"},
				null
			],
			"oColVis": {
				"buttonText": "Columns",
				"iOverlayFade": 0,
				"sAlign": "right"
			},
			"oLanguage": {
				"sLengthMenu": '_MENU_ entries per page',
				"sSearch": '<i class="fa fa-search"></i>',
				"oPaginate": {
					"sPrevious": '<i class="fa fa-angle-left"></i>',
					"sNext": '<i class="fa fa-angle-right"></i>'
				}
			}
		});
	};

	p._createDataTable2 = function() {
		// Insert a 'details' column to the table
		var nCloneTh = document.createElement('th');
		var nCloneTd = document.createElement('td');
		nCloneTd.innerHTML = '<a class="btn btn-transparent btn-xs btn-equal btn-expand"><i class="fa fa-plus"></i></a>';
		nCloneTd.className = 'text-center';
		$('#datatable2 thead tr').each(function() {
			this.insertBefore(nCloneTh, this.childNodes[0]);
		});

		$('#datatable2 tbody tr').each(function() {
			this.insertBefore(nCloneTd.cloneNode(true), this.childNodes[0]);
		});

		var oTable = $('#datatable2').dataTable({
			"sDom": 'T<"clear">lfrtip',
			"sPaginationType": "full_numbers",
			"aaSorting": [],
			"aoColumns": [
				null,
				null,
				null,
				null,
				{"sType": "numeric-comma"},
				null
			],
			"aoColumnDefs": [
				{"bSortable": false, "aTargets": [0]}
			],
			"oTableTools": {
				"sSwfPath": $('#datatable2').data('swftools')
			},
			"oLanguage": {
				"sLengthMenu": '_MENU_ entries per page',
				"sSearch": '<i class="fa fa-search"></i>',
				"oPaginate": {
					"sPrevious": '<i class="fa fa-angle-left"></i>',
					"sNext": '<i class="fa fa-angle-right"></i>'
				}
			}
		});

		//Add event listener for opening and closing details
		var o = this;
		$('#datatable2 tbody').on('click', 'td .btn-expand', function() {
			var nTr = $(this).parents('tr')[0];
			if (oTable.fnIsOpen(nTr))
			{
				/* This row is already open - close it */
				$(this).find('.fa').removeClass('fa-minus').addClass('fa-plus');
				oTable.fnClose(nTr);
			}
			else
			{
				/* Open this row */
				$(this).find('.fa').removeClass('fa-plus').addClass('fa-minus');
				oTable.fnOpen(nTr, o._formatDetails(oTable, nTr), 'details');
			}
		});
	};

	// =========================================================================
	// DETAILS
	// =========================================================================

	p._formatDetails = function(oTable, nTr) {
		var aData = oTable.fnGetData(nTr);
		var sOut = '<table class="table-no-border" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">';
		sOut += '<tr><td>Rendering engine:</td><td>' + aData[1] + ' ' + aData[4] + '</td></tr>';
		sOut += '<tr><td>Link to source:</td><td>Could provide a link here</td></tr>';
		sOut += '<tr><td>Extra info:</td><td>And any further details here (images etc)</td></tr>';
		sOut += '</table>';

		return sOut;
	};

	// =========================================================================
	// UTILS
	// =========================================================================

	p._extendDataTables = function() {
		// Add numeric filtering functionality to DataTables
		$.extend($.fn.dataTableExt.oSort, {
			"numeric-comma-pre": function(a) {
				var x = (a == "-") ? 0 : a.replace(/,/, ".");
				return parseFloat(x);
			},
			"numeric-comma-asc": function(a, b) {
				return ((a < b) ? -1 : ((a > b) ? 1 : 0));
			},
			"numeric-comma-desc": function(a, b) {
				return ((a < b) ? 1 : ((a > b) ? -1 : 0));
			}
		});
	}

	// =========================================================================
	namespace.DemoTableDynamic = new DemoTableDynamic;
}(this.boostbox, jQuery)); // pass in (namespace, jQuery):
