import { Html } from "@react-three/drei"
import '../index.css'

const Loader = () => {
    return (
        <Html>
            <div className='flex justify-center items-center'>
                <div className='w-20 h-20 border-8 border-opacity-40 border-blue-500 border-t-green-800 rounded-full animate-spin' />
            </div>
        </Html>
    )
}

export default Loader