export function findFirstTeenager(personList) {
    return personList.find(person => person.age >= 13 && person.age <= 19) || 'No teenager found in the list.';
}