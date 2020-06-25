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
    age: Number,
    favouriteFruit: fruitsSchema // embedding a fruit document inside the property favouriteFruit in Person document
})

const Fruit = mongoose.model("Fruit", fruitsSchema); // name of the collection should be in singular form

const fruit = new Fruit({
    rating: 10,
    review: "Sampalok is very maasim."
})

// fruit.save();

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great fruit"
});

// pineapple.save();

const melon = new Fruit({
    name: "Melon",
    score: 8,
    review: "I like Melons"
});

// melon.save();

const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: pineapple
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

Person.updateOne({ name: "John" }, { favouriteFruit: melon }, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Succesfully updated!");
    }
});

// Fruit.updateOne({ _id: "5ef475cefc4bef27985b95d9" }, { name: "Peach" }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully updated the document");
//     }
// })


// Fruit.deleteOne({ name: "Peach" }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully Deleted!");
//     }
// });

// Person.deleteMany({ name: "John" }, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully Deleted Many!")
//     }
// });

// Fruit.deleteMany({ name: "Melon" }, function (err) {

// });