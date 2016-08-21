// What is a constructor function? A constructor function creates objects that are an instance
// of the constructor and allows us to assign those objects properties (constructor — function object
// that creates and initializes objects). These properties are key/value pairs and the values can be
// either data values or methods (method — function that is the value of a property).
// Remember constructor names begin with capital letters.

// What properties does an instance of Student have?
//CONSTRUCTOR
function Student(name) { 
  this.name = name;
  this.schedule = [];
}

// What properties does an instance of Course have?
//CONSTRUCTOR
function Course(name) { 
  this.name = name;
  this.roster = [];
}

//OBJ — the objects produced by our constructors
var math = new Course("Geometry"); 
var kanye = new Student("Kanye West");
var albert = new Student("Albert Einstein");
var isaac = new Student("Isaac Newton");

// we here assign methods (functions that are the value of an object's property) to
// the prototypes of our constructors so they can be inherited by the instances of the constructor.
// Remember that 'this' within a method refers to the object on which the method is called.
Student.prototype.dropout = function(course) {
  for (var i = 0; i < this.schedule.length; i++) {
    if (this.schedule[i].name === course.name) {
      if (i === 0) {
        this.schedule.shift();
      } else {
        this.schedule.splice(i, 1);
      }
    }
  }
}

Course.prototype.enroll = function() { 
  for (var i = 0; i < arguments.length; i++) { //arguments is a built-in tool
    var student = arguments[i];
    this.roster.push(student);
    student.schedule.push(this); //prototype & this always together
  }
}

Course.prototype.unenroll = function() {
  var dropouts = [];
  var survivors = [];

  for (var i = 0; i < arguments.length; i++) {
    var student = arguments[i];
    dropouts.push(arguments[i]);
    student.dropout(this);
  }
  
  for (var i = 0; i < this.roster.length; i++) {
    if (!dropouts.includes(this.roster[i])) {
      survivors.push(this.roster[i]);
    } 
  }

  this.roster = survivors;
}
