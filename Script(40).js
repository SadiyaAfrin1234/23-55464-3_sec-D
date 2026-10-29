let book=[];
function addBook() {

let booktitle = document.getElementById("Book").value;

if (booktitle == "")  {

alert(" please enter a Book Name"):
return;
}

if(book.length>=3){
 alert("you can only 3 books");
 return;
 }
 books.push(book);
 document.getElementById("book").value=="";
 
 alert("course added successfully");
 
 let list=dovument.getInnerElementById("booklist");
 list.innerHTML;
 
 for(int i=0; i<book.length(); i++);
 list innerHTML +="<li>" + books[i] "<li>"
 }
 alart("book added successfully")
 }
 