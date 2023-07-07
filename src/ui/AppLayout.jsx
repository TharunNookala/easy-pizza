import React from 'react'
import Header from './Header'
import CartOverview from '../features/cart/CartOverview'
import { Outlet, useNavigation } from 'react-router'
import Spinner from '../ui/Spinner'

const AppLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading'
    return (
        <div className='grid h-screen  grid-rows-[auto_1fr_auto]'>
            {isLoading && <Spinner />}
            <Header />
            <div className='overflow-scroll'>
                <main className='max-w-3xl mx-auto'>
                    <h1>Content</h1>
                    <Outlet />
                </main>
            </div>
            <CartOverview />
        </div>
    )
}

export default AppLayout