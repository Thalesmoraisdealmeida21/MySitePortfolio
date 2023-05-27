import { faker } from '@faker-js/faker';


async function sendMail() {

// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email();

console.log(randomName)
}
