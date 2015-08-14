<!DOCTYPE html>
<html lang="en">


<?php
if(isset($_POST['name'])||isset($_POST['contact'])||isset($_POST['email'])||isset($_POST['abstract
	'])||isset($_POST['fieldOfInterest'])||isset($_POST['techSkills'])||isset($_POST['projects']))
{
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hack";
//Method would be post...
$name=$_POST['name'];
$contact=$_POST['contact'];
$email=$_POST['email'];
$regno=$_POST['regno'];
$abstract=$_POST['abstract'];
$fieldOfInterest=$_POST['fieldOfInterest'];
$techSkills=$_POST['techSkills'];
$projects=$_POST['projects'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO registrations (name,email,contact,regno,abstract,field,tech_skills,projects)
VALUES ('$name','$email','$contact','$regno','$abstract','$fieldOfInterest','$techSkills','$projects')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
}
?>

	
<!--  /materialadmin/pages/login     17:08:04 GMT -->
<!--  --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- / -->
<head>
		<title>ACM-HACK REGISTRATION</title>
		
		<!-- BEGIN META -->
		<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="keywords" content="your,keywords">
		<meta name="description" content="Short explanation about this website">
		<!-- END META -->

		<!-- BEGIN STYLESHEETS -->
		    <link href='http://fonts.googleapis.com/css?family=Roboto:300italic,400italic,300,400,500,700,900' rel='stylesheet' type='text/css'/>
			<link type="text/css" rel="stylesheet" href="assets/css/modules/materialadmin/css/theme-default/bootstrap94be.css?1422823238" />

			<link type="text/css" rel="stylesheet" href="assets/css/modules/materialadmin/css/theme-default/materialadminb0e2.css?1422823243" />

			<link type="text/css" rel="stylesheet" href="assets/css/modules/materialadmin/css/theme-default/font-awesome.min753e.css?1422823239" />

			<link type="text/css" rel="stylesheet" href="assets/css/modules/materialadmin/css/theme-default/material-design-iconic-font.mine7ea.css?1422823240" />

	
		<!-- END STYLESHEETS -->


		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
	<script type="text/javascript" src="http://www.codecovers.eu/assets/js/modules/materialadmin/libs/utils/html5shiv.js?1422823601"></script>
	<script type="text/javascript" src="http://www.codecovers.eu/assets/js/modules/materialadmin/libs/utils/respond.min.js?1422823601"></script>
    <![endif]
	</head>

	
				
				
	

	<body class="menubar-hoverable header-fixed ">
	
	<!-- BEGIN LOGIN SECTION -->
	<section class="section-account">
		<div class="img-backdrop" style="background-image: url('assets/img/modules/materialadmin/img16.jpg')"></div>
		<div class="spacer"></div>
		<div class="card contain-sm style-transparent">
			<div class="card-body">
				<div class="row">
					<div class="col-sm-12">
						<br/>
						<span class="text-lg text-bold text-primary">ACM-HACK REGISTRATION</span>
						<br/><br/>
						<form class="form floating-label form form-validate floating-label" action="index.php" accept-charset="utf-8" method="post">
							<div class="form-group floating-label">
									<div class="input-group">
										<span class="input-group-addon"><span class="glyphicon glyphicon-user fa-lg"></span></span>
										<div class="input-group-content">
<<<<<<< HEAD:registration-page/index.php
											<input type="text" class="form-control" id="name" name="name" required>
											<label for="name">Name</label>
=======
											<input type="text" class="form-control" id="username10">
											<label for="username10">Username</label>
>>>>>>> 44b5b804acb1a957c746de00837f2f9ffd3fe8f9:registration-page/index.php
										</div>
									</div>
								</div>
							<div class="form-group">
								<input type="text" class="form-control" id="regno" name="regno" required>
								<label for="regno">Registration Number</label>
							</div>
							<div class="form-group">
									<input type="email" class="form-control" id="email" name="email" required>
									<label for="email">Email</label>
								</div>
							<div class="form-group">
									<input type="text" class="form-control" id="contact" name="contact" data-rule-minlength="10" maxlength="10" required>
									<label for="contact">Contact Number</label>
									<p class="help-block">Please don't include +91</p>
								</div>
							<div class="form-group">
									<select id="select1" name="fieldOfInterest" class="form-control">
										<option value="">&nbsp;</option>
										<option value="Education">Education</option>
										<option value="Healthcare">Healthcare</option>
										<option value="Social Welfare">Social Welfare</option>
										<option value="Data Science">Data Science</option>
										<option value="Internet Of Things">Internet Of Things</option>
										<option value="Multimedia">Multimedia</option>
									</select>
									<label for="select1">Field Of Interest</label>
								</div>

							<div class="form-group">
									<textarea name="abstract" id="textarea1" class="form-control" rows="3" required></textarea>
									<label for="textarea1">Abstract</label>
								</div>
							<br/>
							<div class="form-group">
									<textarea name="techSkills" id="textarea2" class="form-control" rows="3" required></textarea>
									<label for="textarea2">Technical Skills</label>
								</div>
							<div class="form-group">
									<textarea name="projects" id="textarea3" class="form-control" rows="3" required></textarea>
									<label for="textarea3">Projects worked upon</label>
								</div>
							<div class="row">
								<div class="col-xs-6 text-left">
									
								</div><!--end .col -->
								<div class="col-xs-6 text-right">
									<button class="btn btn-block btn-primary btn-raised" type="submit">Register</button>
								</div><!--end .col -->
							</div><!--end .row -->
						</form>
					</div><!--end .col -->
						</div><!--end .row -->
			</div><!--end .card-body -->
		</div><!--end .card -->
	</section>
	<!-- END LOGIN SECTION -->


	<!-- BEGIN JAVASCRIPT -->
				<script src="assets/js/modules/materialadmin/libs/jquery/jquery-1.11.2.min.js"></script>
<script src="assets/js/modules/materialadmin/libs/jquery/jquery-migrate-1.2.1.min.js"></script>
<script src="assets/js/modules/materialadmin/libs/bootstrap/bootstrap.min.js"></script>
<script src="assets/js/modules/materialadmin/libs/spin.js/spin.min.js"></script>
<script src="assets/js/modules/materialadmin/libs/autosize/jquery.autosize.min.js"></script>
<script src="assets/js/modules/materialadmin/libs/nanoscroller/jquery.nanoscroller.min.js"></script>
<script src="/assets/js/modules/materialadmin/core/cache/63d0445130d69b2868a8d28c93309746.js"></script>
<script src="assets/js/modules/materialadmin/core/demo/Demo.js"></script>

	
	<!-- END JAVASCRIPT -->

	
	
	</body>

<!--  /materialadmin/pages/login     17:08:08 GMT -->
</html>