import React from "react";

import { Text, Button, Img, Line, List, Input } from "components";

const GdcbicomredesignPage = () => {
  function handleNavigate() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="flex flex-col font-dmsans items-center justify-start mx-[auto] w-[100%]">
        <div className="h-[1650px] md:px-[20px] relative w-[100%]">
          <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="h-[586px] md:h-[981px] relative w-[100%]">
                <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] h-[100%] items-center justify-end m-[auto] p-[62px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[49%]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <Text
                        className="font-dmsans not-italic text-black_900 text-left w-[auto]"
                        variant="body5"
                      >
                        Welcome to Global Development Cooperative Bank of India
                      </Text>
                      <Text
                        className="font-inter leading-[66.00px] mt-[8px] text-black_900 text-left w-[100%]"
                        as="h2"
                        variant="h2"
                      >
                        <span className="md:text-[45.68px] sm:text-[39.68px] text-black_900 text-[53.68px] font-dmsans font-normal not-italic">
                          Enjoy Topnotch Banking{" "}
                        </span>
                        <span className="md:text-[45.68px] sm:text-[39.68px] text-red_900 text-[53.68px] font-dmsans font-bold">
                          Experience For Everyone.
                        </span>
                      </Text>
                      <Text
                        className="font-dmsans font-normal leading-[27.00px] mt-[20px] not-italic text-black_900 text-left sm:w-[100%] w-[84%]"
                        variant="body7"
                      >
                        Variety of Account Types Tailored to Meet Your Needs as
                        an Individual, Business, Student, Executive, Trader,
                        Parent, Retiree & More.
                      </Text>
                      <div className="flex sm:flex-col flex-row font-dmsans gap-[30px] items-center justify-start mt-[40px] md:w-[100%] w-[62%]">
                        <Button
                          className="cursor-pointer font-normal min-w-[190px] not-italic text-[20px] text-center text-white_A700 w-[auto]"
                          variant="GradientRedA201Red900"
                        >
                          Internet Banking
                        </Button>
                        <Button className="items-center justify-center text-center">
                          <div className="bg-white_A700 cursor-pointer font-normal not-italic text-[20px] text-black_900 text-center">
                            <div className="items-center justify-center text-center">
                              Open an Account
                            </div>
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_overflowmenu.svg"
                    className="h-[91px] md:ml-[0] ml-[54px] w-[auto]"
                    alt="overflowmenu"
                  />
                  <div className="h-[404px] md:ml-[0] md:mt-[0] mt-[58px] mx-[19px] relative md:w-[100%] w-[42%]">
                    <div className="absolute h-[404px] inset-[0] justify-center m-[auto] sm:w-[100%] w-[79%]">
                      <div className="absolute h-[404px] inset-[0] justify-center m-[auto] w-[76%]">
                        <div className="bg-gradient2  h-[404px] m-[auto] rounded-[10px] w-[100%]"></div>
                        <Img
                          src="images/img_istockphoto479842074612x612.png"
                          className="absolute h-[404px] inset-[0] justify-center m-[auto] object-cover rounded-[8px] w-[100%]"
                          alt="istockphoto479842074612x612"
                        />
                      </div>
                      <div className="absolute bg-gradient3  bottom-[0] h-[369px] inset-x-[0] mx-[auto] rounded-[10px] w-[100%]"></div>
                      <Img
                        src="images/img_istockphoto479842074612x612_370x449.png"
                        className="absolute bottom-[0] h-[370px] inset-x-[0] mx-[auto] object-cover rounded-[11px] w-[100%]"
                        alt="istockphoto479842074612x612 One"
                      />
                    </div>
                    <Img
                      src="images/img_istockphoto479842074612x612_317x571.png"
                      className="absolute bottom-[7%] h-[317px] inset-x-[0] mx-[auto] object-cover rounded-[10px] w-[100%]"
                      alt="istockphoto479842074612x612 Two"
                    />
                  </div>
                </div>
                <header className="absolute flex inset-x-[0] items-center justify-center mx-[auto] top-[3%] w-[100%]">
                  <div className="flex items-center justify-center w-[100%]">
                    <div className="flex flex-col gap-[8px] items-center justify-center w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between md:w-[100%] w-[95%]">
                        <div className="bg-white_A700 flex items-center justify-end p-[5px] rounded-[8px] md:w-[100%] w-[17%]">
                          <Img
                            src="images/img_logopng.png"
                            className="h-[42px] md:h-[auto] object-cover w-[92%]"
                            alt="logopng"
                          />
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[70%]">
                          <div className="flex flex-col gap-[7px] items-center justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_900 text-center w-[auto]"
                              variant="body7"
                            >
                              About Us
                            </Text>
                            <Line className="bg-gradient4  h-[3px] w-[100%]" />
                          </div>
                          <Text
                            className="font-normal not-italic text-black_900 text-center w-[auto]"
                            variant="body7"
                          >
                            Products
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900 text-center w-[auto]"
                            variant="body7"
                          >
                            Digital Banking
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900 text-center w-[auto]"
                            variant="body7"
                          >
                            Services
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900 text-center w-[auto]"
                            variant="body7"
                          >
                            Downloads
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900 text-center w-[auto]"
                            variant="body7"
                          >
                            Careers
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900 text-center w-[auto]"
                            variant="body7"
                          >
                            Contact Us
                          </Text>
                          <Text
                            className="font-normal not-italic text-black_900 text-center w-[auto]"
                            variant="body7"
                          >
                            Empanelment Policy
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-gray_500 h-[1px] w-[100%]" />
                    </div>
                  </div>
                </header>
              </div>
              <div className="bg-white_A700 flex items-center justify-end w-[100%]">
                <div className="md:h-[1590px] sm:h-[2007px] h-[857px] mt-[205px] relative w-[100%]">
                  <div className="h-[857px] m-[auto] w-[100%]">
                    <Img
                      src="images/img_istockphoto165793675612x612.png"
                      className="h-[857px] m-[auto] object-cover w-[100%]"
                      alt="istockphoto165793675612x612"
                    />
                    <Text
                      className="absolute left-[13%] not-italic text-black_900 text-left top-[20%] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      SIMPLY SPOT ON. THAT IS OUR BRAND’S
                    </Text>
                  </div>
                  <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[76%]">
                    <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                      <div className="bg-red_701 flex md:flex-1 sm:flex-col flex-row sm:gap-[40px] gap-[63px] items-center justify-center p-[22px] sm:px-[20px] rounded-[10px] md:w-[100%] w-[49%]">
                        <Text
                          className="sm:ml-[0] ml-[114px] sm:mt-[0] mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body1"
                        >
                          Banking For Individuals
                        </Text>
                        <Img
                          src="images/img_materialsymbol.svg"
                          className="h-[28px] mr-[7px] w-[28px]"
                          alt="materialsymbol"
                        />
                      </div>
                      <div className="bg-red_901 flex md:flex-1 sm:flex-col flex-row sm:gap-[40px] gap-[68px] items-center justify-end p-[22px] sm:px-[20px] rounded-[10px] md:w-[100%] w-[49%]">
                        <Text
                          className="sm:mt-[0] mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body1"
                        >
                          Banking For Businesses
                        </Text>
                        <Img
                          src="images/img_materialsymbol.svg"
                          className="h-[28px] mr-[7px] w-[28px]"
                          alt="materialsymbol One"
                        />
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row md:gap-[58px] items-end justify-between mt-[70px] w-[100%]">
                      <Text
                        className="font-medium mb-[2px] sm:mt-[0] mt-[45px] text-black_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        PROMISE TO OUR CUSTOMERS.
                      </Text>
                      <Text
                        className="leading-[37.00px] not-italic text-black_900 text-left w-[auto]"
                        variant="body6"
                      >
                        We Make It A Point To Truly Understand The Desires And
                        Needs Of All Our Customers So That We Can Be Simply Spot
                        On In All We Do.
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[34px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[100px] w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="bg-red_51 flex flex-1 items-center justify-start p-[18px] rounded-[5px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[57px] mt-[22px] md:w-[100%] w-[318px]">
                          <Img
                            src="images/img_user.svg"
                            className="h-[50px] w-[50px]"
                            alt="user"
                          />
                          <Line className="bg-black_900 h-[3px] mt-[20px] w-[100%]" />
                          <div className="flex flex-row gap-[18px] items-start justify-start mt-[17px] md:w-[100%] w-[28%]">
                            <div className="bg-red_901 h-[20px] rounded-[50%] w-[20px]"></div>
                            <Text
                              className="font-normal not-italic text-black_901 text-left w-[auto]"
                              variant="body7"
                            >
                              USERS
                            </Text>
                          </div>
                          <Text
                            className="font-bold mt-[28px] text-black_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            2.3M +
                          </Text>
                          <Text
                            className="leading-[31.50px] mt-[30px] not-italic text-black_900 text-left w-[100%]"
                            variant="body8"
                          >
                            We Make It A Point To Truly Understand The Desires
                            And Needs Of All Our Customers So That We Can Be
                            Simply Spot On In All We Do.
                          </Text>
                        </div>
                      </div>
                      <div className="bg-red_51 flex flex-1 items-center justify-start p-[18px] rounded-[5px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[64px] mt-[22px] w-[100%]">
                          <Img
                            src="images/img_music.svg"
                            className="h-[50px] w-[50px]"
                            alt="music"
                          />
                          <Line className="bg-black_900 h-[3px] mt-[20px] w-[100%]" />
                          <div className="flex flex-row gap-[18px] items-start justify-start mt-[17px] md:w-[100%] w-[40%]">
                            <div className="bg-orange_300 h-[20px] rounded-[50%] w-[20px]"></div>
                            <Text
                              className="font-normal not-italic text-black_901 text-left w-[auto]"
                              variant="body7"
                            >
                              COUNTRIES
                            </Text>
                          </div>
                          <Text
                            className="font-bold mt-[24px] text-black_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            17 +
                          </Text>
                          <Text
                            className="leading-[31.50px] mt-[27px] not-italic text-black_900 text-left w-[100%]"
                            variant="body8"
                          >
                            We Make It A Point To Truly Understand The Desires
                            And Needs Of All Our Customers So That We Can Be
                            Simply Spot On In All We Do.
                          </Text>
                        </div>
                      </div>
                      <div className="bg-red_51 flex flex-1 items-center justify-start p-[18px] rounded-[5px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[64px] mt-[22px] w-[100%]">
                          <Img
                            src="images/img_user_black_901.svg"
                            className="h-[50px] w-[50px]"
                            alt="user One"
                          />
                          <Line className="bg-black_900 h-[3px] mt-[20px] w-[100%]" />
                          <div className="flex flex-row gap-[18px] items-start justify-start mt-[17px] md:w-[100%] w-[61%]">
                            <div className="bg-green_800 h-[20px] rounded-[50%] w-[20px]"></div>
                            <Text
                              className="font-normal not-italic text-black_901 text-left w-[auto]"
                              variant="body7"
                            >
                              CARBON FOOTPRINT
                            </Text>
                          </div>
                          <Text
                            className="font-bold mt-[24px] text-black_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            -75%
                          </Text>
                          <Text
                            className="leading-[31.50px] mt-[27px] not-italic text-black_900 text-left w-[100%]"
                            variant="body8"
                          >
                            We Make It A Point To Truly Understand The Desires
                            And Needs Of All Our Customers So That We Can Be
                            Simply Spot On In All We Do.
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-white_A700 flex inset-x-[0] items-center justify-start mx-[auto] p-[25px] sm:px-[20px] rounded-[12px] shadow-bs top-[34%] w-[86%]">
            <div className="flex flex-col gap-[15px] items-center justify-start mb-[2px] md:w-[100%] w-[73%]">
              <List
                className="sm:flex-col flex-row md:gap-[40px] gap-[99px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-red_50 flex flex-1 h-[100px] items-center justify-start sm:ml-[0] p-[20px] rounded-[50%] w-[100%]">
                  <Img
                    src="images/img_notification.svg"
                    className="h-[60px] w-[60px]"
                    alt="notification"
                  />
                </div>
                <div className="bg-red_50 flex flex-1 h-[100px] items-center justify-start sm:ml-[0] p-[20px] rounded-[50%] w-[100%]">
                  <Img
                    src="images/img_notification.svg"
                    className="h-[60px] w-[60px]"
                    alt="notification One"
                  />
                </div>
                <div className="bg-red_50 flex flex-1 h-[100px] items-center justify-start sm:ml-[0] p-[20px] rounded-[50%] w-[100%]">
                  <Img
                    src="images/img_notification.svg"
                    className="h-[60px] w-[60px]"
                    alt="notification Two"
                  />
                </div>
                <div className="bg-red_50 flex flex-1 h-[100px] items-center justify-start sm:ml-[0] p-[20px] rounded-[50%] w-[100%]">
                  <Img
                    src="images/img_notification.svg"
                    className="h-[60px] w-[60px]"
                    alt="notification Three"
                  />
                </div>
                <div className="bg-red_50 flex flex-1 h-[100px] items-center justify-start sm:ml-[0] p-[20px] rounded-[50%] w-[100%]">
                  <Img
                    src="images/img_notification.svg"
                    className="h-[60px] w-[60px]"
                    alt="notification Four"
                  />
                </div>
              </List>
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[98%]">
                <Text
                  className="font-normal md:mt-[0] mt-[3px] not-italic text-black_901 text-left w-[auto]"
                  variant="body7"
                >
                  Saving Account
                </Text>
                <Text
                  className="font-normal mb-[3px] md:ml-[0] ml-[80px] not-italic text-black_901 text-left w-[auto]"
                  variant="body7"
                >
                  Current Account
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[92px] not-italic text-black_901 text-left w-[auto]"
                  variant="body7"
                >
                  Investment
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[98px] md:mt-[0] mt-[3px] not-italic text-black_901 text-left w-[auto]"
                  variant="body7"
                >
                  Business Banking
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[107px] md:mt-[0] mt-[3px] not-italic text-black_901 text-left w-[auto]"
                  variant="body7"
                >
                  Trading
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[40px] gap-[82px] items-start justify-start p-[117px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[73px] md:mt-[0] mt-[69px] md:w-[100%] w-[43%]">
            <Text
              className="not-italic text-green_900 text-left w-[auto]"
              variant="body3"
            >
              <span className="md:text-[23px] sm:text-[21px] text-green_900 text-[25px] font-dmsans font-normal">
                Go Paperless For{" "}
              </span>
              <span className="md:text-[23px] sm:text-[21px] text-green_900 text-[25px] font-dmsans font-medium">
                A Better Environment,
              </span>
            </Text>
            <Text
              className="font-bold text-left text-red_701 w-[auto]"
              as="h3"
              variant="h3"
            >
              A Better Tomorrow
            </Text>
            <Text
              className="font-normal leading-[30.00px] mt-[19px] not-italic text-black_900 text-left w-[100%]"
              variant="body4"
            >
              As the saying goes conversation is for the future generation.
              Journey with us towards the greener future as we go paperless with
              our letters.{" "}
            </Text>
            <Button className="items-center justify-center mt-[50px] text-center">
              <div className="bg-white_A700 cursor-pointer font-normal not-italic text-[20px] text-black_900 text-center">
                <div className="items-center justify-center mt-[50px] text-center">
                  Learn More
                </div>
              </div>
            </Button>
          </div>
          <Img
            src="images/img_istockphoto479842074612x612_337x502.png"
            className="md:flex-1 h-[337px] sm:h-[auto] md:mt-[0] mt-[35px] object-cover rounded-[10px] md:w-[100%] w-[40%]"
            alt="istockphoto479842074612x612 Three"
          />
        </div>
        <div className="flex flex-col md:px-[20px] relative w-[100%]">
          <div className="md:h-[1034px] h-[1128px] mx-[auto] w-[100%]">
            <div className="md:h-[1034px] h-[1128px] m-[auto] w-[100%]">
              <div className="absolute bg-black_900 flex inset-x-[0] items-start justify-start mx-[auto] p-[60px] sm:px-[20px] md:px-[40px] top-[0] w-[100%]">
                <div className="flex flex-col items-center justify-start mb-[16px] md:ml-[0] ml-[130px] md:w-[100%] w-[73%]">
                  <Text
                    className="font-normal leading-[45.00px] not-italic text-black_901 text-center"
                    as="h4"
                    variant="h4"
                  >
                    <span className="md:text-[38px] sm:text-[36px] text-white_A701 text-[40px] font-dmsans">
                      Why Choose
                      <br />
                    </span>
                    <span className="md:text-[38px] sm:text-[36px] text-red_701 text-[40px] font-dmsans font-medium">
                      Global Development Cooperative Bank of India{" "}
                    </span>
                  </Text>
                  <div className="bg-gradient6  md:w-[100%] mt-[80px] p-[1px] rounded-[10px] sm:w-[100%] w-[29%] ">
                    <div className="bg-black_900 bg-gradient5  flex flex-col items-center justify-start outline p-[40px] sm:px-[20px] rounded-[10px]">
                      <Img
                        src="images/img_user_white_a701.svg"
                        className="h-[50px] w-[50px]"
                        alt="user Two"
                      />
                      <Text
                        className="font-medium mt-[31px] text-center text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Transparent
                      </Text>
                      <Text
                        className="leading-[31.50px] mb-[10px] mt-[25px] not-italic text-left text-white_A701 w-[100%]"
                        variant="body8"
                      >
                        We Make It A Point To Truly Understand The Desires And
                        Needs Of All Our Customers
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[60px] md:w-[100%] w-[70%]">
                    <div className="bg-gradient6  p-[1px] rounded-[10px] sm:w-[100%] w-[41%] ">
                      <div className="bg-black_900 bg-gradient5  flex flex-col items-center justify-start outline p-[40px] sm:px-[20px] rounded-[10px]">
                        <Img
                          src="images/img_user_white_a701.svg"
                          className="h-[50px] w-[50px]"
                          alt="user Three"
                        />
                        <Text
                          className="font-medium mt-[27px] text-center text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Reliable
                        </Text>
                        <Text
                          className="leading-[31.50px] mb-[10px] mt-[29px] not-italic text-left text-white_A701 w-[100%]"
                          variant="body8"
                        >
                          We Make It A Point To Truly Understand The Desires And
                          Needs Of All Our Customers
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gradient6  p-[1px] rounded-[10px] sm:w-[100%] w-[41%] ">
                      <div className="bg-black_900 bg-gradient5  flex flex-col items-center justify-start outline p-[40px] sm:px-[20px] rounded-[10px]">
                        <Img
                          src="images/img_user_white_a701.svg"
                          className="h-[50px] w-[50px]"
                          alt="user Four"
                        />
                        <Text
                          className="font-medium mt-[27px] text-center text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Reliable
                        </Text>
                        <Text
                          className="leading-[31.50px] mb-[10px] mt-[29px] not-italic text-left text-white_A701 w-[100%]"
                          variant="body8"
                        >
                          We Make It A Point To Truly Understand The Desires And
                          Needs Of All Our Customers
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_materialsymbol_red_700.png"
                className="absolute h-[416px] left-[0] object-cover top-[5%] w-[auto]"
                alt="materialsymbol Two"
              />
              <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[748px] items-start justify-end p-[52px] sm:px-[20px] md:px-[40px] right-[0] w-[35%]"
                style={{
                  backgroundImage:
                    "url('images/img_materialsymbol_red_700.png')",
                }}
              >
                <div className="bg-gradient6  mb-[118px] md:w-[100%] mt-[192px] p-[1px] rounded-[10px] sm:w-[100%] w-[68%] ">
                  <div className="bg-gradient5  flex flex-col items-center justify-start outline p-[40px] sm:px-[20px] rounded-[10px]">
                    <Img
                      src="images/img_user_white_a701.svg"
                      className="h-[50px] w-[50px]"
                      alt="user Five"
                    />
                    <Text
                      className="font-medium mt-[27px] text-center text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Reliable
                    </Text>
                    <Text
                      className="leading-[31.50px] mb-[10px] mt-[29px] not-italic text-left text-white_A701 w-[100%]"
                      variant="body8"
                    >
                      We Make It A Point To Truly Understand The Desires And
                      Needs Of All Our Customers
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex sm:flex-col flex-row md:gap-[40px] inset-x-[0] items-center justify-between mx-[auto] top-[20%] w-[75%]">
              <div className="bg-gradient6  p-[1px] rounded-[10px] sm:w-[100%] w-[26%] ">
                <div className="bg-gradient5  flex flex-col items-center justify-start outline p-[40px] sm:px-[20px] rounded-[10px]">
                  <Img
                    src="images/img_user_white_a701.svg"
                    className="h-[50px] w-[50px]"
                    alt="user Six"
                  />
                  <Text
                    className="font-medium mt-[27px] text-center text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Reliable
                  </Text>
                  <Text
                    className="leading-[31.50px] mb-[10px] mt-[29px] not-italic text-left text-white_A701 w-[100%]"
                    variant="body8"
                  >
                    We Make It A Point To Truly Understand The Desires And Needs
                    Of All Our Customers
                  </Text>
                </div>
              </div>
              <div className="bg-gradient6  p-[1px] rounded-[10px] sm:w-[100%] w-[26%] ">
                <div className="bg-gradient5  flex flex-col gap-[31px] items-center justify-start outline p-[40px] sm:px-[20px] rounded-[10px]">
                  <Img
                    src="images/img_user_white_a701.svg"
                    className="h-[50px] w-[50px]"
                    alt="user Seven"
                  />
                  <div className="flex flex-col gap-[26px] items-center justify-start mb-[10px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-center text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Experienced
                    </Text>
                    <Text
                      className="leading-[31.50px] not-italic text-left text-white_A701 w-[100%]"
                      variant="body8"
                    >
                      We Make It A Point To Truly Understand The Desires And
                      Needs Of All Our Customers
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <List
            className="bg-gray_200 sm:flex-col flex-row md:gap-[40px] gap-[75px] grid md:grid-cols-1 grid-cols-2 justify-center mt-[-94px] mx-[auto] p-[127px] sm:px-[20px] md:px-[40px] w-[100%] z-[1]"
            orientation="horizontal"
          >
            <div className="bg-white_A700 flex flex-1 flex-col md:gap-[40px] gap-[71px] items-center justify-end mb-[55px] sm:ml-[0] pt-[107px] rounded-[10px] w-[100%]">
              <div className="flex flex-col items-center justify-start md:w-[100%] w-[88%]">
                <Img
                  src="images/img_istockphoto479842074612x612_290x484.png"
                  className="h-[290px] sm:h-[auto] object-cover rounded-[10px] w-[100%]"
                  alt="istockphoto479842074612x612 Four"
                />
                <Text
                  className="font-medium mt-[61px] text-black_901 text-center w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Save with peace of mind
                </Text>
                <Text
                  className="font-normal leading-[30.50px] mt-[12px] not-italic text-black_901 text-center w-[100%]"
                  variant="body4"
                >
                  Save with Peace of Mind&quot; is a simple and powerful message
                  that conveys the idea of a secure and reliable savings plan.
                </Text>
                <Button className="items-center justify-center mt-[69px] text-center">
                  <div className="bg-white_A700 cursor-pointer font-normal not-italic text-[20px] text-black_900 text-center">
                    <div className="items-center justify-center mt-[69px] text-center">
                      Internet Banking
                    </div>
                  </div>
                </Button>
              </div>
              <div className="bg-red_800 h-[17px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]"></div>
            </div>
            <div className="bg-white_A700 flex flex-1 flex-col md:gap-[40px] gap-[71px] items-center justify-end mb-[55px] sm:ml-[0] pt-[107px] rounded-[10px] w-[100%]">
              <div className="flex flex-col items-center justify-start md:w-[100%] w-[88%]">
                <Img
                  src="images/img_istockphoto479842074612x612_290x484.png"
                  className="h-[290px] sm:h-[auto] object-cover rounded-[10px] w-[100%]"
                  alt="istockphoto479842074612x612 Five"
                />
                <Text
                  className="font-medium mt-[61px] text-black_901 text-center w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Borderless Banking
                </Text>
                <Text
                  className="font-normal leading-[30.50px] mt-[12px] not-italic text-black_901 text-center w-[100%]"
                  variant="body4"
                >
                  Save with Peace of Mind&quot; is a simple and powerful message
                  that conveys the idea of a secure and reliable savings plan.
                </Text>
                <Button className="items-center justify-center mt-[69px] text-center">
                  <div className="bg-white_A700 cursor-pointer font-normal not-italic text-[20px] text-black_900 text-center">
                    <div className="items-center justify-center mt-[69px] text-center">
                      Internet Banking
                    </div>
                  </div>
                </Button>
              </div>
              <div className="bg-red_800 h-[17px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]"></div>
            </div>
          </List>
        </div>
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
          <Img
            src="images/img_photo153423771.png"
            className="md:flex-1 h-[898px] sm:h-[auto] object-cover md:w-[100%] w-[50%]"
            alt="photo153423771"
          />
          <div className="bg-gradient7  flex md:flex-1 items-center justify-center p-[73px] md:px-[20px] md:w-[100%] w-[50%]">
            <div className="bg-gradient8  border-[2px] border-solid border-white_A700 flex flex-col items-start justify-start mb-[64px] mt-[67px] p-[35px] sm:px-[20px] rounded-[10px] w-[100%]">
              <Text
                className="font-normal mt-[87px] not-italic text-center text-white_A701 w-[auto]"
                as="h4"
                variant="h4"
              >
                Banking made easy.
              </Text>
              <div className="flex flex-col gap-[22px] items-start justify-start w-[100%]">
                <Text
                  className="font-medium text-center text-white_A701 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Step up your Finances!
                </Text>
                <Line className="bg-white_A701 h-[2px] w-[100%]" />
              </div>
              <Text
                className="font-normal leading-[40.00px] mb-[77px] mt-[54px] not-italic text-left text-white_A701 sm:w-[100%] w-[89%]"
                as="h6"
                variant="h6"
              >
                Variety of Account Types Tailored to Meet Your Needs as an
                Individual, Business, Student, Executive, Trader, Parent,
                Retiree & More.
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:px-[20px] relative w-[100%]">
          <div className="bg-white_A700 flex md:flex-col flex-row gap-[123px] md:gap-[40px] items-center justify-start mx-[auto] p-[89px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[88px] md:w-[100%] w-[47%]">
              <Text
                className="font-medium leading-[50.00px] md:ml-[0] ml-[15px] text-black_901 text-left tracking-[2.00px]"
                as="h4"
                variant="h4"
              >
                Business Banking for small
                <br />
                and mid sizes Enterprises
              </Text>
              <div className="bg-gray_200 flex items-start justify-start mt-[30px] p-[15px] rounded-[10px] w-[100%]">
                <Text
                  className="font-normal leading-[30.00px] my-[13px] not-italic text-black_901 text-left sm:w-[100%] w-[79%]"
                  variant="body4"
                >
                  Save with Peace of Mind&quot; is a simple and powerful message
                  that conveys the idea of a secure and reliable savings plan.
                  Save with Peace of Mind&quot; is a simple and powerful message
                  that conveys the idea of a secure and reliable savings plan.
                </Text>
              </div>
              <Text
                className="bg-red_700 h-[57px] md:ml-[0] ml-[15px] mt-[48px] not-italic pl-[30px] pr-[35px] sm:px-[20px] py-[11px] rounded-[7px] text-left text-white_A701 w-[227px]"
                variant="body2"
              >
                Get Started
              </Text>
            </div>
            <div className="h-[588px] md:mt-[0] mt-[79px] relative md:w-[100%] w-[33%]">
              <Img
                src="images/img_photo153423771_588x429.png"
                className="h-[588px] m-[auto] object-cover w-[100%]"
                alt="photo153423771 One"
              />
              <div className="absolute bg-bluegray_600 bottom-[0] flex items-center justify-start p-[9px] right-[0] w-[auto]">
                <Text
                  className="leading-[39.96px] not-italic text-left text-white_A701"
                  variant="body2"
                >
                  <span className="md:text-[38px] sm:text-[36px] text-white_A701 text-[40px] font-dmsans font-bold">
                    Grow
                    <br />
                  </span>
                  <span className="text-white_A701 text-[17px] font-dmsans font-normal">
                    Your Business
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex items-center justify-end mt-[-3px] mx-[auto] p-[58px] sm:px-[20px] md:px-[40px] w-[100%] z-[1]">
            <div className="flex flex-col md:gap-[40px] gap-[69px] items-center justify-start mt-[42px] md:w-[100%] w-[96%]">
              <Text
                className="leading-[71.50px] text-black_901 text-center"
                as="h1"
                variant="h1"
              >
                <span className="md:text-[48px] text-black_901 text-[64px] font-dmsans font-normal not-italic">
                  Send and Receive Money,
                  <br />
                </span>
                <span className="md:text-[48px] text-black_901 text-[64px] font-dmsans font-bold">
                  Locally and{" "}
                </span>
                <span className="md:text-[48px] text-red_700 text-[64px] font-dmsans font-bold">
                  Internationally.
                </span>
              </Text>
              <List
                className="sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                  <Img
                    src="images/img_istockphoto479842074612x612_208x322.png"
                    className="h-[208px] sm:h-[auto] object-cover w-[100%]"
                    alt="istockphoto479842074612x612 Six"
                  />
                  <Text
                    className="bg-clip-text bg-gradient9  font-medium mt-[25px] text-center text-transparent uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Student
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-[15px] not-italic text-black_901 text-left w-[100%]"
                    variant="body5"
                  >
                    Save with Peace of Mind&quot; is a simple and powerful
                    message that conveys the idea of a secure and reliable
                    savings plan.
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                  <Img
                    src="images/img_istockphoto479842074612x612_208x322.png"
                    className="h-[208px] sm:h-[auto] object-cover w-[100%]"
                    alt="istockphoto479842074612x612 Seven"
                  />
                  <Text
                    className="bg-clip-text bg-gradient9  font-medium mt-[23px] text-left text-transparent uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Professionals
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-[15px] not-italic text-black_901 text-left w-[100%]"
                    variant="body5"
                  >
                    Save with Peace of Mind&quot; is a simple and powerful
                    message that conveys the idea of a secure and reliable
                    savings plan.
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                  <Img
                    src="images/img_istockphoto479842074612x612_208x322.png"
                    className="h-[208px] sm:h-[auto] object-cover w-[100%]"
                    alt="istockphoto479842074612x612 Eight"
                  />
                  <Text
                    className="bg-clip-text bg-gradient9  font-medium mt-[27px] text-left text-transparent uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Business owner
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-[15px] not-italic text-black_901 text-left w-[100%]"
                    variant="body5"
                  >
                    Save with Peace of Mind&quot; is a simple and powerful
                    message that conveys the idea of a secure and reliable
                    savings plan.
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                  <Img
                    src="images/img_istockphoto479842074612x612_208x322.png"
                    className="h-[208px] sm:h-[auto] object-cover w-[100%]"
                    alt="istockphoto479842074612x612 Nine"
                  />
                  <Text
                    className="bg-clip-text bg-gradient9  font-medium mt-[25px] text-left text-transparent uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    remote workers
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-[15px] not-italic text-black_901 text-left w-[100%]"
                    variant="body5"
                  >
                    Save with Peace of Mind&quot; is a simple and powerful
                    message that conveys the idea of a secure and reliable
                    savings plan.
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="bg-white_A700 flex items-center justify-start p-[83px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="bg-gradient10  flex md:flex-col flex-row md:gap-[40px] gap-[93px] items-center justify-center max-w-[1112px] mb-[44px] mx-[auto] p-[112px] md:px-[20px] rounded-[10px] w-[100%]">
            <div className="flex md:flex-1 items-center justify-start md:ml-[0] ml-[8px] md:w-[100%] w-[43%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <Text
                  className="capitalize font-bold leading-[45.00px] text-left text-white_A700"
                  as="h3"
                  variant="h3"
                >
                  Create a free
                  <br />
                  Account Now
                </Text>
                <Text
                  className="capitalize font-normal mt-[19px] not-italic text-left text-white_A700 w-[auto]"
                  variant="body7"
                >
                  Different types accounts available for your needs
                </Text>
                <div className="flex flex-row gap-[10px] items-start justify-start mt-[31px] md:w-[100%] w-[72%]">
                  <Img
                    src="images/img_appleappstore.png"
                    className="h-[48px] md:h-[auto] object-cover w-[49%]"
                    alt="appleappstore"
                  />
                  <Img
                    src="images/img_appleappstore_46x126.png"
                    className="h-[46px] md:h-[auto] object-cover w-[48%]"
                    alt="appleappstore One"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 items-center justify-start mr-[8px] md:w-[100%] w-[46%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <Input
                  className="capitalize font-medium p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  type="text"
                  name="GroupThirtyFour"
                  placeholder="Full name"
                ></Input>
                <Input
                  className="capitalize font-medium p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                  wrapClassName="mt-[10px] w-[100%]"
                  type="number"
                  name="GroupThirtyFive"
                  placeholder="Mobile Number"
                ></Input>
                <Input
                  className="capitalize font-medium p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                  wrapClassName="mt-[10px] w-[100%]"
                  type="email"
                  name="GroupThirtySix"
                  placeholder="Email ID"
                ></Input>
                <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-between mt-[9px] w-[100%]">
                  <Text
                    className="bg-white_A701 capitalize font-medium h-[52px] pl-[10px] sm:pr-[20px] pr-[35px] py-[15px] rounded-[10px] text-gray_400 text-left w-[198px]"
                    variant="body7"
                  >
                    Country
                  </Text>
                  <Text
                    className="bg-white_A701 capitalize font-medium h-[52px] pl-[10px] sm:pr-[20px] pr-[35px] py-[15px] rounded-[10px] text-gray_400 text-left w-[198px]"
                    variant="body7"
                  >
                    State
                  </Text>
                </div>
                <Button
                  className="capitalize cursor-pointer font-medium min-w-[198px] mt-[19px] text-[20px] text-center text-white_A701 w-[auto]"
                  size="md"
                  variant="FillBlack900"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-gray_900 flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="flex items-center justify-center mb-[39px] ml-[40px] mr-[33px] mt-[56px] w-[96%]">
            <div className="flex flex-col gap-[28px] items-center justify-center w-[100%]">
              <div className="flex md:flex-col flex-row gap-[50px] items-start justify-end md:ml-[0] ml-[60px] md:w-[100%] w-[96%]">
                <div className="flex flex-col md:gap-[40px] gap-[68px] justify-start md:w-[100%] w-[79%]">
                  <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between w-[100%]">
                    <ul className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[2px] md:w-[100%] w-[auto] common-column-list">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-medium text-left text-white_A700"
                          variant="body4"
                        >
                          Explore
                        </Text>
                      </li>
                      <li className="mt-[21px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Investor Relations
                        </a>
                      </li>
                      <li className="mt-[25px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Regulatory Disclosure Section
                        </a>
                      </li>
                      <li className="mt-[24px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          RBI Awareness Campaign
                        </a>
                      </li>
                      <li className="mt-[24px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Safe Bankinng
                        </a>
                      </li>
                      <li className="mt-[22px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          RBI Kehta Hai
                        </a>
                      </li>
                      <li className="mt-[24px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          RBI: Beware of Fictitious Offers
                        </a>
                      </li>
                      <li className="mt-[25px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Money Transfer to India
                        </a>
                      </li>
                      <li className="mt-[24px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Internet Banking
                        </a>
                      </li>
                      <li className="mt-[24px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Mobile Banking
                        </a>
                      </li>
                    </ul>
                    <ul className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[2px] md:w-[100%] w-[auto] common-column-list">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-medium text-left text-white_A700"
                          variant="body4"
                        >
                          Popular Products
                        </Text>
                      </li>
                      <li className="mt-[23px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Saving Accounts
                        </a>
                      </li>
                      <li className="mt-[22px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Current Accounts
                        </a>
                      </li>
                      <li className="mt-[23px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Credit Cards
                        </a>
                      </li>
                      <li className="mt-[24px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Home Loan
                        </a>
                      </li>
                      <li className="mt-[23px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Personal Loan
                        </a>
                      </li>
                      <li className="mt-[24px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Car Loan
                        </a>
                      </li>
                      <li className="mt-[23px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Gold Loan
                        </a>
                      </li>
                      <li className="mt-[25px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Fixed Deposit
                        </a>
                      </li>
                    </ul>
                    <ul className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[auto] common-column-list">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-medium text-left text-white_A700"
                          variant="body4"
                        >
                          Calculators
                        </Text>
                      </li>
                      <li className="mt-[24px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Personal Loan EMI Calculator
                        </a>
                      </li>
                      <li className="mt-[24px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Car Loan EMI Calculator
                        </a>
                      </li>
                      <li className="mt-[24px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Two Wheeler EMI Calculator
                        </a>
                      </li>
                      <li className="mt-[24px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Home Loan EMI Calculator
                        </a>
                      </li>
                      <li className="mt-[25px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Fixed Deposit EMI Calculator
                        </a>
                      </li>
                      <li className="mt-[24px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Recurring Deposit EMI Calculator
                        </a>
                      </li>
                      <li className="mt-[22px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          More Calculators
                        </a>
                      </li>
                    </ul>
                    <ul className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[auto] common-column-list">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-medium text-left text-white_A700"
                          variant="body4"
                        >
                          Others
                        </Text>
                      </li>
                      <li className="mt-[24px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Customer Care
                        </a>
                      </li>
                      <li className="mt-[23px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          List of Unclaimed Accounts
                        </a>
                      </li>
                      <li className="mt-[24px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Form Center
                        </a>
                      </li>
                      <li className="mt-[23px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Notice Board
                        </a>
                      </li>
                      <li className="mt-[24px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          News Room
                        </a>
                      </li>
                      <li className="mt-[23px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Online Assist
                        </a>
                      </li>
                      <li className="mt-[25px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Compliments & Complaints
                        </a>
                      </li>
                      <li className="mt-[24px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Site Map
                        </a>
                      </li>
                      <li className="mt-[22px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="mt-[24px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Account Activation Process
                        </a>
                      </li>
                      <li className="mt-[24px] w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                          href="javascript:"
                        >
                          Customer Literature on NPAs & SMAs
                        </a>
                      </li>
                    </ul>
                  </div>
                  <ul className="flex flex-col items-start justify-start md:ml-[0] ml-[812px] md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-medium text-left text-white_A700"
                        variant="body4"
                      >
                        Calculators
                      </Text>
                    </li>
                    <li className="mt-[24px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                        href="javascript:"
                      >
                        Debt Service
                      </a>
                    </li>
                    <li className="mt-[25px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                        href="javascript:"
                      >
                        Blogs
                      </a>
                    </li>
                    <li className="mt-[24px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                        href="javascript:"
                      >
                        The Orange Book
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start justify-start md:mt-[0] mt-[2px] md:w-[100%] w-[18%]">
                  <ul className="flex flex-col items-start justify-start md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-medium text-left text-white_A700"
                        variant="body4"
                      >
                        Rates & Charges
                      </Text>
                    </li>
                    <li className="mt-[21px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                        href="javascript:"
                      >
                        Interest Rates
                      </a>
                    </li>
                    <li className="mt-[25px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_401 text-left"
                        href="javascript:"
                      >
                        Service Charges & Fees
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-col items-start justify-start mt-[66px] md:w-[100%] w-[94%] common-column-list">
                    <li className="w-[52%]">
                      <div className="cursor-pointer flex items-center justify-start">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          Get Social
                        </Text>
                      </div>
                    </li>
                    <li className="mt-[12px] w-[93%]">
                      <div className="cursor-pointer flex flex-row gap-[21px] items-center justify-start">
                        <Img
                          src="images/img_facebook.svg"
                          className="common-pointer h-[28px] w-[28px]"
                          onClick={handleNavigate}
                          alt="facebook"
                        />
                        <Img
                          src="images/img_file.svg"
                          className="h-[24px] w-[24px]"
                          alt="file"
                        />
                        <Img
                          src="images/img_antdesigntwit.svg"
                          className="h-[24px] w-[24px]"
                          alt="antdesigntwit"
                        />
                        <Img
                          src="images/img_play.svg"
                          className="h-[24px] w-[24px]"
                          alt="play"
                        />
                        <Img
                          src="images/img_info.svg"
                          className="h-[24px] w-[24px]"
                          alt="info"
                        />
                      </div>
                    </li>
                    <li className="mt-[18px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[16px] text-left text-white_A701"
                        href="javascript:"
                      >
                        Email: letstalk@gdcbi.com
                      </a>
                    </li>
                    <li className="mt-[22px] w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[16px] text-left text-white_A701"
                        href="javascript:"
                      >
                        Toll Free No. : 1800-2152-5563
                      </a>
                    </li>
                  </ul>
                  <div className="flex items-center justify-start mt-[71px] w-[100%]">
                    <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        Download Mobile Pay
                      </Text>
                      <div className="flex flex-row gap-[10px] items-start justify-between w-[100%]">
                        <Img
                          src="images/img_appleappstore.png"
                          className="h-[44px] md:h-[auto] object-cover w-[auto]"
                          alt="appleappstore Two"
                        />
                        <Img
                          src="images/img_appleappstore_46x126.png"
                          className="h-[42px] md:h-[auto] object-cover w-[auto]"
                          alt="appleappstore Three"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="flex flex-col items-start justify-start mr-[6px] w-[100%] common-column-list">
                <li className="ml-[1px] w-[100%]">
                  <Line className="bg-gray_401 cursor-pointer h-[1px]" />
                </li>
                <li className="mt-[21px] ml-[1px] w-[auto]">
                  <a
                    className="cursor-pointer font-normal not-italic text-[14px] text-gray_401 text-left"
                    href="javascript:"
                  >
                    Terms and Conditions | Privacy Policy | Site Map| RBI Kehta
                    Hai | Customer Awareness | Service Charges | Properties For
                    Auction
                  </a>
                </li>
                <li className="mt-[18px] w-[100%]">
                  <Line className="bg-gray_401 cursor-pointer h-[1px]" />
                </li>
                <li className="mt-[19px] ml-[1px] w-[45%]">
                  <div className="cursor-pointer flex md:flex-col flex-row md:gap-[20px] items-start justify-start">
                    <Text
                      className="md:mt-[0] mt-[4px] not-italic text-gray_401 text-left w-[auto]"
                      variant="body9"
                    >
                      Copyright
                    </Text>
                    <Img
                      src="images/img_clock.svg"
                      className="h-[24px] md:ml-[0] ml-[6px] w-[24px]"
                      alt="clock"
                    />
                    <Text
                      className="md:ml-[0] ml-[4px] md:mt-[0] mt-[4px] not-italic text-gray_401 text-left w-[auto]"
                      variant="body9"
                    >
                      2022 Global Development Cooperative Bank of India Ltd-
                      GDCBI. All rights reserved.
                    </Text>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default GdcbicomredesignPage;
