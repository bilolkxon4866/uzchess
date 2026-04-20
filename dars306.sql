create database dars306;


create table groups(
    id serial primary key,
    title varchar(128) not null
);

alter table groups alter column title drop not null;   -- null qiladi
alter table groups alter column title set not null;       -- not null qiladi


alter table groups rename title to name;                       -- title ni name qiladi

alter table  groups add column created timestamp not null default now();      -- created column qo'shadi

alter table  groups alter column created type timestamp;      -- created column qo'shadi


insert into groups(name)
values ('bootcamp full-stack n28'),
       ('webPractikum n5'),
       ('backend n7');

set timezone = 'UTC';

select id, name, created from groups;

alter table groups alter column created set default current_timestamp;

-- ---------------------------------------------------------------------------------------------------------------------

create table students(
    id serial primary key,
    fullName varchar(128) not null ,
    gender varchar(6) not null check ( gender in ('male', 'female') )
);


INSERT INTO students (fullname, gender)
VALUES ('Sherozbek', 'male'),
       ('Asilbel', 'male'),
       ('Humoyun', 'male'),
       ('Muslima', 'female'),
       ('Sevinch', 'female'),
       ('Behruz', 'male'),
       ('Davron', 'male'),
       ('Bilol', 'male'),
       ('Sardor', 'male'),
       ('Usmon', 'male'),
       ('Bilolxon', 'male');


alter table students add column groupid int null;


alter table students add constraint "students_to_group_fk" foreign key (groupid) references groups(id) on delete set null;


select students.id, fullName, groups.name as "group"
from students
     join groups on groups.id=students.groupid
order by fullName;



select students.id, fullName, groups.name as "group"
from students
         left join groups on groups.id=students.groupid
order by fullName;


select students.id, fullName, groups.name as "group"
from students
         right join groups on groups.id=students.groupid
order by fullName;


select students.id, fullName, groups.name as "group"
from students
         full join groups on groups.id=students.groupid
order by fullName;

-- ---------------------------------------------------------------------------------------------------------------------

create table teachers(
    id serial primary key ,
    fullname varchar(64),
    gender varchar(6) not null check ( gender in ('male', 'female') )
);


insert into teachers(fullname, gender)
values ('solihcoder', 'male'),
       ('jahongir', 'male');

alter table groups
        add column teacherid int not null references teachers(id) default 1;


SELECT s.id, s.fullname as student, g.name as group, t.fullname as teacher
FROM students s
         LEFT JOIN groups g ON g.id = s.groupid
         LEFT JOIN teachers t ON g.teacherid = t.id
ORDER BY s.fullname;

-- ---------------------------------------------------------------------------------------------------------------------


create table authors(
    id serial PRIMARY KEY,
    fullname varchar(64) not null,
    birthdate Date,
    gender varchar(10) not null check ( gender in ('male', 'female') )
);


INSERT INTO authors (fullname, birthdate, gender, phonenumber)
VALUES
    ('Abdulla Qodiriy', '1894-04-10', 'male', '+998901234501'),
    ('O''tkir Hoshimov', '1941-08-05', 'male', '+998935554433'),
    ('Agatha Christie', '1890-09-15', 'female', '+442071234567'),
    ('J.K. Rowling', '1965-07-31', 'female', '+442089876543'),
    ('Erkin Vohidov', '1936-12-28', 'male', '+998971112233'),
    ('Abdulla Oripov', '1941-03-21', 'male', '+998998887766'),
    ('Virginia Woolf', '1882-01-25', 'female', '+441122334455'),
    ('Lev Tolstoy', '1828-09-09', 'male', '+79051234567'),
    ('Fyodor Dostoyevskiy', '1821-11-11', 'male', '+79067778899'),
    ('Halima Xudoyberdiyeva', '1947-05-17', 'female', '+998903332211');


ALTER TABLE authors
    DROP CONSTRAINT check_gender_values;

ALTER TABLE authors
    ADD CONSTRAINT check_gender_values
        CHECK (gender IN ('male', 'female'));


alter table authors
    add constraint unique_fullname unique (fullname);


alter table authors
    add column phonenumber varchar(16) not null
constraint chk_phone_length check ( length(phonenumber)>=9 );

-- ---------------------------------------------------------------------------------------------------------------------



create table books(
    id serial primary key ,
    title varchar(128) not null ,
    pages int not null ,
    pubdate DATE,
    price decimal(12, 2) not null
);

INSERT INTO books (title, pages, pubdate, price, authorid)
VALUES
    ('O''tkan kunlar', 400, '1922-01-01', 45000.00, 1),
    ('Mehrobdan chayon', 380, '1928-06-15', 42000.00, 1),
    ('Dunyoning ishlari', 250, '1982-10-20', 35000.00, 2),
    ('Ikki eshik orasi', 520, '1986-05-12', 55000.00, 2),
    ('Murder on the Orient Express', 256, '1934-01-01', 65000.00, 3),
    ('Death on the Nile', 288, '1937-11-01', 60000.00, 3),
    ('Harry Potter and the Sorcerer''s Stone', 309, '1997-06-26', 85000.00, 4),
    ('Harry Potter and the Chamber of Secrets', 341, '1998-07-02', 85000.00, 4),
    ('O''zbegim', 120, '1968-01-01', 25000.00, 5),
    ('Sohibqiron', 180, '1996-03-01', 30000.00, 6),
    ('To the Lighthouse', 209, '1927-05-05', 48000.00, 7),
    ('Urush va Tinchlik', 1200, '1869-01-01', 120000.00, 8),
    ('Anna Karenina', 800, '1877-01-01', 95000.00, 8),
    ('Jinoyat va Jazo', 600, '1866-01-01', 75000.00, 9),
    ('Muqaddas ayol', 150, '2000-01-01', 28000.00, 10);



alter table books add column authorid int null;


alter table books add constraint "books_to_author_fk" foreign key (authorid) references authors(id) on delete set null;


select b.id, b.title, b.price,
       a.fullname as author,
       a.birthdate
from books b
left join authors a on authorid = a.id;

-- ---------------------------------------------------------------------------------------------------------------------



create table grades(
    id serial primary key ,
    score int not null

);

alter table grades add column studentid int null;

INSERT INTO grades (score, studentid)
VALUES
    (85, 1),
    (92, 2),
    (78, 3),
    (100, 4),
    (65, 5);


select s.fullname, g.score
from students s
inner join grades g on s.id = g.studentid;


