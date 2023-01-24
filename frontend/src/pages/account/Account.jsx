import React from 'react'
import AccountUser from '../../components/accuser/AccountUser';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './account.css';

const Account = () => {
    return (
        <div className="wrapper">
            {/* Header Start */}
            <header className='header-container'>
                <Header />
            </header>
            {/* Header End */}

            {/* Main Start */}
            <main className='main-container'>
                <AccountUser />
            </main>
            {/* Main End */}

            {/* Footer Start */}
            <footer className='footer-container'>
                <Footer />
            </footer>
            {/* Footer End */}

        </div>
    )
}

export default Account