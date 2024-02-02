
-- -------------------------------------------------------------------------------------------------------------------------------------------
-- -----------------------------------------------------Walmart Sales Data Analysis-----------------------------------------------------------
-- -------------------------------------------------------------------------------------------------------------------------------------------


-- creating a new data base names 'salesDataWalmart'
create database if not exists salesDataWalmart; 


-- creating a new table named 'sales'
create table if not exists sales(
	invoice_id varchar(30) not null primary key,
    branch varchar(20) not null,
    city varchar(20) not null,
    customer_type varchar(20) not null,
    gender varchar(20) not null,
    product_line varchar(100) not null,
    unit_price decimal(10, 2) not null,
    quantity int not null,
    vat float(6, 4) not null,
    total decimal(12, 4) not null,
    date datetime not null,
    time time not null,
    payment_method varchar(20) not null,
    cogs decimal(10, 2) not null,
    gross_margin_pct float(11, 9),
    gross_income decimal(12, 4) not null,
    rating float(2, 1) not null
    );
    

-- --------------------------------------------------------Feature Engineering--------------------------------------------------------------- 


-- creating a column 'time_of_day' with respect to the 'time' column 
select
	time,
    (case when time between '00:00:00' and '11:59:59' then 'morning'
    when time between '12:00:00' and '15:59:59' then 'afternoon'
    else 'evening'
	end) 
    as time_of_day
from sales;

-- inserting the new column time_of_day in the sales table 
alter table sales add column time_of_day varchar(20);
update sales set time_of_day = 
	(case 
    when time between '00:00:00' and '11:59:59' then 'morning'
    when time between '12:00:00' and '15:59:59' then 'afternoon'
    else 'evening'
	end);
    
    
    
-- creating a column 'dayname' with respect to the 'date' column 
select 
	date,
    dayname(date)
from sales;

alter table sales add column dayname varchar(10); 
update sales set dayname = dayname(date);



-- creating a column 'month' with respect to the 'date' column 
select 
	date,
    monthname(date)
from sales;

alter table sales add column month varchar(10);
update sales set month = monthname(date); 



-- --------------------------------------------------------Exploratory Data Analysis----------------------------------------------------------


-- -----------------------Product--------------------------
-- --------------------------------------------------------


-- How many unique cities does the data have?
select distinct(city) from sales;
-- There are three distint citirs- Yangon, Naypyitaw, and Mandalay


-- How many unique brances does the data have?
select distinct(branch) from sales;
-- There are three distinct branches A, B, and C


-- In which city is each branch?
select distinct city, branch from sales;
-- Branch A is in Yangon, Branch B is in Naypyitaw, and Branch C is in Mandalay


-- How many unique product line does the data have?
select count(distinct product_line) from sales;
select distinct(product_line) from sales;
-- There are 6 different product lines- Food and beverages, Health and beauty, Sports and travel, Fashion accessories, Home and lifestyle, Electronic accessories


-- Which is the most common payment method?
select payment_method, count(payment_method) as count 
from sales
group by payment_method
order by count desc;
-- The most common payment_method is Cash


-- Which is the most selling product_line?
select product_line, sum(quantity) qty
from sales
group by product_line
order by qty desc;
-- The most selling product is Electronic accesories 


-- What is the total revenue by month?
select month, sum(total) as total_revenue
from sales
group by month
order by total_revenue desc; 
-- The highest revenue is on January and the lowest on February


-- Which month has the largest cogs:
select month, sum(cogs) as total_cogs
from sales
group by month
order by total_cogs desc;
-- January has the largest cogs


-- Which product brings in the largest revenue?
select product_line, sum(total) as total_revenue
from sales
group by product_line
order by total_revenue desc;
-- Food and beverages brings in the targest revenue 


-- Which city and branch has the largest revenue?
select city, branch, sum(total) as total_revenue
from sales
group by city, branch
order by total_revenue desc;
-- City Naypyitaw and branch C has largest revenue


-- Which product line has the largest VAT?
select product_line, round(avg(vat), 2) as average_vat
from sales 
group by product_line
order by average_vat desc;
-- Home and lifestyle has the largest vat


-- What is the most common product line by gender?
select product_line, gender, count(gender) as total_count
from sales
group by product_line, gender
order by total_count desc;
-- Fashion accessories is most common between Female
-- Food and beverages is most common between Female
-- Health and beauty is most common between Male
-- Sports and travel is most common between Female
-- Electronic accessories is most common between Male
-- Home and lifestyle is most common between Male


-- What is the average rating of each product line?
select product_line, round(avg(rating), 1) as average_rating
from sales
group by product_line
order by average_rating desc;
-- Food and beverages has the highest rating
-- Home and lifestyle has the lowest rating 


-- Write the status as 'Good' if the total_sales of a product_line is greater than the average total_sales else 'Bad' 
-- Creating a view table named as 'total_sale' 
select product_line, sum(total) as total_sales 
from sales
group by product_line;

-- Calculating the average total_sale from the total_sales table
select round(avg(total_sales), 2) from total_sales;
-- The average sales is 53481.07

-- Fetching each product line and their respective status as 'Good' or 'Bad' 
select 
	product_line, 
	total_sales, (case when total_sales > '53481.07' then 'Good' else 'Bad' end) as status
from total_sales
group by product_line;
-- Expect for Food and beverages all product_line has total_sales above the average sales 



-- ----------------------------Sales-----------------------------
-- --------------------------------------------------------------

-- What is the amount of sales made in each time of the day in the weekdays?
select 
	time_of_day, 
    sum(total) as total_sales 
from sales
where not dayname = 'Saturday' or 'Sunday'
group by time_of_day
order by total_sales desc;
-- Most sales happens in the evening and least happens in the morning


-- Which day has the highest sales?
select dayname, sum(total) as total_revenue 
from sales
group by dayname
order by total_revenue desc;
-- Saturday has the highest sale
-- Monday has the lowest sale


-- Which type of customer brings in the maximum revenue?
select customer_type, sum(total) as total_revenue 
from sales
group by customer_type
order by total_revenue desc;
-- The member customers bring in more revenue as compared to the Normal customers


-- Which city has the highest vat in average?
select city, round(avg(vat), 2) as average_vat
from sales 
group by city
order by average_vat desc;
-- Naypyitaw charges the highest vat in average



-- Which customer type pays more vat on average?
select customer_type, avg(vat) as average_vat
from sales
group by customer_type
order by average_vat desc;
-- The member customers pay slightly higher vat on average


-- -------------------------Customer----------------------------
-- -------------------------------------------------------------
 
-- What is the most common customer type?
select customer_type, count(customer_type) as total_count
from sales
group by customer_type
order by total_count desc;
-- Member customers are more common than Normal customers 


-- What is the gender of most of the customers?
select gender, count(gender) as total_count
from sales
group by gender
order by total_count desc;
-- Male and female share almost the same count


-- What is the gender distribution in each branch? 
-- Branch A
select gender, count(gender) as gender_count
from sales
where branch = 'A'
group by gender;

-- Branch B
select gender, count(gender) as gender_count
from sales
where branch = 'B'
group by gender;

-- Branch C
select gender, count(gender) as gender_count
from sales
where branch = 'C'
group by gender;


-- Which day of the week gets the most rating on average for each branch?
-- Branch A
select dayname, avg(rating) as average_rating
from sales
where branch = 'A'
group by dayname
order by average_rating desc;
-- Friday gets the most average rating in Branch A

-- Branch B
select dayname, avg(rating) as average_rating
from sales
where branch = 'B'
group by dayname
order by average_rating desc;
-- Monday gets the most average rating in Branch B

-- Branch C
select dayname, avg(rating) as average_rating
from sales
where branch = 'C'
group by dayname
order by average_rating desc;
-- Saturday gets the most average rating in Branch C


-- ------------------------------------------------------------------------------------------------------------------------------------------
-- ------------------------------------------------------------------------------------------------------------------------------------------



