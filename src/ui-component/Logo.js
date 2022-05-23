import logo from 'assets/Logo.png';
import styled from 'styled-components';
const imgStyle = styled.img`
    left: 10px;
    width: auto;
`;
const Logo = () => {
    return (
        <div>
            <img src={logo} alt="" width={75} style={{ marginLeft: '60px', position: 'absolute', marginTop: '-30px' }}></img>
        </div>
    );
};

export default Logo;
