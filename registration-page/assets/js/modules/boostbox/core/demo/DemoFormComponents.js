(function(namespace, $) {
	"use strict";

	var DemoFormComponents = function() {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function() {
			o.initialize();
		});

	};
	var p = DemoFormComponents.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function() {
		this._initSelect2();
		this._initMultiSelect();
		this._initInputMask();
		this._initDateTime();
		this._initSliders();
		this._initSpinners();
		this._initColorPickers();
		this._initTypeahead();
	};

	// =========================================================================
	// TYPE-AHEAD
	// =========================================================================

	p._initTypeahead = function() {
		if (!$.isFunction($.fn.typeahead)) {
			return;
		}
		if (!$.isFunction($.fn.autocomplete)) {
			return;
		}

		$('#autocomplete1').typeahead({
			name: 'countries',
			prefetch: $('#autocomplete1').data('source')
		});

		$.ajax({
			url: $('#autocomplete2').data('source'),
			dataType: "json",
			success: function(countries) {
				$("#autocomplete2").autocomplete({
					minLength: 2,
					source: function(request, response) {
						var results = $.ui.autocomplete.filter(countries, request.term);
						response(results.slice(0, 10));
					}
				});
			}
		});
	};

	// =========================================================================
	// SPINNERS
	// =========================================================================

	p._initColorPickers = function() {
		if (!$.isFunction($.fn.colorpicker)) {
			return;
		}
		$('#cp1').colorpicker();
		$('#cp2').colorpicker();
		$('#cp3').colorpicker().on('changeColor', function(ev) {
			$(ev.currentTarget).closest('div').css('background', ev.color.toHex());
		});
	};

	// =========================================================================
	// SPINNERS
	// =========================================================================

	p._initSpinners = function() {
		if (!$.isFunction($.fn.spinner)) {
			return;
		}
		$("#spinner").spinner();
		$("#spinner-decimal").spinner({step: 0.01, numberFormat: "n"});
	};

	// =========================================================================
	// SLIDERS
	// =========================================================================

	p._initSliders = function() {
		if (!$.isFunction($.fn.slider)) {
			return;
		}
		$("#slider").slider({range: "min", value: 50, min: 0, max: 100,
			slide: function(event, ui) {
				$('#slider-value').empty().append(ui.value);
			}
		});
		$("#slider-step").slider({value: 100, min: 0, max: 500, step: 50,
			slide: function(event, ui) {
				$('#step-value').empty().append(ui.value);
			}
		});
		$("#slider-range").slider({range: true, min: 0, max: 100, values: [25, 75],
			slide: function(event, ui) {
				$('#range-value1').empty().append(ui.values[ 0 ]);
				$('#range-value2').empty().append(ui.values[ 1 ]);
			}
		});

		$("#eq > span").each(function() {
			var value = parseInt($(this).text(), 10);
			$(this).empty().slider({value: value, range: "min", animate: true, orientation: "vertical"});
			$(this).css('height', '100px');
			$(this).css('margin-right', '30px');
			$(this).css('float', 'left');
		});
	};
	
	// =========================================================================
	// SELECT2
	// =========================================================================

	p._initSelect2 = function() {
		if (!$.isFunction($.fn.select2)) {
			return;
		}
		$(".select2-list").select2({
			allowClear: true
		});
	};

	// =========================================================================
	// MultiSelect
	// =========================================================================

	p._initMultiSelect = function() {
		if (!$.isFunction($.fn.multiSelect)) {
			return;
		}
		$('#optgroup').multiSelect({selectableOptgroup: true});
	};

	// =========================================================================
	// InputMask
	// =========================================================================

	p._initInputMask = function() {
		if (!$.isFunction($.fn.inputmask)) {
			return;
		}
		$(":input").inputmask();
		$(".form-control.dollar-mask").inputmask('$ 999,999,999.99', {numericInput: true, rightAlignNumerics: false});
		$(".form-control.euro-mask").inputmask('€ 999.999.999,99', {numericInput: true, rightAlignNumerics: false});
		$(".form-control.time-mask").inputmask('h:s', {placeholder: 'hh:mm'});
		$(".form-control.time12-mask").inputmask('hh:mm t', {placeholder: 'hh:mm xm', alias: 'time12', hourFormat: '12'});
	};

	// =========================================================================
	// DateTime Picker
	// =========================================================================

	p._initDateTime = function() {
		if (!$.isFunction($.fn.datetimepicker)) {
			return;
		}
		$('#demo-date').datetimepicker();
		$('#demo-datetime').datetimepicker({pickDate: false});
		$('#demo-date-inline').datetimepicker();

		$('#demo-date-start').datetimepicker();
		$('#demo-date-end').datetimepicker();
		$("#demo-date-start").on("change.dp", function(e) {
			$('#demo-date-end').data("DateTimePicker").setStartDate(e.date);
		});
		$("#demo-date-end").on("change.dp", function(e) {
			$('#demo-date-start').data("DateTimePicker").setEndDate(e.date);
		});
	};


	// =========================================================================
	// DATATABLES
	// =========================================================================

	p.initDataTables = function(grid) {
		if (!$.isFunction($.fn.dataTable)) {
			return;
		}

		$.extend(jQuery.fn.dataTableExt.oSort, {
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
		grid.dataTable({
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
				"sSearch": '<i class="icon-search"></i>',
				"oPaginate": {
					"sPrevious": '<i class="fa fa-angle-left"></i>',
					"sNext": '<i class="fa fa-angle-right"></i>'
				}
			}
		});
	};

	// =========================================================================
	namespace.DemoFormComponents = new DemoFormComponents;
}(this.boostbox, jQuery)); // pass in (namespace, jQuery):
