import { useEffect, useMemo, useState } from "react"

const useRequest = ({ url, method }) => {
    const [loading, setLoading] = useState(false)
    const [, setError] = useState(null)

    const abortController = useMemo(() => new AbortController(), [])

    const sendRequest = async (body) => {

        setLoading(true)
        setError(null)

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
                },
                body: !!body && method !== 'GET' ? JSON.stringify(body) : undefined,
                signal: abortController.signal
            })

            if (!response.ok) throw new Error('Fetchong Error!')
            const data = await response.json()

            return data

        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Request aborted');
                console.log(error);
            } else {
                setError(error.message)
            }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        return () => abortController.abort()
    }, [abortController])

    return { loading, sendRequest }
}

export default useRequest