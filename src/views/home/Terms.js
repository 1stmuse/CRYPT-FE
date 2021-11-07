import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { createUseStyles } from "react-jss";
import Unauth from "../../components/header/UnauthHeader/Unauth";

const useStyles = createUseStyles({
  h1: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
});

const Terms = () => {
  const classes = useStyles();
  return (
    <Box>
      <Unauth />
      <Box mt="36" w="80%" mx="auto">
        <Box>
          <Text mb="10" fontSize="2xl">
            Terms and Conditions
          </Text>
          <Text className={classes.h1}>
            <strong>1. Introduction.</strong>
          </Text>
          <Text>
            These Terms And Conditions (these “Terms” or these “Terms And
            Conditions”) contained herein on this webpage, shall govern your use
            of this website, including all pages within this website
            (collectively referred to herein below as this “Website”). These
            Terms apply in full force and effect to your use of this Website and
            by using this Website, you expressly accept all Terms And Conditions
            contained herein in full. You must not use this Website, if you have
            any objection to any of these Terms And Conditions.
          </Text>
          <Text>
            This Website is not for use by any minors (defined as those who are
            not at least 18 years of age), and you must not use this Website if
            you a minor.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>2. Intellectual Property Rights.</strong>
          </Text>
          <Text>
            Other than content you own, which you may have opted to include on
            this Website, under these Terms, Wavi and/or its licensors own all
            rights to the intellectual property and material contained in this
            Website, and all such rights are reserved. You are granted a limited
            license only, subject to the restrictions provided in these Terms,
            for purposes of viewing the material contained on this Website.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>3. Restrictions.</strong>
          </Text>
          <Text>
            You are expressly and emphatically restricted from all of the
            following:
          </Text>
          <ol>
            <li>
              selling, sublicensing and/or otherwise commercializing any Website
              material;
            </li>
            <li>
              using this Website in any way that is, or may be, damaging to this
              Website;
            </li>
            <li>
              using this Website in any way that impacts user access to this
              Website;
            </li>
            <li>
              using this Website contrary to applicable laws and regulations, or
              in a way that causes;
            </li>
            <li>
              may cause, harm to the Website, or to any person or business
              entity;
            </li>
            <li>
              engaging in any data mining, data harvesting, data extracting or
              any other similar activity in relation to this Website, or while
              using this Website;
            </li>
          </ol>
          <Text>
            Certain areas of this Website are restricted from access by you and
            Wavi may further restrict access by you to any areas of this
            Website, at any time, in its sole and absolute discretion. Any user
            ID and password you may have for this Website are confidential and
            you must maintain confidentiality of such information.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>4. Your Content.</strong>
          </Text>
          <Text>
            In these Terms And Conditions, “Your Content” shall mean any audio,
            video, text, images or other material you choose to display on this
            Website. With respect to Your Content, by displaying it, you grant
            Wavi a non-exclusive, worldwide, irrevocable, royalty-free,
            sublicensable license to use, reproduce, adapt, publish, translate
            and distribute it in any and all media.
          </Text>
          <Text>
            Your Content must be your own and must not be infringing on any
            third party’s rights. Wavi reserves the right to remove any of Your
            Content from this Website at any time, and for any reason, without
            notice.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>5. No warranties.</strong>
          </Text>
          <Text>
            This Website is provided “as is,” with all faults, and Wavi makes no
            express or implied representations or warranties, of any kind
            related to this Website or the materials contained on this Website.
            Additionally, nothing contained on this Website shall be construed
            as providing consult or advice to you.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>6. Limitation of liability.</strong>
          </Text>
          <Text>
            In no event shall Wavi, nor any of its officers, directors and
            employees, be liable to you for anything arising out of or in any
            way connected with your use of this Website, whether such liability
            is under contract, tort or otherwise, and Wavi, including its
            officers, directors and employees shall not be liable for any
            indirect, consequential or special liability arising out of or in
            any way related to your use of this Website.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>7. Indemnification.</strong>
          </Text>
          <Text>
            You hereby indemnify to the fullest extent Wavi from and against any
            and all liabilities, costs, demands, causes of action, damages and
            expenses (including reasonable attorney’s fees) arising out of or in
            any way related to your breach of any of the provisions of these
            Terms.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>8. Consent to communication:</strong>
          </Text>
          <Text>
            You grant your explicit consent to Nexo’s use of your mobile phone
            number for the purpose of provision of any information and sending
            of any messages and notifications in regard to our contractual
            relations, including for marketing purposes.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>9. Severability.</strong>
          </Text>
          <Text>
            If any provision of these Terms is found to be unenforceable or
            invalid under any applicable law, such unenforceability or
            invalidity shall not render these Terms unenforceable or invalid as
            a whole, and such provisions shall be deleted without affecting the
            remaining provisions herein.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>10. Variation of Terms.</strong>
          </Text>
          <Text>
            Wavi is permitted to revise these Terms at any time as it sees fit,
            and by using this Website you are expected to review such Terms on a
            regular basis to ensure you understand all Terms And Conditions
            governing use of this Website.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>11. Assignment.</strong>
          </Text>
          <Text>
            Wavi shall be permitted to assign, transfer, and subcontract its
            rights and/or obligations under these Terms without any notification
            or consent required. However, you shall not be permitted to assign,
            transfer, or subcontract any of your rights and/or obligations under
            these Terms.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>12. Entire Agreement.</strong>
          </Text>
          <Text>
            These Terms, including any legal notices and disclaimers contained
            on this Website, constitute the entire agreement between Wavi and
            you in relation to your use of this Website, and supersede all prior
            agreements and understandings with respect to the same.
          </Text>
          <Text className={classes.h1} mt="10">
            <strong>13. Governing Law &amp; Jurisdiction.</strong>
          </Text>
          <Text mb="20">
            These Terms will be governed by and construed in accordance with the
            laws of the Website Owner’s jurisdiction, and you submit to the
            non-exclusive jurisdiction of the Website Owner’s jurisdiction for
            the resolution of any disputes.
          </Text>{" "}
        </Box>
      </Box>
    </Box>
  );
};

export default Terms;
