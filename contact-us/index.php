<!DOCTYPE html><html>
<!--  contact-us/     10:00:54 GMT -->
<!--   --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /  -->
<head>

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hack";
if (isset($_POST['input_3'])&&isset($_POST['input_1'])&&isset($_POST['input_2'])) {
	# code...

$name=$_POST['input_1'];
$email = $_POST['input_2'];
$message= $_POST['input_3'];

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql = "INSERT INTO contact (name,email,message)
VALUES ('$name','$email','$message')";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();

}//isset if closed

?>

	<link rel="stylesheet" type="text/css" href="../wp-content/cache/minify/000000/78a47/default.include.282584.css" media="all"/><script type="text/javascript" src="../wp-content/cache/minify/000000/78a47/default.include.da6e1e.js"></script><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"><title>Contact Us - ACM VIT</title>
<link rel="shortcut icon" type="image/x-icon" href="../wp-content/uploads/2015/07/favicon-desktop.png">
<link rel="apple-touch-icon" sizes="152x152" href="../wp-content/uploads/2015/07/favicon-mobile.png"> <script src="../../use.typekit.net/btn0pbu.js"></script><script>try{Typekit.load();}catch(e){}</script> <!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<link rel="canonical" href="index.html"/><meta property="og:locale" content="en_US"/><meta property="og:type" content="article"/><meta property="og:title" content="Contact Us - Trustnet Financial"/><meta property="og:url" content="http://www.trustnetfinancial.com/contact-us/"/><meta property="og:site_name" content="Trustnet Financial"/>
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="../xmlrpc0db0.php?rsd"/>
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="../wp-includes/wlwmanifest.xml"/><meta name="generator" content="WordPress 4.2.2"/>
<link rel='shortlink' href='../index4170.html?p=43'/><meta name="generator" content="WPML ver:3.1.9.7 stt:1,4;0"/></head><body> <header id="main-header">
<div class="inner-wrapper"> <a href="#" id="menu-toggler"> <span class="bar"> <span class="bar-bg"></span> </span> <span class="text">Menu</span> </a>
</div>
<div id="main-nav-wrapper">
		<div class="inner-wrapper">
		<div class="vertical-wrapper">
		<div class="vertical-align"> <div id="main-nav">

			<ul id="menu-main-nav" class="menu">
			<li id="menu-item-278" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-25 current_page_item menu-item-278">
			<a href="../homePage.html">Home
			</a>
		</li>
			<li id="menu-item-56" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-56">
				<a href="../schedule/schedule.html">Schedule
				</a>
			</li>
		<li id="menu-item-54" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-54">
		<a href="../rules-regulation/rulesAndregulations.html">Rules and Regulation
		</a>
	</li>
		<li id="menu-item-53" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-53">
		<a href="../problem-statements/problemStatements.html">Problem Statements
		</a>
	</li>
		<li id="menu-item-55" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-55">
		<a href="../about-us/aboutUs.html">Team ACM-VIT
		</a>
	</li>
		<li id="menu-item-49" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-49">
		<a href="../contact-us/contactUs.html">Reach Us
		</a>
	</li>
	</ul> 
	</div>



	</div>

	</div>

	</div>

	</div>  </header>
<div id="site-wrapper" class="animsition">
	<div id="content-wrapper">
	<div id="maps-wrapper" class="bg-dark-gray">
	<div class="row">
	<div class="span12 full-height map-wrapper">
	<div class="map" style="background-image: url(../wp-content/uploads/2015/04/map-montreal.png)">
	</div>
<div class="inner-wrapper">
	<div class="vertical-wrapper">
	<div class="vertical-align">
	<div class="box-yellow">
	<div class="wrapper-3d"> <span class="content-type">VIT UNIVERSITY</span><p class="address">Near Katpadi Rd<br/>Vellore <br/>Tamil Nadu <br/> 632014, INDIA</p>
	<div class="post-metas"> <span class="gps">12.9721918 / 79.1588974</span> <a href="https://www.google.com/maps/place/VIT+University/@12.9721918,79.1588974,16z" target="_blank" class="read-more">Map</a>
	</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="section bg-dark-gray">
	<div class="inner-wrapper">
	<div class="row">
	<div class="span10 content-standard"><h3>Connect with us</h3>
	</div>
</div>
<div class="row">
	<div class="span6 contact-info"><dl><dt>Phone</dt><dd>(+91)9677196494</dd><dt>Email</dt><dd><a href="#" class="mailto">vituacm(at)gmail.com</a></dd></dl>
	</div>
<div class="span6 contact-form"><h5>Message</h5>
	<div class='gf_browser_unknown gform_wrapper' id='gform_wrapper_1'><a id='gf_1' name='gf_1' class='gform_anchor'></a><form method='post' enctype='multipart/form-data'  action='contactUs.php'>
	<div class='gform_body'><ul id='gform_fields_1' class='gform_fields top_label form_sublabel_below description_below'>
	<li id='field_1_1' class='gfield small gfield_contains_required field_sublabel_below field_description_below'><label class='gfield_label' for='input_1_1'>Name<span class='gfield_required'>*</span></label>
	<div class='ginput_container'><input name='input_1' id='input_1_1' type='text' value='' class='medium' tabindex='1' placeholder='Your Name*'/>
	</div></li>
	<li id='field_1_2' class='gfield small gfield_contains_required field_sublabel_below field_description_below'><label class='gfield_label' for='input_1_2'>Email<span class='gfield_required'>*</span></label>
<div class='ginput_container'> <input name='input_2' id='input_1_2' type='email' value='' class='medium' tabindex='2' placeholder='Your Email*'/>
</div></li>
<li id='field_1_3' class='gfield large gfield_contains_required field_sublabel_below field_description_below'><label class='gfield_label' for='input_1_3'>Message<span class='gfield_required'>*</span></label>
<div class='ginput_container'><textarea name='input_3' id='input_1_3' class='textarea medium' tabindex='3' placeholder='Your Message*' rows='10' cols='50'></textarea>
</div></li></ul>
</div>
<div class='gform_footer top_label'>
	<div class='perspective'><button class='btn yellow small cta-btn' >Send</button>
	</form>
	</div> <iframe style='display:none;width:0px;height:0px;' src='about:blank' name='gform_ajax_frame_1' id='gform_ajax_frame_1' title='Ajax Frame'></iframe><script type='text/javascript'>/*<![CDATA[*/jQuery(document).ready(function($){gformInitSpinner(1,'../wp-content/themes/trustnet/assets/images/ajax-loader.gif');jQuery('#gform_ajax_frame_1').load(function(){var contents=jQuery(this).contents().find('*').html();var is_postback=contents.indexOf('GF_AJAX_POSTBACK')>=0;if(!is_postback){return;}var form_content=jQuery(this).contents().find('#gform_wrapper_1');var is_confirmation=jQuery(this).contents().find('#gform_confirmation_wrapper_1').length>0;var is_redirect=contents.indexOf('gformRedirect(){')>=0;var is_form=form_content.length>0&&!is_redirect&&!is_confirmation;if(is_form){jQuery('#gform_wrapper_1').html(form_content.html());setTimeout(function(){jQuery(document).scrollTop(jQuery('#gform_wrapper_1').offset().top);},50);if(window['gformInitDatepicker']){gformInitDatepicker();}if(window['gformInitPriceFields']){gformInitPriceFields();}var current_page=jQuery('#gform_source_page_number_1').val();gformInitSpinner(1,'../wp-content/themes/trustnet/assets/images/ajax-loader.gif');jQuery(document).trigger('gform_page_loaded',[1,current_page]);window['gf_submitting_1']=false;}else if(!is_redirect){var confirmation_content=jQuery(this).contents().find('#gforms_confirmation_message_1').html();if(!confirmation_content){confirmation_content=contents;}setTimeout(function(){jQuery('#gform_wrapper_1').replaceWith('<'+'div id=\'gforms_confirmation_message_1\' class=\'gform_confirmation_message_1 gforms_confirmation_message\''+'>'+confirmation_content+'<'+'/div'+'>');jQuery(document).scrollTop(jQuery('#gforms_confirmation_message_1').offset().top);jQuery(document).trigger('gform_confirmation_loaded',[1]);window['gf_submitting_1']=false;},50);}else{jQuery('#gform_1').append(contents);if(window['gformRedirect']){gformRedirect();}}jQuery(document).trigger('gform_post_render',[1,current_page]);});});/*]]>*/</script><script type='text/javascript'>if(typeof gf_global=='undefined')var gf_global={"gf_currency_config":{"name":"U.S. Dollar","symbol_left":"$","symbol_right":"","symbol_padding":"","thousand_separator":",","decimal_separator":".","decimals":2},"base_url":"http:\/\/www.trustnetfinancial.com\/wp-content\/plugins\/gravityforms","number_formats":[],"spinnerUrl":"http:\/\/www.trustnetfinancial.com\/wp-content\/plugins\/gravityforms\/images\/spinner.gif"};jQuery(document).bind('gform_post_render',function(event,formId,currentPage){if(formId==1){if(typeof Placeholders!='undefined'){Placeholders.enable();}}});jQuery(document).bind('gform_post_conditional_logic',function(event,formId,fields,isInit){});</script><script type='text/javascript'>jQuery(document).ready(function(){jQuery(document).trigger('gform_post_render',[1,1])});</script>
</div>
</div>
</div>
</div>
</div>
 
 <footer id="main-footer">
	<a name="sectionaboutus"> </a>
	<div class="inner-wrapper">
		<div class="footer-contact"> <img style="height:50px; width:123px;" src="../new-assets/splash_white.png"><br><br>

			<p style="color:#FFFFFF">(+91)9677196494 | Jayant Rohra, General Secretary<br>
			<a href="#" class="mailto">vituacm(at)gmail.com</a> | <a href="vit.acm.org" target="_blank">ACM-VIT</a></p>

			<div class="align-right"> <a href="#" id="back-to-top">Back to top</a>
			</div>
		</div>
			
	</div>
	</div>
</footer>

</div><script type='text/javascript' src='../wp-content/plugins/gravityforms/js/jquery.json-1.3ef15.js?ver=1.9.12.1'></script><script type='text/javascript' src='../wp-content/plugins/gravityforms/js/gravityforms.minef15.js?ver=1.9.12.1'></script><script type='text/javascript' src='../wp-content/plugins/gravityforms/js/placeholders.jquery.minef15.js?ver=1.9.12.1'></script><script type="text/javascript" src="../wp-content/cache/minify/000000/78a47/default.include-footer.816be8.js"></script></body>
<!--  contact-us/     10:01:16 GMT -->
</html>
