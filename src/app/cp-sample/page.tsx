import { Suspense } from "react"
import { Loading } from "../components/sample/Loading"
import { Container } from "./_container/ContainerName/container"

export default function Page() {
  return (
    <>
      <h1>Container/Presentational Pattern Sample Page</h1>
      <Suspense fallback={<Loading />}>
        <Container />
      </Suspense>
    </>
  )
}
