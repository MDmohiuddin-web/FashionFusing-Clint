import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
     <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"CONTACT"} text2={"US"}></Title>
      </div>
      <div className="my-10 flex flex-col  justify-center md:flex-row gap-10 mb-28">
        <img src={assets.about_img} className="w-full md:max-w-[450px]" alt="" />
        <div className="flex flex-col gap-5 justify-center items-start ">
          <p className="font-semibold text-xl">Our Store</p>
          <p className="text-sm text-gray-500">54709 Willms Station</p>
          <p className="text-sm text-gray-500">Suite 350, Washington, USA</p>
          <p className="text-sm text-gray-500">Tel: (415) 555-0132</p>
          <p className="text-sm text-gray-500">Email: admin@FashionFusion.com</p>
          <p className="font-semibold text-xl">Careers at Forever</p>
          <p className="text-sm text-gray-500">Learn more about our teams and job openings.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 ">Explore Jobs</button>
        </div>

      </div>


      <NewsLetterBox></NewsLetterBox>
    </div>
  );
};

export default Contact;
