var people = [
    {
        person: "Kim Yoo Suk",
        profession: "tyczkarz"
    },
    {
        person: "Sue Yoo",
        profession: "prawnik"
    },
    {
        person: "Dr. Alden Cockburn",
        profession: "urolog"
    },
    {
        person: "Rusty Kuntz",
        profession: "trener"
    }
]

function setFunnyName(...params){
  people.push(params);
}

setFunnyName({
  person: "EOEOEO",
  profession: "ooe",
});

console.log(people);
