const Animal = require(__dirname + '/../models/animals');

module.exports = [
  {
    method: 'GET',
    path: '/animals',
    handler: function (request, reply) {
      Animal.find(null, (err, data) => {
        if(!err) reply(data);
      });
    }
  },
  {
    method: 'GET',
    path: '/animals/{id}',
    handler: function(request, reply) {
      Animal.find({name: request.params.id}, (err, data) => {
        if(err) return serverError(err, reply);
        reply(data);
      })
    }
  },
  {
    method: 'POST',
    path: '/animals',
    handler: function(request, reply) {
      var newAnimal = new Animal(request.payload);
      newAnimal.save(function(err) {
        if(err) return serverError(err,reply);
        reply(newAnimal);
      })
    }
  },
  {
    method: 'PUT',
    path: '/animals/{id}',
    handler: function(request, reply) {
      var animalData = request.payload;
      console.log('Updated ' + request.params.id + ' to ' + JSON.stringify(request.payload));
      Animal.update({name: request.params.id}, animalData, (err) => {
        if(err) return serverError(err, reply);
        reply('You have updated Animals!!');
      })
    }
  },
  {
    method: 'DELETE',
    path: '/animals/{id}',
    handler: function(request, reply) {
      Animal.remove({name: request.params.id}, (err) => {
        if(err) return serverError(err, reply);
        reply(request.params.id + ' has been deleted from the Animals Collection!!');
      })
    }
  }
];
