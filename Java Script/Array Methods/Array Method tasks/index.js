// Sort in decreasing order
let arr1 = [5, 2, 1, -10, 8];
arr1.sort((a, b) => b - a);
alert(arr1); 

// Copy and sort array
function copySorted(arr) {
    return arr.slice().sort();
}
let arr2 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr2);
alert(sorted); 
alert(arr2); 

// Map names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [john, pete, mary];
let names = users.map(user => user.name);
alert(names); 

// Map objects
let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };
let users1 = [john1, pete1, mary1];
let usersMapped = users1.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));
alert(usersMapped[0].id); 
alert(usersMapped[0].fullName); 

// Sort by age
function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}
let arr3 = [pete, john, mary];
sortByAge(arr3);
alert(arr3[0].name); 
alert(arr3[1].name); 
alert(arr3[2].name); 

// Shuffle array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let arr4 = [1, 2, 3];
shuffle(arr4);
alert(arr4); 

// Average age
function getAverageAge(users) {
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
}
let arr5 = [john, pete, mary];
alert(getAverageAge(arr5)); 
