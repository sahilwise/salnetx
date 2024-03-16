import Image from "next/image";
import Link from "next/link";


const ProductCard = ({name, route, image, earning, des, color})=>{
    return(
      <div>

        <section onClick={()=>{location.assign(route)}} class={`backdrop-blur-3xl border border-dashed hover:border-dotted border-neutral-500 rounded-3xl bg-[${color}]`}>
              
                 
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