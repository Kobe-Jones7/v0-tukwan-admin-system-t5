"use client"

import { initUser } from '@/lib/queries/user'
import { redirect } from 'next/navigation'

type Props = {}

const SignInCallback = async (props: Props) => {

    const user = await initUser()
    if (!user || !user?.success) redirect('/dashboard/sign-in')

    redirect('/dashboard')
}

export default SignInCallback