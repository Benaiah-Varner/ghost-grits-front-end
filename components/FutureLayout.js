import styled from 'styled-components';
import PropTypes from 'prop-types';

const FutureLayout = styled.div`
    width: 100%;
`;


export default function Page ({children}) {
    return (
        <FutureLayout>
            {children}
        </FutureLayout>
    )
}

Page.propTypes = {
    children: PropTypes.any
}
