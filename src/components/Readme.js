// https://raw.githubusercontent.com/bahrulsubkhi/bahrulsubkhi/main/README.md
import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';

const Readme = () => {
    const { repos, readme } = React.useContext(GithubContext);
    
    return (
        <section className='section'>
            <Wrapper className='section-center'>
                <div className='readme'>
                    {readme}
                </div>
            </Wrapper>
        </section>
    )
};

const Wrapper = styled.div`
    margin-top: 2rem;
    padding-top: 2rem;
    background: var(--clr-white);
    border-top-right-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    position: relative;
    

    &::before {
        content: ' Readme';
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-100%);
        background: var(--clr-white);
        color: var(--clr-grey-5);
        border-top-right-radius: var(--radius);
        border-top-left-radius: var(--radius);
        text-transform: capitalize;
        padding: 0.5rem 1rem 0 1rem;
        letter-spacing: var(--spacing);
        font-size: 1rem;
    }
    .readme {
        overflow: scroll;
        height: 300px;
        display: grid;
        grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
        gap: 1.25rem 1rem;
        padding: 1rem 2rem;
    }
`;

export default Readme;