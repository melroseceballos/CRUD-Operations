# Mongoose Vampires
<p align="center"><img src="repo_banner.png"></p>

## Resources
For this lab, you will be using some of the Mongoose commands that you learned today and you will be **reading the documentation** to find **new** queries to complete the following activities. Researching queries and implementing them is a big part of this lab!

Utilize the following resources to research the commands you will need:
- Your notes from today
- [Mongoose Documentation](https://mongoosejs.com/docs/index.html)
- Google to find Stack Overflow articles and more

## Setup
1. Fork and clone this repo
1. Navigate to this directory in terminal and run `npm i` to install all of the dependencies in `package.json`
1. Open the project in VS Code, you'll be working with some starter code in the `models` folder and the `app.js` file
1. Edit the MONGODBURI connection string so that it points to a database called `vampires` in your MongoDB Atlas cluster.


## Your Task
### 1. Building a Schema
Lets design a schema using mongoose and then use it to create some documents and eventually query for those documents.

Our vampire collection will look something like this:

``` javascript
const vampire = {
  name: 'Chocula',
  title: 'Count'
  hair_color: 'brown',
  eye_color: 'brown',
  dob: new Date(1971, 2, 13, 7, 47),
  loves: ['cereal','marshmallows'],
  location: 'Minneapolis, Minnesota, US',
  gender: 'm',
  victims: 2,
}
```

1. Build a vampire **schema** and **model** that matches the object above inside the `models/vampires.js` file
1. Go to the Mongoose documentation to learn more about validations and defaults: http://mongoosejs.com/docs/api.html
1. The **name field is required**, so make sure that the schema accommodates for that.
1. Also, **no vampire will have less than 0 victims**, so add that into the schema as a validation.
1. Lastly, set the **default value of the hair color to blonde**.



### 2. Inserting Seed Data Using Mongoose
Run `node models/seed.js` to seed your database with the starter data!


### 3. Add New Vampire Data
1. Create 4 new vampires with any qualities that you like. 
1. Two should have hazel eyes, and two should have brown eyes.


### 4. Select by Comparison
Write a different query for each of the following:
1. Find all the vampires that that are females
2. Have greater than 500 victims
3. Have fewer than or equal to 150 victims
4. Have a victim count is not equal to 210234
5. Have greater than 150 AND fewer than 500 victims


### 5. Select by Properties & Values
Select all the vampires that:
1. Have a key of 'title'
2. Do not have a key of 'victims'
3. Have a title AND no victims
4. Have victims AND the victims they have are greater than 1000


### 6. Select with OR
Select all the vampires that:
1. Are from New York, New York, US or New Orleans, Louisiana, US
2. Love brooding or being tragic
3. Have more than 1000 victims or love marshmallows
4. Have red hair or green eyes


### 7. Select Documents that Match One of Several Values
Select all the vampires that:
1. Love either frilly shirtsleeves or frilly collars
2. Love brooding
3. Love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
4. Love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *


### Negative Selection
Select all vampires that:
1. Love ribbons but do not have brown eyes
2. Are not from Rome
3. Do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
5. Have not killed more than 200 people


## Replace
1. Replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
2. Replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'


## Update
1. Update 'Guy Man' to have a gender of 'f'
2. Update 'Eve' to have a gender of 'm'
3. Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
4. Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
5. Rename 'Eve's' name field to 'moniker'
6. We now no longer want to categorize female gender as "f", but rather as **fems**. Update all females so that the they are of gender "fems".



## Remove

1. Remove a single document wherein the hair_color is 'brown'
2. We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
<hr>


## Extra Practice
1. Check out Mongoose's Query Builder!
    ```js
    Person.
      find({ occupation: /host/ }).
      where('name.last').equals('Ghost').
      where('age').gt(17).lt(66).
      where('likes').in(['vaporizing', 'talking']).
      limit(10).
      sort('-occupation').
      select('name occupation').
      exec(callback);
    ```
1. Write what that query from above does in English: `Find a person whose occupation is ...`
1. Install Express and create a route that will `res.json()` all the vampires in your database
