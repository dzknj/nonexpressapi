#NON-EXPRESS API

This is a simple single resource REST app I created using the hapi framework.
This is made for adding animals to a nosql, mongodb database.

Required dependencies are
hapi - install with:
npm install hapi -S
mongoose- install with:
npm install hapi -S

#POST
path: /animals
Animals are added to a database through a POST request with the following parameters.
name:
type:
Example POST request using httpie
http POST localhost:7777/animals name:dog type:mammal
#GET
path: /animals/{name}
Animal Information can be viewed as a list all-together, or listed one by one if searched by the name parameter of the animal.
Example:
httpie request To get a list of all of the animals in the database
http GET localhost:7777/animals
Example:
httpie request to get an individual animal from the database
http GET localhost:7777/animals/dog
#PUT
path: /animals/{name}
Animals can be updated using a PUT request to localhost:7777/animals/{name}
Replace {name} with the current name of the animal you wish to update.
Afterwards enter the PUT request data in either JSON format or however your
request app/package that you are using requires. I use httpie because you don't have to enter it in JSON format, and you can just enter it straight in,
as long as you put quotes around the property value if it is more than
one word.  
EXAMPLE:
An example PUT request using http is;
http PUT localhost:7777/animals/spider name='Jake the Dog' type=Canine
#DELETE
path: /animals/{name}
Animals can be deleted one by one by making a DELETE request, with the path
of an existing animal in the database by its name.
EXAMPLE:
An example DELETE request using httpie
http DELETE localhost:7777/animals/dog
