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

const BorrowTerm = () => {
  const classes = useStyles();
  return (
    <Box>
      <Unauth />
      <Box mt="36" w="80%" mx="auto">
        <Box>
          <Text fontWeight="bold" fontSize="2xl" mb="10">
            Wavi Crypto Credit General Terms and Conditions
          </Text>
          <Text className={classes.h1}>
            <strong>I. INTRODUCTION</strong>
          </Text>
          <ol>
            <li>
              These Wavi Crypto Credit General Terms and Conditions&nbsp;
              <strong>(“General Terms”)</strong>&nbsp;govern the relations
              between you&nbsp;<strong>(“Client” or “you”)</strong>&nbsp;and any
              holding company, subsidiary or entity belonging to the Wavi group
              of companies&nbsp;<strong>(“Wavi” or “we”)</strong>, while you and
              Wavi are hereinafter separately referred to as&nbsp;
              <strong>“Party”</strong>&nbsp;and jointly - as&nbsp;
              <strong>“Parties”</strong>, in regard to your use of
              cryptocurrency credit facilities granted by Wavi, and constitute a
              legally binding agreement&nbsp;<strong>(“Agreement”)</strong>
              &nbsp;between the Parties.
            </li>
          </ol>
          <Text className={classes.h1} mt="10">
            <strong>II. DEFINITIONS</strong>
          </Text>
          <ol>
            <li>
              <strong>Applicable Law</strong>&nbsp;means any law, statute,
              regulation, ordinance, treaty, guideline, policy and act issued by
              any governmental or regulatory authority, including but not
              limited to the governing law under Art. XV.1. and Art. XV.2. of
              these General Terms.
            </li>

            <li>
              <strong>Wavi Crypto Credit</strong>&nbsp;means any Digital Assets
              credit facility granted by Wavi and the total amount of the credit
              due by the Client to Wavi at any time until its full repayment,
              including the principal, the Interest and any fees due to Wavi
              under this Agreement.
            </li>
          </ol>
          <p>
            Unless stated otherwise, references shall be made to the Wavi Wallet
            Services General Terms and Conditions and the Wavi Exchange Service
            General Terms and Conditions, and all the defined terms, used in
            these General Terms, shall have the same meaning as the one given to
            them in the Wavi Wallet Services General Terms and Conditions or the
            Wavi Exchange Service General Terms and Conditions, as the case may
            be.
          </p>
          <Text className={classes.h1} mt="10">
            <strong>III. CLIENT</strong>
          </Text>
          <ol>
            <li>
              You can enter into this Agreement and use the Wavi Crypto Credit
              only if all of the conditions below are met:
              <ol>
                <li>
                  You are not a citizen or resident of a sanctioned country
                  according to the up-to-date lists of the US Office of Foreign
                  Assets Control (OFAC), the United Nations, the European Union
                  and any EU Member State, the UK Treasury, etc.;
                </li>
                <li>
                  You are not a citizen or resident of Bulgaria, Estonia and the
                  State of New York;
                </li>
              </ol>
            </li>
            <li>
              By entering into this Agreement, you acknowledge and confirm that
              you meet all the conditions set out above. In the event that we
              subsequently ascertain that you have not met or do not meet any of
              these conditions anymore, we may suspend the provision of the Wavi
              Wallet Services to you and close your Wavi Account, and do not
              allow you to use the Wavi Wallet Services.
            </li>
          </ol>
          <Text className={classes.h1} mt="10">
            <strong>IV. WAVI CRYPTO CREDIT AND COLLATERAL</strong>
          </Text>
          <ol>
            <li>
              You shall at all times maintain the necessary Collateral in
              accordance with the LTV.
            </li>
            <li>
              You may initiate substitution of the Digital Assets used as
              Collateral at any time, by initiating an Exchange Transaction in
              accordance with the Wavi Exchange Service General Terms and
              Conditions, only under the condition that the LTV applicable to
              the Base Assets used as Collateral exceeds the LTV applicable to
              the Counter Assets intended to serve as Collateral of the same
              Wavi Crypto Credit instead of the Base Assets, as indicated on the
              Wavi Platform and in the Wavi Account. The number of substitutions
              under this Art. IV.4. shall be unlimited while the Wavi Crypto
              Credit is outstanding.
            </li>
            <li>
              Unless prohibited by any Applicable Law, by virtue of this
              Agreement Wavi acquires the ownership title and all attendant
              rights of ownership of the Collateral while the Wavi Crypto Credit
              is outstanding, and can dispose of this Collateral in any manner
              at its sole and absolute discretion. Otherwise, you understand and
              agree that we can convert, pledge, separately or together with
              other property, and for any period of time, and without retaining
              in our possession and/or control for delivery a like amount
              thereof or any other assets, at our sole and absolute discretion.
            </li>
          </ol>
          <Text className={classes.h1} mt="10">
            <strong>VII. TERM</strong>
          </Text>
          <ol>
            <li>
              The Wavi Crypto Credit shall be matured in a 12-month term
              starting from the Start Date&nbsp;
              <strong>(“Maturity Date”)</strong>.
            </li>
            <li>
              Unless terminated on the Maturity Date in accordance with these
              General Terms, the term of the Wavi Crypto Credit shall be
              automatically extended for another 12-month term. The number of
              extensions under the preceding sentence shall be unlimited.
            </li>
          </ol>
          <Text className={classes.h1} mt="10">
            <strong>VIII. REPAYMENT AND WITHDRAWAL</strong>
          </Text>
          <ol>
            <li>
              The Wavi Crypto Credit shall be repaid on the Maturity Date unless
              its term has been automatically extended in accordance with Art.
              VII.2.
            </li>
            <li>
              You may repay at any time prior to the Maturity Date and any
              amount:&nbsp;<strong>(i)</strong>&nbsp;by transferring into the
              Wavi Account the same Digital Assets as the Wavi Crypto Credit
              granted, or other Digital Assets acceptable to Wavi; (ii) with the
              Collateral; or&nbsp;<strong>(iii)</strong>&nbsp;by combination
              of&nbsp;<strong>(i)</strong>&nbsp;and&nbsp;<strong>(ii)</strong>.
              Certain rules may apply to repayments from time to time, as
              indicated on the Wavi Platform.
            </li>
          </ol>

          <Text className={classes.h1} mt="10">
            <strong>X. DEFAULT. INDEMNIFICATION</strong>
          </Text>
          <ol>
            <li>
              The occurrence of one of the following events constitutes an Event
              of Default:
              <br />
              <br />
              <strong>b)</strong> The Client breaches another obligation in
              connection with the Client’s relationship with Wavi, including any
              obligation resulting from the Collateral (the obligation to
              maintain Digital Assets with Wavi considered by Wavi to be
              acceptable and adequate pursuant to these General Terms);
              <br />
              <br />
              <strong>c)</strong> The Client is unable to pay the Client’s
              debts, enters into an agreement or arrangement with the Client’s
              creditors related to the restructuring of the Client’s debts, or
              is the subject of any measures to have the Client declared
              bankrupt or to appoint a curator, administrator, trustee or
              liquidator;
              <br />
              <br />
              <strong>e)</strong> Wavi is unable to contact the Client in
              accordance with the Client’s most recent instructions for sending
              correspondence.
              <br />
              <br />
            </li>

            <li>
              You shall defend, indemnify, and hold harmless Wavi, its
              affiliates, each of their respective employees, officers,
              directors, and representatives from and against any claims,
              damages, losses, liabilities, costs, and expenses (including
              reasonable attorney’s fees), arising out of or relating to any
              third-party claim concerning these General Terms or your use of
              the Wavi Crypto Credit or any of the other Wavi Wallet Services in
              violation to these General Terms or any Applicable Law.
            </li>
          </ol>
          <Text className={classes.h1} mt="10">
            <strong>XI. RISK DISCLOSURE</strong>
          </Text>
          <ol>
            <li>
              The regulatory status of the Digital Assets is currently
              unsettled, varies among jurisdictions and is subject to
              significant uncertainty.
            </li>
            <li>
              YOU ARE RESPONSIBLE FOR DETERMINING WHETHER THE USE OF THE NEXO
              CRYPTO CREDIT OR ANY OF THE OTHER NEXO WALLET SERVICES IS LEGAL IN
              YOUR JURISDICTION AND YOU SHALL NOT USE THE NEXO CRYPTO CREDIT OR
              ANY OF THE OTHER NEXO WALLET SERVICES SHOULD SUCH USE BE ILLEGAL
              IN YOUR JURISDICTION. IF YOU ARE UNCERTAIN, PLEASE SEEK
              INDEPENDENT LEGAL ADVICE.
            </li>

            <li>
              You understand and agree that you use the Wavi Account and the
              Wavi Crypto Credit at your own risk. You should, therefore,
              carefully consider whether such use is suitable for you in light
              of your circumstances and financial resources.
            </li>
          </ol>
          <Text className={classes.h1} mt="10">
            <strong>XII. LIMITATION OF LIABILITY</strong>
          </Text>
          <ol>
            <li>
              NOTWITHSTANDING ANY PROVISIONS IN THESE GENERAL TERMS, IN NO EVENT
              SHALL EITHER PARTY BE LIABLE TO THE OTHER FOR ANY TYPE OF
              INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, INTERRUPTION OR LOSS OF
              USE OF SERVICE OR EQUIPMENT, EVEN IF SUCH PARTY WAS ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGES, AND WHETHER ARISING UNDER THEORY OF
              CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE.
            </li>
            <li>
              Neither we nor any of our agents or nominees shall be liable for:
              (i) the management or performance of your Digital Assets
              (including any reduction in the value); and (i) any taxes or
              duties payable in respect of your Digital Assets.
            </li>
            <li>
              Except as expressly provided in these General Terms, to the extent
              permitted by any Applicable Law, we disclaim all other
              representations or warranties, fitness for a particular purpose or
              otherwise (regardless of any course of dealing, custom or usage of
              trade) of any service or any goods provided incidental to the Wavi
              services under these General Terms.
            </li>
          </ol>
          <Text className={classes.h1} mt="10">
            <strong>XIV. NOTICES</strong>
          </Text>
          <ol>
            <li>
              Any notice required or made under these General Terms from Wavi to
              the Client shall be considered validly received when addressed to
              the Client’s last used e-mail address, mailing address or phone
              number. Additionally, we may provide notices through posting on
              the Wavi Platform.
            </li>
            <li>
              Any notice required or made under these General Terms by the
              Client to Wavi shall only be made through an e-mail in English,
              sent to support@nexo.io.
            </li>
          </ol>
          <Text className={classes.h1} mt="10">
            <strong>XV. GOVERNING LAW AND JURISDICTION</strong>
          </Text>
          <ol>
            <li>
              The Agreement shall be governed exclusively by the substantive law
              of Wavi jurisdiction.
            </li>
            <li>
              Any dispute arising out of or in connection with the Agreement
              (the General Terms), unless amicably settled between the Parties,
              shall be referred to the competent court or other dispute
              resolution authority, determined as per the procedural law of Wavi
              jurisdiction. Any relief awarded cannot affect other Clients of
              Wavi.
            </li>
          </ol>
        </Box>
      </Box>
    </Box>
  );
};

export default BorrowTerm;
