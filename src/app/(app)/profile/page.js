import Header from '@/app/(app)/Header'
import UpdateProfileInformationForm from '@/app/(app)/profile/UpdateProfileInformationForm'

export default function Profile ({ children }) {
    return (
        <>
            <Header title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            // mustVerifyEmail={mustVerifyEmail}
                            // status={status}
                            className="max-w-xl"
                        />
                    </div>
                    {children}

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        {/*<UpdatePasswordForm className="max-w-xl" />*/}
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        {/*<DeleteUserForm className="max-w-xl" />*/}
                    </div>
                </div>
            </div>
        </>
    )
}
