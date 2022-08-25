import React from 'react';
import { Separator, Ul } from 'components/layout';
import { Trans } from "@lingui/macro";
import NavLink from "./NavLink";
import navigation from 'utils/router/navigation.json';

const NavLinks = ({ page, indent, children }) => {
  return (
    <Ul>
      {navigation.map((section, i) => {
        return(
          <>
            {i > 0 && <Separator m="5px 0" />}
            {Object.entries(section).map(([routeKey, text]) => (
              <NavLink page={routeKey}>
                <Trans id={`menu.${routeKey}`}>{text}</Trans>
              </NavLink>
            ))}
          </>
        )
      })}
    </Ul>
  );
}

export default NavLinks;
