//MyBio
var bio = {
 "name" : "Joseph Moiwo",
 "role" :"Web Developer",
 "contacts" : {
 "email" : "joe@example.com",
 "mobile" : "(214) 123-1234",
 "location" : "Dallas, TX"
 },
 "bioPic" : "images/fry.jpg",
 "welcome" : "Interactive Resume Project 2",
 "skills" : ["Security+","Database Development","HTML"]
 };
var formattedName=HTMLheaderName.replace("%data%", bio.name);
var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//Email
var formattedEmail=HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

//Mobile
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

//Location
var formattedLoc=HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLoc);
$("#footerContacts").append(formattedLoc);

//BioPic
var formattedBioPic=HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

//Welcome
var formattedWelcomeMsg=HTMLWelcomeMsg.replace("%data%", bio.welcome);
$("#header").append(formattedWelcomeMsg);

//Skills
function displaySkills() {
 $("#header").append(HTMLskillsStart);
 for (skill in bio.skills) {
 var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
 $("#skills").append(formattedSkills);
 }
};
displaySkills();

//MyEmployment
var work = {
 "jobs" : [
 {
 "employer" : "AT&T",
 "title" : "Monitor Specialist",
 "dates" : "2013 to Present",
 "location" : "Texas",
 "description" : "Troubleshoot and analyze security system help resolve device issues."
 },
 {
 "employer" : "Global Dataguard",
 "title" : "Network Security Analyst",
 "dates" : "2012 to 2013",
 "location" : "Texas",
 "description" : "Monitor network traffic for client companies in order to provide information on network vulnerabilities."
 },
 {
 "employer" : "Champion Alarm Security",
 "title" : "Dispatch",
 "dates" : "2008 to 2011",
 "location" : "Texas",
 "description" : "Secured clients assets by dispatching patrol officers to locations. Logged in reports of incidents."
 }
 ]
};

function displayWork() {
 for (job in work.jobs) {
 $("#workExperience").append(HTMLworkStart);
 var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
 var formattedEmployerTitle = formattedEmployer + formattedTitle;
 $(".work-entry:last").append(formattedEmployerTitle);
 var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
 $(".work-entry:last").append(formattedDates);
 var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
 $(".work-entry:last").append(formattedLocation);
 var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
 $(".work-entry:last").append(formattedDescription);
 }
};
displayWork();


//MyProjects
var projects = {
 "projects" : [
 {
 "title" : "Project 1",
 "dates" : "2014 to Future",
 "description" : "My name is Maximus Decimus Meridius, commander of the Armies of the North, General of the Felix Legions and loyal servant to the TRUE emperor, Marcus Aurelius. Father to a murdered son, husband to a murdered wife. And I will have my vengeance, in this life or the next. Are you not entertained? Are you not entertained? Is this not why you are here?.",
 "images" : "images/maximus.png"
 }
 ]
};

function displayProjects() {
 for (project in projects.projects) {
 $("#projects").append(HTMLprojectStart);
 var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
 $(".project-entry:last").append(formattedTitle);
 var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
 $(".project-entry:last").append(formattedDates);
 var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
 $(".project-entry:last").append(formattedDescription);
 var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
 $(".project-entry:last").append(formattedImage);
 }
};
displayProjects();

//MyEducation
var education = {
 "schools": [
 {
 "name" : "ITT Technical Institute",
 "location" : "Richardson, TX",
 "dates" : "2009 to 2011",
 "major" : "Information Security Systems",
 "degree" : "Bachelor of Science",
 "url" : "http://www.itt-tech.edu/"
 }, 
 {
 "name" : "ITT Technical Institute",
 "location" : "Richardson, TX",
 "dates" : "2007 to 2009",
 "major" : "Computer Network System",
 "degree" : "Associate of Applied Science",
 "url" : "http://www.itt-tech.edu/"
 }
 ]
,
 "onlineCourses" : [
 {
 "school" : "Udacity",
 "title" : "Front-End Web Developer Nanodegree",
 "dates" : "2014 to Present",
 "url"	: "https://www.udacity.com/"
 },
 ]
 };

function displayEducation() {
 for (school in education.schools) {
 $("#education").append(HTMLschoolStart);
 var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
 $(".education-entry:last").append(formattedName);
 var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
 $(".education-entry:last").append(formattedLocation);
 var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
 $(".education-entry:last").append(formattedSchoolDates);
 var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
 $(".education-entry:last").append(formattedMajor);
 var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
 $(".education-entry:last").append(formattedDegree);
 var formattedURL = HTMLonlineURL.replace("%data%", education.schools[school].url);
 $(".education-entry:last").append(formattedURL);
 }

 $("#education").append(HTMLonlineClasses);
 for (school in education.onlineCourses) {
 $("#education").append(HTMLschoolStart);
 var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
 var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
 var formattedSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
 $(".education-entry:last").append(formattedSchoolTitle);
 var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
 $(".education-entry:last").append(formattedOnlineDate);
 var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
 $(".education-entry:last").append(formattedURL);
 }
};
displayEducation();

//you want to see a map? here's a map.
$("#mapDiv").append(googleMap);
//Google Maps API is broken.

