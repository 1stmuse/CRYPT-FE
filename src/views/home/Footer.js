import {
  Box,
  Text,
  Link,
  useMediaQuery,
  UnorderedList,
  ListItem,
  Input,
} from "@chakra-ui/react";
import React from "react";
import colors from "../../utils/colors";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    display: "flex",
    // backgroundColor: "#222425",
    width: "100%",
    backgroundColor: "white",
    // padding: "15px 55px",
  },
});

const Footer = () => {
  const classes = useStyles();
  const [isTab, isMobile] = useMediaQuery([
    "(max-width: 1000px)",
    "(max-width:800px)",
  ]);
  return (
    <Box
      // className={classes.main}
      // py="15px"
      border={`1px solid ${colors.deepBlue}`}
      id="contact"
      px={isMobile ? "10px" : "55px"}
      minH="20vh"
      backgroundColor={colors.deepBlue}
      borderTop={`1px solid ${colors.brown}`}
    >
      <Box>
        <Box
          d="flex"
          justifyContent="space-around"
          flexWrap="wrap"
          my="20"
          color="white"
        >
          <Box minW="150px" mb="10">
            <Box>
              <Text>Contact Info</Text>
              <Box>
                <Box>
                  <i></i>
                </Box>

                <Box>+234 9076352506</Box>
              </Box>

              <Box>
                <Box>
                  <i></i>
                </Box>

                <Box>info@cryptwavi.com</Box>
              </Box>

              <Box>
                <Box>
                  <i></i>
                </Box>

                <Box>UK</Box>
              </Box>
            </Box>
          </Box>
          <Box minW="150px" mb="10">
            <Box>
              <Text>Quick Links</Text>
              <ul>
                <li>
                  <Link
                    _hover={{
                      textDecoration: "none",
                    }}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    _hover={{
                      textDecoration: "none",
                    }}
                    title="Services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    _hover={{
                      textDecoration: "none",
                    }}
                    href="/about"
                    title="Contact us"
                  >
                    About us
                  </Link>
                </li>
              </ul>
            </Box>
          </Box>
          <Box minW="150px" mb="10">
            <Box>
              <Text>Follow Us On</Text>
              <ul>
                <li>
                  <Link
                    href="#"
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    <i className="fa fa-facebook-square "></i> facebook
                  </Link>
                </li>
                <li>
                  <Link
                    _hover={{
                      textDecoration: "none",
                    }}
                    href="#"
                  >
                    <i className="fa fa-twitter-square "></i> twitter
                  </Link>
                </li>
                <li>
                  <Link
                    _hover={{
                      textDecoration: "none",
                    }}
                    href="#"
                  >
                    <i className="fa fa-google-plus-square "></i> google-plus
                  </Link>
                </li>
              </ul>
            </Box>
          </Box>
          <Box minW="150px" mb="10">
            <Box>
              <Text>Newsletter</Text>
              <p>Subscribe our email newsletter today to receive updates.</p>
              <form>
                <Box className="form-group" d="flex" alignItems="center" my="2">
                  <label for="inputEmail3" className="sr-only control-label">
                    Email
                  </label>
                  <Input
                    ml="2.5"
                    type="email"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="Enter Email Address"
                  />
                </Box>
                <Box className="form-group">
                  <button type="submit" className="btn btn-outline">
                    Subscribe
                  </button>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
      <footer>
        <Box
          className="sm:flex py-12 sm:py-0 border-t-1 border-b-1 sm:border-none border-color-100"
          color="white"
        >
          <Box className="flex items-start md:items-center my-12 sm:my-0 sm:mr-48">
            <span className="text-42 sm:text-52 ">
              <i className="o-icon o-icon--misc">
                <svg
                  width="62"
                  height="42"
                  viewBox="0 0 62 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50.2651 15.564C51.061 16.2055 51.2711 16.1988 51.9891 15.4396C52.9202 14.5845 53.6864 13.5099 54.1521 12.2183C55.5092 8.45417 54.0537 3.41318 50.7622 1.03619C50.1418 0.585119 49.9761 0.576339 49.4375 1.07898C46.4583 3.81717 45.786 9.08575 47.73 12.6815C48.3616 13.8518 49.2575 14.836 50.2651 15.564Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.7379 15.5614C10.942 16.2029 10.732 16.1961 10.0139 15.437C9.08291 14.5819 8.31663 13.5073 7.85093 12.2156C6.49392 8.4516 7.9494 3.41062 11.2409 1.03362C11.8613 0.582556 12.0269 0.573778 12.5656 1.07641C15.5448 3.81461 16.217 9.08318 14.273 12.6789C13.6414 13.8492 12.7456 14.8333 11.7379 15.5614Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M49.6735 23.1221C49.6167 24.1427 49.7447 24.3094 50.7801 24.4499C52.0178 24.7073 53.3376 24.7028 54.6584 24.3276C58.5073 23.2342 61.7527 19.1114 61.7634 15.0514C61.7679 14.2844 61.6784 14.1447 60.9559 14.0004C56.994 13.1778 52.3225 15.7051 50.5359 19.3816C49.9538 20.5772 49.677 21.879 49.6735 23.1221Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.3244 23.1221C12.3813 24.1427 12.2532 24.3094 11.2178 24.4499C9.98011 24.7073 8.66029 24.7028 7.33952 24.3276C3.49064 23.2342 0.245186 19.1114 0.234528 15.0514C0.230056 14.2844 0.319536 14.1447 1.04202 14.0004C5.00393 13.1778 9.67542 15.7051 11.462 19.3816C12.0441 20.5772 12.3209 21.879 12.3244 23.1221Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.5158 29.5978C44.9026 30.4156 44.9167 30.6253 45.7005 31.3163C46.5877 32.2168 47.6885 32.945 48.9957 33.3652C52.805 34.5895 57.7919 32.9583 60.0521 29.5855C60.4811 28.9497 60.4841 28.7839 59.9629 28.2632C57.122 25.3817 51.8331 24.8944 48.3077 26.9632C47.1603 27.6354 46.2081 28.5652 45.5158 29.5978Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.4872 29.5952C17.1004 30.413 17.0863 30.6227 16.3025 31.3137C15.4153 32.2142 14.3145 32.9424 13.0074 33.3626C9.19805 34.5869 4.21115 32.9557 1.95092 29.5829C1.52186 28.9471 1.51889 28.7813 2.04009 28.2605C4.88097 25.3791 10.1699 24.8918 13.6953 26.9606C14.8427 27.6328 15.7949 28.5626 16.4872 29.5952Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M36.2056 33.95C35.3164 34.4542 35.2455 34.652 35.6874 35.5989C36.1403 36.7792 36.8578 37.8869 37.8877 38.7949C40.8891 41.4409 46.1122 41.9409 49.5329 39.754C50.1805 39.3429 50.2496 39.1921 49.9802 38.5063C48.5293 34.729 43.877 32.1666 39.8183 32.6523C38.4978 32.8094 37.2532 33.2806 36.2056 33.95Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.7974 33.95C26.6866 34.4542 26.7576 34.652 26.3157 35.5989C25.8628 36.7792 25.1452 37.8869 24.1153 38.7949C21.1139 41.4409 15.8909 41.9409 12.4701 39.754C11.8225 39.3429 11.7535 39.1921 12.0228 38.5063C13.4738 34.729 18.1261 32.1666 22.1847 32.6523C23.5052 32.8094 24.7499 33.2806 25.7974 33.95Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M49.2737 7.08184C49.5974 6.9484 49.9679 7.10257 50.1013 7.4262C51.1017 9.8523 51.6533 12.51 51.6533 15.295C51.6533 24.6529 45.4308 32.5558 36.8991 35.095C36.5636 35.1948 36.2106 35.0038 36.1108 34.6683C36.0109 34.3327 36.202 33.9798 36.5375 33.8799C44.5464 31.4964 50.3856 24.0768 50.3856 15.295C50.3856 12.6787 49.8677 10.1849 48.9294 7.90946C48.7959 7.58583 48.9501 7.21529 49.2737 7.08184ZM12.722 7.08184C13.0456 7.21529 13.1998 7.58583 13.0664 7.90946C12.1281 10.1849 11.6102 12.6787 11.6102 15.295C11.6102 24.0768 17.4493 31.4964 25.4582 33.8799C25.7938 33.9798 25.9848 34.3327 25.8849 34.6683C25.7851 35.0038 25.4321 35.1948 25.0966 35.095C16.565 32.5558 10.3425 24.6529 10.3425 15.295C10.3425 12.51 10.894 9.8523 11.8944 7.4262C12.0278 7.10257 12.3984 6.9484 12.722 7.08184Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.3807 1.85889L28.8393 2.39814C26.573 4.6557 24.8776 7.4862 23.9892 10.654L23.9375 10.8382H17.6181L17.7601 10.4905C19.5905 6.00972 23.6865 2.69498 28.6247 1.96989L29.3807 1.85889ZM31.9568 1.85924L32.7131 1.97056C37.6492 2.69702 41.7433 6.01109 43.5731 10.4905L43.7151 10.8382H37.3995L37.3478 10.654C36.4594 7.4865 34.7644 4.65624 32.4984 2.39879L31.9568 1.85924ZM30.6685 2.92299L30.8392 3.07991C33.0132 5.07838 34.6717 7.62886 35.5925 10.5091L35.6977 10.8382H25.6394L25.7445 10.5091C26.6654 7.62886 28.3238 5.07838 30.4978 3.07991L30.6685 2.92299ZM17.1171 12.4777H23.5724L23.5259 12.7696C23.371 13.7425 23.2905 14.7403 23.2905 15.7568C23.2905 17.0572 23.4222 18.3267 23.6728 19.5529L23.7347 19.8557H17.3414L17.2884 19.6742C16.9252 18.4317 16.7305 17.1173 16.7305 15.7575C16.7305 14.698 16.8487 13.6662 17.0727 12.6744L17.1171 12.4777ZM25.2407 12.4777H36.0963L36.1337 12.6852C36.3133 13.6819 36.4069 14.7084 36.4069 15.7568C36.4069 17.0994 36.2532 18.4061 35.9625 19.6604L35.9173 19.8557H25.4199L25.3746 19.6604C25.0838 18.4061 24.9301 17.0994 24.9301 15.7568C24.9301 14.7084 25.0238 13.6819 25.2034 12.6852L25.2407 12.4777ZM37.7648 12.4777H44.2161L44.2605 12.6744C44.4845 13.6662 44.6028 14.698 44.6028 15.7575C44.6028 17.1173 44.408 18.4317 44.0449 19.6742L43.9919 19.8557H37.6023L37.6642 19.5529C37.9149 18.3267 38.0465 17.0572 38.0465 15.7568C38.0465 14.7403 37.966 13.7425 37.8112 12.7696L37.7648 12.4777ZM17.9562 21.4952H24.1788L24.2359 21.6684C25.1735 24.5102 26.7686 27.0533 28.8411 29.1171L29.3825 29.6563L28.6265 29.5454C23.999 28.8666 20.1108 25.9136 18.1331 21.858L17.9562 21.4952ZM25.9056 21.4952H35.4315L35.3027 21.8365C34.3437 24.3763 32.8014 26.6298 30.8392 28.4337L30.6685 28.5906L30.4978 28.4337C28.5356 26.6298 26.9934 24.3763 26.0344 21.8365L25.9056 21.4952ZM37.1583 21.4952H43.377L43.2001 21.858C41.2231 25.9123 37.3369 28.8646 32.7113 29.5448L31.9549 29.656L32.4966 29.1165C34.5689 27.0527 36.1637 24.51 37.1012 21.6684L37.1583 21.4952Z"
                    fill="white"
                  />
                </svg>
              </i>{" "}
            </span>
            <p className="ml-16 text-14 leading-135 font-serif font-medium ">
              ISO/IEC 27001:2013 Certified Information{" "}
              <br className="o-br desktop" /> Security Management System{" "}
            </p>
          </Box>
          <Link
            className="flex items-center my-12 sm:my-0 sm:mr-48"
            href="https://nexo.io/licenses-and-registrations"
            _hover={{
              color: "white",
            }}
          >
            <span className="text-42 sm:text-52 ">
              <i className="o-icon o-icon--misc">
                <svg
                  width="52"
                  height="42"
                  viewBox="0 0 52 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M44.0923 14.3628C44.0923 13.9868 43.7874 13.6819 43.4113 13.6819H8.28463C7.90853 13.6819 7.60364 13.9868 7.60364 14.3628V31.2452C7.60364 31.6214 7.90853 31.9263 8.28463 31.9263H11.4848C11.861 31.9263 12.1659 31.6214 12.1659 31.2452V19.7646C12.1659 18.0852 13.5272 16.7239 15.2066 16.7239C16.8859 16.7239 18.2472 18.0852 18.2472 19.7646V31.2452C18.2472 31.6214 18.5521 31.9263 18.9283 31.9263H22.1269C22.5029 31.9263 22.8078 31.6214 22.8078 31.2452V19.7651C22.8078 18.0857 24.1691 16.7244 25.8485 16.7244C27.5278 16.7244 28.8893 18.0857 28.8893 19.7651V31.2452C28.8893 31.6214 29.1942 31.9263 29.5702 31.9263H32.7719C33.1481 31.9263 33.453 31.6214 33.453 31.2452V19.7651C33.453 18.0857 34.8143 16.7244 36.4937 16.7244C38.173 16.7244 39.5344 18.0857 39.5344 19.7651V31.2452C39.5344 31.6214 39.8392 31.9263 40.2154 31.9263H43.4113C43.7874 31.9263 44.0923 31.6214 44.0923 31.2452V14.3628Z"
                    fill="white"
                  />
                  <path
                    d="M24.6863 0.545771C25.4209 0.200076 26.2714 0.200074 27.006 0.545771L48.9358 10.8657C49.594 11.1754 49.3733 12.1628 48.6458 12.1628H3.04646C2.31903 12.1628 2.0983 11.1754 2.75649 10.8657L24.6863 0.545771Z"
                    fill="white"
                  />
                  <path
                    d="M46.4482 33.4482H5.24008C4.86397 33.4482 4.55908 33.7531 4.55908 34.1292V35.808C4.55908 36.1841 4.86397 36.489 5.24008 36.489H46.4482C46.8243 36.489 47.1292 36.1841 47.1292 35.808V34.1292C47.1292 33.7531 46.8243 33.4482 46.4482 33.4482Z"
                    fill="white"
                  />
                  <path
                    d="M49.4914 38.0088H2.20175C1.82564 38.0088 1.52075 38.3137 1.52075 38.6898V40.3685C1.52075 40.7446 1.82564 41.0495 2.20175 41.0495H49.4914C49.8675 41.0495 50.1724 40.7446 50.1724 40.3685V38.6898C50.1724 38.3137 49.8675 38.0088 49.4914 38.0088Z"
                    fill="white"
                  />
                </svg>
              </i>{" "}
            </span>
            <p className="ml-16 text-14 leading-135 font-serif font-medium ">
              Licensed &amp; Regulated <br className="o-br desktop" /> Digital
              Assets Institution{" "}
            </p>
          </Link>
          <Link
            className="flex items-center my-12 sm:my-0"
            href="https://real-time-attest.trustexplorer.io/nexo"
            target="_blank"
            rel="noopener noreferer"
            _hover={{
              color: "white",
            }}
          >
            <span className="text-42 sm:text-52 ">
              <i className="o-icon o-icon--misc">
                <svg
                  width="49"
                  height="48"
                  viewBox="0 0 49 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.70772 8.85059C7.29368 8.88989 8.62258 9.96525 9.04348 11.425L9.12391 11.7668L9.12548 11.7754L10.1149 15.98H10.1163L9.12688 11.7754L9.12531 11.7668L9.04487 11.425C8.62393 9.96511 7.29389 8.88969 5.70772 8.85059Z"
                    fill="white"
                  />
                  <path
                    d="M5.75236 15.98H8.76543L7.99602 12.7103L7.99445 12.7017L7.91401 12.3599C7.49307 10.9 6.16396 9.82456 4.5778 9.78545C4.43537 9.78716 4.29495 9.79723 4.15701 9.81518C3.335 9.92215 2.62938 10.5047 2.36825 11.2914C2.25098 11.6447 2.1875 12.0225 2.1875 12.4152C2.1875 14.3839 3.78352 15.98 5.75236 15.98Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.2651 12.5647L34.1993 12.2851C33.7256 10.2722 31.9295 8.84961 29.8616 8.84961L5.61719 8.84975C7.24269 8.84975 8.61408 9.938 9.04292 11.4252L9.12335 11.7671L9.12492 11.7757L14.7583 35.7155C15.0394 36.9105 15.7867 37.8974 16.7803 38.5022C17.0294 37.943 17.5898 37.553 18.2415 37.5526C19.326 37.5519 20.205 36.6724 20.205 35.5877C20.205 34.503 19.326 33.6236 18.2415 33.6229C17.3581 33.6223 16.6423 32.9058 16.6426 32.0223C16.6429 31.1389 17.3591 30.4229 18.2426 30.4229H38.467L36.5536 22.2909C34.4159 23.1085 32.4057 23.3746 30.6863 23.407L26.3018 27.7212C25.6307 28.3815 24.6271 28.3882 23.9521 27.8575C23.6136 27.5913 23.387 27.2126 23.3064 26.7996H17.0275C16.5856 26.7996 16.2275 26.4414 16.2275 25.9996C16.2275 25.5578 16.5856 25.1996 17.0275 25.1996H23.7484C24.3005 24.3291 25.0818 23.1408 26.0407 21.7996H16.0275C15.5856 21.7996 15.2275 21.4414 15.2275 20.9996C15.2275 20.5578 15.5856 20.1996 16.0275 20.1996H27.2183C28.6845 18.2658 30.4376 16.1687 32.3512 14.3125C32.9639 13.7181 33.6073 13.1333 34.2651 12.5647ZM36.1831 20.7164L34.681 14.3324C34.2659 14.704 33.8597 15.0812 33.4671 15.462C31.9337 16.9496 30.5017 18.6039 29.2433 20.1996H31.0275C31.4693 20.1996 31.8274 20.5578 31.8274 20.9996C31.8274 21.4025 31.5296 21.7359 31.1421 21.7915C32.6549 21.7205 34.372 21.4394 36.1831 20.7164ZM30.944 21.7996H28.0217C27.0881 23.0613 26.2894 24.231 25.666 25.1821C25.6217 25.2498 25.5782 25.3163 25.5356 25.3817C25.7 25.5171 25.8094 25.7167 25.8254 25.9422L26.176 25.5973L29.7679 22.063C29.8131 22.0185 29.8627 21.9795 29.9156 21.9464C30.0563 21.8583 30.2205 21.8113 30.3894 21.8106C30.5708 21.8098 30.7557 21.8063 30.944 21.7996ZM24.0275 15.1996C24.4693 15.1996 24.8274 15.5578 24.8274 15.9996C24.8274 16.4414 24.4693 16.7996 24.0275 16.7996H15.0275C14.5856 16.7996 14.2275 16.4414 14.2275 15.9996C14.2275 15.5578 14.5856 15.1996 15.0275 15.1996H24.0275Z"
                    fill="white"
                  />
                  <path
                    d="M18.2422 39.1522C20.2099 39.1509 21.8046 37.5553 21.8046 35.5873C21.8046 33.6193 20.2099 32.0238 18.2422 32.0225L42.305 32.0225C44.2738 32.0225 45.8699 33.6186 45.8699 35.5873C45.8699 37.556 44.2738 39.1522 42.305 39.1522H18.2422Z"
                    fill="white"
                  />
                  <path
                    d="M33.4666 15.4634C29.5514 19.2613 26.2977 24.1463 24.9063 26.3675C24.7891 26.5546 25.0198 26.7357 25.1771 26.5809L29.7673 22.0643C29.9328 21.9015 30.1564 21.8129 30.3888 21.8119C32.5471 21.8026 35.2061 21.4096 37.9948 19.8535C38.9158 19.3396 40.3403 18.1179 41.1521 16.8992L40.0988 15.1018L42.0202 15.4608C43.0827 13.262 44.1866 10.5242 44.6428 8.54404C44.8048 7.84129 44.0957 7.39917 43.4843 7.78115C41.0211 9.32031 36.7644 12.2644 33.4666 15.4634Z"
                    fill="white"
                  />
                </svg>
              </i>{" "}
            </span>
            <p className="ml-16 text-14 leading-135 font-serif font-medium ">
              Audited by <br className="o-br desktop" /> Armanino{" "}
            </p>
          </Link>
        </Box>
        {/* </section> */}
        <hr className="hidden sm:block my-80 border-color-50" />
        <section className="o-container my-80 text-12 leading-135">
          <Box className="s-footer-text" color="white">
            <p>
              Nexo Financial LLC — NMLS ID 1898755 —{" "}
              <Link
                href="https://nmlsconsumeraccess.org/"
                target="_blank"
                rel="noopener noreferer"
              >
                NMLS Consumer Access
              </Link>
            </p>
            <p>
              For any inquiries please contact us at{" "}
              <Link href="mailto:&#115;&#x75;&#x70;&#x70;&#x6f;&#x72;&#x74;&#x40;&#110;&#x65;&#120;&#111;&#x2e;&#x69;&#x6f;">
                support@nexo.io
              </Link>
            </p>
            <p>Copyright © 2018-2021 Nexo. All rights reserved.</p>
          </Box>
        </section>
      </footer>
      {/* <Box width="100%">
        <Box>
          <Box d="flex" alignItems="center">
            <Text
              fontSize={isMobile ? "2xl" : "5xl"}
              mr={10}
              color={colors.deepBlue}
            >
              CRYPTWAVI
            </Text>
            <Box
              d="flex"
              color={colors.deepBlue}
              width="200px"
              justifyContent="space-around"
            >
              <Text className="fa fa-twitter fa-2x" aria-hidden="true" />
              <Text className="fa fa-facebook fa-2x" aria-hidden="true" />
              <Text className="fa fa-instagram fa-2x" aria-hidden="true" />
            </Box>
          </Box>
          <Box mt={isMobile && "5"}>
            <Text textAlign="left" color={colors.deepBlue}>
              © 2021 Cryptwavi, ApS. All rights reserved.
            </Text>
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
};

export default Footer;
