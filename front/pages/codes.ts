export const indexVueCode = 
`const setMessage = (message: Ref<string>) => (newMessage: string) => {
  message.value = newMessage
}

export default () => {
  const message = useState('message', () => '')

  return {
    message: message,
    setMessage: setMessage(message)
  }
}`

