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
      <NavLink page="about">
        <Trans id="menu.about">Qui suis-je ?</Trans>
      </NavLink>
      <NavLink page="vision">
        <Trans id="menu.vision">Ma vision</Trans>
      </NavLink>
      <Separator m="5px 0" />
      <NavLink page="services-individuals">
        <Trans id="menu.services-individuals">Séances individuelles</Trans>
      </NavLink>
      <NavLink page="services-constellations">
        <Trans id="menu.services-constellations">Constellations d'organisations</Trans>
      </NavLink>
      <NavLink page="services-dmoka">
        <Trans id="menu.services-dmoka">D.M.O.K.A.</Trans>
      </NavLink>
      <Separator m="5px 0" />
      <NavLink page="events">
        <Trans id="menu.events">Agenda</Trans>
      </NavLink>
      <NavLink page="testimonies">
        <Trans id="menu.testimonies">Témoignages</Trans>
      </NavLink>
      <NavLink page="blog">
        <Trans id="menu.blog">Blog</Trans>
      </NavLink>
      <Separator m="5px 0" />
      <NavLink page="contact">
        <Trans id="menu.contact">Accueil</Trans>
      </NavLink>
    </Ul>
  );
}

export default NavLinks;
