var Students = function(students) {
	this.names = students;
  	this.numberOfLetters = [];
};


Students.prototype.countLetters = function() {
this.names.forEach(element =>
	{
		 this.numberOfLetters[this.numberOfLetters.length] = element.length
	 })
}

var students = new Students(["Ania", "Kamil", "Mariusz"]);
students.countLetters();
console.log(students.numberOfLetters);
