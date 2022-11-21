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

CREATE TABLE "movieCats" (
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
INSERT INTO "users" ("picture", "firstName", "lastName", "phoneNumber", "email", "password")
VALUES();

INSERT INTO "resetPassword" ("email", "userId", "code")
VALUES();

INSERT INTO "movies" ("title", "picture", "releaseDate", "director", "duration", "synopsis")
VALUES();

INSERT INTO "genre" ("name")
VALUES();

INSERT INTO "movieGenre" ("movieId", "genreId")
VALUES();

INSERT INTO "casts" ("name")
VALUES();

INSERT INTO "movieCats" ("movieId", "castsId")
VALUES();

INSERT INTO "cinemas" ("picture", "name", "address", "city")
VALUES();

INSERT INTO "movieSchedule" ("movieId", "cinemaId", "price", "startDate", "endDate")
VALUES();

INSERT INTO "movieScheduleTimes" ("time", "movieScheduleId")
VALUES();

INSERT INTO "status" ("nama")
VALUES();

INSERT INTO "transactions" ("bookingDate", "movieId", "cinemaId", "movieScheduleId", "fullName", "email", "phoneNumber", "statusId")
VALUES();

INSERT INTO "reservedSeat" ("seatNum", "transactionId")
VALUES();

INSERT INTO "paymentMethod" ("picture", "name")
VALUES();

INSERT INTO "subscribers" ("email")
VALUES();
