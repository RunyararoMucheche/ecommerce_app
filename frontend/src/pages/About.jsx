import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-top">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
            deserunt quis illum delectus dolorum cupiditate possimus itaque
            quisquam numquam odit sed eligendi id facere. Debitis tempora odio
            blanditiis quae tempore repudiandae vero qui architecto voluptate
            iure, aspernatur mollitia minima sapiente.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            nostrum perferendis numquam quisquam maxime aperiam voluptate
            recusandae dignissimos pariatur minima iste, temporibus hic debitis
            quaerat architecto nam autem nihil harum error distinctio id placeat
            rerum? Totam deserunt blanditiis dignissimos, a illo possimus.
            Laborum, sit! Inventore, eos, quia dolor animi nam quas voluptates
            quibusdam facere corporis blanditiis quasi est, veniam quod?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            possimus quis mollitia odit ullam beatae reiciendis ducimus cumque
            vitae et? Exercitationem sapiente officia aspernatur delectus!
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            repudiandae. Accusantium, obcaecati.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            cumque expedita? Ex, modi nostrum. Laboriosam, explicabo.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            error dignissimos inventore deleniti temporibus?
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
