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

--Dummy band info data
INSERT INTO "band_info" ("name", "tech_rider", "band_rider", "stage_plot", "input_list", "arrival_time", "requests", "notes", "person_id")
VALUES ('HobGoblin', 'a bunch of equipment', 'a bunch of stuff', 'http://all4band.com/image/stage_plot2.jpg', 'https://busites_www.s3.amazonaws.com/littlefeatnetcom/content/LF-input-list-2012.jpg', '13:30', 'a request', 'a note', 1);
