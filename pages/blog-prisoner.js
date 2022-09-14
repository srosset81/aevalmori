import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/app';
import { SideImage } from 'components/media';
import { LeadP, P, H } from 'components/text';
import { ArticleSection, FooterSection, TopSection } from 'components/section';
import { PageLink } from "../utils/router";

const BlogPrisonerPage = () => (
  <Layout>
    <Head>
      <title>Je me sens prisonnier ! Souvenirs de confinement - Blog d'Anna Elisa Valmori, psychologue</title>
    </Head>
    <TopSection image="prisoner-small.jpg" subTitle="Souvenirs de confinement">
      Je me sens prisonnier !
    </TopSection>
    <ArticleSection>
      <LeadP>
        Cette période exceptionnelle (au sens étymologique du terme) est un grand bouleversement pour nous tous. Pour la
        première fois en Europe, depuis les guerres mondiales, nous vivons une privation presque totale de notre liberté
        de mouvement, au nom d'une plus grande sécurité.
        <br/><strong>Que pouvons-nous apprendre pour en sortir plus conscients et plus forts ?</strong>
      </LeadP>
      <P>
        Compte tenu de la situation, il est compréhensible d'éprouver des émotions fortes et parfois contradictoires.
        Certains peuvent avoir des sensations d'étouffement, d’enfermement, de mise en cage, etc. D’autres, au
        contraire, se sentent en sécurité, protégés, rassurés. D’autres enfin se réjouissent de s'arrêter un moment et
        d'apprécier ces nouveaux rythmes… Et parfois on peut alterner entre ces différentes émotions.
      </P>
      <P>
        Le positif, c’est que nous sommes tous dans le même bateau, donc nous pouvons en profiter pour créer de
        l'empathie, des liens, du partage et de la solidarité ; créer quelque chose de nouveau, même avec ceux qui sont
        physiquement éloignés de nous.
      </P>
      <P>
        Pour ceux qui croient en l'importance de l'intelligence collective, le moment est peut-être venu de créer les
        bases d'une nouvelle société et d'un nouveau monde fondés sur des valeurs nouvelles, plus équitables et
        évolutives ?
      </P>
      <H size={2}>Que faire lorsque nous sommes « contraints » de nous arrêter ?</H>
      <P>
        Nous sommes actuellement obligés de nous arrêter physiquement, mais nous ne pouvons en revanche pas échapper à
        nous-mêmes, à nos fantômes, aux situations suspendues, à ce que nous avons mis de côté et repoussé... La situation
        de confinement chez soi et le martèlement médiatique d'un danger extérieur peuvent nous amener à
        réfléchir sur notre vie, sur son sens profond, sur nos valeurs et nos priorités.
      </P>
      <P>
        Inevitablement, nous sommes confrontés à nos peurs les plus profondes et les plus ataviques, à la peur de la
        maladie et de la mort ; l’illusion que nous pouvons tout contrôler fond aujourd'hui comme neige au soleil.
      </P>
      <H size={2}>La réalité extérieure est-elle la cause de nos émotions ?</H>
      <P>
        La réalité extérieure peut être l'étincelle qui déclenche quelque chose qui existe déjà en nous, mais elle ne
        peut pas être la cause de nos émotions.
      </P>
      <P>
        Plus précisément, l'approche constructiviste met en évidence que c'est nous, à travers toutes nos perceptions,
        qui donnons forme à la réalité extérieure. Un même événement vécu par des personnes différentes ne suscitera
        jamais la même réaction émotionnelle.
      </P>
      <P>
        Chacun d'entre nous s'est construit sur les expériences qu'il a vécues dans son enfance et son adolescence. A
        cela on peut ajouter les mémoires prénatales, familiales et généalogiques, si l’on regarde l'ensemble dans une
        perspective plus large.
      </P>
      <P>
        Nos blessures encore ouvertes et non-cicatrisées peuvent résonner dans la situation présente d'une manière
        amplifiée, pour certains d'entre nous d'une manière même assourdissante.
      </P>
      <H size={2}>
        <SideImage src="/static/images/girl-blue-dress.jpg"/>
        Traverser le changement et lâcher prise
      </H>
      <P>
        Depuis quelques années, j'entends dire, en particulier des personnes en cheminement spirituel, qu'« il n'y a
        plus le temps ». Il est urgent de travailler sur soi-même, de faire face à ses propres démons et de laisser
        tomber les vieux schémas qui nous pèsent, car les épreuves à affronter deviennent de plus en plus intenses.
      </P>
      <P>
        Le changement à traverser, lâcher prise des vieilles parties de nous-mêmes, mourir et renaître symboliquement,
        peut être effrayant, même si le pas vers l'inconnu va dans le sens d'une amélioration de notre vie.
      </P>
      <P>
        Il est important de saisir cette opportunité : écrasés par la frénésie, les distractions, les milles raccourcis
        de la société de consommation, nous perdons souvent de vue nos besoins réels et profonds, nos rêves... Nous
        reportons tout à une date ultérieure: quand nous aurons plus de temps, quand nous serons en vacances, à la
        retraite, quand nous serons économiquement à l'aise, etc.
      </P>
      <H size={2}>Nos priorités changent</H>
      <P>
        Maintenant que nous sommes au milieu du confinement, nous pouvons ressentir l'importance de cultiver des
        relations et des amitiés profondes avec lesquelles nous vibrons et résonnons en profondeur : des relations
        vraiment nourissantes.
      </P>
      <P>
        Beaucoup de choses qui apparaissaient importantes auparavant peuvent désormais sembler superficielles ou dénuées
        de sens : les « obligations » sociales, l'apparence extérieure, le besoin d'être accepté et aimé (souvent au
        prix de se renier soi-même), continuer un travail qui ne nous correspond pas, par habitude ou par peur de perdre
        notre sécurité...
      </P>
      <P>
        Il est nécessaire – aujourd'hui plus que jamais – d'avoir une vision plus large, tout en restant ancré dans le
        présent, en gardant un œil sur l'avenir, sans se projeter dans quelque chose qui n'est pas là. Evitons de
        construire un échappatoire supplémentaire à un « ici et maintenant » que nous n'aimons pas. Evitons de détourner
        notre attention des précieux enseignements que cette période peut nous donner sur nous-mêmes.
      </P>
      <H size={2}>« Je me sens prisonnier ! »</H>
      <P>
        Combien de fois nous sommes-nous sentis prisonniers dans notre vie, sans pour autant que cela soit imposé par un
        gouvernement ? Prisonniers d'une situation, d'une relation, d'un travail ?
      </P>
      <P>
        Combien de fois nous sommes-nous sentis victimes de quelque chose que nous avons subi, comme s’il n’y avait pas
        d'issue, parce que nous ne pensions pas, à ce moment-là, avoir les ressources, la force, les qualités, pour
        faire face à la situation ?
      </P>
      <P>
        Le travail de développement personnel n'est pas linéaire et peut nous faire emprunter des chemins sinueux. On
        peut parfois avoir l'impression de revenir en arrière, mais ce n’est qu’une illusion... Car chaque nouvelle
        prise de conscience nous change, même quand il s’agit d’un simple pas. Nous ne serons plus jamais comme avant...
      </P>
      <H size={2}>
        <SideImage src="/static/images/window-open.jpg" align="right" />
        Quelle direction pouvons-nous choisir ?
      </H>
      <P>
        Et si nous reconstruisions dès aujourd'hui les fondations pour nous reconnecter à notre <PageLink page="blog-inner-child">enfant intérieur</PageLink>, à
        notre vrai Soi, dans sa totalité ? Et si nous renforçions le lien avec notre Âme, qui sait ce qui est important
        et essentiel ?
      </P>
      <P>
        Dès aujourd’hui, quelle que soit notre condition extérieure, nous pouvons reprendre notre vie en main, retrouver
        notre responsabilité personnelle, notamment sur notre façon de réagir aux événements extérieurs. Nous pouvons
        choisir le filtre que que nous utilisons pour comprendre et interpréter la réalité.
      </P>
      <P>
        Il n'est jamais trop tard.
      </P>
      <H size={2}>En conclusion</H>
      <P>
        Je vous souhaite à tous et à toutes un confinement qui soit source de renouvelement, qui permette d’aller plus à
        la rencontre de votre enfant intérieur, la partie la plus vraie et la plus authentique de vous-mêmes.
      </P>
      <P>
        Cet enfant a été souvent isolé, oublié, rejeté, et l’isolement actuel résonne peut-être en lui avec encore plus
        d’acuité. Il peut avoir peur, se sentir perdu, il peut être en colère, il veut fortement être délivrée des
        blessures du passé. Il est important qu’il soit vu et reconnu. Il a besoin de votre soutien.
      </P>
      <P>
        Ayez confiance en vous et en vos ressources. Et si cette souffrance est trop grande, demandez de l'aide. Montrer
        sa fragilité est un signe de force, non de faiblesse.
      </P>
      <P>
        Mon expérience personnelle et professionnelle me montre qu'il n'est jamais trop tard pour changer, pour lâcher
        les poids qui nous empêchent d'être dans la légèreté et la joie.
      </P>
      <P>
        Il n'est jamais trop tard pour prendre par la main ce petit garçon ou cette petite fille que nous avons été. Il
        n'est jamais trop tard pour nous donner la permission d'être nous-mêmes, authentiquement, et de montrer au monde
        notre richesse et notre singularité.
      </P>
      <P>
        Parce que la liberté la plus importante est la liberté intérieure et que personne ne pourra jamais vous
        l'enlever.
      </P>
      <P>
        Je vous embrasse.
        <br/>
        Anna Elisa
      </P>
    </ArticleSection>
    <FooterSection/>
  </Layout>
);

export default BlogPrisonerPage;
