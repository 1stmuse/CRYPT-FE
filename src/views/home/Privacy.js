import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { createUseStyles } from "react-jss";
import Unauth from "../../components/header/UnauthHeader/Unauth";

const useStyles = createUseStyles({
  h1: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
});

const Privacy = () => {
  const classes = useStyles();
  return (
    <Box>
      <Unauth />
      <Box width="80%" mx="auto" mt="36">
        <Box class="s-article s-article--legal-lists mx-auto max-w-2xl">
          <h1 className={classes.h1}>Privacy Policy</h1>
          <Text>
            This privacy policy has been compiled to better serve those who are
            concerned with how their 'Personally Identifiable Information' (PII)
            is being used online. PII, as described in privacy law and
            information security, is information that can be used on its own or
            with other information to identify, contact, or locate a single
            person, or to identify an individual in context. Please read our
            privacy policy carefully to get a clear understanding of how we
            collect, use, protect or otherwise handle your Personally
            Identifiable Information in accordance with our website.
          </Text>
          <Text className={classes.h1} mt="10">
            What personal information do we collect from the people that visit
            our blog, website or app?
          </Text>
          <Text>
            When ordering or registering on our site, as appropriate, you may be
            asked to enter your name, email address or other details to help you
            with your experience.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>When do we collect information?</strong>
          </Text>
          <Text>
            We collect information from you when you register on our site or
            enter information on our site.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>How do we use your information?</strong>
          </Text>
          <Text>
            We may use the information we collect from you when you register,
            make a purchase, sign up for our newsletter, respond to a survey or
            marketing communication, surf the website, or use certain other site
            features in the following ways:
          </Text>
          <ul>
            <li>
              To personalize your experience and to allow us to deliver the type
              of content and product offerings in which you are most interested.
            </li>
            <li>To improve our website in order to better serve you.</li>
            <li>To quickly process your transactions.</li>
          </ul>
          <Text className={classes.h1} mt="10">
            <strong>How do we protect your information?</strong>
          </Text>
          <Text>
            We do not use vulnerability scanning and/or scanning to PCI
            standards.
            <br />
            We only provide articles and information. We never ask for Nexo card
            numbers.
            <br />
            We use regular Malware Scanning.
          </Text>
          <Text>
            Your personal information is contained behind secured networks and
            is only accessible by a limited number of persons who have special
            access rights to such systems, and are required to keep the
            information confidential. In addition, all sensitive/credit
            information you supply is encrypted via Secure Socket Layer (SSL)
            technology.
          </Text>
          <Text>
            We implement a variety of security measures when a user enters,
            submits, or accesses their information to maintain the safety of
            your personal information.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>Do we use 'cookies'?</strong>
          </Text>
          <Text>
            Yes. Cookies are small files that a site or its service provider
            transfers to your computer's hard drive through your Web browser (if
            you allow) that enables the site's or service provider's systems to
            recognize your browser and capture and remember certain information.
            They are also used to help us understand your preferences based on
            previous or current site activity, which enables us to provide you
            with improved services. We also use cookies to help us compile
            aggregate data about site traffic and site interaction so that we
            can offer better site experiences and tools in the future.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>We use cookies to:</strong>
          </Text>
          <ul>
            <li>Understand and save user's preferences for future visits.</li>
            <li>
              Compile aggregate data about site traffic and site interactions in
              order to offer better site experiences and tools in the future. We
              may also use trusted third-party services that track this
              information on our behalf.
            </li>
          </ul>
          <Text>
            You can choose to have your computer warn you each time a cookie is
            being sent, or you can choose to turn off all cookies. You do this
            through your browser settings. Since browser is a little different,
            look at your browser's Help Menu to learn the correct way to modify
            your cookies.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>If users disable cookies in their browser:</strong>
          </Text>
          <Text>
            If you turn cookies off, Some of the features that make your site
            experience more efficient may not function properly.Some of the
            features that make your site experience more efficient and may not
            function properly.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>Third-party disclosure</strong>
          </Text>
          <Text>
            We do not sell, trade, or otherwise transfer to outside parties your
            Personally Identifiable Information unless we provide users with
            advance notice. This does not include website hosting partners and
            other parties who assist us in operating our website, conducting our
            business, or serving our users, so long as those parties agree to
            keep this information confidential. We may also release information
            when it's release is appropriate to comply with the law, enforce our
            site policies, or protect ours or others' rights, property or
            safety.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>Third-party links</strong>
          </Text>
          <Text>
            We do not include or offer third-party products or services on our
            website.
          </Text>
          <Text>
            <strong>
              If at any time you would like to unsubscribe from receiving future
              emails, you can email us at
            </strong>
            &nbsp;
            <u>
              <a href="mailto:info@nexo.io" rel="noopener noreferrer nofollow">
                info@wavi.com
              </a>
            </u>
            &nbsp;and we will promptly remove you from&nbsp;<strong>ALL</strong>
            &nbsp;correspondence.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>Contacting Us</strong>
          </Text>
          <Text mb="20">
            If there are any questions regarding this privacy policy, you may
            contact us.&nbsp;
            <u>
              <a href="mailto:info@wavi.com" rel="noopener noreferrer nofollow">
                info@wavi.com
              </a>
            </u>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Privacy;
