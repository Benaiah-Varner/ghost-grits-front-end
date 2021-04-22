import styled from 'styled-components';

const StyledLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  position: fixed;
  background: #f0f0f0;
  transition: all 0.2s ease-in-out;
  transform: ${({ open }) => (open ? 'translateY(-100%)' : 'translateY(85%)')};
  height: 12%;
  .menu-link {
    cursor: pointer;
  }
  .link-coming {
    font-size: .75rem;
    color: #333;
  }
  .nav-link {
    color: #662916;
    line-height: 1.5;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }
  @media(max-width: 468px) {
    transform: ${({ open }) => (open ? 'translateY(-100%)' : 'translateY(68%)')};
    flex-direction: column;
    height: auto;
    .nav-link {
      padding: 2% 0;
    }
 }
`;

const NavLinks = ({ open }) => {
  return (
    <StyledLinks open={open}>
      <div className="nav-link">
        <a href='/menu' className='menu-link'>Menu</a>
      </div>
      <div className="nav-link">
        <a>Artisanal Store</a>
        <span className='link-coming'>(coming soon)</span>
      </div>
      <div className="nav-link">
        <a>Meal Program</a>
        <span className='link-coming'>(coming soon)</span>
      </div>
      <div className="nav-link">
        <a>About</a>
        <span className='link-coming'>(coming soon)</span>
      </div>
      <div className="nav-link">
        <a>Contact</a>
        <span className='link-coming'>(coming soon)</span>
      </div>
    </StyledLinks>
  );
};

export default NavLinks;
