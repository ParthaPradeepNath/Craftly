import { useTRPC } from "@/trpc/client"


const Page = () => {
  const trpc = useTRPC()
  trpc.hello.queryOptions({ text: "from tRPC" })

  return (
    <div>
      <h1>Welcome to Vibe</h1>
    </div>
  )
}

export default Page