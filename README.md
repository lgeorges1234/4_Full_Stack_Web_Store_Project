# 4_Full_Stack_Web_Store_Project

## Table of contents

* [General info](#general-info)
* [Links](#links)
* [AWS infrastructure](#aws-infrastructure)
* [CI/CD pipeline](#ci-cd-pipeline)

---

## General info

***My_Fullstack_Online_Store*** is a complete fullstack application regrouping :
- an Angular frontend online store application, 
- a backend NodeJS API, 
- a PostgreSQL database.

The application is hosted inside an [Amazon Web Service infrastructure](#aws-infrastructure).

Each part of the application is detailed in a separate README files :
- [Frontend README](https://github.com/lgeorges1234/4_Full_Stack_Web_Store_Project/blob/main/4_MyStore_Frontend/README.md)
- [Backend README](https://github.com/lgeorges1234/4_Full_Stack_Web_Store_Project/blob/main/4_MyStore_Backend/README.md)

---

## Links

### Frontend Link
- http://webstore-frontend.s3-website.eu-west-3.amazonaws.com

### API Link
- http://MyStore-api-dev.eu-west-3.elasticbeanstalk.com/products

### Database Link
- http://mystorebdd.cffh2rvpabq7.eu-west-3.rds.amazonaws.com

---

## AWS infrastructure

![AWS infrastructure](https://github.com/lgeorges1234/4_Full_Stack_Web_Store_Project/blob/main/docs/diagrams/aws.png)

The Amazon Web Service infrastructure for the project lean on three components :
- a S3 buckets hosting a plublic website\
- an Elastic Beanstack environment hosting a NodeJS server
- a RDS instance running a PostgreSQL database

---

## CI/CD pipeline

![CI/CD_pipeline](https://github.com/lgeorges1234/4_Full_Stack_Web_Store_Project/blob/main/docs/diagrams/CI_CD.png)

A pipeline process is applied to install, test and deploy frontend and backend. 

[Circleci](https://circleci.com/) is used, each time the code is modified on github, to order and launch the different scripts of each application : [Circleci steps](https://github.com/lgeorges1234/4_Full_Stack_Web_Store_Project/blob/main/docs/Cicrcleci.md)


