# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for attending squad standup at the begining and end of the day.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Approval and Build Seed File | Incomplete
|Day 2| Rails Backend Completed with full CRUD | Incomplete
|Day 3| React Component Buildout | Incomplete
|Day 4| Frontend Complete with full CRUD | Incomplete
|Day 5| CSS and MVP  | Incomplete
|Day 6| Deployment & PMVP  | Incomplete
|Day 7| Present | Incomplete


## Project Description

The Martial World will allow the user to learn about all the martial arts of the world; their country of origin, the founder of the art and a description of its roots. In full CRUD fashion they will be able to add Martial Arts they know about or delete ones they believe are erronious.

## Wireframes
<img src="list_of_all_MA.png">
<img src="list_of_all_MA_mobile.png">
<img src="single_MA.png">
<img src="single_MA_mobile.png">
<img src="edit_form.png">
<img src="edit_form_mobile.png">

## Priority Matrix
<img src="priority_matrix.png">

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### SAMPLE.....
#### MVP 

- Build a seed table 
- Build a rails backend
- Build a react frontend
- Show martial arts of the world by coutry and individualy
- Allow full CRUD controll of data entries
- Allow images via URL
- Deployment

#### PostMVP 
- AWS images
- Add anther page showcasing the most popular or powerful martial artist of their time.


## Architectural Design

<img src="react_architecture.png">

## ERD

<img src="ERD.png">

## UI Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

#### SAMPLE.....
| Component | Description | 
| --- | :---: |  
| Header | This will render the header include the nav | 
| Footer | This will render the Footer | 
| App | This will render all Components via Routes | 
| Main | This will contain MA by Country, Individual MA and Edit Form | 
| MA by Country | This will contain all included MA by country | 
| Individual MA | This will contain individual MA and link to edit form | 
| Edit Form | This will contain the edit and delete form | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### SAMPLE.....
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Build seed file | H | 4hrs|  |
| Set up rails controllers/models | H | 5hrs|  |
| Test rails endpoints | H | 4hrs|  | 
| Set up React | H | 6hrs|  | 
| Build React components | H | 6hrs|  | 
| Set up API calls | H | 6hrs|  | 
| CSS | H | 12hrs|  | 
| Deployment | H | 12hrs|  | 
| PMVP | H | 8hrs|  | 
| Total | H | 53hrs|  | 

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 #### SAMPLE.....
- I do not plan on using any libraries


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object