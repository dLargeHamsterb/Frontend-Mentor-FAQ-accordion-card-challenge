const questionList = [
	{
		questionTitle: "How many team members can I invite?",
		questionAnswer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
	},
	{
		questionTitle: "What is the maximum file upload size?",
		questionAnswer: "No more than 2GB. All files in your account must fit your allotted storage space."
	},
	{
		questionTitle: "How do I reset my password?",
		questionAnswer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
	},
	{
		questionTitle: "Can I cancel my subscription?",
		questionAnswer: "Yes! Send us a message and we’ll process your request no questions asked."
	},
	{
		questionTitle: "Do you provide additional support?",
		questionAnswer: " Chat and email support is available 24/7. Phone lines are open during normal business hours."
	}
		   
]
const question = document.querySelector(".faq")


//////// Load Question/////////////
window.addEventListener("DOMContentLoaded", function(){
	let displayQuestion = questionList.map(function(item){
		return `<div class="question">
		<div class="question-title">
		<p>${item.questionTitle}</p>
		<button class="question-btn"><img src="/images/icon-arrow-down.svg"></button>
	  </div>
		<p class="question-answer">${item.questionAnswer}</p>
		</div>`
	});
	displayQuestion = displayQuestion.join(" ");
	question.innerHTML = displayQuestion;
	
})
////////////// Show Answer //////////
const questions = document.querySelectorAll(".question")

questions.forEach(function(question){
const btn = question.querySelector(".question-title")
	btn.addEventListener('click',function(){

		questions.forEach(function (item){
			if (item !== question){
				item.classList.remove("show-text");
				item.classList.remove("active");
			}
		});
		question.classList.toggle("active");
		question.classList.toggle("show-text");
	});
})


