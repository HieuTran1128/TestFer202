export function checkIfAllAreTeenagers(personList) {
    const allTeenagers = personList.every(person => person.age >= 13 && person.age <= 19);
    return allTeenagers ? "All people are teenagers." : "Not all people are teenagers.";
}
