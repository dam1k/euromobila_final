import { createContext, useContext, useState} from "react";

export const UIContext = createContext(
     {
          showNavbar: false
     }
)

export const UIContextProvider = ({children}) => {
const [activeNavbar, setActiveNavbar] = useState(false)


return <UIContext.Provider value= {
{
     activeNavbar,
     setActiveNavbar

}
}>
{children}
</UIContext.Provider>
     
}

function useUIContext() {
     return useContext(UIContext)
}

export default useUIContext
