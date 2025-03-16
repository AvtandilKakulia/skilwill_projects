import React from 'react'
import { languageDictionary, useLanguageContext } from '../contexts/LanguageContex'
import { Outlet } from 'react-router'

const Header = () => {
    const { lang, toggleLang } = useLanguageContext()

    return (
        <div className='languageBar'>
            <p> {languageDictionary[lang].notification}{languageDictionary[lang].lang_name}. &nbsp; 
            {languageDictionary[lang].change}  &nbsp; 
                <i className="fa-solid fa-language" onClick={toggleLang} style={{cursor:'pointer'}}></i>
            </p>
            <Outlet />
        </div>
    )
}

export default Header