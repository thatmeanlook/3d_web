import { Html } from "@react-three/drei"
import '../index.css'

const Loader = () => {
    return (
        <Html>
            <div className='flex justify-center items-center'>
                {/* <div className='w-20 h-20 border-8 border-opacity-40 border-b-blue-800 rounded-full custom-spin ' /> */}
                {/* <div className='w-20 h-20 border-8 border-opacity-40 border-blue-500 border-b-green-800 rounded-full custom-spin ' /> */}
                <div className='w-20 h-20 border-8 border-opacity-40 border-blue-500 border-t-green-800 rounded-full animate-spin' />
                {/* <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-800 rounded-full animate-spin' /> */}

            </div>
        </Html>
    )
}

export default Loader