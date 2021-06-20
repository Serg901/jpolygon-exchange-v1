import { MenuEntry } from 'jetswap-uikit-new'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://jetswap.finance',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://jetswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://jetswap.finance/pools',
  },

  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.jetswap.finance/home',
        target: "_blank",
      },
      {
        label: 'Tokens',
        href: 'https://info.jetswap.finance/tokens',
        target: "_blank",
      },
      {
        label: 'Pairs',
        href: 'https://info.jetswap.finance/pairs',
        target: "_blank",
      },
      {
        label: 'Accounts',
        href: 'https://info.jetswap.finance/accounts',
        target: "_blank",
      },
    ],
  },
  {
    label: 'Partnership',
    icon: 'PartnerIcon',
    items: [
      {
        label: 'IJO',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSfAjZ2tZWdLjjw73u4DHjQHKtoydlU-K1kzPpGYzXFRUenf9Q/viewform',
        target: "_blank",
      },
      {
        label: 'Token Application',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSffJ4g7bhAUJIw9tDCqM8kaVLAFso9vQmk_vxiEHryXbTP6Jw/viewform',
        target: "_blank",
      },
      {
        label: 'Farm Application',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSeuSSnBvJ0ZP6de1ALabhWdVSBv34gi7PfPULgSzrT3GUBNCw/viewform',
        target: "_blank",
      },
    ],
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    items: [
      {
        label: 'Audit by EtherAuthority',
        href: 'https://jetswap.finance/audit-by-etherauthority.pdf',
        target: "_blank",
      },
      {
        label: 'Audit by Hash0x',
        href: 'https://jetswap.finance/audit-by-hash0x.pdf',
        target: "_blank",
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://docs.jetswap.finance',
        target: "_blank",
      },
      {
        label: 'Blog',
        href: 'https://jetfuelfinance.medium.com/',
        target: "_blank",
      },
      {
        label: 'Jetfuel Finance',
        href: 'https://jetfuel.finance',
        target: "_blank",
      },
      {
        label: 'Fortress',
        href: 'https://fortress.loans',
        target: "_blank",
      },
      {
        label: 'Gforce',
        href: 'https://jetfuel.finance/gforce',
        target: "_blank",
      },
    ],
  },
]

export default config
