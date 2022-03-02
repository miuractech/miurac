import { AdminAuthHooks } from '../index'
import React, { ReactElement } from 'react'
// import { app } from '../../../config/firebase';
// interface Props {
    
// }

function Signout(
    // {}: Props
    ): ReactElement {
        const { userSignOut, loadingFlag } = AdminAuthHooks.useUserSignOut(false)
    return (
        <div
        onClick={userSignOut}
        >
            {loadingFlag?'Logging Out':'SignOut'}  
        </div>
    )
}

export default Signout
