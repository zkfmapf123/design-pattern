import { createFactory } from "./factory";
import { createFamilyFactory } from './person.factory'

const a = createFactory('A')
const b = createFactory('B')

console.log(a.method())
console.log(b.method())

// AbstractProduct not exists aaa(), bbb()
// console.log(a.aaa())
// console.log(b.bbb())

const mother = createFamilyFactory("Mother")
const father = createFamilyFactory('Father')

mother?.see("son")
mother?.speak("zzz")

father?.see("son")
father?.speak("zzz")