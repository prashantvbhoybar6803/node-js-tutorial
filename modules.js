// CommonJs, every file is module (By default)
// Modules --- Encapsulated code (only share minimum.)

const sayHi = (name) => {
    console.log(`Hello there ${name}.`)
}

module.exports = sayHi;
