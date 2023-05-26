import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
// import Container from "../components/Container";

const PrivacyPolicy = () => {
    return (
        <>
            <Meta title={"Privacy Policy"} />
            <BreadCrumb title="Privacy Policy" />
            <div className="policy-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="policy">
                            <div>
                                <h1>Privacy Policy</h1>

                                <p>Effective Date: 2030/01/11</p>

                                <p>
                                    This Privacy Policy describes how
                                    CyberMarket ("we," "us," or "our") collects,
                                    uses, and discloses information that we may
                                    obtain from users of our website [Your
                                    Website URL] (the "Website"). By accessing
                                    or using the Website, you agree to the terms
                                    of this Privacy Policy.
                                </p>

                                <h2>1. Information We Collect</h2>

                                <p>
                                    1.1 Personal Information: We may collect
                                    personal information that you voluntarily
                                    provide to us, such as your name, email
                                    address, contact information, and any other
                                    information you choose to provide.
                                </p>

                                <p>
                                    1.2 Usage Data: We may collect non-personal
                                    information about your interaction with the
                                    Website, such as your IP address, browser
                                    type, operating system, referring/exit
                                    pages, and clickstream data. We may use
                                    cookies or similar technologies to collect
                                    this information.
                                </p>

                                <h2>2. Use of Information</h2>

                                <p>
                                    2.1 We may use the information we collect
                                    for various purposes, including:
                                </p>

                                <ul>
                                    <li>
                                        Providing and improving the Website's
                                        functionality and services.
                                    </li>
                                    <li>
                                        Responding to your inquiries, requests,
                                        or feedback.
                                    </li>
                                    <li>
                                        Sending you administrative and
                                        promotional communications.
                                    </li>
                                    <li>
                                        Personalizing your experience on the
                                        Website.
                                    </li>
                                    <li>
                                        Analyzing and tracking usage of the
                                        Website.
                                    </li>
                                </ul>

                                <h2>3. Disclosure of Information</h2>

                                <p>
                                    3.1 We may disclose your information to
                                    third parties in the following
                                    circumstances:
                                </p>

                                <ul>
                                    <li>
                                        With your consent or as otherwise
                                        described in this Privacy Policy.
                                    </li>
                                    <li>
                                        To our service providers who assist us
                                        in operating the Website and providing
                                        our services.
                                    </li>
                                    <li>
                                        If required by law or to comply with a
                                        legal process or government request.
                                    </li>
                                    <li>
                                        In connection with a merger,
                                        acquisition, or sale of all or a portion
                                        of our assets.
                                    </li>
                                </ul>

                                <h2>4. Data Security</h2>

                                <p>
                                    4.1 We implement reasonable security
                                    measures to protect your information from
                                    unauthorized access and disclosure. However,
                                    please understand that no data transmission
                                    over the Internet or method of electronic
                                    storage is 100% secure.
                                </p>

                                <h2>5. Third-Party Links</h2>

                                <p>
                                    5.1 The Website may contain links to
                                    third-party websites or services that are
                                    not owned or controlled by us. This Privacy
                                    Policy does not apply to those third-party
                                    websites or services. We encourage you to
                                    review the privacy policies of any
                                    third-party websites or services you visit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
