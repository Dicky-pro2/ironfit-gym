const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 text-center">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} IronFit Gym. All rights reserved. | Follow us: @ironfitng</p>
      </div>
    </footer>
  );
};

export default Footer;