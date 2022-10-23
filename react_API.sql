create database React_Fetch_API

use React_Fetch_API;

create table card_focus(
ID int primary key Identity(1,1),
focus_image varchar(600),
focus_title varchar(200),
focus_desc varchar(600)
)

select * from card_focus

set identity_insert card_focus on
