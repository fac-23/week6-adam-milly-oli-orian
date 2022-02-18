Final project report 
For your final projects, both in-house and Tech for Better, you’ll write a detailed README on the project.

The following sections are required. Your report is supposed to demonstrate a certain set of knowledge, skills and behaviours. These are listed alongside the relevant questions as quotes.

Introduction 
What are you building?
Why are you building it?
Project scope 
What are you not building?
How did you decide what features were important?
Project plan 
How are you going to structure your sprints?
What order are you going to build in?
How did user research inform your plan?
Requirement analysis 
How will you ensure your project is accessible to as many users as possible?
Are there any legal or regulatory requirements you should consider?
Project learnings 
Did your team work effectively?
What would you do differently next time?
Research and findings 
What did you find out from user testing?
Project outcomes 
Were your assumptions right or wrong?
Recommendations and conclusions 
What features would you prioritise to build next?
Was the project a success?
Software Development Lifecycle stages 
Planning 
What roles did your team take on?
Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)

Did these roles help your team work effectively?
Outline how teams work effectively to produce software and how to contribute appropriately (K6) Compare and contrast the requirements of a software development team, and how they would ensure that each member (including themselves) were able to make a contribution (K6)

Analysis 
What might be the intended and unintended consequences of building this product?
Design 
How did you plan a user experience?
What technical decisions did you make?
Server-render vs client-render vs both
Relational or non-relational or no DB
Self-hosted or platform-as-a-service
Frontend first vs DB first
Did you create a technical specification?
Review methods of software design with reference to functional/technical specifications and apply a justified approach to software development (K11, S11, S12)


What interesting technical problems did you have to solve?


How did you debug issues that arose?
Console.log() and using Next server terminal errors as well as the local host browser would should errors immediately without opening the browser console

Test 
- We used Cypress to write tests from a TDD approach to think about what the user experience would be like

Deploy 
Where/how did you deploy your application?
Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10)

What problems did you encounter during deployment?
Maintain 
Is it easy for someone make changes to the codebase?
Could a new person quickly be onboarded to contribute?
Establishes a logical thinking approach to areas of work which require valid reasoning and/or justified decision making (B2)
Describes how they have maintained a productive, professional and secure working environment throughout the project activity (B3)



# Next JS week

![](https://i.imgur.com/YL87ag4.jpg)

---

### Summary 😎

+ Cupcake E-commerce store 
+ Unique pages for each item
+ Basket utilising local storage
+ Filtering and sorting options

---

### Roles 🛼

+ Scum Facilitator: Oli
+ QA: Milly
+ DevOps: Orian
+ UI/UX: Adam

---

#### Scrum Facilitator 🏉

+ Worked together for project set up and using serverSideProps
+ Split up to teams to tackle product routes and the basket feature
+ Took on smaller issues as individuals

----

##### Kanban ✅ 🟥

+ Feature focused
+ Expected 17 
+ Actual 20
+ Reviewed project board regularly in additions to after our standup 

---

##### Velocity 🏎
![](https://i.imgur.com/2r75VKu.png)

---

#### QA

- We approached writing tests with Cypress as thinking ahead :thinking_face: about how the user would navigate to different dynamic routes of the page :dancer: 

- A lot of debugging was done with good old fashioned `console.log()` and it's important to clean these out of the code for the final draft

---


- Using Next was definitely helpful to keep syntax errors from slowing down the progress of adding new code, as it displays errors in the terminal and also immediately browser without needing to open the browser console

---

#### DevOps

- Initial file set up whilst went smoothly but we did take a pause thinking about how ElephantSQL would be connected to our local files and whether we needed a backup init.sql file :thinking_face: Always a good idea! :bulb:

- Vercel is incredibly helpful as a web hosting service, that is made with Next. Helpful error logs when deployment breaks! 

---

#### UI/UX

For the structure of the page we used flexbox

- We planned to have a homepage that contains the all the products and functionality to filter/sort the products to allow the user to view the products they wanted. 

- Then we created seperate routes for each of the products using get static paths and displayed them in their own page.

- When we tried to use url for images from unsplash we were getting an error 

the fix:

---

![](https://cdn.discordapp.com/attachments/943117744159748126/944216083106242580/Screenshot_2022-02-18_at_12.57.07.png)

---

- We also have a basket page where we wanted the products to be added in after the user clicks on the add to basket button. 

- We also added links on each of the pages so that the user can navigate through the website. (We used Link tag from next )

- We also gave a visual reference that the images can be clicked by changing the opacity and the mouse to a hand on hover.

---

### Learnings

+ getServerSide props versus getStatic props, integrating React with serverside operations
+ using different data structures as state (objects and arrays)

---

#### Basket

Accessing local storage
![](https://i.imgur.com/ql1wTnb.png)

---


![](https://i.imgur.com/80MatYe.png)

[Using loclastorage with React hooks](https://blog.logrocket.com/using-localstorage-react-hooks/)

---

Can also be done with `useEffect` in individual component
![](https://i.imgur.com/KCMHhJL.png)

---

`useState` can be given a function as initial state

![](https://i.imgur.com/oO8o0FG.png)

---

### Challenges

- Time management for all the features needed, we would've loved to have added the Social OAuth login so that users could login with their Github profile and have a basket of cupcakes just for them!
- Unclear Next Documentation, it was confusing which method can be used with client side or server side `getStaticProps` vs `getServerSideProps`

---

### [Demo](https://week6-adam-milly-oli-orian.vercel.app/) :sparkles:
