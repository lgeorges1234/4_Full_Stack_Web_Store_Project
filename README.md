# 4_Full_Stack_Web_Store_Project

## Table of contents

* [General info](#general-info)
* [Links](#links)
* [CI/CD pipeline](#ci-cd-pipeline)
* [aws infrastructure](#aws-infrastructure)

---

## General info

***My Fullstack Online Store*** is a complete fullstack online store application regrouping :
- an Angular frontend application, 
- a backend NodeJS API, 
- a PostgreSQL database.

The application is hosted inside an  [Amazon Web Service infrastructure](https://github.com/lgeorges1234/4_Full_Stack_Web_Store_Project/blob/main/docs/diagrams/aws.png).

Each part of the application is detailed in a separate README files :
- [Frontend README](https://github.com/lgeorges1234/4_Full_Stack_Web_Store_Project/blob/main/4_MyStore_Frontend/README.md)
- [Backend README](https://github.com/lgeorges1234/4_Full_Stack_Web_Store_Project/blob/main/4_MyStore_Backend/README.md)

## Links

###Frontend Link
- http://webstore-frontend.s3-website.eu-west-3.amazonaws.com

###API Link
- http://MyStore-api-dev.eu-west-3.elasticbeanstalk.com/products

###Database Link
- http://mystorebdd.cffh2rvpabq7.eu-west-3.rds.amazonaws.com

## CI/CD pipeline

A pipeline process is applied to install, test and deploy each part of the application. [Circleci](https://circleci.com/) is used to order and launch the tasks.
1. 


