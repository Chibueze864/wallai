import Image from 'next/image';
import RegisterForm from './form';
import wallet from "../../public/3d-illustration-wallet-with-coins-credit-cards(1).jpg";

const Register = () => {
  return (
    <section className="border-red-500 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
        <div className="md:w-1/2 px-5">
          <h2 className="text-2xl text-gray-800 font-bold text-[#002D74]">Register</h2>
          <RegisterForm />
        </div>
        <div className="w-1/2 md:block hidden " style={{ backgroundImage: `url(https://img.freepik.com/free-photo/3d-render-wallet-with-plastic-cards-gold-coins_107791-16642.jpg)`, backgroundSize: 'cover' }}>
          <Image src={wallet}  
            layout="responsive"
            style={{opacity:"0.001"}}
            alt="GFG logo imported from public directory" /> 
        </div>
      </div>
    </section>
  );
};

export default Register;