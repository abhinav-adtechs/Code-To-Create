(function(namespace, $) {
	"use strict";

	var DemoCharts = function() {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function() {
			o.initialize();
		});

	};
	var p = DemoCharts.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function() {
		// Sparkline
		this._initResponsiveSparkline();
		this._initInlineSparkline();

		// Knob
		this._initKnob();

		// Flot
		this._initFlotLine();
		this._initFlotPie();
		this._initFlotBar();
		this._initFlotRealtime();

		// Morris
		this._initMorris();
	};

	// =========================================================================
	// SPARKLINE
	// =========================================================================

	p._initResponsiveSparkline = function() {
		if ($('.sparkline3').length === 0) {
			return;
		}
		if ($('.sparkline4').length === 0) {
			return;
		}

		boostbox.App.callOnResize(function() {
			var options = $('.sparkline3').data();
			options.type = 'line';
			options.width = '100%';
			options.height = '80px';
			$('.sparkline3').sparkline([3, 6, 5, 10, 8, 7, 9, 11, 12, 9, 14], options);
		});
		boostbox.App.callOnResize(function() {
			var options = $('.sparkline4').data();
			options.type = 'line';
			options.width = '100%';
			options.height = '80px';
			$('.sparkline4').sparkline([14, 11, 13, 9, 11, 12, 10, 8, 7, 9, 3], options);
		});
	}

	p._initInlineSparkline = function() {
		if (!$.isFunction($.fn.sparkline)) {
			return;
		}

		$('.inlinesparkline').each(function() {
			var options = $(this).data();
			$(this).sparkline('html', options);
		});
	}

	// =========================================================================
	// KNOB
	// =========================================================================

	p._initKnob = function() {
		if (!$.isFunction($.fn.knob)) {
			return;
		}

		$('.dial').each(function() {
			var options = boostbox.App.getKnobStyle($(this));
			$(this).knob(options);
		});
	};

	// =========================================================================
	// FLOT - pie
	// =========================================================================

	p._initFlotPie = function() {
		if (!$.isFunction($.fn.plot) || $(".pie-chart").length === 0) {
			return;
		}

		var o = this;
		var placeholder = $('.pie-chart');
		var chart = placeholder.find('.chart');
		var labelColor = chart.css('color');
		var legendBack = chart.closest('[class*=style]').css('background-color');
		var data = [{data: 34, label: '34% visited'}, {data: 66, label: '66% members'}];
		var options = {
			colors: chart.data('color').split(','),
			series: {
				pie: {
					show: true,
					innerRadius: 0.7
				}
			},
			legend: {
				container: placeholder.find(".legend")
			}
		};

		var plot = $.plot(chart, data, options);
	};

	// =========================================================================
	// FLOT - line
	// =========================================================================

	p._initFlotLine = function() {
		var chart = $("#visitor-chart");
		if (!$.isFunction($.fn.plot) || chart.length === 0) {
			return;
		}

		var o = this;
		var labelColor = chart.css('color');
		var data = [
			{
				label: 'Visitors',
				data: [
					[1361129896000, 2500], [1363549096000, 3000], [1366223896000, 4000],
					[1368815896000, 4500], [1371494296000, 4000], [1374086296000, 3500],
					[1376764696000, 3250], [1379443096000, 3500], [1382035096000, 4000],
					[1384717096000, 5000], [1387309096000, 5500], [1389987496000, 5000]
				],
				last: false
			},
			{
				label: 'Members',
				data: [
					[1361129896000, 525], [1363549096000, 1000], [1366223896000, 2000],
					[1368815896000, 3500], [1371494296000, 5000], [1374086296000, 7000],
					[1376764696000, 7500], [1379443096000, 6750], [1382035096000, 5500],
					[1384717096000, 4000], [1387309096000, 3250], [1389987496000, 3000]
				],
				last: true
			}
		];

		var options = {
			colors: chart.data('color').split(','),
			series: {
				shadowSize: 0,
				lines: {
					show: true,
					lineWidth: 5
				},
				points: {
					show: true,
					radius: 3,
					lineWidth: 2
				}
			},
			legend: {
				show: false
			},
			xaxis: {
				mode: "time",
				timeformat: "%b",
				font: {color: labelColor}
			},
			yaxis: {
				font: {color: labelColor}
			},
			grid: {
				borderWidth: 0,
				color: labelColor,
				hoverable: true
			}
		};

		chart.width('100%');
		var plot = $.plot(chart, data, options);

		var tip, previousPoint = null;
		chart.bind("plothover", function(event, pos, item) {
			if (item) {
				if (previousPoint !== item.dataIndex) {
					previousPoint = item.dataIndex;

					var x = item.datapoint[0];
					var y = item.datapoint[1];
					var tipLabel = '<strong>' + $(this).data('title') + '</strong>';
					var tipContent = y + " " + item.series.label.toLowerCase() + " on " + moment(x).format('dddd');

					if (tip !== undefined) {
						$(tip).popover('destroy');
					}
					tip = $('<div></div>').appendTo('body').css({left: item.pageX, top: item.pageY - 5, position: 'absolute'});
					tip.popover({html: true, title: tipLabel, content: tipContent, placement: 'top'}).popover('show');
				}
			}
			else {
				if (tip !== undefined) {
					$(tip).popover('destroy');
				}
				previousPoint = null;
			}
		});
	};


	p._initFlotBar = function() {
		var chart = $("#sales-chart");
		if (!$.isFunction($.fn.plot)) {
			return;
		}

		var o = this;
		var labelColor = chart.css('color');

		// Dont init the chart if the chart isn't visible, it won't init properly.
		// Wait until its visible and then initialize.
		if (!chart.is(":visible")) {
			chart.closest('.box').one('click', function() {
				o._initFlotBar();
			});
			return;
		}


		var dataprovider = new Array();
		dataprovider.push({
			data: [[1325376000000, 120], [1328054400000, 70], [1330560000000, 100], [1333238400000, 60], [1335830400000, 35]],
			label: 'Product 1',
			bars: {order: 1}
		});
		dataprovider.push({
			data: [[1325376000000, 80], [1328054400000, 60], [1330560000000, 30], [1333238400000, 35], [1335830400000, 30]],
			label: 'Product 2',
			bars: {order: 2}
		});
		dataprovider.push({
			data: [[1325376000000, 80], [1328054400000, 40], [1330560000000, 30], [1333238400000, 20], [1335830400000, 10]],
			label: 'Product 3',
			bars: {order: 3}
		});
		dataprovider.push({
			data: [[1325376000000, 15], [1328054400000, 10], [1330560000000, 15], [1333238400000, 20], [1335830400000, 15]],
			label: 'Product 4',
			bars: {order: 4}
		});

		var options = {
			colors: ['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.3)'],
			series: {
				shadowSize: 0,
				bars: {
					show: true,
					barWidth: 12 * 24 * 60 * 60 * 300,
					fill: true,
					lineWidth: 1,
					fillColor: {colors: [{opacity: 1}, {opacity: 1}]}
				}
			},
			legend: {
				backgroundColor: 'inherit',
				labelBoxBorderColor: 'none'
			},
			xaxis: {
				font: {color: labelColor},
				color: labelColor,
				min: (new Date(2011, 11, 15)).getTime(),
				max: (new Date(2012, 4, 18)).getTime(),
				mode: "time",
				timeformat: "%b",
				tickSize: [1, "month"],
				monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				tickLength: 0, // hide gridlines
				axisLabel: 'Month',
				axisLabelUseCanvas: true,
				axisLabelFontSizePixels: 12,
				axisLabelFontFamily: 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
				axisLabelPadding: 5
			},
			yaxis: {
				font: {color: labelColor},
				color: 'rgba(255,255,255, 0.3)',
				axisLabel: 'Value',
				axisLabelUseCanvas: true,
				axisLabelFontSizePixels: 12,
				axisLabelFontFamily: 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
				axisLabelPadding: 5
			},
			grid: {
				borderWidth: 0,
				color: '#bfbfbf',
				hoverable: true,
				clickable: false
			}
		};

		chart.width('100%');
		var plot = $.plot(chart, dataprovider, options);

		var tip, previousPoint = null;
		chart.bind("plothover", function(event, pos, item) {
			if (item) {
				if (previousPoint !== item.dataIndex) {
					previousPoint = item.dataIndex;
					var x = item.datapoint[0];
					var y = item.datapoint[1];
					var tipLabel = '<strong>' + $(this).data('title') + '</strong>';
					var tipContent = y + " " + item.series.label.toLowerCase();

					if (tip !== undefined) {
						$(tip).popover('destroy');
					}
					tip = $('<div></div>').appendTo('body').css({left: item.pageX + 3, top: item.pageY - 5, position: 'absolute'});
					tip.popover({html: true, title: tipLabel, content: tipContent, placement: 'top'}).popover('show');
				}
			}
			else {
				if (tip !== undefined) {
					$(tip).popover('destroy');
				}
				previousPoint = null;
			}
		});
	};


	p._initFlotRealtime = function() {
		var chart = $("#realtime-chart");
		if (!$.isFunction($.fn.plot) || chart.length === 0) {
			return;
		}

		var o = this;
		var labelColor = chart.css('color');
		var options = {
			colors: chart.data('color').split(','),
			series: {
				shadowSize: 0,
				lines: {
					show: true,
					lineWidth: 1,
					fill: true
				}
			},
			legend: {
				show: false
			},
			xaxis: {
				show: false,
				font: {color: labelColor}
			},
			yaxis: {
				min: 0,
				max: 100,
				font: {color: labelColor}
			},
			grid: {
				borderWidth: 0,
				color: labelColor,
				hoverable: true
			}
		};

		// We use an inline data source in the example, usually data would
		// be fetched from a server
		var data = [];
		var totalPoints = 300;

		function getRandomData() {
			if (data.length > 0) {
				data = data.slice(1);
			}

			// Do a random walk
			while (data.length < totalPoints) {
				var prev = data.length > 0 ? data[data.length - 1] : 50;
				var y = prev + Math.random() * 10 - 5;

				if (y < 0) {
					y = 0;
				} else if (y > 100) {
					y = 100;
				}
				data.push(y);
			}

			// Zip the generated y values with the x values
			var res = [];
			for (var i = 0; i < data.length; ++i) {
				res.push([i, data[i]])
			}
			return res;
		}

		// Set up the control widget
		var updateInterval = 30;
		var plot = $.plot(chart, [getRandomData()], options);

		function update() {
			plot.setData([getRandomData()]);

			// Since the axes don't change, we don't need to call plot.setupGrid()
			plot.draw();
			setTimeout(update, updateInterval);
		}

		update();
	};

	// =========================================================================
	// MORRIS
	// =========================================================================

	p._initMorris = function() {
		if (typeof Morris !== 'object') {
			return;
		}

		// Morris Donut demo
		Morris.Donut({
			element: 'morris-donut-graph',
			data: [
				{value: 70, label: 'foo', formatted: 'at least 70%'},
				{value: 15, label: 'bar', formatted: 'approx. 15%'},
				{value: 10, label: 'baz', formatted: 'approx. 10%'},
				{value: 5, label: 'A really really long label', formatted: 'at most 5%'}
			],
			colors: $('#morris-donut-graph').data('colors').split(','),
			formatter: function(x, data) {
				return data.formatted;
			}
		});

		// Morris line demo
		var decimal_data = [];
		for (var x = 0; x <= 360; x += 10) {
			decimal_data.push({
				x: x,
				y: 1.5 + 1.5 * Math.sin(Math.PI * x / 180).toFixed(4)
			});
		}
		window.m = Morris.Line({
			element: 'morris-line-graph',
			data: decimal_data,
			xkey: 'x',
			ykeys: ['y'],
			labels: ['sin(x)'],
			parseTime: false,
			resize: true,
			lineColors: $('#morris-line-graph').data('colors').split(','),
			hoverCallback: function(index, options, default_content) {
				var row = options.data[index];
				return default_content.replace("sin(x)", "1.5 + 1.5 sin(" + row.x + ")");
			},
			xLabelMargin: 10,
			integerYLabels: true
		});


		Morris.Bar({
			element: 'morris-stacked-bar-graph',
			data: [
				{x: '2011 Q1', y: 3, z: 2, a: 3},
				{x: '2011 Q2', y: 2, z: null, a: 1},
				{x: '2011 Q3', y: 0, z: 2, a: 4},
				{x: '2011 Q4', y: 2, z: 4, a: 3}
			],
			xkey: 'x',
			ykeys: ['y', 'z', 'a'],
			labels: ['Y', 'Z', 'A'],
			stacked: true,
			barColors: $('#morris-stacked-bar-graph').data('colors').split(',')
		});

		// Morris Bar demo
		Morris.Bar({
			element: 'morris-bar-graph',
			data: [
				{x: '2011 Q1', y: 3, z: 2, a: 3},
				{x: '2011 Q2', y: 2, z: null, a: 1},
				{x: '2011 Q3', y: 0, z: 2, a: 4},
				{x: '2011 Q4', y: 2, z: 4, a: 3}
			],
			xkey: 'x',
			ykeys: ['y', 'z', 'a'],
			labels: ['Y', 'Z', 'A'],
			barColors: $('#morris-bar-graph').data('colors').split(',')
		});

		// Morris Area demo
		Morris.Area({
			element: 'morris-area-graph',
			behaveLikeLine: true,
			data: [
				{x: '2011 Q1', y: 3, z: 3},
				{x: '2011 Q2', y: 2, z: 1},
				{x: '2011 Q3', y: 2, z: 4},
				{x: '2011 Q4', y: 3, z: 3}
			],
			xkey: 'x',
			ykeys: ['y', 'z'],
			labels: ['Y', 'Z'],
			lineColors: $('#morris-area-graph').data('colors').split(',')
		});
	};

	// =========================================================================
	namespace.DemoCharts = new DemoCharts;
}(this.boostbox, jQuery)); // pass in (namespace, jQuery):
