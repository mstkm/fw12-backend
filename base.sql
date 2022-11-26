-- Membuat database
CREATE DATABASE karcis;


-- Membuat tabel
CREATE TABLE "users" (
    "id"    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "picture"   VARCHAR(255),
    "firstName" VARCHAR(255),
    "lastName"  VARCHAR(255),
    "phoneNumber"   VARCHAR(255),
    "email"   VARCHAR(255),
    "password"   VARCHAR(255),
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "resetPassword" (
    "id"    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "email"   VARCHAR(255),
    "userId"   INT,
    "code"   VARCHAR(255),
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "movies" (
    "id"    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "title" VARCHAR(255),
    "picture" VARCHAR(255),
    "releaseDate" TIMESTAMPTZ,
    "director" VARCHAR(255),
    "duration" TIME,
    "synopsis" TEXT,
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "genre" (
    "id"    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name"  VARCHAR(255),
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "movieGenre" (
    "id"    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "movieId" INT,
    "genreId" INT,
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "casts" (
    "id"    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "name"  VARCHAR(255),
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "movieCasts" (
    "id"    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "movieId" INT,
    "castsId" INT,
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "cinemas" (
    "id"    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "picture" VARCHAR(255),
    "name" VARCHAR(255),
    "address" VARCHAR(255),
    "city" VARCHAR(255),
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "movieSchedule" (
    "id"    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "movieId" INT,
    "cinemaId" INT,
    "price" BIGINT,
    "startDate" DATE,
    "endDate" DATE,
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "movieScheduleTimes" (
    "id"    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "time"  TIME,
    "movieScheduleId"  INT,
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "status" (
    "id"    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "nama"  VARCHAR(255),
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "transactions" (
    "id"    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "bookingDate" TIMESTAMPTZ,
    "movieId" INT,
    "cinemaId" INT,
    "movieScheduleId" INT,
    "fullName" VARCHAR(255),
    "email" VARCHAR(255),
    "phoneNumber" VARCHAR(255),
    "statusId" INT,
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "reservedSeat" (
    "id"    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "seatNum"   VARCHAR(255),
    "transactionId" INT,
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "paymentMethod" (
    "id"    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "picture"   VARCHAR(255),
    "name"   VARCHAR(255),
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "subscribers" (
    "id"    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "email" VARCHAR(255),
    "createdAt" TIMESTAMPTZ DEFAULT now(),
    "updatedAt" TIMESTAMPTZ
);



-- Memasukan data ke tabel
INSERT INTO "users"
("picture", "firstName", "lastName", "phoneNumber", "email", "password")
VALUES
('C:\Users\62813\Downloads\clouds-1846760_1280.jpg', 'Super', 'Admin', '08123456789', 'admin@mail', '1234');

INSERT INTO "resetPassword"
("email", "userId", "code")
VALUES
('admin@mail', 1, '001122');

INSERT INTO "movies"
("title", "picture", "releaseDate", "director", "duration", "synopsis")
VALUES('Tenet', 'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg', '03 Sep 2020', 'Christopher Nolan', '02:30:00', 'In a twilight world of international espionage, an unnamed CIA operative, known as The Protagonist, is recruited by a mysterious organization called Tenet to participate in a global assignment that unfolds beyond real time. The mission: prevent Andrei Sator, a renegade Russian oligarch with precognition abilities, from starting World War III. The Protagonist will soon master the art of "time inversion" as a way of countering the threat that is to come.');

INSERT INTO "genre"
("name")
VALUES
('Action'),
('Sci-Fi'),
('Thriller');

INSERT INTO "movieGenre"
("movieId", "genreId")
VALUES
(1, 1),
(1, 2),
(1, 3);

INSERT INTO "casts"
("name")
VALUES
('John David Washington'),
('Robert Pattinson'),
('Elizabeth Debicki');

INSERT INTO "movieCasts"
("movieId", "castsId")
VALUES
(1, 1),
(1, 2),
(1, 3);

INSERT INTO "cinemas"
("picture", "name", "address", "city")
VALUES
('C:\Users\62813\Desktop\fw12-responsive-web\assets\ebv.id.png', 'ebv.id', 'Whatever street No.12, South Purwokerto', 'Purwokerto');

INSERT INTO "movieSchedule"
("movieId", "cinemaId", "price", "startDate", "endDate")
VALUES
(1, 1, 30000, '2022-11-01', '2023-02-01');

INSERT INTO "movieScheduleTimes"
("time", "movieScheduleId")
VALUES
('20:00:00', 1);

INSERT INTO "status"
("nama")
VALUES
('Active'),
('Already Used'),
('Expired');

INSERT INTO "transactions"
("bookingDate", "movieId", "cinemaId", "movieScheduleId", "fullName", "email", "phoneNumber", "statusId")
VALUES
('2022-11-22', 1, 1, 1, 'Mugi Mustakim', 'mugi@mail.com', '081222333444', 1);

INSERT INTO "reservedSeat"
("seatNum", "transactionId")
VALUES
('A1', 1);

INSERT INTO "paymentMethod"
("picture", "name")
VALUES
('C:\Users\62813\Desktop\fw12-responsive-web\assets\bri.png', 'BRI');

INSERT INTO "subscribers"
("email")
VALUES
('mugi@mail.com');


-- JOIN antar Tabel
SELECT m.title, g.name AS genre FROM "movies" m
JOIN "movieGenre" mg ON mg."movieId" = m.id
JOIN "genre" g ON g.id = mg."genreId";

SELECT m.title, c.name AS cast FROM "movies" m
JOIN "movieCasts" mc ON mc."movieId" = m.id
JOIN "casts" c ON c.id = mc."castsId";





-- ALTER
ALTER TABLE "users" ADD CONSTRAINT "email" UNIQUE ("email");

ALTER TABLE "genre" ADD CONSTRAINT "name" UNIQUE ("name");


-- Relasi secara simbolik (FOREIGN KEY)

ALTER TABLE "movieGenre" ADD CONSTRAINT "fk_movieId" FOREIGN KEY ("movieId") REFERENCES "movies" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "movieGenre" ADD CONSTRAINT "fk_genreId" FOREIGN KEY ("genreId") REFERENCES "genre" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "movieCasts" ADD CONSTRAINT "fk_movieId" FOREIGN KEY ("movieId") REFERENCES "movies" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "movieCasts" ADD CONSTRAINT "fk_castsId" FOREIGN KEY ("castsId") REFERENCES "casts" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "movieSchedule" ADD CONSTRAINT "fk_movieId" FOREIGN KEY ("movieId") REFERENCES "movies" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "movieSchedule" ADD CONSTRAINT "fk_cinemaId" FOREIGN KEY ("cinemaId") REFERENCES "cinemas" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "movieScheduleTimes" ADD CONSTRAINT "fk_movieScheduleId" FOREIGN KEY ("movieScheduleId") REFERENCES "movieSchedule" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "reservedSeat" ADD CONSTRAINT "fk_transactionId" FOREIGN KEY ("transactionId") REFERENCES "transactions" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "resetPassword" ADD CONSTRAINT "fk_userId" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "transactions" ADD CONSTRAINT "fk_movieId" FOREIGN KEY ("movieId") REFERENCES "movies" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "transactions" ADD CONSTRAINT "fk_cinemaId" FOREIGN KEY ("cinemaId") REFERENCES "cinemas" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "transactions" ADD CONSTRAINT "fk_movieScheduleId" FOREIGN KEY ("movieScheduleId") REFERENCES "movieSchedule" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "transactions" ADD CONSTRAINT "fk_statusId" FOREIGN KEY ("statusId") REFERENCES "status" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
