import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node"
import { Form, useLoaderData } from "@remix-run/react"
import { prisma } from "../db.server"
export async function action({
  request,
}: ActionFunctionArgs) {
  await prisma.user.create({
    data: {
      name: "vishnu",
    },
  })
  return {
    success: true,
  }
}
export async function loader({
  request,
}: LoaderFunctionArgs) {
  const data = await prisma.user.findMany()
  console.log(data);
  
  return json({
    data,
  })
}
export default function Index() {
  const { items } = useLoaderData<typeof loader>()
  return (
    <div>
      
      <Form method="POST">
        <input type="submit" value="Submit" />
      </Form>
    </div>
   )
}