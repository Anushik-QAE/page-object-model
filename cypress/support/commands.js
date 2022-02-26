import 'cypress-file-upload'
const { faker } = require('@faker-js/faker');

export const Credentials = {
    email: faker.internet.email(),
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    password: faker.internet.password()
}