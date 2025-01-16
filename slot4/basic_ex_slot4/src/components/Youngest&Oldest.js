export function findOldestAndYoungest(personList) {
    if (personList.length === 0) return null;

    const result = personList.reduce((acc, person) => {
        if (person.age > acc.oldest.age) {
            acc.oldest = person;
        }
        if (person.age < acc.youngest.age) {
            acc.youngest = person;
        }
        return acc;
    }, {
        oldest: personList[0],
        youngest: personList[0]
    });

    return result;
}
