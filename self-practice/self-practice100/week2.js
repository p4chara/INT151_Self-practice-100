// object literal 
// การเพิ่มkeyที่เหมือนกันทับกัน มันจะกลายเป็นการreplace

const book={isbn:12345678, title:'Introduction to JS',authors:
    [{firstname:'John'}, {lastname:'Smith'},{firstname:'Danial'},
    {lastname:'Doh'}], versions:[1.0, 2.0,3.0], isAvailable:true, 
    getISBN(){return this.isbn},
    getauthors(){return this.authors}}
    
    
    console.log(book.authors)
    
    // object เป็นdynamicสามารถลบเพิ่มได้ตลอดเวลา
    book.publishDate = new Date(2025, 1,1)
    delete book.isAvailable 
    console.log(book)
    
    
    for(const key in book ){
        console.log(book.key) //"not allowed"
        console.log(book[key]) //"ใช้ในการfor in loop"
    }
    
    
    
    // constructure function   มักตัวใหญ่ตัวแรก
    function Book (isbn, title){
        this.isbn = isbn
        this.title = title
    }
    
    // class
    class Book{
        constructor(isbn, title){
            this.isbn=isbn
            this.title=title
        }
        getISBN(){
            return this.isbn
        }
        setTitle(title){
            this.title=title
        }
        getBookInfo(){
            return `isbn: ${this.isbn}, title: ${this.title}`
        }
    }
    const myBook=new Book(12345678, 'JS Beginner')
    
    
    
    
    // การcompare objectมันจะไม่compare ตัวkey value แต่มันจะcompare memmo address
    const b13 ={id:1, title:"JS"}  //b1 and b2 ไม่เท่ากันเพราะ การสร้างobject memmo addressมันอยู่คนละที่กัน
    const b23 ={id:1, title:"JS"}
    console.log(b13===b23)
    
    
    
    
    
    // การเทียบvalueของ2object
    const b1 ={
        isbn:123, title:"ABC"
    }
    
    const b2 ={
        isbn:123, title:"ABC"
    }
    
    function samebook(b1,b2){
        if(b1.isbn === b2.isbn)
             return true
        else
            return false
    }   
    console.log(samebook(b1,b2))
    
    
    
    
    
    
    const b14 ={isbn:123, title :'JS'}
    const b24 ={isbn:123, title :'JS'}
    
    
    const key=Object.keys(b1) //การแยก keyออกมาจาก object
    const value=Object.values(b1) //การแยก valueออกมาจาก object
    
    
    
    
    
    // destructuring 
    // (ถ้าเป็น []des array,{} des object)
    const colors=['red', 'green', 'blue']
    const [, item2]=colors //const items=colors[1]
    console.log(item2)
    
    
    const b11={isbn: 1234, title: 'JS', authors:{firstname: 'Jon',lastname:'Smith'}}
    const {isbn,title}=b11  //ใส่: หลังkeyจะได้ชื่อตัวแปรใหม่
    console.log(isbn)//1234
    console.log(title)//JS
    const {authors:{firstname}}=b11
    console.log(firstname)