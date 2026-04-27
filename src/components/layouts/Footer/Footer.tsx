import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import EyeBrowSection from "@/shared/EyeBrowSection";
import Container from "@/components/layouts/Container";
import Logo from "@/Logo/Logo";
import Button from "@/shared/Button";

const Footer = () => {
  return (
    <footer className="bg-[#020817] text-white pt-16 pb-8 px-4 md:px-10 lg:px-16">
      <Container>
        {/* Top CTA */}
        <div className="flex flex-col text-center gap-2 mb-10">
        <EyeBrowSection
          eyebrowTitle="Start a conversation"
          className="before:-translate-x-1/2 before:left-1/2"
        />
        <h3 className="text-4xl small-caps">We’d Love to Hear from You</h3>
        <Button
            buttonText="Contact Us"
            className="max-w-[140px] mx-auto h-[42px] px-[20px] py-[12px] mt-[34px]"
            variant="white"
          />
      </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 py-12">
          {/* Brand */}
          <div>
             <Link className="w-[155px] mb-[30px] flex" href="/">
            <Logo logoSize={155} />
          </Link>

            <p className="text-sm text-white/60 leading-7 max-w-[320px] mb-6">
              Towards the end of the 19th century, with the advent of the
              Neoliberalism and the innovative.
            </p>

            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="hover:text-primary-color transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-primary-color transition">
                <FaXTwitter />
              </a>
              <a href="#" className="hover:text-primary-color transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-primary-color transition">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-5 font-semibold">
              Contact Info
            </h4>

            <ul className="space-y-3 text-sm text-white/60">
              <li>+1 (213) 555-0184</li>
              <li>hello@fauconus.org</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-5 font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-primary-color">Home</a></li>
              <li><a href="#" className="hover:text-primary-color">About Us</a></li>
              <li><a href="#" className="hover:text-primary-color">Shop</a></li>
              <li><a href="#" className="hover:text-primary-color">Blog</a></li>
              <li><a href="#" className="hover:text-primary-color">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-5 font-semibold">
              Legal
            </h4>

            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-[#ff4d30]">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-[#ff4d30]">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#ff4d30]">Refund Policy</a></li>
              <li><a href="#" className="hover:text-[#ff4d30]">FAQ</a></li>
              <li><a href="#" className="hover:text-[#ff4d30]">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-4 border-t border-white/10 text-sm text-white/50">
          Copyright 2025 Gochali Theme. All Right Reserved
        </div>
      </Container>
    </footer>
  );
};

export default Footer;