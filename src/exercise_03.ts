import { apiRequest } from '../lib/openAiApi.ts'
import { saveImageFromUrl } from '../lib/file.ts'

const imagePrompt = prompt('Describe your image: ')
if (imagePrompt === null) {
	console.log('No prompt given. Exiting.')
	Deno.exit()
}

async function getImage(prompt: string) {
	// 1) replace <todo> with the correct model

	//      MODELS
	//      ----------------
	// gpt-3.5-turbo-1106
	// gpt-4o
	// gpt-4o-mini
	// dall-e-2
	// dall-e-3

	const request = {
		model: '<todo>',
		prompt,
		n: 2, // don't change this!!!
		size: '1024x1024', // don't change this!!!
	}

	// 2) replace <todo> with the correct url
	//      URLS
	//      ----------------
	//      https://api.openai.com/v1/chat/completions
	//      https://api.openai.com/v1/images/generations

	const response = await apiRequest('<todo>', request)

	// 3) replace <todo> with the correct image url
	const imageUrl = '<todo>'

	return imageUrl
}

const imageUrl = await getImage(imagePrompt)
await saveImageFromUrl(imageUrl, './image_ex03.jpg')

// deno task ex3
