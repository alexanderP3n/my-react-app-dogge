import React from 'react'

export const useMutation = <T,>() => {
  const [status, setStatus] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  const mutation = React.useCallback(
    async (url: string, body?: T, config: RequestInit = {}) => {
      try {
        setIsLoading(true)

        const method = config.method || (body ? 'POST' : 'GET')
        
        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            ...config.headers
          },
          body: body ? JSON.stringify(body) : null,
          ...config
        })
        
        setStatus(response.status)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        return await response.json()
      } catch (error) {
        setError((error as Error).message)
        throw error
      } finally {
        setIsLoading(false)
      }
    }, 
    []
  )

  return { mutation, error, isLoading, status }
}