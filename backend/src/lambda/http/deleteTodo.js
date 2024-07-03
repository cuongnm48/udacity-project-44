export async function handler(event) {
  console.log('Processing Delete Event ', event)
  const todoId = event.pathParameters.todoId

  return undefined
}
