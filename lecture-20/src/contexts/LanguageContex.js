import { createContext, useContext, useMemo, useState } from "react";

export const languageDictionary = {
    Georgian: {
        lang_name: 'ქართული',
        notification: 'არჩეული ენაა ',
        change: 'დააჭირე შეცვლისთვის',
        active_tasks: 'აქტიური დავალებები',
        completed_tasks: 'დასრულებული დავალებები',
        add_new: 'დაამატე დავალება',
        no_active: 'აქტიური დავალებები არ მოიძებნა',
        ROD: 'არადგინე ან წაშალე დავალება',
        no_completed: 'დასრულებული დავალებები არ მოიძებნა',
        close: 'დახურვა',
        save: 'შენახვა',
        todo_title: 'დავალების სათაური',
        todo_body: 'დავალების შინაარსი. . .'
    },
    English: {
        lang_name: 'English',
        notification: 'Selected language is ',
        change: 'Click to change',
        active_tasks: 'Active Tasks',
        completed_tasks: 'Completed Tasks',
        add_new: 'Add New',
        no_active: 'Tasks not found.',
        ROD: 'Delete or restore tasks',
        no_completed: 'Completed tasks not found.',
        close: 'Close',
        save: 'Save',
        todo_title: 'Todo title',
        todo_body: 'Type your Todo description here. . .'
    }
}

const LanguageContext = createContext()

const LanguageContextProvider = ({ children }) => {
    const [isGeorgian, setIsGeorgian] = useState(true)

    const contextValue = useMemo(() => ({
        lang: isGeorgian ? 'Georgian' : 'English',
        toggleLang: () => setIsGeorgian((prevState) => !prevState)
    }), [isGeorgian])

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguageContext = () => {
    const contextValue = useContext(LanguageContext)
    if (!contextValue) throw new Error('You are outside of context.')

    return contextValue
}

export default LanguageContextProvider