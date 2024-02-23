import { useState } from 'react';
import styled from 'styled-components';
import Spinner from '../ui/Spinner';

const StyledContainer = styled.div`
    margin: 2rem auto;   
    width: 80vw;
    height: 75vh;

    & > * {
        width: 100%;
        height: 100%;
    }
`;

const Locations = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleMapLoad = () => {
        setIsLoading(false);
    };

    return (
        <StyledContainer>
            {isLoading && <Spinner />}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5009.463370426709!2d17.01909880807417!3d51.113410472234435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9455ba3cb8f%3A0x15316824e3726d62!2sBe%20my%20flower.%20Flower%20shop%20%2F%20Kwiaciarnia!5e0!3m2!1suk!2spl!4v1708421214156!5m2!1suk!2spl"
                style={{ border: 0 }}
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
                loading="lazy"
                onLoad={handleMapLoad}
            />
        </StyledContainer>
    );
};

export default Locations;