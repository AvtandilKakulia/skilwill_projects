import { memo, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useDetectDevice from "../hooks/useDetectDevice";

const ToggleBox = ({ changeBg }) => {
    console.log('Toggle Re-render');
    const [isDark, toggle] = useLocalStorage('isDark', false)
    const device = useDetectDevice()

    const handleToggle = () => {
        toggle((prevState) => !prevState);
    }

    useEffect(() => {
        changeBg(isDark)
    }, [isDark])

    return (
        <div className="toggle-box">
            <h2>You are on - {device}</h2>
            <button type="button" onClick={handleToggle}>Change Theme</button>
        </div>
    )
}

export default memo(ToggleBox)