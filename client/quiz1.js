Template.quiz1.helpers({
	peopleFunction: function(){
		{
			return People.find({},{sort:{projectName:1 , firstName:1, lastName:1}})
		} 
	}
})



Template.quiz1.events({
	"submit #peopleEdit": function(event){

		event.preventDefault();

		var projectName = event.target.projectName.value;
		var firstName = event.target.firstName.value;
		var lastName = event.target.lastName.value;
		var git = event.target.git.value;
		var deployed = event.target.deployed.value;
	

		People.insert({ 
			projectName: projectName, firstName: firstName, 
			lastName: lastName,git: git, deployed: deployed
		});	
		


	}

})


Template.quiz1.events({
	"click .delete-icon": function(){People.remove(this._id);}
})
