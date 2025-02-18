"use client"

// import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

export default function UpdateProfileInformationForm ({ className = '' }) {
    const { user } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)


    const submit = (e) => {
        e.preventDefault()

        // patch(route('profile.update'));
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    {/*<InputError className="mt-2" message={errors.name} />*/}
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="username"
                    />

                    {/*<InputError className="mt-2" message={errors.email} />*/}
                </div>

                {/*{mustVerifyEmail && user.email_verified_at === null && (*/}
                {/*    <div>*/}
                {/*        <p className="text-sm mt-2 text-gray-800">*/}
                {/*            Your email address is unverified.*/}
                {/*            <Link*/}
                {/*                href={route('verification.send')}*/}
                {/*                method="post"*/}
                {/*                as="button"*/}
                {/*                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"*/}
                {/*            >*/}
                {/*                Click here to re-send the verification email.*/}
                {/*            </Link>*/}
                {/*        </p>*/}

                {/*        {status === 'verification-link-sent' && (*/}
                {/*            <div className="mt-2 font-medium text-sm text-green-600">*/}
                {/*                A new verification link has been sent to your email address.*/}
                {/*            </div>*/}
                {/*        )}*/}
                {/*    </div>*/}
                {/*)}*/}

                {/*<div className="flex items-center gap-4">*/}
                {/*    <PrimaryButton disabled={processing}>Save</PrimaryButton>*/}

                {/*    <Transition*/}
                {/*        show={recentlySuccessful}*/}
                {/*        enter="transition ease-in-out"*/}
                {/*        enterFrom="opacity-0"*/}
                {/*        leave="transition ease-in-out"*/}
                {/*        leaveTo="opacity-0"*/}
                {/*    >*/}
                {/*        <p className="text-sm text-gray-600">Saved.</p>*/}
                {/*    </Transition>*/}
                {/*</div>*/}
            </form>
        </section>
    )
}
