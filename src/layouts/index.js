import React from "react"
import g from "glamorous"
import { css } from "glamor"
import Link from "gatsby-link"
import legitLogo from "./legitLogo.png";

import { rhythm } from "../utils/typography"

import "../styles/main.sass"
import "../styles/hilit.scss"

import LegitHeader from "../components/legitHeader"
import HiOne from "../components/hiOne"
import HiTwo from "../components/hiTwo"
import HiThree from "../components/hiThree"
import LegitFooter from "../components/legitFooter"
import LegitScripts from "../components/legitScripts"

const linkStyle = css({ float: `right` })

export default ({ children, data }) =>
    <g.Div>
      <div className='headtastic'>
        <div className='portal'>
          <Link to={`/`}>
            <g.H3 marginBottom={rhythm(0)} display={`inline-block`}>
              {data.site.siteMetadata.title}
            </g.H3>
          </Link>
          <Link to={`/about/`}>
            <g.H3 marginBottom={rhythm(0)} display={`inline-block`}>
              About
            </g.H3>
          </Link>
        </div>
      </div>
      <div className='legitLogo'>
        <img src={legitLogo} height="242" alt="Legitblock" className='Thor-center' />
      </div>
      <div className='portal'>
        {children()}
      </div>
    </g.Div>

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
