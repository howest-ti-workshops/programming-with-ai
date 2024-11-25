import { apiRequest, createImageUrl } from '../lib/openAiApi.ts'
import { getBase64StringFromImage, saveImageFromUrl } from '../lib/file.ts'


// url: https://api.openai.com/v1/chat/completions
// model:  gpt-4-vision-preview
// function to send image with request: getBase64StringFromImage(path: string)
//              hint: https://platform.openai.com/docs/guides/vision/uploading-base-64-encoded-images
// image location:  images/example.jpg

interface MessageContent {
	type: string
	text?: string
	image_url?: {
		url: string // imageBase64String using getBase64StringFromImage(imagePath: string)
	}
}

async function describeImage(imagePath: string) {
	const messages: MessageContent[] = []

	// 1) add the prompt messages with type text
	// 2) add the image with type image use getBase64StringFromImage(imagePath: string)

	const request = {
		model: '<todo>',
		messages,
		max_tokens: 300,
	}

	const url = '<todo>'
	const response = await apiRequest(url, request)
	const description = '<todo>'

	return description
}

const imagePath = './images/example2.jpg'
const description = await describeImage(imagePath)

const prompt =
	`${description}  Create a drawing in black-and-white and add a boxer pup.`

const imageUrl = await createImageUrl(prompt)

// 3) save the imageUrl to "./images/image_ex04_redraw.jpg" with saveImageFromUrl

// deno task ex4
