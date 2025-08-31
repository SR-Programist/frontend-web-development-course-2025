import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectRoute( { children }) {
    const [login, setLogin] = useState(true);

   return login ? children : <Navigate to='/' /> 
}
