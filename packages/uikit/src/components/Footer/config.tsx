import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: 'About',
    items: [
      {
        label: 'Contact3',
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: 'Community',
        href: 'https://docs.pancakeswap.finance/contact-us/telegram',
      },
      {
        label: 'CAKE token',
        href: 'https://docs.pancakeswap.finance/tokenomics/cake',
      },
    ],
  },
  {
    label: 'Help',
    items: [
      {
        label: 'Customer Support',
        href: 'https://docs.pancakeswap.finance/contact-us/customer-support',
      },
      {
        label: 'Troubleshooting',
        href: 'https://docs.pancakeswap.finance/help/troubleshooting',
      },
      {
        label: 'Guides',
        href: 'https://docs.pancakeswap.finance/get-started',
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/purpleSkullSwap",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/purpleSkullSwap",
  },

  // ***** con varios canales de telegram ****
  // {
  //   label: "Telegram",
  //   icon: "Telegram",
  //   items: [
  //     {
  //       label: "Announcements",
  //       href: "https://t.me/PancakeSwapAnn",
  //     },
  //     {
  //       label: "Chat EN",
  //       href: "https://t.me/PancakeSwapAnn",
  //     },
  //   ],
  // },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/purpleSkullSwap/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
