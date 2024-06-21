import NavbarLanding from '../components/NavbarLanding';
import Privacy from '../components/Privacy';
import FooterTermPrivacyLanding from '../components/FooterTermPrivacy'

function PagePrivacyLanding() {
  return (
    <div className="container mx-auto"> 
      <NavbarLanding />
      <Privacy />
      <FooterTermPrivacyLanding />
   
    </div>
  );
}

export default PagePrivacyLanding
