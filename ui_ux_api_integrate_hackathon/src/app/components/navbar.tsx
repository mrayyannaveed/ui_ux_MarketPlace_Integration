import Link from "next/link"

const Navbar = () => {
  return (
    <div className="md:block hidden">
      <section className='flex bg-[#E1E3E5] text-[#636270]  items-center justify-center w-full h-[124px] sm:h-[104px] md:h-[84px]'>
        <section className='w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] flex flex-col sm:flex-row gap-3 justify-between items-center'>  
          <div>
            <ul className="flex gap-5">
                <li><Link className="hover:text-[#007580]" href={"/"}>Home</Link></li>       
                <li><Link className="hover:text-[#007580]" href={"/product"}>Shop</Link></li>       
                <li><Link className="hover:text-[#007580]" href={"/product"}>Product</Link></li>          
                <li><Link className="hover:text-[#007580]" href={"/product"}>Pages</Link></li>        
                <li><Link className="hover:text-[#007580]" href={"/aboutus"}>About</Link></li>               
            </ul>
          </div>
          <div >
            <Link href={"/contactus"} className='flex gap-1'>
            <p className='text-sm font-normal '>Contact:</p>
            <p className='text-sm font-medium text-black'>(808) 555-0111</p>
            </Link>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Navbar
