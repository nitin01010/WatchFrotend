import React from 'react';
const Footer = () => {
    console.log('footer');
    return (
        <section>
            <footer>
                <span>
                    <ul>
                        <li><ion-icon classname='BoxIcon' name="happy-outline"></ion-icon>Follow</li>
                        <li><ion-icon classname='BoxIcon' name="man-outline"></ion-icon>About</li>
                        <li><ion-icon classname='BoxIcon' name="watch-outline"></ion-icon>Watches</li>
                        <li><ion-icon classname='BoxIcon' name="people-outline"></ion-icon>Clints</li>
                    </ul>
                </span>
                <span>
                    <ul>
                        <li><ion-icon classname='BoxIcon' name="logo-instagram"></ion-icon>Instagram</li>
                        <li><ion-icon classname='BoxIcon' name="at-outline"></ion-icon>Twitter</li>
                        <li><ion-icon classname='BoxIcon' name="logo-facebook"></ion-icon>Facebook</li>
                        <li><ion-icon classname='BoxIcon' name="logo-google-playstore"></ion-icon>Colloectins</li>
                    </ul>
                </span>
            </footer>
        </section>
    );
}

export default Footer;
