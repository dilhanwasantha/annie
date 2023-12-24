const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function()
{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

/*Databse connection string*/

var connection = new ActiveXObject("ADODB.Connection") ;

var connectionstring="Data Source=<server>;Initial Catalog=<catalog>;User ID=<user>;Password=<password>;Provider=SQLOLEDB";

connection.Open(connectionstring);
var rs = new ActiveXObject("ADODB.Recordset");

//rs is the variabel you use for the connection object and can be change to anything else
//below this i can put all the sql

/*

rs.Open("SELECT * FROM table", connection);
rs.MoveFirst
while(!rs.eof)
{
   document.write(rs.fields(1));
   rs.movenext;
}

rs.close;
connection.close; 

//example of the sql execution which goes to the first record and while do loop until end of file it writes out the value of the field, so writes out every field until reaches the end of the file

*/