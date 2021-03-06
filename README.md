# Festival Form
Miscommunication and lost emails are common and a source of great frustration in the world of professional live concert production. Festival Form  was developed to help streamline communication between music festival organizers and band tour managers to create well-organized events. Band tour managers are able to upload their relevant information and RSVP to music festivals. Music festival organizers can create festivals, see who has responded to each festival, and download each respondent’s information.

This app is live on Heroku at: https://festival-form.herokuapp.com/#/home.
If you would like to download this project locally, the steps below will get the project up and running.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)


## Getting Started

* Click the `Clone or Download` button and select `Download Zip`.
* Unzip the project and start with the code in that folder.
* Create a new GitHub project and push this code to the new repository.


## Database Setup

In the database GUI, create a database called `"festival_form"`.

Inside the `festival_form` database, copy, paste, and execute the following queries.

```SQL
CREATE TABLE person (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "first_name" VARCHAR (255),
    "last_name" VARCHAR (255),
    "email" VARCHAR (255),
    password VARCHAR (1000) NOT NULL
);


CREATE TABLE "festival" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(255) NOT NULL,
	"date" DATE NOT NULL,
	"image" VARCHAR,
	"address" VARCHAR
);



CREATE TABLE "band_info" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR NOT NULL,
	"tech_rider" VARCHAR,
	"band_rider" VARCHAR,
	"stage_plot" VARCHAR,
	"input_list" VARCHAR,
	"person_id" INT REFERENCES "person" NOT NULL
);


CREATE TABLE "festival_band_info" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR NOT NULL,
	"tech_rider" VARCHAR,
	"band_rider" VARCHAR,
	"stage_plot" VARCHAR,
	"input_list" VARCHAR,
	"arrival_time" TIME,
	"requests" VARCHAR,
	"notes" VARCHAR,
	"festival_id" INT REFERENCES "festival" ON DELETE CASCADE,
	"band_info_id" INT REFERENCES "band_info" NOT NULL
);


--Dummy festival data
INSERT INTO "festival" ("name", "date", "image", "address")
VALUES ('lollapalooza', '2017/08/02', 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F08%2Flollapalooza-2018-livestream-0.jpg?fit=max&cbr=1&q=90&w=1024&h=683', 'Grant Park, IL'), ('coachella', '2017/04/12', 'https://s3-us-west-1.amazonaws.com/coachella2017-theme/img/coachella-social-share.png', 'Indio, CA');
```


## Development Setup Instructions

* In the project folder run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`



## Technologies Used

- React
- Redux
- Redux-Saga
- Node.js
- Express.js
- PostgreSQL
- Passport
- Moment.js
- Material-UI
- Uppy


## Authors
Reese Westerhoff

