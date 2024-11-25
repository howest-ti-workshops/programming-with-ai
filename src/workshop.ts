import { readTextFromFile, writeToFile } from '../lib/file.ts'
import { apiRequest } from '../lib/openAiApi.ts'

/*

Assignment: Code Review Automation Script
Objective:
The goal of this assignment is to create a TypeScript script that automates the process of performing an in-depth code review and generating unit tests for the reviewed code. The solution will involve reading a file containing code, sending it to an API for analysis, and saving the review and generated unit tests to a new file.

Instructions:
Setup the Project:
Create a project structure with the following files:

A TypeScript file ('./src/codefiles/code2review.ts') containing the code snippet to be reviewed.
USe the file workshop.ts  to implement the solution.
Use Provided Utilities:
The readTextFromFile, writeToFile, and apiRequest functions are already implemented in a library (../lib/file.ts and ../lib/openAiApi.ts). Use these functions in your solution:

readTextFromFile(path: string): Reads text content from a given file.
writeToFile(path: string, content: string): Writes the provided content to a file at the specified path.
apiRequest(url: string, payload: object): Sends an HTTP POST request to the specified API endpoint with the given payload.
Implement the Script:
Write a script that:
Reads the content of a TypeScript file specified by a file path.
Constructs a prompt asking an AI to review the code and generate unit tests based on the AAA (Arrange, Act, Assert) pattern.
Sends the request to an AI API.
Saves the response (code review and unit tests) to a new markdown file. Name the file with a timestamp to ensure uniqueness. => `./src/codefiles/review${ Date.now()}.md`


usefull urls:
- https://platform.openai.com/docs/api-reference/chat/create
- https://platform.openai.com/docs/overview
*/




const path = './src/codefiles/code2review.ts';

async function doCodeReview(path: string){
        
}

doCodeReview(path);