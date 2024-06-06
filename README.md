# Research lab management system 
Research Lab Management System (RLMS) is a website intended to feature all lab-related information at one place, including lab members, research work, upcoming events, awards, and publications. Additionally, lab members should be able to modify the information present on the website.


## URLs (after deployment)
Backend: https://rlms-backend.onrender.com

Frontend: https://rlms-frontend.netlify.app


## Tools used
* MERN Stack (MongoDB, Express.js, React.js, Node.js)
* VS Code, git and github
* Mongoose library
* MongoDB atlas 
* Axios library
* Thunderclient (VS Code extension for testing APIs)
* Bootstrap and React components for front-end
* bcrypt, cookie-parser, body-parser, jwt token for authentication
## How to use?
* All users can open website and view home, members, research and gallery pages. There are two buttons to login and signup.
* All lab members(whose emails are present in whitelist array in code) will be able to sign up. They can login and access profile pages.
* Profile pages consists of edit profile, add conference, add seminars, add visitors, add alumini and some other add pages.
* The data added through these profile and add pages is displayed in the respective view pages under members and research.
## Possible extensions 
* We can add google authentication using `passport-google-oauth20`.
* We can include a search bar to search across differnt pages.
* We can deploy website using `Heroku` or `AWS` or any other cloud platform.
* Inheritance can be added in code to remove redundant functionalities.
* In lab members, students and mentors can be differentiated and have different profile pages.
## UI Snapshots
Home page:
![image](https://user-images.githubusercontent.com/80624481/236484996-419492c6-8a28-4c0a-a02d-ead766e4dde6.png)

Mentors in Members:
![image](https://user-images.githubusercontent.com/80624481/236485400-4ed076bc-2c70-4cce-9cfc-01d34328aa87.png)

Facilities in Research:
![image](https://user-images.githubusercontent.com/80624481/236485849-f2f58fea-ccce-458d-8a1c-a419510cd454.png)

Edit Profile:
![image](https://user-images.githubusercontent.com/80624481/236486546-34535ec5-40cf-4fac-a5a0-941e11cfb76c.png)

