import React from 'react';
import { Separator, Ul } from 'components/layout';
import { useTranslate } from 'utils/i18n';
import NavLink from './NavLink';

const NavLinks = () => {
  const { t } = useTranslate();

  return (
    <Ul p={{ xs: '0px 0px 0px 20px', sm: '0px 0px 0px 30px' }}>
      <NavLink page="index">{t('menu.index', 'Accueil')}</NavLink>
      <Separator m="5px 0" />
      <NavLink page="about">{t('menu.about', 'Qui suis-je ?')}</NavLink>
      <NavLink page="vision">{t('menu.vision', 'Ma vision')}</NavLink>
      <Separator m="5px 0" />
      <NavLink page="ose-prendre-ta-place">
        {t('menu.ose-prendre-ta-place', 'Parcours "Ose prendre ta place"')}
      </NavLink>
      <Separator m="5px 0" />
      <NavLink page="services-individuals">{t('menu.services-individuals', 'Séances individuelles')}</NavLink>
      <NavLink page="services-constellations">
        {t('menu.services-constellations', "Constellations d'organisations")}
      </NavLink>
      <NavLink page="services-dmoka">{t('menu.services-dmoka', 'D.M.O.K.A.')}</NavLink>
      <Separator m="5px 0" />
      <NavLink page="events">{t('menu.events', 'Agenda')}</NavLink>
      <NavLink page="testimonies">{t('menu.testimonies', 'Témoignages')}</NavLink>
      <NavLink page="blog">{t('menu.blog', 'Blog')}</NavLink>
      <Separator m="5px 0" />
      <NavLink page="contact">{t('menu.contact', 'Contact')}</NavLink>
    </Ul>
  );
};

export default NavLinks;
