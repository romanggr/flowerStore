import styled from 'styled-components'
import { CiFilter } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import FilterForm from './FilterForm';


const Container = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    align-items:center;
    

    @media (max-width: 768px) {
        flex-direction:row; 
        align-items:center;
        justify-content:flex-end;
  
        margin-left:2rem;
    }
       
`


const OpenBtn = styled.button`
    background-color:var(--color--pink);
    border:3px solid var(--color--pink);
    border-radius:50%;
    padding:0.8rem 0.8rem 0.5rem;
    transition:0.2s ease;
    color: var(--color--white);
    font-size:2rem;
    
    align-self:self-start;

    &:hover{
        background-color:var(--color--pink-light);
        color:var(--color--pink);   
    }
`

const Module = styled.div`
    position:absolute;
    z-index:100;
    top:5.5rem;
    left:2rem;
    width:60vw;
    height:30vw;
    border-radius:1rem;
    background-color:#F375A9;
    padding:1rem;

    @media (max-width: 768px) {
        top:1.8rem;
        left:5.6rem;
    }
`

const CloseModuleBtn = styled.button`
    padding:0.2rem 0.25rem;
    color:white;
    border:3px solid #D21C2E;
    background-color:#D21C2E;
    border-radius:50%;
    font-size: 1.5rem;
    transition:0.2s ease;
    width:2.3rem;
    height:2.3rem;
    z-index:101;
    position:absolute;
    left:-1.2rem;
    top:-0.9rem;

    &:hover{
        background-color:#ffffff;
        color:#D21C2E;

    }
`

const Filter = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Container>
            <OpenBtn onClick={() => setIsOpen(prev => !prev)}><CiFilter /></OpenBtn>
            {isOpen
                ?
                <Module>
                    <CloseModuleBtn onClick={() => setIsOpen(false)}><IoMdClose /></CloseModuleBtn>
                    <FilterForm />
                </Module>
                :
                <div></div>
            }
        </Container>
    )
}

export default Filter