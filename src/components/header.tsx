/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"

import { Link } from 'gatsby'
import Logo from '../../assets/logo-black.svg'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

export const Header = () =>
  <div sx={{
    position: 'fixed',
    width: '100%',
    variant: 'styles.header',
  }}>
    <header
      sx={{
      display: 'flex',
      alignItems: 'center',
      mx: ['1em', '2em', '8em', '5em', '14em']
    }}>
    <Link
      to="/"
      sx={{
        variant: 'styles.navlink', p: 0,
      }}>
      <div sx={{ position: 'relative' }}>
        <Logo sx={{ position: 'absolute', top: -10, minWidth:80 }}/>
      </div>
    </Link>
    <div sx={{ mx: 'auto' }} />
    <AnchorLink
      to="/#features"
      sx={{
        variant: 'styles.navlink',
      }}>
      Features
    </AnchorLink>
    <AnchorLink
      to="/#about"
      sx={{
        variant: 'styles.navlink',
      }}>
      About
    </AnchorLink>
    <Link
      to="https://blog.rizome.io"
      sx={{
        variant: 'styles.navlink',
      }}>
      Blog
    </Link>
    <AnchorLink
      to="/#contact"
      sx={{
        variant: 'styles.navlink',
      }}>
      Contacts
    </AnchorLink>
  </header>
</div>
