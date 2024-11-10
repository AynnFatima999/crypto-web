import Link from 'next/link';

const Footer = () => {
  return (
    <section className="bg-[#00204a] w-full mx-auto border-t " id="footer">
      <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 text-white">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0 mx-auto">
          
          {/* Logo and Contact Section */}
          <div className=" text-center md:text-start ">
                          
            <div className="contact space-y-2 p-4">
              <h2 className="text-lg pb-2 font-semibold text-[#00bbf0]">Contact Us</h2>
              <p className='font-light tracking-wide'>
                <strong>Address:</strong><br /> street12 zen.co Karachi <br />
                <strong> Phone:</strong> <br /> +01 1234567890 <br />
                <strong>Email:</strong> <br /> Zen110@gmail.com
              </p>
              
            </div>
          </div> 

          {/* Quick Links */}
          <div className="quick-links mx-auto text-center md:text-start">
            <h2 className="text-lg font-semibold pt-4 text-[#00bbf0] ">Quick Links</h2>
            <ul className="mt-2 space-y-2 tracking-wider">     
             <li><Link href='/'>Home</Link></li>
             <li><Link href='#about'>About</Link></li>
             <li><Link href='#services'>Services</Link></li>
             <li><Link href='#choose'>Why us</Link></li>
             <li><Link href='#team'>Team</Link></li>
      
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>&copy; [2024] [Zen110]. All Rights Reserved.</p>

        </div>
      </div>
    </section>
  );
};

export default Footer;
