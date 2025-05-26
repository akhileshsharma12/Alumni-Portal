
let arrayone = ['Java', 'Python'];

let arraytwo = ['Javascript', 'Typescript'];

let combinearray = [...arrayone, ...arraytwo, 'C++', 'Ruby'];

function dynamicLogger(...message) {
    message.forEach((msg, index) => {
        console.log(`Message ${index} : ${message}`);
    })
}

dynamicLogger("Server started", "Listening on port 3000", "Database connected");

