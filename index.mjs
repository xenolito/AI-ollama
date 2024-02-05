import ollama from 'ollama'

const response = await ollama.chat({
  model: 'llava',
  stream: true,
  messages: [
    {
      role: 'system',
      content: 'Always answer in spain language, please'

    },
    {
      role: 'user',
      content: '¿Quién es la actriz, como se llama?',
      images: ['./image3.jpg']
    }
  ]
})


for await (const part of response) {
  process.stdout.write(part.message.content)
}