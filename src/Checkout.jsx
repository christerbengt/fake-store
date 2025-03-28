import React from "react";
import { Link } from 'react-router-dom';
import './checkout.css';
 

function Checkout(){

    return(
<div>
        <Link className="logo" to="/">
        <img src="pictures/logo.png" alt="Faux Finds logo" />
        </Link>

            <div className="container">
                <div className="header">
                    <h1 className="rubrik1">Kassa</h1>
                </div>

                <div className="rubrik">
                    <h4 className="rubrik2">1. Dina produkter</h4>
                </div>

                <div className="box">
                    <div className="box2">
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <div className="totalt">
                            <h4 className="rubrik3">Totalt belopp inkl. moms</h4>
                        </div>
                    </div>
                </div>

                <div className="rubrik">
                    <h4 className="rubrik2">2. Dina uppgifter</h4>
                </div>

                <div className="box">
                    <div className="box2">
                        <form action="index.php" method="post">
                            <div className="form">
                                <input type="email" id="email" name="email" maxLength="50" required placeholder="Email*" />

                                <div className="name-container">
                                    <input type="text" id="firstname" name="firstname" minLength="2" maxLength="50" required placeholder="First Name*" />
                                    <input type="text" id="lastname" name="lastname" minLength="2" maxLength="50" required placeholder="Last Name*" />
                                </div>

                                <input type="text" id="street_address" name="street_address" minLength="2" maxLength="50" required placeholder="Street address*" />

                                <div className="address-container">
                                    <input type="text" id="postal_code" name="postal_code" minLength="5" maxLength="5" inputMode="numeric" required placeholder="ZIP Code*" />
                                    <input type="text" id="city" name="city" minLength="2" maxLength="50" required placeholder="Town / City*" />
                                </div>

                                <input type="tel" id="phone" name="phone" maxLength="50" required placeholder="Phone*" />
                            </div>

                            <div className="buttons">
                                <button type="submit" className="submit">Betala köp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Checkout