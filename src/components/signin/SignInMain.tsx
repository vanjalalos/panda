import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SignInContent from './SignInContent';

const SignInMain = () => {
    return (
        <>
            <Breadcrumb title='Sign In' subTitle='Sign In' />
            <SignInContent />
        </>
    );
};

export default SignInMain;