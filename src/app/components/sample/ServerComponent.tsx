export async function ServerComponent() {
  // console.log("hoge")
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const data = await res.json()
  return <div>{data.title}</div>
}
