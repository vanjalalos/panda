import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SignUpContent from './SignUpContent';

const SignUpMain = () => {
    return (
        <>
            <Breadcrumb title='Sign Up' subTitle='Sign Up' />
            <SignUpContent />
        </>
    );
};

export default SignUpMain;