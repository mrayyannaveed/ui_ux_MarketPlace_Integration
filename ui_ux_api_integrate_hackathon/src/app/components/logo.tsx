import Image from "next/image"
const Logo = () => {
  return (
    <div>
        <section className='flex bg-[#F0F2F3] items-center justify-center w-full h-[124px] sm:h-[104px] md:h-[84px]'>
            <section className='w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] flex flex-col sm:flex-row gap-3 justify-between items-center'>
                <div className="flex flex-col sm:flex-row items-center gap-1">
                  <Image className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" src={"/logo/sofa.png"} alt="sofa" width={300} height={300}></Image>
                  <p className="text-[20px] sm:text-[24px] md:text-[26px] font-medium">Comforty</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex gap-2 items-center">
                    <Image className="h-[22px] w-[22px]" src={"/logo/Cart.png"} alt="cart" width={400} height={400}></Image>
                    <p className="text-xs font-medium">Cart</p>
                  </div>
                    <Image className="h-[22px] w-[22px]" src={"/logo/No.png"} alt="no" width={600} height={600}></Image>
                  
                </div>
            </section>
        </section>
    </div>
  )
}

export default Logo