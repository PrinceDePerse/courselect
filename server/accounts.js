 Accounts.onCreateUser((options, user) => {

 	user.profile = {country: "USA"};

 	var mySchool = "Los Angeles High School";
 	user.school = mySchool;

 	var myFirstname = "John";
 	user.firstname = myFirstname;

 	var myLastname = "Smith";
 	user.lastname = myLastname;

 	var myGradyear = 2016; 
 	user.gradyear = myGradyear;

 	user.initials = myFirstname[0].toUpperCase() + myLastname[0].toUpperCase();
 	console.log("Hello", user);

    // Don't forget to return the new user object at the end!
    return user;
});