export default () => {
  const message = ref('')
  
  const setMessage = (newMessage: string) => {
    message.value = newMessage
  }
  return {
    message: readonly(message),
    setMessage
  }
}