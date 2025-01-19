import { Suspense } from "react"
import { Loading } from "../components/sample/Loading"
import { SampleButton } from "../components/sample/SampleButton"
import { ServerComponent } from "../components/sample/ServerComponent"

export default function Page() {
  return (
    <div>
      <p>Sample Page</p>
      <SampleButton />
      <Suspense fallback={<Loading />}>
        <ServerComponent />
      </Suspense>
    </div>
  )
}
