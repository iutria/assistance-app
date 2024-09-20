import { CircularProgress, Input } from "@nextui-org/react"

export const App = () => {
  return (
    <>
      <Input
        type="email"
        label="Email"
        defaultValue="junior@nextui.org"
        className="max-w-xs"
      />
      <CircularProgress aria-label="Loading..." />
    </>
  )
}
