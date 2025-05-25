import { UserProfile } from '@clerk/clerk-react'

const UserProfilePage = () => {
    return (
        <div style={{ display:'flex' , justifyContent:'center' , alignItems:'center' }} >
            <UserProfile />
        </div>
    )
}

export default UserProfilePage