import { PersonSingletoen, Singleton } from "./singletone";

const s1 = Singleton.getInstance() // new
const s2 = Singleton.getInstance() // already new
const s3 = Singleton.getInstance() // already new 
const s4 = Singleton.getInstance() // already new
const s5 = Singleton.getInstance() // already new

const p1 = PersonSingletoen.getInstance("leedonggyu",28)
const p2 = PersonSingletoen.getInstance("leedonggyu",29)
const p3 = PersonSingletoen.getInstance("leedonggyu",30)
const p4 = PersonSingletoen.getInstance("leedonggyu",31)
const p5 = PersonSingletoen.getInstance("leedonggyu",32)

p1.showInfo()
p2.showInfo()
p3.showInfo()
p4.showInfo()
p5.showInfo()

p1.setName("kimkimkim")

p1.showInfo()
p2.showInfo()
p3.showInfo()
p4.showInfo()
p5.showInfo()