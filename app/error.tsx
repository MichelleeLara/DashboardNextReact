"use client"

import { useEffect } from "react"

export default function Error({
    error, 
    reset,
}: {
    error: Error & { digest?: string } 
    reset: () => void
}) {
    useEffect(() => {
        console.log(error);
    }, [error])

    return (
        <div className="">
            <p>Ocurrió un error {error.message}</p> {/* Corregido */}
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}
