#NON-EXPRESS API

This is a simple single resource REST app I created using the hapi framework.
This is made for adding animals to a nosql, mongodb database.

##Required dependencies are
####hapi - install with:
npm install hapi -S
####mongoose- install with:
npm install hapi -S

##WARNING!!!
####Make sure that any requests you make match the name completely.
####Names are case sensitive. So if you have a animal with
#####name='Jake the dog'
#####make sure that you request the name exactly as it is
#####and  make sure that you put quotes around the value of
#####a property if it is more than one word,
#####IE: name='Jake the dog'

#NOTE:
###You can copy and paste each example in the order they
###are shown and this will walk you through each request in ###a way so you can see firsthand how this app works.
 
#POST
###path: /animals
Animals are added to a database through a POST request with the following parameters.
name:
type:
####Example POST request using httpie
http POST localhost:7777/animals name=dog type=mammal
#GET
###path: /animals/{name}
Animal Information can be viewed as a list all-together, or listed one by one if searched by the name parameter of the animal.
####Example:
httpie request To get a list of all of the animals in the database
http GET localhost:7777/animals
####Example:
httpie request to get an individual animal from the database
http GET localhost:7777/animals/dog
#PUT
###path: /animals/{name}
Animals can be updated using a PUT request to localhost:7777/animals/{name}
Replace {name} with the current name of the animal you wish to update.
Afterwards enter the PUT request data in either JSON format or however your
request app/package that you are using requires. I use httpie because you don't have to enter it in JSON format, and you can just enter it straight in,
as long as you put quotes around the property value if it is more than
one word.  
####EXAMPLE:
An example PUT request using http is;
http PUT localhost:7777/animals/dog name='Jake the dog' type=Canine
#DELETE
###path: /animals/{name}
Animals can be deleted one by one by making a DELETE request, with the path
of an existing animal in the database by its name.
####EXAMPLE:
An example DELETE request using httpie
http DELETE localhost:7777/animals/'Jake the dog'
