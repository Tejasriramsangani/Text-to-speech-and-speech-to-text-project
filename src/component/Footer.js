import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
let Footer = () => {
  return (
    <>
      <div>
        <div className="a">
          <div className="App">
            <div className="Container">
              <div className="row">
                <div className="col">
                  <h3>
                    <i class="bi bi-soundwave"></i> AudibleGenius
                  </h3>
                  <p>
                    AudibleGenius a type of assistive technology that reads
                    digital text aloud. also known as speech recognition{" "}
                  </p>
                </div>
                <div className="col">
                  <h3>Company</h3>
                  <ul className="list-unstyled"></ul>
                  <li>About us</li>
                  <li>Get in touch</li>
                  <li>International School</li>
                  <li>Meet our experts</li>
                  <li>Visit our UK site</li>
                </div>
                <div className="col">
                  <h3>Customer Help</h3>
                  <ul className="list-unstyled"></ul>
                  <li>Customer Services</li>
                  <li>Privacy & Cookies</li>
                  <li>Anti-slavery Statement</li>
                  <li>Terms & Conditions</li>
                </div>

                <div className="col">
                  <h3>Done By</h3>
                  <ul className="list-unstyled"></ul>
                  <li>Anusha</li>
                  <li>Teja</li>
                  <li>jayaram</li>
                  <li>bhargavi</li>
                  <li>prathyusha</li>
                </div>

                <div className="col">
                  <h3>About Us</h3>
                  <ul className="list-unstyled"></ul>
                  <li>Contact</li>
                  <li>Singup|Log In</li>
                  <li>Text to speech</li>
                  <li>Speech to text</li>
                  <li>ourteam</li>
                </div>

                <FacebookIcon />

                <center>
                  <h2 className="row1">
                    <a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569900%7Cb%7Cfacebook%20login%20account%7C&placement=&creative=589460569900&keyword=facebook%20login%20account&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-296914611740%26loc_physical_ms%3D9062133%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw4s-kBhDqARIsAN-ipH2sNEvp6PK8ROs4MkYa54lPNYlZ_3kHlruDlp-FvD3oUAqRKaxlhjMaAnOlEALw_wcB">
                      <FacebookIcon />
                    </a>
                    <a href="https://twitter.com/i/flow/login">
                      <TwitterIcon />
                    </a>
                    <a href="https://www.instagram.com/accounts/login/">
                      <InstagramIcon />
                    </a>
                    <span>
                      <a href="https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2F%3Fsrc%3Dgo-pa%26trk%3Dsem-ga_campid.14650114788_asid.151761418307_crid.657403558721_kw.linkedin%2520login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.9062133%26mcid%3D6844056167778418689%26cid%3D%26gclid%3DCj0KCQjw4s-kBhDqARIsAN-ipH29SE-2qN1ozVABlV1OXkMr1PhNp-JOLuqPUSUSBbhq4GX9urJiq_UaAletEALw_wcB%26gclsrc%3Daw.ds">
                        <LinkedInIcon />
                      </a>
                    </span>
                  </h2>
                </center>

                <hr />
                <div className="b">
                  <p>
                    Copyright © 1998 - 2023 WebMD LLC. All rights reserved. Your
                    use of this site is governed by our Terms of Use and Privacy
                    Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};
export default Footer;
