import { apiRequest } from '../lib/openAiApi.ts'

// URLS
// ----------------
// https://api.openai.com/v1/chat/completions
// https://api.openai.com/v1/images/generations

const url = 'https://api.openai.com/v1/chat/completions'

const messages = [
	{
		'role': 'system',
		'content': 'You are a helpful funny chatbot.',
	},

	// replace <todo> with the correct role

	// ROLES:
	// ----------------
	// system
	// assistant
	// user
	{
		'role': '<todo>',
		'content': 'Can you tell me a joke about developers?',
	},
]

// replace <todo> with the correct mode

// MODELS
// ----------------
// gpt-3.5-turbo-1106
// gpt-4o
// gpt-4o-mini
// dall-e-2
// dall-e-3

const request = {
	model: '<todo>',
	messages,
}

const response = await apiRequest(url, request)

console.log(response)

// display the number of tokens used for the prompt
console.log(`${response}`)

// display the number of tokens used for the answer via console.log
console.log(`<todo>`)

// display the cost of the total number of tokens (info: https://openai.com/pricing) via console.log
console.log(`<todo>`)

// display only the content of the answer via console.log
console.log(`<todo>`)

// deno task ex1
