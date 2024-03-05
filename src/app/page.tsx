"use client";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <div className="main-container w-[100%] flex flex-row justify-center space-x-12 mt-12">
        <section className="introduction my-14">
          <span className="font-quicksand body-large font-extralight text-white">
            {" "}
            Hello,{" "}
          </span>
          <div>
            <span className="font-quicksand font-regular body-Xlarge text-accent1">
              {" "}
              I am{" "}
            </span>
            <span className="font-quicksand font-regular body-XXlarge text-accent1">
              {" "}
              Aditya Ahuja,{" "}
            </span>
          </div>
          <div className="mt-8">
            <span className="font-quicksand font-extralight body-big text-white">
              {" "}
              a Computer Science & Applied Mathematics Undergraduate <br /> at{" "}
              <span className="font-quicksand font-bold body-link ">
                <a href="https://iiitd.ac.in">
                  Indraprastha Institute of Information Technology, Delhi.
                </a>
              </span>
              <br />
              <br />
              Welcome to my personal website 👋 <br />
              Have a look around and feel free to reach out! <br />{" "}
            </span>
          </div>
        </section>
        <section className="image-container">
          {" "}
          <Image
            src="/home_image.png"
            width={600}
            height={600}
            alt="Picture of the author"
            priority
          />
        </section>
      </div>
    </Wrapper>
  );
}
