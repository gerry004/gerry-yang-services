import ReactLogo from "../assets/react-logo-1.png";
import Javascriptlogo from "../assets/javascript-logo.png";
import CanvaLogo from "../assets/canva-logo.png";
import WordpressLogo from "../assets/wordpress-logo-1.png";

const LOGOS = [WordpressLogo, ReactLogo, Javascriptlogo, CanvaLogo];

function PoweredBy() {
  return (
    <div className="flex flex-col justify-center items-center py-12">
      <h1 className="text-primary pt-4 pb-8 md:pb-12">Powered By</h1>
      <div className="grid grid-cols-2 gap-6 max-w-[80%] mb-8 md:flex md:flex-row md:mb-12">
        {LOGOS.map((logo) => (
          <img
            src={logo}
            alt="Powered By Logo"
            className="md:max-h-44"
          />
        ))}
      </div>
    </div>
  );
}
export default PoweredBy;
