import { Loader } from 'lucide-react'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-center font-semibold mb-4">Where on earth are you going?</p>
        <Loader className='size-20 animate-spin'/>
    </div>
  )
}

