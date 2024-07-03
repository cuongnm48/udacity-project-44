export async function handler(event) {
  const todoId = event.pathParameters.todoId

  console.log('Processing Event ', event)

  return undefined
}
