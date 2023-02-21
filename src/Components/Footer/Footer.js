import './Footer.scss';
import CompanyLinks from './CompanyLinks';
import SocialLinks from './SocialLinks';


export default function Footer(){
    return (
        <footer className='footer'>
            <CompanyLinks />
            <SocialLinks />
        </footer>
    )
}