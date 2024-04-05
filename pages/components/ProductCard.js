import Image from "next/image";
import Link from "next/link";


const ProductCard = ({name, route, image, earning, des, color})=>{
    return(
      <div className="rounded-3xl">
        
        <section onClick={()=>{location.assign(route)}} class={`hover:-skew-x-2 hover:skew-y-2 transition-transform duration-500 backdrop-blur-3xl border border-2 border-neutral-600 rounded-3xl bg-[${color}]`}>
              
                 
                    <div class="lg:order-first">
                      <div class="flex flex-col">
                        <div class="p-8 py-12 rounded-3xl">
                          <div class="flex justify-between">
                            <div class="flex items-center gap-3">
                            {image && (
                              <Image
                                  src={image}
                                  width={40}
                                  height={40}
                                  alt="Image"
                                  className="rounded-xl"
                              />
                            )}
                              <p class="font-semibold text-2xl">
                                {name}
                              </p>
                            </div>
                            <p>
                              <span class="text-sm font-medium">
                            {earning}</span>
                            </p>
                          </div>
                          <p class="text-sm text-left pt-6 font-medium">{des}
                          </p>
                          <div class="flex">
                            <a class="items-center justify-between inline-flex w-full font-medium py-2.5 text-center duration-200 rounded-xl h-14 focus:outline-none focus-visible:outline-black text-base" href="#">
                              Checkout ➤
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
              </section>
      </div>
    )
}
export default ProductCard;