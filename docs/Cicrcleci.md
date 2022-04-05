Steps launch in Circleci process:

1. Install backend dependencies 
    "backend:install": "cd 4_MyStore_Backend && npm install"
2. Build backend application
    "backend:build": "cd 4_MyStore_Backend && npm run build"
3. Run backend tests
    "backend:test": "cd 4_MyStore_Backend && npm run jasmine"
4. Deploy backend application to Elastic Beanstalk
    "backend:deploy": "cd 4_MyStore_Backend && npm run deploy"
5. Install frontend dependencies
    "frontend:install": "cd 4_MyStore_Frontend && npm install"
6. Build frontend application
    "frontend:test": "cd 4_MyStore_Frontend && npm run test"
7. Run frontend tests
    "frontend:build": "cd 4_MyStore_Frontend && npm run build"
8. Deploy frontend application to S3
    "frontend:deploy": "cd 4_MyStore_Frontend && npm run deploy"