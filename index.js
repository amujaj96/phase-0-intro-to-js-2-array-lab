// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push('Ralph')
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const copyCat = [...cats, name]
    return copyCat
}

function prependCat(name) {
    const secondCopyCat = [name, ...cats]
    return secondCopyCat
}

function removeLastCat() {
   return cats.slice(0, -1)
}

function removeFirstCat() {
    return cats.slice(1)
}