import { headerLogo } from "../assets/images"
import { navLinks } from "../constant"
import { hamburger } from "../assets/icons"

const NavBar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href='/'>
        <img
        src={headerLogo}
        alt='logo'
        height={29}
        width={130} />
        </a>
        <ul className="grid grid-cols-4  gap-16 max-lg:hidden">
          {navLinks.map((items)=>(
            <li key={items.label}>
              <a href={items.href} className="font-montserrat leading-normal text-lg text-red-600"/>
              {items.label}
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          
          <img 
          src={hamburger}
          alt='hamburger'
          height={25}
          width={25} />
        </div>
      </nav>
    </header>
  )
}

export default NavBar