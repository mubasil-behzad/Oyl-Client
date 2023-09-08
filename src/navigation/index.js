import React from 'react'
import Routes from './Routes'
import { AuthProvider } from './AuthProvider'

const Navigation = () => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}

export default Navigation