import { initUser } from '@/lib/queries/user'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const SignInCallback = async (props: Props) => {

    const user = await initUser()
    if (!user) redirect('/dashboard/sign-in')

    redirect('/dashboard')
}

export default SignInCallback