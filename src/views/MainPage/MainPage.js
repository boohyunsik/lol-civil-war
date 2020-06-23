import React from 'react'
// nodejs library that concatenates classes
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import TeamSection from './Sections/TeamSection';

const useStyles = makeStyles(styles);

export default function MainPage(props) {
    const claases = useStyles();
    const { ...rest } = props;
    return(
        <div>
            <Header
                color="transparent"
                brand="League of Legend Civil war"
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
             />
             <Parallax image={require("assets/img/bg4.jpg")}></Parallax>
             <TeamSection />
        </div>
    )
}