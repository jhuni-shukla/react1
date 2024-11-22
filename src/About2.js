import React from 'react'

function Page(){
    const w = 500;
    return(
        <div>
            <h1 style={{ color: "red", backgroundColor: "yellow", width: `${w}px` }}>
                Static inline css color and background and dynamic styling const se above
            </h1>
            <section className='c-page'>
                <h2 style={{ color: '#fff', fontWeight: 'bold' }}>I am custom CSS, and CSS page ko access karne ke liye class dedo mujhe</h2>
                <p style={{ color: '#ddd', fontSize: '16px' }}>
                    This is the section content with a custom background and other styles applied.
                </p>
                
            </section>
        </div>
    )
}

export default Page;