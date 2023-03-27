import { useCallback, useState } from 'react'

const useGeneratePassword = (length) => {
    const [password, setPassword] = useState('')

    const generatePassword = useCallback(() => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|èé"à-'
        let generatedPassword = ''

        for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * characters.length)
            generatedPassword += characters[index]
        }

        setPassword(generatedPassword)
    }, [length])

    return { password, generatePassword }
}

export default generatePassword