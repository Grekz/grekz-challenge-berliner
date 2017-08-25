import React, {PropTypes} from 'react'
import { Navbar, NavItem, Nav, FormGroup, FormControl, Button } from 'react-bootstrap'

const NavbarCustom = ({onBerlinClick, onWalthamClick, onSearchClick, onInputChange, onHomeClick}) => (
<Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#" onClick={onHomeClick}>Juan Mendoza Challenge</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#" onClick={onBerlinClick}>Berlin</NavItem>
        <NavItem eventKey={2} href="#" onClick={onWalthamClick}>Waltham</NavItem>
        <Navbar.Form pullLeft>
	        <FormGroup>
	          <FormControl type="text" placeholder="Search" onChange={onInputChange}/>
	        </FormGroup>
	        {' '}
	        <Button onClick={onSearchClick}>Search</Button>
	      </Navbar.Form>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
NavbarCustom.propTypes = {
	onBerlinClick: PropTypes.func,
	onWalthamClick: PropTypes.func,
	onSearchClick: PropTypes.func,
	onInputChange: PropTypes.func,
	onHomeClick: PropTypes.func,
}

export default NavbarCustom