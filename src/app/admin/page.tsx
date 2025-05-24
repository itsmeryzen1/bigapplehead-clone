import { Suspense } from 'react'
import Admin from './_components/Admin'


export default function AdminPage() {
  return (
    <Suspense fallback={<div>Loading admin...</div>}>
      <Admin />
    </Suspense>
  )
}
