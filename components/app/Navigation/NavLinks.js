import React from 'react';
import { Separator, Ul } from 'components/layout';
import { Trans } from "@lingui/macro";
import NavLink from "./NavLink";

const NavLinks = () => {
  return (
    <Ul>
      <NavLink page="index">
        <Trans id="menu.index">Accueil</Trans>
      </NavLink>
      <Separator m="5px 0" />
      <NavLink page="about-us">
        <Trans id="menu.about-us">Qui sommes-nous ?</Trans>
      </NavLink>
      <Separator m="5px 0" />
      <NavLink page="organizational-constellations">
        <Trans id="menu.organizational-constellations">Constellations d'organisations</Trans>
      </NavLink>
      <NavLink page="shared-governance">
        <Trans id="menu.shared-governance">Gouvernance partagée</Trans>
      </NavLink>
      <NavLink page="information-liberation">
        <Trans id="menu.information-liberation">Libération de l'information</Trans>
      </NavLink>
      <Separator m="5px 0" />
      <NavLink page="events">
        <Trans id="menu.events">Agenda</Trans>
      </NavLink>
      <NavLink page="testimonies">
        <Trans id="menu.testimonies">Témoignages</Trans>
      </NavLink>
      <Separator m="5px 0" />
      <NavLink page="contact-us">
        <Trans id="menu.contact-us">Contactez-nous</Trans>
      </NavLink>
    </Ul>
  );
}

export default NavLinks;
