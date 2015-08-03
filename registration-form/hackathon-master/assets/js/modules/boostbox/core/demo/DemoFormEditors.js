(function(namespace, $) {
	"use strict";

	var DemoFormEditors = function() {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function() {
			o.initialize();
		});

	};
	var p = DemoFormEditors.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function() {
		this._initWysiwyg();
		this._initCKEditor();
	};

	// =========================================================================
	// WYSIHTML5 EDITOR
	// =========================================================================

	p._initWysiwyg = function() {
		if (typeof wysihtml5 === 'undefined') {
			return;
		}
		var editor = new wysihtml5.Editor("wysiwyg", {
			toolbar: "toolbar",
			parserRules: wysihtml5ParserRules
		});
		boostbox.App.monitorWysihtml5(editor);
	};
	
	// =========================================================================
	// CKEDITOR
	// =========================================================================

	p._initCKEditor = function() {
		$( '#ckeditor' ).ckeditor();
	};

	// =========================================================================
	namespace.DemoFormEditors = new DemoFormEditors;
}(this.boostbox, jQuery)); // pass in (namespace, jQuery):
