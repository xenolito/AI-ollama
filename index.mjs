import ollama from 'ollama'

const response = await ollama.chat({
  model: 'llava',
  stream: true,
  messages: [
    {
      role: 'system',
      content: 'Always answer in spanish language, please'

    },
    {
      role: 'user',
      content: '¿Quiénes son los personajes?',
      images: ['./1200_800.jpg']
    }
  ]
})


for await (const part of response) {
  process.stdout.write(part.message.content)
}