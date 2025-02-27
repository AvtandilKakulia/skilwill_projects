import { useEffect, useRef, useState } from "react"

const devices = {
    mobile: 600,
    laptop: 980,
    desktop: 1280
}

const findDevice = () => {
    const windowWidth = window.innerWidth

    switch (true) {
        case windowWidth < devices.mobile:
            return <i className="fa-solid fa-mobile-screen-button"></i>
        case windowWidth < devices.laptop:
            return <i className="fa-solid fa-laptop"></i>
        case windowWidth < devices.desktop:
            return <i className="fa-solid fa-desktop"></i>
        default:
            return <i className="fa-solid fa-display"></i>
    }
}

const useDetectDevice = () => {
    const [device, setDevice] = useState(() => findDevice())
    const prevDeviceRef = useRef(device.props.className)

    useEffect(() => {
        const handleResize = () => {
            let newDevice = findDevice().props.className
            // console.log('old -' + prevDeviceRef.current);
            // console.log('new -' + newDevice);

            if (prevDeviceRef.current !== newDevice) {
                prevDeviceRef.current = newDevice
                setDevice(findDevice())
            }

        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return device
}

export default useDetectDevice