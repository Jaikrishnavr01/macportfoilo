
import { navIcons, navLinks } from '#constants'
import useWindowStore from '#store/window'
import dayjs from 'dayjs'
import React from 'react'

const Navbar = () => {

    const { openWindow } = useWindowStore();
  return (
    <nav>
        <div>
            <img src="/images/logo.svg" className='w-' alt="Logo" />
            <p className='font-bold'>Jaikrishna's portfoilo</p>

            <ul>
                {navLinks.map(({ id, name, type}) => (
                    <li key={id} onClick={() => openWindow(type)}>
                      <p>
                        {name}                   
                      </p>
                       </li>
                ))}
            </ul>
        </div>

        <div>
            <ul>
                {navIcons.map(({ id , img}) => (
                    <li key={id} >
                        <img src={img} className='icon-hover' alt={`Icon ${id}`} />
                    </li>
                ))}
            </ul>

            <time>
                {dayjs().format('ddd MMM D h:mm A')}
            </time>
        </div>
    </nav>
  )
}

export default Navbar