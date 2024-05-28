# Team Management API

## Setup and Installation

- Ensure Node.js and MongoDB are installed.
- Clone the repository.
- Install dependencies:
  ```
  npm install
##  Running the Project
- Start MongoDB:
  ```
  mongod
- Run the application:
  ```
  npm run start
## Testing the Project
Use the following curl commands to test the API:

- List all team members:
    ```
    curl -X GET http://localhost:3000/team-members
     ```
- Add a new team member:

  ```
  curl -X POST -H "Content-Type: application/json" -d '{"firstName": "David", "lastName": "Jones", "phone": "+15101234567", "email": "test@test.com", "role": "user"}' http://localhost:3000/team-members
  ```
- Edit a team member:
    ```
    curl -X PUT -H "Content-Type: application/json" -d '{"firstName": "John"}' http://localhost:3000/team-members/{id}
    ```
- Delete a team member:
    ```
    curl -X DELETE http://localhost:3000/team-members/{id}
    ```
