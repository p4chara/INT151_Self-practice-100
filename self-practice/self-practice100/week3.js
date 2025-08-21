// function declaration การสร้างแต่ไม่ได้เรียกใช้
function multiply(a,b){
    if(typeof a != 'number'&& typeof b !='number')
        return null
    else
        return a*b

}
console.log(multiply(2,3))



// function expression (arrow function syntax) ไม่ซัพพอตการเขียนแบบconstructure เพราะไม่รองรับthis ถ้าจะใช้this ต้องเขียนแบบdecladation
const multiply2= (a,b)=>{return a*b} //arrow ถ้ามีstatementเดียว ไม่ต้องreturn จะreturn ต่อเมื่อมีหลายstatement




const x = multiply //functionสามารถเก็บเป็นตัวแปรได้
console.log(typeof x)






// functional programming มี3แบบ
//pass function to another function การส่งfunction
function multi(a,b){
returna*b
}
function doSomething(x){
return x(3,5)
}
console.log(doSomething(multi)) //parrameter x = multi (เท่ากับx เป็นfunctionแล้ว)ค่าที่ได้ออกมามันก็จะเอา3,5ตรงdosomethingไปคูณกัน









function sayGoodBye(){
return 'Good bye'
}

function doSomething(){
return sayGoodBye
}

// let doIt = doSomething()
// console.log(doIt())

console.log(doSomething()()) // Good bye (เพราะ doSomething()วงเล็บแรกคือจะได้function sayGoodBye 
// พอได้sayGoodByeตามด้วยวงเล็บที่สอง functionก็ทำงานเลยได้ค่า Good Bye)








function myFunc(theObject){
theObject.model = "A9999"
}
const product = {
model : "A1001",
price : 199,
}

myFunc(product);
console.log(product.model)  // productให้referenceให้กับตัว myFunc พอmyfunc เปลี่ยนแปลงค่า 
// productก็เปลี่ยนไปด้วย (myFuncจบไปแล้วแต่ ค่าในproductยังอยู่(อยู่แบบเปลี่ยนไป))





function sum(x,y){
return x+y
// return agrument[0] + argument[1] เหมือนอันบน
}
console.log(sum(1,2))











function greeting(greet = "Hello", whom = "Guest", quote = "How are you?") {
return `${greet} ${whom} ${quote}`
}

console.log(greeting("hi")) //hi Hello Guest How are you? มันจะออกhi บวกด้วย greeting
console.log(greeting("Good morning", "Guy", "Great!")) //ออกตามที่เขียน
console.log(greeting(undefined, null, "Fine")) //Hello null Fine (undefined จะออกค่าdefult คือ Hello ตามด้วย null Fine)
console.log(greeting()) //Hello Guest How are you?









//practice in class 100
function getFreqOfWords(sentence){
    if (typeof sentence !== String){  //อันนี้ผมตรวจสอลว่าค่าที่ได้มาเป็นประโยครึป่าว ถ้าไม่ return undefined
        return undefined}

    let x = sentence.toLowerCase().split(/\s+/)   //บรรทัดนี้คือการทำให้ตัวอักษรเล็กลงและ ตอนแรกผมใช้ ("")
    //  ตรงsplit แต่มันแยกทุกตัวอักษรแทนที่จะเป็นช่องว่าง chatเลยบอกให้ผมเขียนแบบนี้ครับเผื่อแยกคำ
    let count = {}
    for (let i of x) {
        if (x) { 
         count[i] = (count[i] || 0) + 1 //ถ้า count[word] มีค่าแล้ว → ใช้ค่านั้น
        //   ถ้า count[word] ยังไม่มี → ใช้ 0 เริ่มนับจากศูนย์
        //   + 1 คือเพิ่มการนับอีกหนึ่งครับ
        }
      }
      
      return count
    
    

     
}


console.log(getFreqOfWords('Im the one who listen to the who'))