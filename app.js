const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Fruit = mongoose.model("Fruit", fruitsSchema); // name of the collection should be in singular form

const fruit = new Fruit({
    rating: 10,
    review: "Sampalok is very maasim."
})

fruit.save();

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
})

// person.save();


Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err)
    } else {

        mongoose.connection.close();
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        })
    }
})

