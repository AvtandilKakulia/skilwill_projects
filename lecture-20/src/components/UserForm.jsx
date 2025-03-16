import { languageDictionary, useLanguageContext } from "../contexts/LanguageContex"

const UserForm = ({ onSubmit, navigate, inputRef, textareaRef }) => {
  const { lang } = useLanguageContext()

  return (
    (
      <div className="add-todo" >
        <div className="new-todo">
          <i className="fa-solid fa-xmark" title={`${languageDictionary[lang].close}`} onClick={() => navigate('/')}></i>
          <i className="fa-regular fa-circle-check" title={`${languageDictionary[lang].save}`} onClick={onSubmit}></i>
          <input type="text" autoComplete="off" placeholder={`${languageDictionary[lang].todo_title}`} id="todo-title" ref={inputRef} />
          <textarea name="" id="todo-description" placeholder={`${languageDictionary[lang].todo_body}`}
            ref={textareaRef}></textarea>
        </div>
      </div>
    )
  )
}

export default UserForm