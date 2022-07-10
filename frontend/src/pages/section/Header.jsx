import React from "react";
import { FetchSection } from "../../services/clientFunctions";
import { urlFor } from "../../client";
// Component Import
import Window from "../../components/Window";
// Styling & Asset Imports
import {
  H2,
  P,
  LinkButton,
  RecessedWrapper,
  FullWidthImage,
  ContactCard,
  ContactTextWrapper,
  ContactSocialWrapper,
} from "../../styles/global";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";
import { Linkedin } from "@styled-icons/evaicons-solid/Linkedin";
import { MailSend } from "@styled-icons/boxicons-regular/MailSend";
import { Medium } from "@styled-icons/simple-icons/Medium";
import { Download } from "@styled-icons/icomoon/Download";
import { PersonBadgeFill } from "@styled-icons/bootstrap/PersonBadgeFill";
// Query Declaration
const query = `*[_type == "bio" && !(_id in path('drafts.**'))]`;

const Header = (constraintsRef) => {
  const [loading, data] = FetchSection(query);

  return (
    <Window
      title={!loading ? data[0].title : ""}
      navcolor="red"
      constraintsRef={constraintsRef}
      icon={PersonBadgeFill}
      allowMaximize={false}
    >
      <ContactCard>
        <FullWidthImage
          src={!loading ? urlFor(data[0].image.asset._ref) : ""}
          alt="Profile of Michael Chang"
        />
        <ContactSocialWrapper>
          <LinkButton
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/michaelchangdk/",
                "_blank"
              )
            }
          >
            <Linkedin />
          </LinkButton>
          <LinkButton
            onClick={() =>
              window.open("https://github.com/michaelchangdk", "_blank")
            }
          >
            <GithubOutline />
          </LinkButton>
          <LinkButton
            onClick={() =>
              window.open("https://medium.com/@michaelchangdk", "_blank")
            }
          >
            <Medium />
          </LinkButton>
          <LinkButton
            onClick={() =>
              window.open("mailto:michaelchangdk@icloud.com?subject=Hello!")
            }
          >
            <MailSend />
          </LinkButton>
          <LinkButton onClick={() => window.open("", "_blank")}>
            <Download />
          </LinkButton>
        </ContactSocialWrapper>
        <ContactTextWrapper>
          <RecessedWrapper gap="16px">
            {!loading && (
              <>
                <H2 size="22px">{data[0].header}</H2>
                {data[0].sentences.map((item, index) => (
                  <P key={index}>{item}</P>
                ))}
              </>
            )}
          </RecessedWrapper>
        </ContactTextWrapper>
      </ContactCard>
    </Window>
  );
};

export default Header;
