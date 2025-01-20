import { Suspense } from "react"
import { Loading } from "../components/sample/Loading"
import { ContainerName } from "./_container/ContainerName"

export default function Page() {
  return (
    <>
      <h1>Container/Presentational Pattern Sample Page</h1>
      <Suspense fallback={<Loading />}>
        <ContainerName />
      </Suspense>
    </>
  )
}
