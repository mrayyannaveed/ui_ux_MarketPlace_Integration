import Image from "next/image"
import Link from "next/link"
const Header = () => {
  return (
    <div>
        <header className='bg-[#272343]  flex  items-center justify-center w-full h-[100px] sm:h-[80px] md:h-[50px] text-[#FFFFFF]'>
            <section className="w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="flex items-center gap-3">
                    <Image className="w-4 h-4" src={"/header/check.png"} alt="check" width={300} height={300}></Image>        
                    <p className='text-[13px]'>Free shipping on all orders over $50</p>
                </div>
                <div className="flex  gap-4 sm:gap-5 items-center">
                    <select name="lang" id="lang" className="cursor-pointer bg-transparent">
                        <option value="lang" className="bg-black">Eng</option>
                        <option value="lang" className="bg-black">Urdu</option>
                    </select>
                    <Link href={"/FAQ"} className="cursor-pointer">Faq</Link>
                    <Link href={"/aboutus"} className="flex items-center gap-2">
                        <Image className="w-4 h-4" src={"/header/alertcircle.svg"} alt="needHelp" width={50} height={50}></Image>    
                        Need Help    
                    </Link>
                </div>
            </section>
        </header>
    </div>
  )
}

export default Header