const words = ['puck','guy','tan','pang','nene']

const shortwords=words.filter((word) => word.length <= 3)  //call back function ฟังก์ชันแบบ parameter (filter ตัวที่น้อยกว่า 3ตัวอักษร) 
// annonymous function //word คือตัวแปรชั่วคราวที่สร้างขึ้นมาใช้แปปเดียว

console.log(words)
console.log(shortwords)

// reuse callback function ใช้ซ้ำ
function wordLength(word){
    return word.length <=3
}



const Up = words.map((w) => w.toUpperCase())  //map เอาทุกตัวมาทำให้เป็นตัวใหญ่
console.log(Up)




const students = [
    { id: 1, name: "Somchai Jaidee" },
    { id: 2, name: "Suda Deejai" },
    { id: 3, name: "John Smith" },
  ]

const stdId = students.map((st) => st.id).filter((st) => st %2 == 0 ) //map() คือการดึง value ออกจาก object(โดยกำหนด poperty)
console.log(stdId)





//หาคำที่มีคำว่าแมงโก้
const w2 = ['Mango',"Apple","Mangosteen","orange"]
const manGo = w2.filter((w) => w.toLowerCase().includes("mango")) //includes ใช้เผื่อเช็คคำ(สนตัวเล็กใหญ่) *string //ถ้าเป็นarray เช็คทั้งItem
console.log(manGo) //['Mango','Mangosteen']


const w3 = ['Mango',"Apple","Mangosteen","orange"]


const apple = w3.find((e) => e.toLocaleLowerCase().includes('apple'))
if(apple !== undefined){
        console.log("has apple")

    }
else{
        console.log("does not have apple")
    }



console.log()






//reduce()
const product = [1,"RED",102]
const productDetail =product.reduce((detail, prop) => {
    return prop === 'RED' ? detail?.concat('R') : detail?.concat(prop) //การรวมกัน
},'')

console.log(productDetail)




const cart =[
    {productId: 1001,price: 500, quantity: 2},
    {productId: 1002,price: 10, quantity: 3},
    {productId: 1003,price: 5, quantity: 10},
    // cart[cart.legth] = {product: 5555 ,price: 15 ,quantity: 4}
]
const allProduct = cart.reduce((sum,item) => {    
    return sum + (item.price * item.quantity)   //reduce จะลูป3รอบโดยแต่ละรอบจะยุบ price กับ quantity(เอามาคูณกัน)แล้วเก็บไว้ที่sum
}, 0) //0 คือ initial value ค่าตั้งต้น
 
const total = {total : allProduct }
console.log(total)
// unshift เพิ่มต้น length เพิ่ม 
// shift มันจะหายต้นarray แล้วlengthลดด้วยย




const month = ['Jan', 'March','April']
month.splice(1,0,'Feb') //(ตำแหน่ง,จะลบกี่อัน,เพิ่มด้วย "Feb")  //ถ้า0ตรงกลางคือเพิ่ม



const wordddd = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]
wordddd.splice(2,1,'Banana')//(ตำแหน่ง,จะลบกี่อันนับตั้งแต่ตัวที่start,เพิ่มด้วย "Feb")
console.log(wordddd)
wordddd.splice(3,2) //ลบออกแต่ไม่เพิ่มอะไรเข้าไป
console.log(wordddd)
wordddd.splice(2,0,'melon','cherry') //เพิ่มmelon กับ cherry
console.log(wordddd)




const wordddd2 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]

console.log(wordddd2.slice(2,5)) //ตัดตตตัวที่2ถึง 4(5-1)
console.log(wordddd2.slice(0,3)) //first to third
console.log(wordddd2.fill(null,0)) //เปลี่ยนทุกตัวเป็นnull



// ผมได้เรียนรู้เรื่องการใช้methodต่างๆ การใช้callback function(การเรียกใช้ฟังชันในรูปแบบparameter) ,reuse callback function ใช้ซ้ำ
// ตอนแรกผมเคยเขียน objectที่เก็บรายละเอียดของรถ แต่ผมไม่รู้วิธีที่จะดึงบางขอมูลออกมา แต่คาบนี้ map() ช่วยผมเอาไว้ โดยการบอกpopertyของสิ่งที่จะดึง 
// แต่reduce() คือฟังชันที่ผมยังไม่ค่อยคล่องเท่าไหร่ มันยังงงๆตอนนำำไปใช้จริงอยู่แต่กำลังฝึกอยู่ครับ 

// ผมไปหาโจทย์ง่ายๆมาลองทำความเข้าใจดูครับ
const array = [1, 2, 3, 4];


const initialValue = 0; //ค่าแรกจะเป็น0
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue, //accumulatorคือ ตัวที่จะสม currentValue ก็คือตัวปัจจุบันที่array ลูปอยู่
  initialValue,
);

console.log(sumWithInitial);
//ยังงงๆอยู่แต่พยายามอยู่ครับบ

