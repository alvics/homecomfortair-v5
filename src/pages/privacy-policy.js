import React from 'react'
import StaticImage from "../components/StaticQueryImages"

export default function privacyPolicy() {


  // Create a new Date object representing the current date and time
  const currentDate = new Date();

  // Get the individual components of the date
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Note: Months are zero-indexed, so we add 1 to get the correct month
  const day = currentDate.getDate();

  // Create a string representation of the current date
  const formattedDate = `${day}/${month}/${year}`;

  return (  
    <div>
       <div className="container  body-wrapper px-3">
        <div className="contact pt-2" style={{ textAlign: "center" }}>
          <StaticImage
            filename="Home-Comfort-Air-COL-03-650.png"
            alt="home comfort air image"
          />
          <h1 className="p-3 text-dark cap fw-600 h4">Privacy Policy</h1>

          <p className="font-italic">
            
          </p>
        </div>
        <div className="row about-us">
          <div className="col-lg-8 pt-3">
            
            <div className="mt-3">
              <h2 className="h5 cap fw-600">Our Policy</h2>
            </div>

           
             </div>
            </div> 
          

    <p>Effective Date: {formattedDate}</p>

    <p className="lead-20 mt-3">Welcome to Home Comfort Air (the "Company," "we," "our," or "us"). This Privacy Policy outlines the information we
        collect, how we use and protect your personal data when you visit our website <a
            href="https://www.homecomfortair.net.au">www.homecomfortair.net.au</a> (the "Website"). By accessing or using our
        Website, you agree to the practices described in this Privacy Policy.</p>

    <h2 className="h5 cap fw-600">1. Information We Collect:</h2>

    <p className="lead-20 mt-3">(a) Personal Information: We may collect personally identifiable information such as your name, email address,
        phone number, postal address, and other contact details when you voluntarily provide it to us through our contact
        forms or other communication channels.</p>

    <p className="lead-20 mt-3">(b) Non-Personal Information: We may collect non-personal information, including but not limited to your IP address,
        browser type, device information, and website usage data, to enhance our services and improve your experience on
        the Website.</p>

    <h2 className="h5 cap fw-600">2. How We Use Your Information:</h2>

    <p className="lead-20 mt-3">(a) To Provide Services: We use your personal information to respond to your inquiries, provide information about
        our services, and complete transactions requested by you.</p>

    <p className="lead-20 mt-3">(b) Marketing Communications: With your consent, we may send you promotional materials and updates about our
        services or special offers via email or other communication channels. You can opt-out of receiving these
        communications at any time.</p>

    <p className="lead-20 mt-3">(c) Website Improvement: Non-personal information is used to analyze website traffic, monitor trends, and enhance
        our Website's functionality and user experience.</p>

    <h2 className="h5 cap fw-600">3. How We Protect Your Information:</h2>

    <p className="lead-20 mt-3">We implement reasonable security measures to protect your personal information from unauthorized access, disclosure,
        alteration, or destruction. However, no data transmission over the internet or electronic storage is entirely
        secure. Therefore, we cannot guarantee absolute security.</p>

    <h2 className="h5 cap fw-600">4. Cookies and Tracking Technologies:</h2>

    <p className="lead-20 mt-3">We use cookies and similar tracking technologies to enhance your browsing experience and gather non-personal
        information about your interactions with our Website. You can modify your browser settings to manage cookies
        preferences.</p>

    <h2 className="h5 cap fw-600">5. Third-Party Links:</h2>

    <p className="lead-20 mt-3">Our Website may contain links to third-party websites. We are not responsible for the content or privacy practices of
        these external sites. We recommend reviewing their respective privacy policies.</p>

    <h2 className="h5 cap fw-600">6. Children's Privacy:</h2>

    <p className="lead-20 mt-3">Our services are not directed to children under the age of 13. We do not knowingly collect personal information from
        children. If you believe we have inadvertently collected information from a child, please contact us to delete
        it.</p>

    <h2 className="h5 cap fw-600">7. Changes to the Privacy Policy:</h2>

    <p className="lead-20 mt-3">We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of
        any material changes via email or prominent notices on the Website.</p>

    <h2 className="h5 cap fw-600">8. Contact Us:</h2>

    <p className="lead-20 mt-3">If you have any questions or concerns about this Privacy Policy or wish to exercise your data rights, please contact
        us at:</p>

    <blockquote className="lead-20 mt-3">Home Comfort Air<br />
        Address: 22 Beitz Ave, Labrador 4215 QLD<br />
        Email: homecomfortair.gc@gmail.com<br />
        Phone: 0404 602 657</blockquote>

    <p className="lead-20 mt-3">By using our Website, you consent to the terms of this Privacy Policy. Please read this Policy carefully, and if you
        do not agree with our practices, please refrain from using our Website.</p>



Kind regards <br />
Allen Pavic





	


            </div>
            </div>

  )
}
