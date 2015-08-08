(function(namespace, $) {
	"use strict";

	var DemoUIMessages = function() {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function() {
			o.initialize();
		});

	};
	var p = DemoUIMessages.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function() {
		this._enableEvents();
		this._initToastr();
	};
	
	// =========================================================================
	// EVENTS
	// =========================================================================

	// events
	p._enableEvents = function() {
		var o = this;

		$('#toast-info').on('click', function(e) { 
			toastr.info(o.getToastrMessage(e), o.getToastrTitle(e)); 
		});
		$('#toast-warning').on('click', function(e) { 
			toastr.warning(o.getToastrMessage(e), o.getToastrTitle(e)); 
		});
		$('#toast-error').on('click', function(e) { 
			toastr.error(o.getToastrMessage(e), o.getToastrTitle(e)); 
		});
		$('#toast-success').on('click', function(e) { 
			toastr.success(o.getToastrMessage(e), o.getToastrTitle(e)); 
		});
	};

	// handlers
	p.getToastrMessage = function(e) {
		var row = $(e.currentTarget).closest('.box-body');
		return row.find('.input-message').val();
	};
	p.getToastrTitle = function(e) {
		var row = $(e.currentTarget).closest('.box-body');
		return row.find('.input-title').val();
	};
	
	// =========================================================================
	// TOASTR
	// =========================================================================

	p._initToastr = function() {
		toastr.options = {
			"closeButton": true,
			"debug": false,
			"positionClass": "toast-top-right",
			"onclick": null,
			"showDuration": "300",
			"hideDuration": "1000",
			"timeOut": "5000",
			"extendedTimeOut": "1000",
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "fadeIn",
			"hideMethod": "fadeOut"
		};
		
		$('#toast-info').trigger('click');
	}
	
	// =========================================================================
	namespace.DemoUIMessages = new DemoUIMessages;
}(this.boostbox, jQuery)); // pass in (namespace, jQuery):
