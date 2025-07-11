import { initUser } from '@/lib/queries/user'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const SignInCallback = async (props: Props) => {

    const user = await initUser()
    console.log('User from callback:', user)
    if (!user || !user?.success) redirect('/dashboard/sign-in')

    redirect('/dashboard')
}

export default SignInCallback