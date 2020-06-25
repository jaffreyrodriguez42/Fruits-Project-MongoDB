const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitsSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
})

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Fruit = mongoose.model("Fruit", fruitsSchema); // name of the collection should be in singular form

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
})

// fruit.save();

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
})

person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best fruit"
})

const orange = new Fruit({
    name: "Orange",
    score: 4,
    review: "Too sour for me"
})

const banana = new Fruit({
    name: "Banana",
    score: 3,
    review: "Weird texture"
})

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all the fruits to the fruitDB");
//     }
// });

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

