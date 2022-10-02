import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';

const Repos = () => {
    const { repos } = React.useContext(GithubContext);
    return (
        <section className='section'>
            <Wrapper className='section-center'>
                <div className='repos'>
                    {repos.map((data, index) => {
                        return (
                            <article key={index}>
                                <div>
                                    <h4>{data.full_name}</h4>
                                    <a href={data.html_url}>{data.html_url}</a>
                                </div>
                            </article>
                        );
                    })}
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
        content: ' Repos';
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
    .repos {
        overflow: scroll;
        height: 500px;
        display: grid;
        grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
        gap: 1.25rem 1rem;
        padding: 1rem 2rem;
    }
    article {
        transition: var(--transition);
        padding: 0.15rem 0.5rem;
        border-radius: var(--radius);
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        column-gap: 1rem;
        h4 {
            margin-bottom: 0;
        }
        a {
            color: var(--clr-grey-5);
        }
    }
`;

export default Repos;