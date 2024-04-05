import Image from "next/image";
import imgg from '@/public/reactnative.png'
const Blog1 = ()=>{
    return(
        <>
                              <div className="justify-center w-full sm:text-center text-left lg:p-10 max-auto">
                    <div className="justify-center w-full mx-auto">

                    <div className="flex flex-col sm:items-center items-start justify-center max-w-xl gap-3 mx-auto lg:flex-row">
                    <img
                        className='w-28 h-28 sm:w-28 sm:h-28 rounded-full'
                        src='/5.png'
                    />
                    </div>


                    <p className="mt-4 sm:px-32 sm:text-3xl text-2xl font-normal tracking-tighter">
                        @salnetx
                      </p>

                    </div>
                  </div>
            <div className="px-80">
                <h1 className="text-center text-5xl font-bold">How to use tailwind css in React native App</h1>
            </div>
            <div className="flex justify-center items-center">
    <div className="w-[1000px] mt-12 flex justify-center items-center">
        <Image 
            src={imgg}
            placeholder="blur"
            quality={30}
            className="object-center object-cover"
        />
    </div>
</div>
        <p className="px-64 text-2xl mt-8">Are you tired of writing lengthy and repetitive CSS styles for your React Native app? Say goodbye to manual styling and hello to a more efficient development process with Tailwind CSS. Tailwind CSS is a utility-first CSS framework that allows you to create custom designs by applying utility classes directly in your HTML or JSX.

In this guide, we'll show you how to integrate Tailwind CSS into your React Native app using the twrnc npm package. With twrnc, you can harness the power of Tailwind CSS and simplify your styling workflow.</p>
        </>
    )
}
export default Blog1;