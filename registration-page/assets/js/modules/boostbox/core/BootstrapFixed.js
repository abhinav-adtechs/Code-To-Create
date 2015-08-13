(function($) {
	"use strict";

	var BootstrapFixed = function() {
		var o = this; // Create reference to this instance
		$(document).ready(function() {
			o.initialize();
		}); // Initialize when document is ready

	};
	var p = BootstrapFixed.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function() {
		this._enableEvents();
	};

	// =========================================================================
	// EVENTS
	// =========================================================================

	// events
	p._enableEvents = function() {
		var o = this;

		// Stop IE8, 9 and 10 from selecting disabled toggle buttons
		$(document).on('click.bs.button.data-api', '[data-toggle^=button] label.disabled', function(e) {
			e.stopPropagation();
		});

		// Stop bootstrap from deselecting the DOM checked attribute from a 
		// active radio button when it's clicked.
		$(document).on('click.bs.button.data-api', '[data-toggle^=button] label.active', function(e) {
			if ($(this).has('input[type="radio"]').length > 0) {
				e.stopPropagation();
			}
		});
		
		// Initialize the 'checked' property on all input elements
		$('[data-toggle="buttons"].active input').each(function(e) {
			$(this).prop('checked', true);
		});
		$('[data-toggle="buttons"] .active input').each(function(e) {
			$(this).prop('checked', true);
		});
	};
	
	// =========================================================================
	// DEFINE NAMESPACE
	// =========================================================================
	
	window.boostbox = window.boostbox || {};
	window.boostbox.BootstrapFixed = new BootstrapFixed;
}(jQuery)); // pass in (jQuery):
