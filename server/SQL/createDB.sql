create table Calc(
	id               serial                 NOT NULL,
	time             timestamp              NOT NULL,
	operation        character VARYING(10)  NOT NULL,
	int1             integer                NOT NULL,
	int2             integer                NOT NULL,
	Response         integer                NOT NULL,
	primary key(id)
)

create table Users(
	id               integer                NOT NULL,
	name             character VARYING(256) NOT NULL,
	username         character VARYING(128) NOT NULL,
	email            character VARYING(128) NOT NULL,
	add_street       character VARYING(256) NOT NULL,
	add_suite        character VARYING(128) NOT NULL,
	add_city         character VARYING(64)  NOT NULL,
	add_zipcode      character VARYING(64)  NOT NULL,
	add_geo_lat      numeric (10,6)         NOT NULL,
	add_geo_lng      numeric (10,6)         NOT NULL,
	phone            character VARYING(64)  NOT NULL,
	website          character VARYING(128) NOT NULL,
	cmp_name         character VARYING(128) NOT NULL,
	cmp_catch_phrase character VARYING(128) NOT NULL,
	cmp_bs           character VARYING(128) NOT NULL,
	primary key(id)
)
