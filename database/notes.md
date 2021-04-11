mongod => create a mongo server

mongo => starts the mongo shell

show dbs

use

insert

find

update

remove


help => to view other commands

C => Create

R => Read

U => Update

D => Delete

Step ! Connect to database

Sep 2 Declare schema

Step 3 model collection from schema


To create, use model.create({})

To read
    fetching many
        model.find(query: {});
        returns an array
    fetching one
        model.findOne(query: {});
        returns object or null
    fetching by id
        model.findById(string);
        returns object or null


To Update
    
updating many
    findOneAndUpdate({});

updating one 
    findByIdAndUpdate(String);