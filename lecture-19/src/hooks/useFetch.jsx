import { useEffect, useState } from 'react'

const useFetch = ({ url, method }) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()

        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url, {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
                    },
                    signal: abortController.signal
                })

                if (!response.ok) throw new Error('Fetchong Error!')
                const result = await response.json()
                setData(result)
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error.message)
                }
            } finally {
                setLoading(false)
            }
        }

        fetchData()

        return () => {
            abortController.abort()
        }
    }, [url, method])

    return { loading, data, error }
}

export default useFetch