DROP DATABASE IF EXISTS tool_library;
CREATE DATABASE tool_library;

USE  tool_library;

CREATE TABLE tools(
    id IDENTITY,
    tool_name VARCHAR,
    date_added DATETIME,
    is_available BOOLEAN
)

CREATE TABLE users(
    id IDENTITY,
    first_name varchar,
    last_name varchar,
    email varchar,
    password VARCHAR
)

CREATE TABLE tools_checked_out(
    id IDENTITY,
    user_id IDENTITY,
    tool_id IDENTITY,
    checked_out DATETIME,
    due_back DATETIME  
)
