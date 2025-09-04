//.isArray เช็ค value ในarray
console.log(Array.isArray([]))

//reverse() = reverse valueใน array


const array14 = [1,30,4,21,10000]
array14.sort((a,b) => a-b) //คำสั่ง sort ตั้งตัวแปรมาก่อน a,b แล้วใส่ arrow function ตามด้วย condition (a-b คือ ถ้าลบกันแล้วได้ผลลบมันจะไปอยู่ข้างหน้า)
console.log(array14)


const stds = [
    { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
    { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
    { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
  ]
 

const order = stds
.map((st) => st.name)
.sort((a,b) => a.localeCompare(b))
console.log(order) 


//tree shaking คือการเอาcode ที่ไม่ได้ใช้ออก ลดขนาด bundle








function echo(value){
  return echo
}
function getLength(str){
  return str.length
}



const TAX =0.07
let x= 1
class Book {
  constructor(isbn, title){
      this.isbn = isbn
      this.title = title
   
  }
}

export {echo ,TAX as VAT, getLength as default,Bookpac}
//หน้าutility





import stg, {echo as repeat, VAT,Book}from "./utility.js";
console.log(stg("Introduction to JS"))
console.log(VAT)
console.log(repeat())

const b1 = new Book(1234,"js")
console.log(b1)
//esModuleTest


//คาบนี้ได้เรียนรู้การexport ตัวฟังชันจากไฟล์นึงไปใช้อีกไฟล์ โดยเราจะเขียนexport ไว้ที่ไฟล์ที่มีฟังชันแล้วก็ ใส่ import ไว้ที่ไฟล์ที่จะใช้ 
//ถ้าเราexport 1 function ให้ใส่ export defualt ไว้ที่หน้าฟังชันที่จะใช้ แต่ถ้าเกิดอยากเอาหลายๆอันให้มาเขียน export แยก แล้วใส่ {}