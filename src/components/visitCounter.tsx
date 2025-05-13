import { useState, useEffect } from 'react'

const visitCounter = (): number => {
    const [visitorCount, setVisitorCount] = useState<number>(0)

    useEffect(() => {
        const hasVisitorCookie = (): boolean => {
            return document.cookie
                .split(';')
                .some((item) => item.trim().startsWith('visited='))
        }

        const setVisitorCookie = (): void => {
            const expiryDate = new Date()
            expiryDate.setDate(expiryDate.getDate() + 365)
            document.cookie = `visited=true; expires=${expiryDate.toUTCString()}; path=/`
        }

        const getStoredCount = (): number => {
            const storedCount = localStorage.getItem('visitorCount')
            return storedCount ? parseInt(storedCount, 10) : 0
        }

        const updateStoredCount = (count: number): void => {
            localStorage.setItem('visitorCount', count.toString())
            setVisitorCount(count)
        }
        if (!hasVisitorCookie()) {
            setVisitorCookie()
            const newCount = getStoredCount() + 1
            updateStoredCount(newCount)
        } else {
            const currentCount = getStoredCount()
            setVisitorCount(currentCount)
        }
    }, [])

    return visitorCount
}

export default visitCounter
