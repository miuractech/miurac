import React, { ReactElement } from 'react'
import { AdminAuthHooks } from "../index"
// import { app } from '../../../config/firebase';
// interface Props {
//      test:string
// }

export default function SignIn(
    // { test }: Props
    ): ReactElement {
    const { googleSignIn, loadingFlag } = AdminAuthHooks.useGoogleSignIn(false)
    return (
        <div>
            <button
            onClick={googleSignIn}
            >
                {loadingFlag?'Logging in':'SignIn'}
            </button>
        </div>
    )
}
