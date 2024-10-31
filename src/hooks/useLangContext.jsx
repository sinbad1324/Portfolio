/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react"

const LangContext = createContext({
    Lang: "EN",
    toggleLang: () => { }
})

const LangsSupport = [
    "FR",
    "EN",
    "IT",
    "AL"
]

function useLangContext() {
    return useContext(LangContext)
}

function LangContextProvider({ children }) {
    const [Lang, setLang] = useState("EN");
    const toggleLang = (newLang) => {
        setLang(newLang)
        localStorage.setItem("LocalLang", newLang)
    }

    useEffect(() => {
        const navLang = !LangsSupport.includes(navigator.language.toUpperCase()) ? "EN" : navigator.language
        const localLang = localStorage.getItem("LocalLang") != null ? localStorage.getItem("LocalLang") : navLang
        setLang(localLang)
    }, [])

    return (<LangContext.Provider value={{
        Lang,
        toggleLang
    }}>
        {children}
    </LangContext.Provider>)
}

export { LangContextProvider, useLangContext } 