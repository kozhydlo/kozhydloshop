import Link from 'next/link'
import { useLang } from '@/hooks/useLang'

const ContactsListItems = () => {
  const { lang, translations } = useLang()

  return (
    <>
      <li className='nav-menu__accordion__item'>
        <a
          href='tel:+380685107535'
          className='nav-menu__accordion__item__link nav-menu__accordion__item__title'
        >
          +38 (068) 510-75-35
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <a
          href='mailto:markkozhydlo@gmail.com'
          className='nav-menu__accordion__item__link'
        >
          Email
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link
          href='https://t.me/kozhydlo'
          className='nav-menu__accordion__item__link'
        >
          {translations[lang].main_menu.tg}
        </Link>
      </li>
    </>
  )
}

export default ContactsListItems
