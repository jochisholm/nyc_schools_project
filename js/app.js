$(document).ready(function(){

	

	// a dropdown menu of schools in NYC
	_.each(schoolLunchData, function(value, index){
		$('#select').append('<option value="'+ value.school_name+'">'+value.school_name+'</option>')
	})

// when you click this button it will match the school from the dropdown menu with the number of kids that receive free lunches,
	//the number of teachers, and the number of students at the selected school.

	$('#appbutton').on("click", function(){
		var dropdownValue = $('#select').val();
	
		var correspondingLunchValue = _.find(schoolLunchData, function(num){
			return num.school_name == dropdownValue;
		});
//this is the first result box where the sentence populates what school you have selected
		$('#result').html(
			correspondingLunchValue.school_name
		);
//this is the result box that populates the number of students at your school 

		var studentNumbers = _.find(schoolLunchData, correspondingLunchValue, function(num){
			return num.students;
		});
			$('#result2').html(
				'There are '+ studentNumbers.students + ' students at your schools...')
//this is the box that populates the number of teachers at your school
		var teacherNumbers = _.find(schoolLunchData, correspondingLunchValue, function(num){
			return num.teachers;
		});
			$('#result3').html(
				'and ' + teacherNumbers.teachers + ' teachers...')
//this box populates the number of free lunches at your school
		var freeLunch = _.find(schoolLunchData, correspondingLunchValue, function(num){ 
			return num.free_lunch;
		});	
			$('#result4').html(
				'and ' + freeLunch.free_lunch + ' students receive free lunch at your school' + '.'
			);
//this box populates the teacher/student ratio at your school
		var ratio = _.find(schoolLunchData, correspondingLunchValue, function(num){
			return num.student_teacher_ratio;
		});
			$('#result5').html(
				'That means, the student to teacher ratio at your school is ' + ratio.student_teacher_ratio + ' students for every teacher' + '.'
				);
			// // if (dropdownValue == "school_name") {
			// // 	return free_lunch.value();
			// // 	$('#result2').html(
			// // 	freeLunch.free_lunch
			// // 	);
			// }
			// else {
			// 	return ("<p>no free lunch given at school</p>");
			// }
			// });	
		})
	});

		// $('#result2').html(
			// 	freeLunch.free_lunch
		// 	);

			
		
	// 	// result box 1: append the value of the food grou


	



		// result box 2: append all items after you've sorted them
		// make a new array by sorting other data
		



	

