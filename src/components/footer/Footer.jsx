const Footer = () => {
  return (
    <div>
      <footer className="flex  mx-auto  items-center flex-col justify-around p-10">
        <div className="text-5xl mb-10 flex flex-col gap-2 text-center">
          <h1 className="text-4xl capitalize">Gadget Heaven</h1>
          <p className="text-sm text-gray-500"> Leading the way in cutting-edge technology and innovation</p>
        </div>
        <div className="flex justify-around container mx-auto">
          <nav className=" text-center flex flex-col">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className=" text-center flex flex-col">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className=" text-center flex flex-col">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
