import React from "react";
import { Box, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box>
      <Box
        minH="200px"
        border="1px solid transparent"
        id="story"
        className="relative o-nav-pull"
        block-name="story"
      >
        <img
          className="o-cover mb-48 rounded-md object-cover"
          src="https://nexo.io/media/pages/about-us/539f82a140-1631610879/nexo-about.jpg"
          alt=""
        />
        <Box className="o-container relative my-32 sm:my-128 sm:px-96 text-center">
          <Text className="text-32 md:text-46 lg:text-58 leading-115 font-serif font-bold text-indigo-500">
            Disrupting the financial system, <br class="o-br desktop" /> one bit
            at a time
          </Text>
        </Box>
      </Box>
      <section class="o-container mt-32 mb-80 sm:mt-80 sm:mb-160">
        <div class="o-row items-start justify-center">
          <div class="o-col s-text2 md:w-1/2 m-clip mb-24 md:m-0 text-22 md:text-28 lg:text-36 leading-150 text-gray-800">
            <p>
              Wavi is the future of cryptocurrency lending and aims to bring
              professional financial services to the world of digital assets.
            </p>
          </div>
          <div class="o-col s-text2 md:w-1/2 m-clip text-20 leading-150 text-gray-500">
            <p>
              Wavi leverages the team's years of FinTech experience and the
              power of blockchain technology to empower millions of people to
              leverage the value of their cryptocurrencies and build a stable
              financial foundation.
            </p>
            <p>
              Wavi currently manages assets for 15k+ customers across 200
              countries.
            </p>{" "}
          </div>
        </div>
      </section>
      <section
        id="stats"
        class="o-container my-96 md:my-160"
        block-name="legacy-stats"
      >
        <div class="o-row justify-between lg:flex-no-wrap -mb-40">
          <div class="o-col w-1/2 sm:w-1/3 lg:w-auto mb-40">
            <div class="text-36 md:text-46 leading-115 font-serif font-bold text-indigo-500">
              15K+
            </div>
            <div class="text-14 md:text-18 leading-115 md:leading-135 font-medium text-gray-600">
              Wavi users
              <br />
              worldwide{" "}
            </div>
          </div>
          <div class="o-col w-1/2 sm:w-1/3 lg:w-auto mb-40">
            <div class="text-36 md:text-46 leading-115 font-serif font-bold text-indigo-500">
              40+
            </div>
            <div class="text-14 md:text-18 leading-115 md:leading-135 font-medium text-gray-600">
              Fiat currencies
              <br />
              available{" "}
            </div>
          </div>
          <div class="o-col w-1/2 sm:w-1/3 lg:w-auto mb-40">
            <div class="text-36 md:text-46 leading-115 font-serif font-bold text-indigo-500">
              200+
            </div>
            <div class="text-14 md:text-18 leading-115 md:leading-135 font-medium text-gray-600">
              Available in 200+
              <br />
              countries
            </div>
          </div>
          <div class="o-col w-1/2 sm:w-1/3 lg:w-auto mb-40">
            <div class="text-36 md:text-46 leading-115 font-serif font-bold text-indigo-500">
              200K+{" "}
            </div>
            <div class="text-14 md:text-18 leading-115 md:leading-135 font-medium text-gray-600">
              Social media
              <br />
              community{" "}
            </div>
          </div>
        </div>
      </section>
      <section class="o-container my-160" block-name="box-items">
        <header class="s-lg-br mb-80 text-center">
          <h2 class="mb-16 text-28 md:text-42 leading-115 font-medium text-gray-800">
            Mission, Vision & Values{" "}
          </h2>
          <h3 class="text-20 md:text-24 leading-135 text-gray-500">
            A service made with our clients in mind{" "}
          </h3>
        </header>
        <div class="o-row -mb-48 md:m-0">
          <div class="o-col flex flex-col w-full md:w-1/3 mb-48 md:-my-16">
            <div class="hidden flex-grow md:flex items-start w-1/2 my-16 rounded-sm  text-64 text-blue-500">
              <i class="o-icon o-icon--duotone">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M37.4085 6.55694L36.75 7.21544L37.0841 10.9115L37.0746 10.9211L40.8324 11.2829L41.4806 10.6404C41.8915 11.1772 42.2783 11.7336 42.6392 12.3078L42.2403 12.7032C41.8183 13.1215 41.2321 13.3305 40.6407 13.2736L37.8265 13.0026L36.644 14.1942C35.8232 13.1373 34.8728 12.1862 33.8167 11.3645L35.0084 10.1637L34.7581 7.39539C34.7047 6.80459 34.9163 6.22058 35.3358 5.80112L35.7437 5.39324C36.3171 5.75591 36.8726 6.14435 37.4085 6.55694ZM33.9402 4.36838L33.9216 4.38701C33.0827 5.22592 32.6594 6.39395 32.7662 7.57553L32.9326 9.41619L32.1353 10.2196C29.7516 8.80939 26.9703 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40C32.8366 40 40 32.8366 40 24C40 21.0359 39.194 18.26 37.7891 15.8796L38.5783 15.0843L40.449 15.2645C41.6319 15.3783 42.8042 14.9604 43.6482 14.1238L43.6587 14.1134C45.1565 17.0858 46 20.4444 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2C27.577 2 30.9546 2.85367 33.9402 4.36838ZM33.0785 17.7869C32.3187 16.6787 31.3612 15.7167 30.2569 14.9516L25.8775 19.3645C27.1625 19.8854 28.1817 20.9251 28.6753 22.2238L33.0785 17.7869ZM28.9363 24.8002L34.0885 19.6086C34.6748 20.9537 35 22.4389 35 24C35 30.0751 30.0751 35 24 35C17.9249 35 13 30.0751 13 24C13 17.9249 17.9249 13 24 13C25.5827 13 27.0873 13.3343 28.4471 13.936L23.3844 19.0375C20.9134 19.3409 19 21.447 19 24C19 26.7614 21.2386 29 24 29C26.4891 29 28.5533 27.1812 28.9363 24.8002Z"
                    fill="#9EB3EE"
                  />
                  <path
                    d="M41.6704 0.626583C41.6322 0.204266 41.1187 0.0182012 40.8189 0.318042L35.3358 5.80112C34.9163 6.22058 34.7047 6.80459 34.7581 7.39539L35.0084 10.1637L22.5804 22.6868C21.8023 23.4708 21.8072 24.7372 22.5912 25.5152C23.3752 26.2933 24.6415 26.2885 25.4196 25.5044L37.8265 13.0026L40.6407 13.2736C41.2321 13.3305 41.8183 13.1215 42.2403 12.7032L47.7266 7.26532C48.0259 6.9686 47.8464 6.45736 47.4272 6.41298L42.1428 5.85345L41.6704 0.626583Z"
                    fill="#1E4DD8"
                  />
                </svg>
              </i>{" "}
            </div>
            <div class="md:my-16">
              <small class="block mb-8 text-16 leading-135 font-medium text-indigo-500">
                01.{" "}
              </small>
              <h4 class="mb-8 text-24 leading-135 font-serif font-medium text-gray-700">
                Mission
              </h4>
              <p class="text-18 leading-150 text-gray-500">
                Wavi's mission is to develop innovative, convenient and
                sustainable solutions to improve credit markets using blockchain
                technology. Wavi is a pioneer of a new digital financial system
                that eliminates inefficiencies in the credit market.
              </p>
            </div>
          </div>
          <div class="o-col flex flex-col w-full md:w-1/3 mb-48 md:-my-16">
            <div class="hidden flex-grow md:flex items-end w-1/2 my-16 rounded-sm md:order-2 text-64 text-blue-500">
              <i class="o-icon o-icon--duotone">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45.7583 26.2593C45.3656 25.7171 36.0026 13 24.0864 13C12.1693 13 2.63443 25.7171 2.2417 26.2593C1.91943 26.7022 1.91943 27.2987 2.2417 27.7408C2.63443 28.2829 12.1693 41 24.0864 41C36.0026 41 45.3656 28.2829 45.7583 27.7407C46.0806 27.2987 46.0806 26.7021 45.7583 26.2593ZM24 36C19.025 36 15 32 15 27C15 22.0881 19.025 18 24 18C28.975 18 33 22 33 27C33 32 28.975 36 24 36Z"
                    fill="#9EB3EE"
                  />
                  <path
                    d="M24.087 23C21.9287 23 20 24.7947 20 27C20 29.2062 21.9287 31 24.087 31C26.2443 31 28 29.2062 28 27C28 24.7947 26.2443 23 24.087 23Z"
                    fill="#1E4DD8"
                  />
                  <path
                    d="M42.5858 18.4142C43.3668 19.1953 44.6332 19.1953 45.4142 18.4142C46.1953 17.6332 46.1953 16.3668 45.4142 15.5858L42.5858 18.4142ZM2.58579 15.5858C1.80474 16.3668 1.80474 17.6332 2.58579 18.4142C3.36683 19.1953 4.63317 19.1953 5.41421 18.4142L2.58579 15.5858ZM24 10C32.1544 10 38.7718 14.6002 42.5858 18.4142L45.4142 15.5858C41.2282 11.3998 33.6513 6 24 6V10ZM5.41421 18.4142C9.22821 14.6002 15.8456 10 24 10V6C14.3487 6 6.77179 11.3998 2.58579 15.5858L5.41421 18.4142Z"
                    fill="#1E4DD8"
                  />
                </svg>
              </i>{" "}
            </div>
            <div class="md:my-16">
              <small class="block mb-8 text-16 leading-135 font-medium text-indigo-500">
                02.{" "}
              </small>
              <h4 class="mb-8 text-24 leading-135 font-serif font-medium text-gray-700">
                Vision{" "}
              </h4>
              <p class="text-18 leading-150 text-gray-500">
                We see a future for finance where all assets are tokenized on
                the blockchain and people have efficient ways to transfer or
                manage their funds without having to go through a credit check.
                At Wavi, we are always looking ahead. That's why we have
                designed our products to be seamless, secure, and instantaneous
                - we are the future of financial stability and wealth creation.
              </p>
            </div>
          </div>
          <div class="o-col flex flex-col w-full md:w-1/3 mb-48 md:-my-16">
            <div class="hidden flex-grow md:flex items-start w-1/2 my-16 rounded-sm  text-64 text-blue-500">
              <i class="o-icon o-icon--duotone">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M32 17L24 43L46 17H32Z" fill="#1E4DD8" />
                  <path d="M2 17L24 43L16 17H2Z" fill="#1E4DD8" />
                  <path d="M16 17L24 43L32 17H16Z" fill="#9EB3EE" />
                  <path d="M40.5 5L32 15L24 5H40.5Z" fill="#1E4DD8" />
                  <path d="M8 5L16 15L24 5H8Z" fill="#1E4DD8" />
                  <path d="M24 5L16 15H24H32L24 5Z" fill="#9EB3EE" />
                  <path d="M8 5L16 15H2L8 5Z" fill="#9EB3EE" />
                  <path d="M40.5 5L32 15H46L40.5 5Z" fill="#9EB3EE" />
                </svg>
              </i>{" "}
            </div>
            <div class="md:my-16">
              <small class="block mb-8 text-16 leading-135 font-medium text-indigo-500">
                03.
              </small>
              <h4 class="mb-8 text-24 leading-135 font-serif font-medium text-gray-700">
                Values
              </h4>
              <p class="text-18 leading-150 text-gray-500">
                Our company values efficiency, transparency, and inclusivity. We
                demonstrate this through our fully automated products,
                transparent processes, and our unabashed effort to create a
                truly global service that offers everyone the opportunity to
                build wealth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default About;
