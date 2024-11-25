import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const List = styled.div`
  display: flex;
  justify-content: right; 
  margin: 2rem 0;
  align-items: center;
`;

export const SLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  text-decoration: none;
  cursor: pointer;
  font-family: "Abhaya Libre", serif;
  font-weight: 700;
  font-size: medium;
  font-style: normal;
  color: #3f4e34;
`;

export const StyledLogoNavLink = styled(NavLink)`
  margin: 10px; 
  text-decoration: none; 
`;

export const StyledImage = styled.img`
  width: 80px; 
  height: auto; 
  margin: 15px; 
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between; 
`;

export const BookButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  margin-right: 2rem;
  text-decoration: none;
  cursor: pointer;
  font-family: "Abhaya Libre", serif;
  font-weight: 700;
  font-style: normal;
  color: #3f4e34;
  background-color: transparent;
  padding: 10px 20px 10px 20px; 
  border: 1px solid #3f4e34;
  border-radius: 50px; 
  transition: all 0.3s ease;
  font-size: medium;
`;