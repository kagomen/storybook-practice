export async function ServerComponent() {
  console.log("hogehoge")
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return <div>データが読み込まれました</div>
}
