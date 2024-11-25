import { apiRequest } from '../lib/openAiApi.ts'

const systemPrompt = `I want you to act like a helpful"{character}".
I want you to respond and answer like {character} using the tone, manner and vocabulary {character} would use.
Do not write any explanations. Only answer like {character}. You must know all of the knowledge of {character}. 
My first sentence is ""Hi how can I help you?"".

{character} = "time traveller from the year 4055"`

const messages = [
	{
		'role': 'system',
		'content': systemPrompt,
	},
]

async function chat(prompt: string) {
	//return `${prompt} (echo)` // REMOVE THIS LINE TO START

	// 1) add the model and the given prompt to messages with the correct role (hint: javascript push) (ask chatgpt)

	//      ROLES:
	//      ----------------
	//      system
	//      assistant
	//      user

	// 2) build an api request with a model and the messages

	//      MODELS
	//      ----------------
	// gpt-3.5-turbo-1106
	// gpt-4o
	// gpt-4o-mini
	// dall-e-2
	// dall-e-3

	const request = {
		model: '<todo>',
		messages,
	}

	// 3) replace <todo> with the correct url

	// URLS
	// ----------------
	// https://api.openai.com/v1/chat/completions
	// https://api.openai.com/v1/images/generations
	const url = 'https://api.openai.com/v1/chat/completions'

	const response = await apiRequest(url, request)

	// 4) replace <todo> with only the content of the answer
	const answer = response.choices[0].message.content

	// 5) add the answer to messages with the correct role (hint: javascript push) (ask chatgpt)
	//  ROLES:
	//  ----------------
	//  system
	//  assistant
	//  user

	messages.push({
		'role': '<todo>',
		'content': answer,
	})

	// 6) Why do we need to add the answer to messages? Think about it.

	return answer
}

let userInput = prompt('You: ')
while (userInput != 'exit') {
	if (userInput !== null) {
		const response = await chat(userInput)
		console.log(`Chat: ${response}`)
	}
	userInput = prompt('You: ')
}

// deno task ex2
