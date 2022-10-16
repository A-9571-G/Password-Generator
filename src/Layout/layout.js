import React from'react';
import Head from 'next/head';

export const Layout = ( { children } )=>{
    return(
        <>
            <Head>
                <title>Password Generator</title>
            </Head>
            <div>
                {children}
            </div>
        </>
    )
}
