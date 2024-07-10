import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNav>
      <StyledList>
        <ListItem>
          <StyledLink href="/">Spotlight</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink href="/art-pieces">Pieces</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink href="/favorites">Favorites</StyledLink>
        </ListItem>
      </StyledList>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: relative;
  bottom: 0;
`;

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  padding-inline-start: 0;
  margin: 0;
  gap: 2px;
  height: 75px;
`;

const ListItem = styled.li`
  flex-basis: 33.33%;
  display: flex;
  align-items: center;
  border: 1px solid grey;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: inherit;
`;
