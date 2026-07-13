import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  BedDouble,
  CircleDollarSign,
  Car,
  CalendarDays,
  Check,
  ChevronLeft,
  CircleAlert,
  ClipboardCheck,
  Clock3,
  Crown,
  FileSignature,
  Gem,
  Gift,
  Globe2,
  HandHeart,
  Handshake,
  House,
  KeyRound,
  Landmark,
  Lightbulb,
  LockKeyhole,
  Mail,
  Map,
  MapPinned,
  MessagesSquare,
  MessageCircle,
  Network,
  PackageCheck,
  Plane,
  RefreshCw,
  Send,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  TicketCheck,
  UserRoundCheck,
  UserRoundCog,
  UsersRound,
  UtensilsCrossed,
  WalletCards,
  Waypoints,
  Zap,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { MembershipBenefitsReveal } from "@/components/membership-benefits-reveal";
import {
  formatMembershipPrice,
  getBaseMembershipPrice,
  memberships,
  type MembershipBillingPeriod,
} from "@/lib/memberships";

type MembershipPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type MembershipInformationCard = {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
};

type MembershipDetailedBenefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type MembershipReviewStep = {
  title: string;
  description: string;
};

type MembershipManagementCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type DetailedMembershipContent = {
  heroDescription: string;
  overviewIntroduction: string;
  overviewCards: MembershipInformationCard[];

  eligibilityGate?: {
    icon: LucideIcon;
    eyebrow: string;
    title: string;
    introduction: string;
    requirements: string[];
  };
  purpose: {
    icon: LucideIcon;
    eyebrow: string;
    title: string;
    introduction: string;
    paragraphs: string[];
  };
  benefits: MembershipDetailedBenefit[];
  positionTitle: string;
  positionDescription: string;
  valueSection: {
    eyebrow: string;
    title: string;
    introduction: string;
    cards: MembershipInformationCard[];
  };
  reviewSteps: MembershipReviewStep[];
  managementSection: {
    eyebrow: string;
    title: string;
    introduction: string;
    cards: MembershipManagementCard[];
  };
  limitations: string[];
  finalCtaDescription: string;
};

const billingOptions: Array<{
  value: MembershipBillingPeriod;
  label: string;
  duration: string;
}> = [
  {
    value: "monthly",
    label: "Monthly",
    duration: "One month of active membership",
  },
  {
    value: "yearly",
    label: "Yearly",
    duration: "Twelve months of active membership",
  },
  {
    value: "one_time",
    label: "One-time",
    duration: "Long-term one-time membership",
  },
];

const starterPageContent: DetailedMembershipContent = {
  heroDescription:
    "Starter Membership is the official entry pass for an individual who wants a recognized and verifiable route to communicate with 6clement Joshua and affiliated organizations, participate in eligible member activities, and be considered for opportunities expressly opened to Starter members.",

  overviewIntroduction:
    "Starter is the first official relationship level for an individual who wants recognized access to the 6clement Joshua membership network.",

  overviewCards: [
    {
      icon: KeyRound,
      label: "Relationship level",
      title: "Official entry pass",
      description:
        "The first recognized membership relationship within the 6clement Joshua network.",
    },
    {
      icon: BadgeCheck,
      label: "Member identity",
      title: "Verifiable individual",
      description:
        "One approved person receives a membership identity that cannot be transferred or shared.",
    },
    {
      icon: MessageCircle,
      label: "Communication route",
      title: "Structured access",
      description:
        "Eligible membership enquiries may be submitted through approved organizational channels.",
    },
    {
      icon: Globe2,
      label: "Membership coverage",
      title: "One approved state",
      description:
        "Starter privileges apply within the approved state, province or equivalent jurisdiction attached to the membership.",
    },
  ],

  purpose: {
    icon: ShieldCheck,
    eyebrow: "Why it exists",
    title: "Why Starter Membership was created",
    introduction:
      "A structured membership system helps the organization protect its time, resources and programmes while giving genuine individuals a clear and accountable entry route.",
    paragraphs: [
      "6clement Joshua and affiliated organizations receive enquiries, assistance requests, proposals and participation requests from many individuals. Informal approaches often make it difficult to confirm who is genuinely interested in maintaining a responsible relationship with the organization and who is approaching only for an immediate personal benefit.",

      "Starter Membership was created to replace unverifiable and unstructured approaches with a fair membership system. It gives each approved member a recognized identity and an official route through which membership-based communication, activities and opportunities can be administered.",

      "The membership does not purchase influence or guarantee assistance. It establishes identity, eligibility and a structured relationship. Informal encounters, social-media messages and chance meetings may therefore be redirected to the approved communication channels, where an active membership ID may be required before a membership-based request is reviewed.",
    ],
  },

  benefits: [
    {
      icon: BadgeCheck,
      title: "Official Starter membership identity",
      description:
        "Receive a recognized membership identity and unique membership reference that may be verified when communicating with the organization.",
    },
    {
      icon: KeyRound,
      title: "Entry-level organizational access",
      description:
        "Starter acts as the official entry pass for individuals who want a recognized relationship with 6clement Joshua or an affiliated organization.",
    },
    {
      icon: Mail,
      title: "Approved communication channels",
      description:
        "Use eligible email, website forms, approved messaging channels and membership support routes provided by the organization.",
    },
    {
      icon: MessageCircle,
      title: "Formal enquiry pathway",
      description:
        "Submit eligible enquiries and requests for administrative consideration. Membership allows the enquiry to be verified but does not guarantee approval.",
    },
    {
      icon: CalendarDays,
      title: "Selected community and membership activities",
      description:
        "Become eligible for selected community events, public gatherings, picnics, recreational activities and membership programmes opened to Starter members.",
    },
    {
      icon: TicketCheck,
      title: "Entertainment and social participation",
      description:
        "Participate when eligible Starter access is announced for music events, entertainment activities, funfairs, social programmes and related organizational events.",
    },
    {
      icon: Gift,
      title: "Selected giveaways",
      description:
        "Become eligible for giveaways, promotional items or equipment opportunities that the organization independently creates and expressly opens to Starter members.",
    },
    {
      icon: Sparkles,
      title: "Eligible empowerment opportunities",
      description:
        "Participate in selected public empowerment, development or community-support programmes when Starter members are included in the published eligibility requirements.",
    },
    {
      icon: Building2,
      title: "Future member opportunities",
      description:
        "Receive eligibility for future business, activity or opportunity announcements that the organization may make available to active Starter members.",
    },
  ],

  positionTitle: "The official entry membership",

  positionDescription:
    "Starter Membership is the official entry pass into the 6clement Joshua membership structure. It gives one approved individual a recognized identity, an eligible communication route and access to Starter-level activities and opportunities. It does not include privileges reserved for Family, Silver, Black, Platinum, Elite or 6clement Joshua membership.",

  valueSection: {
    eyebrow: "Membership value",
    title: "Why the Starter fee exists",
    introduction:
      "The Starter price keeps the official entry tier accessible while contributing to the administration, technology, security and activities required to support recognized members.",
    cards: [
      {
        icon: BadgeCheck,
        label: "Administration",
        title: "Application and member verification",
        description:
          "Supports administrative review, identity confirmation and management of official membership records.",
      },
      {
        icon: WalletCards,
        label: "Membership infrastructure",
        title: "Digital records and card services",
        description:
          "Supports membership status, card generation, reference verification and secure digital record management.",
      },
      {
        icon: CalendarDays,
        label: "Member activities",
        title: "Programme and event planning",
        description:
          "Contributes to the administration and planning required for eligible member activities and opportunities.",
      },
      {
        icon: ShieldCheck,
        label: "Protection",
        title: "Security and fraud prevention",
        description:
          "Supports systems used to reduce impersonation, false applications, misuse and unverifiable requests.",
      },
    ],
  },

  reviewSteps: [
    {
      title: "Select a membership duration",
      description:
        "Choose monthly, yearly or one-time Starter membership and review the exact payable amount.",
    },
    {
      title: "Complete payment and application",
      description:
        "Payment is confirmed before the application, identity information and required documents are submitted for review.",
    },
    {
      title: "Administrative verification",
      description:
        "The organization verifies the applicant’s identity, information, eligibility and compliance with the Starter membership rules.",
    },
    {
      title: "Approval or eligible refund",
      description:
        "Approved applicants receive their membership identity. If the application is denied, an eligible full refund is submitted through the payment provider and completion may take up to 10 business days.",
    },
  ],

  managementSection: {
    eyebrow: "Membership management",
    title: "Approval, renewal, expiry and minors",
    introduction:
      "Starter Membership remains active only for the approved duration and must be managed through the official membership portal.",
    cards: [
      {
        icon: UserRoundCheck,
        title: "Membership begins after approval",
        description:
          "Payment alone does not create active membership. Membership starts after the application is approved and the official identity is issued.",
      },
      {
        icon: RefreshCw,
        title: "No automatic renewal by default",
        description:
          "Monthly and yearly membership must be renewed by the member unless a future automatic-renewal option is expressly authorized.",
      },
      {
        icon: Clock3,
        title: "Members must monitor expiry",
        description:
          "The member is responsible for checking card status, validity and expiry through the official website. Expired privileges remain inactive until renewal is confirmed.",
      },
      {
        icon: ShieldCheck,
        title: "Minors require a guardian",
        description:
          "A verified parent or legal guardian must authorize the application and remains responsible for payment, documents, communication and event consent.",
      },
    ],
  },

  limitations: [
    "Starter Membership does not guarantee money, grants, equipment, gifts, humanitarian assistance or any other form of personal support.",

    "A Starter member cannot require the organization to create an empowerment programme, giveaway, activity or support package specifically for them.",

    "Starter does not provide a right to request event hosting, private programme hosting, sponsorship, funding or organizational permits reserved for higher membership levels.",

    "Starter does not provide direct or unrestricted access to 6clement Joshua, the chief executive, directors, board members or senior leadership.",

    "Membership does not create investor, shareholder, partner, board, employment, agency or ownership status.",

    "Membership does not guarantee selection for every event, giveaway, empowerment programme, opportunity or activity. Each programme may have separate capacity and eligibility rules.",

    "Starter Membership is issued to one approved individual. The membership identity cannot be transferred, rented, sold, lent or shared.",

    "Starter privileges remain limited to the approved coverage area and do not include nationwide, international or higher-tier privileges.",

    "The organization may decline, redirect or refuse any request that is unlawful, abusive, irrelevant, unsafe, outside available resources or inconsistent with organizational policy.",

    "Once an application has been approved and the membership identity has been issued, the membership fee is not refundable because the member changed their mind, failed to use the membership or did not receive a particular opportunity.",
  ],

  finalCtaDescription:
    "Create your official entry-level relationship, receive a verifiable membership identity and become eligible for approved Starter opportunities.",
};

const familyPageContent: DetailedMembershipContent = {
  heroDescription:
    "Family Membership is the official household-level relationship for couples, single-parent families, guardians with dependants and other approved family units that want to be recognized and served through one verified membership. One primary representative applies, one payment covers the approved household, and eligible benefits are administered to the family as one unit.",

  overviewIntroduction:
    "Family Membership sits above Starter because it recognizes and administers an approved household rather than only one individual.",

  overviewCards: [
    {
      icon: House,
      label: "Relationship level",
      title: "Approved household",
      description:
        "The membership recognizes one verified family or household unit within the 6clement Joshua network.",
    },
    {
      icon: UserRoundCog,
      label: "Primary applicant",
      title: "Family representative",
      description:
        "One approved adult applies, manages the membership and remains the principal organizational contact.",
    },
    {
      icon: UsersRound,
      label: "Membership holders",
      title: "One registered family",
      description:
        "The approved spouse, partner, children, dependants or relatives recorded during review are connected to the household membership.",
    },
    {
      icon: WalletCards,
      label: "Payment structure",
      title: "One family payment",
      description:
        "One payment covers the approved household relationship rather than requiring each listed member to purchase Starter separately.",
    },
  ],

  purpose: {
    icon: House,
    eyebrow: "Why it exists",
    title: "Why Family Membership was created",
    introduction:
      "Families often communicate, attend activities and receive support as one household. Family Membership creates one accountable structure for that relationship.",
    paragraphs: [
      "Starter Membership is intended for one individual. Family Membership is intended for more than one related person who wants to be recognized and administered as one household. This may include couples, single parents with children, guardians with dependants and approved extended-family households.",

      "During application, the primary representative provides the household composition, the names of proposed members, their relationships, dependant information and other questions required to determine whether the application genuinely qualifies as a family membership.",

      "The person who submits the approved application becomes the official family representative. That person remains responsible for membership communication, verification, renewal and the accuracy of the household information supplied to the organization.",

      "Family Membership does not create separate individual claims for every listed person. The household is recognized as one membership unit, and benefits are assessed according to the nature, quantity, quality and capacity of each family-eligible programme.",
    ],
  },

  benefits: [
    {
      icon: House,
      title: "Official household membership identity",
      description:
        "Receive one recognized Family membership relationship connecting the approved household to the 6clement Joshua membership network.",
    },
    {
      icon: WalletCards,
      title: "One payment for the approved family",
      description:
        "One Family membership payment covers the approved household members recorded during application and administrative review.",
    },
    {
      icon: UserRoundCog,
      title: "One accountable family representative",
      description:
        "The approved primary applicant represents the household, manages official communication and remains responsible for membership matters.",
    },
    {
      icon: ClipboardCheck,
      title: "Verified household record",
      description:
        "Approved family members, relationships and dependant information are recorded so the organization can confirm who belongs to the registered household.",
    },
    {
      icon: Mail,
      title: "Family-level communication access",
      description:
        "The primary representative may submit eligible household enquiries through approved email, website, messaging and membership support channels.",
    },
    {
      icon: CalendarDays,
      title: "Family participation in eligible activities",
      description:
        "The approved household may participate together in selected community events, picnics, recreational activities and membership programmes that accept Family members.",
    },
    {
      icon: TicketCheck,
      title: "Family entertainment and social access",
      description:
        "Become eligible for music, entertainment, funfair, social and public activities that are expressly structured to accommodate registered families.",
    },
    {
      icon: PackageCheck,
      title: "Family-sized giveaway consideration",
      description:
        "When a programme is opened to Family members, the organization may consider household size, item quantity, benefit type and programme capacity rather than treating the family as an unrelated group.",
    },
    {
      icon: HandHeart,
      title: "Family empowerment eligibility",
      description:
        "Become eligible for selected empowerment, development or community-support programmes that specifically include families in their published requirements.",
    },
    {
      icon: UserRoundCheck,
      title: "Household accreditation",
      description:
        "The primary representative may present the active Family membership for verification when an eligible activity or organizational process requires accreditation.",
    },
    {
      icon: ShieldCheck,
      title: "Inclusion of minors and dependants",
      description:
        "Children and other approved dependants may be included under the responsibility and consent of the verified adult family representative.",
    },
    {
      icon: MapPinned,
      title: "State-level family coverage",
      description:
        "Active Family privileges apply within the approved state, province or equivalent jurisdiction connected to the household membership.",
    },
    {
      icon: Sparkles,
      title: "Future household opportunities",
      description:
        "Receive eligibility for future activities, benefits, business opportunities or family programmes that the organization may open to active Family members.",
    },
  ],

  positionTitle: "How Family stands above Starter",

  positionDescription:
    "Starter recognizes one approved individual. Family recognizes one approved household represented by a responsible primary applicant. It allows eligible household members to participate under one verified family relationship and one payment. Family Membership does not create a separate entitlement for every person, and benefits remain subject to programme capacity, household verification and published eligibility rules.",

  valueSection: {
    eyebrow: "Household value",
    title: "Why Family Membership costs more",
    introduction:
      "The Family price reflects the additional verification, administration, participation planning and potential household-scale benefits involved when more than one person is connected to the membership.",
    cards: [
      {
        icon: UsersRound,
        label: "Multiple people",
        title: "Household verification",
        description:
          "The organization must review the primary applicant, proposed household members, relationships, dependants and eligibility information.",
      },
      {
        icon: WalletCards,
        label: "One payment",
        title: "Combined family membership",
        description:
          "One approved household receives a coordinated membership relationship rather than purchasing separate entry memberships for every listed person.",
      },
      {
        icon: CalendarDays,
        label: "Participation planning",
        title: "Family-scale activities",
        description:
          "Events and programmes may require additional capacity, seating, accreditation, safeguarding and logistical planning for participating families.",
      },
      {
        icon: PackageCheck,
        label: "Benefit assessment",
        title: "Quantity and household context",
        description:
          "Where a family programme is available, the organization may consider household size, benefit quantity, programme purpose and available resources.",
      },
    ],
  },

  reviewSteps: [
    {
      title: "Choose a Family duration",
      description:
        "Select monthly, yearly or one-time Family Membership and review the exact payable amount before continuing.",
    },
    {
      title: "Primary representative completes the application",
      description:
        "The proposed family head provides their identity, household role, family composition, member names, relationships, dependants and required supporting information.",
    },
    {
      title: "Payment and household verification",
      description:
        "Payment is confirmed before the organization reviews whether the listed people form an eligible household and whether the applicant is suitable to represent them.",
    },
    {
      title: "Approval or eligible refund",
      description:
        "Approved households receive their Family membership identity. If the application is denied, an eligible full refund is submitted through the payment provider and completion may take up to 10 business days.",
    },
  ],

  managementSection: {
    eyebrow: "Family management",
    title: "Representation, household changes and renewal",
    introduction:
      "Family Membership is managed through one approved representative, while the listed household members remain subject to verification and membership rules.",
    cards: [
      {
        icon: UserRoundCog,
        title: "The primary applicant controls the membership",
        description:
          "The approved applicant remains the official family representative and principal contact for questionnaires, verification, renewal and organizational communication.",
      },
      {
        icon: UsersRound,
        title: "Approved members may attend as a family",
        description:
          "Where an activity permits family participation, listed members may attend together or through the approved representative, subject to accreditation and event rules.",
      },
      {
        icon: ClipboardCheck,
        title: "Household changes require review",
        description:
          "Adding, replacing or removing a spouse, dependant or relative does not happen automatically. Material household changes may require new documents and administrative approval.",
      },
      {
        icon: RefreshCw,
        title: "Renewal remains the representative’s responsibility",
        description:
          "Monthly and yearly memberships must be renewed by the approved representative. Expired household privileges remain inactive until renewal is confirmed.",
      },
      {
        icon: ShieldCheck,
        title: "Minors remain under adult responsibility",
        description:
          "The primary adult or verified guardian remains responsible for consent, documents, communication, safeguarding and participation involving minors.",
      },
      {
        icon: Clock3,
        title: "Membership begins only after approval",
        description:
          "Payment alone does not create an active household membership. The relationship begins after the application is approved and the Family identity is issued.",
      },
    ],
  },

  limitations: [
    "Family Membership is intended for an approved household containing more than one related or dependent person. A single adult applying only for themselves should select Starter Membership.",

    "Unrelated friends, employees, business associates, neighbours or members of separate households cannot automatically be registered as family members.",

    "Only people declared, verified and approved during the application or a later authorized household update are covered by the Family membership.",

    "The primary applicant remains the official representative. The organization is not required to discuss confidential application or membership matters with another household member.",

    "One Family payment does not create a separate membership card, separate claim or separate guaranteed benefit for every listed person.",

    "Family Membership does not guarantee money, grants, equipment, gifts, food, accommodation, school fees, medical expenses or humanitarian assistance.",

    "A Family member cannot demand that the organization create an event, empowerment programme, giveaway or support package specifically for their household.",

    "Family Membership does not provide the right to demand sponsorship, event hosting, programme hosting, funding, organizational permits or privileges reserved for higher tiers.",

    "Family Membership does not provide direct or unrestricted access to 6clement Joshua, the chief executive, directors, board members or senior leadership.",

    "The membership does not create investor, shareholder, partner, board, employment, agency or ownership status for the applicant or any listed household member.",

    "Participation remains subject to location, capacity, age, safeguarding, security, conduct and programme-specific eligibility requirements.",

    "False household information, invented relationships, undisclosed changes, impersonation or unauthorized use may result in denial, suspension or cancellation.",

    "Family privileges apply only within the approved coverage area and do not include nationwide, international or higher-tier rights.",

    "Once the application has been approved and the Family membership identity has been issued, the payment is not refundable because the household changed its mind, failed to participate or did not receive a particular opportunity.",
  ],

  finalCtaDescription:
    "Register one verified household relationship, appoint an accountable family representative and become eligible for approved Family activities and opportunities.",
};

const silverPageContent: DetailedMembershipContent = {
  heroDescription:
    "Silver Membership is the regional priority relationship for an approved individual or household seeking broader access, stronger recognition and higher consideration across one defined operational region. Silver members may participate in eligible opportunities outside their home state but within their approved region, receive organizational invitations and submit higher-level requests for priority review.",

  overviewIntroduction:
    "Silver sits above Starter and Family by extending membership beyond one local jurisdiction and introducing regional participation, invitations, priority handling and higher-value opportunity consideration.",

  overviewCards: [
    {
      icon: Crown,
      label: "Recognition level",
      title: "Regional priority class",
      description:
        "Silver members receive a higher recognition level than Starter and Family members during eligible programmes, communication and accreditation.",
    },
    {
      icon: UserRoundCheck,
      label: "Applicant type",
      title: "Individual or household",
      description:
        "Silver may be issued to one approved individual or to one verified household represented by a responsible primary applicant.",
    },
    {
      icon: Map,
      label: "Coverage structure",
      title: "One approved region",
      description:
        "Benefits may apply across the states, provinces or territories included in the member’s approved operational region.",
    },
    {
      icon: Zap,
      label: "Service position",
      title: "Priority consideration",
      description:
        "Eligible Silver communication, registration and programme requests receive priority above Starter and Family, subject to capacity and policy.",
    },
  ],

  purpose: {
    icon: MapPinned,
    eyebrow: "Why it exists",
    title: "Why Silver Membership was created",
    introduction:
      "Silver creates a stronger regional relationship for people and households whose activities, movement or interests extend beyond one local jurisdiction.",
    paragraphs: [
      "Starter and Family Membership provide recognized access within one approved state, province or equivalent jurisdiction. Silver Membership was created for applicants who may live, travel, work or participate across several locations within one defined region.",

      "A Silver member does not have to remain physically within their home state to qualify for every eligible opportunity. When the organization opens an event, programme, giveaway, empowerment activity or business opportunity elsewhere within the member’s approved region, the Silver member may be considered under the published requirements.",

      "Silver also introduces a stronger service position. Eligible communication, accreditation and participation requests may receive priority over Starter and Family requests, while the organization may directly invite Silver members to selected programmes and events.",

      "Silver does not create nationwide authority or unrestricted access. Its value comes from broader regional reach, invitations, priority treatment and the ability to submit higher-level requests for formal consideration.",
    ],
  },

  benefits: [
    {
      icon: BadgeCheck,
      title: "Official Silver membership identity",
      description:
        "Receive a verifiable Silver membership identity showing the member’s regional class, approved applicant type and active coverage status.",
    },
    {
      icon: UsersRound,
      title: "Individual or household eligibility",
      description:
        "Apply as one individual or as one approved household. Household applications remain managed through one verified primary representative.",
    },
    {
      icon: Map,
      title: "Regional membership coverage",
      description:
        "Access eligible Silver benefits across the states, provinces or territories included in the approved regional zone rather than being restricted to only one local jurisdiction.",
    },
    {
      icon: MapPinned,
      title: "Cross-location programme eligibility",
      description:
        "Become eligible for selected activities taking place elsewhere within the approved region, even when the programme is outside the member’s home state.",
    },
    {
      icon: Zap,
      title: "Priority communication handling",
      description:
        "Eligible Silver enquiries and requests may receive priority handling over Starter and Family communication, subject to administrative workload, urgency and relevance.",
    },
    {
      icon: Send,
      title: "Direct organizational invitations",
      description:
        "The organization may directly invite Silver members to selected events, programmes, giveaways, empowerment activities and business opportunities.",
    },
    {
      icon: Star,
      title: "Priority event recognition",
      description:
        "Receive Silver-level recognition during eligible events, including priority accreditation, registration assistance or designated member treatment where available.",
    },
    {
      icon: Crown,
      title: "VIP seating consideration",
      description:
        "Silver members may receive priority or designated VIP seating at qualifying events where venue capacity, security and programme structure permit.",
    },
    {
      icon: TicketCheck,
      title: "Priority registration consideration",
      description:
        "Receive consideration ahead of Starter and Family applicants when an eligible programme uses membership rank to organize registration, capacity or waiting lists.",
    },
    {
      icon: Gift,
      title: "Higher-priority giveaway eligibility",
      description:
        "Become eligible for Silver-level giveaways and receive higher consideration than lower tiers where membership rank forms part of the published selection criteria.",
    },
    {
      icon: HandHeart,
      title: "Regional empowerment opportunities",
      description:
        "Participate in selected empowerment, development and support programmes made available across the approved region.",
    },
    {
      icon: Briefcase,
      title: "Regional business opportunities",
      description:
        "Receive eligibility for selected commercial, vendor, partnership-introduction, training or business opportunities expressly opened to Silver members.",
    },
    {
      icon: Handshake,
      title: "Sponsorship and support request route",
      description:
        "Submit an eligible sponsorship, support or special-consideration request for formal priority review. Submission does not guarantee approval or funding.",
    },
    {
      icon: CalendarDays,
      title: "Hosting and programme requests",
      description:
        "Submit a request for event hosting, programme participation or organizational involvement where Silver requests are accepted. Every request remains subject to review, resources and policy.",
    },
    {
      icon: PackageCheck,
      title: "Higher-value benefit consideration",
      description:
        "Where a programme provides different quantities or benefit levels by membership class, Silver may receive consideration above Starter and Family within available resources.",
    },
    {
      icon: Mail,
      title: "Regional membership updates",
      description:
        "Receive relevant notices, invitations and opportunity announcements connected to the approved region and Silver membership class.",
    },
    {
      icon: Sparkles,
      title: "Future Silver-only opportunities",
      description:
        "Become eligible for future events, programmes, benefits and commercial opportunities reserved specifically for active Silver members.",
    },
  ],

  positionTitle: "How Silver stands above Family",

  positionDescription:
    "Family Membership recognizes one household within one approved local jurisdiction. Silver recognizes either an individual or an approved household across one defined region. Silver adds direct invitations, priority communication, regional participation, enhanced accreditation, VIP consideration and the right to submit sponsorship, support, hosting and special-consideration requests for formal review. These requests are not guaranteed and remain subject to eligibility, resources and organizational approval.",

  valueSection: {
    eyebrow: "Regional value",
    title: "Why Silver Membership costs more",
    introduction:
      "The Silver price reflects broader geographic coverage, higher administrative priority, invitation management, regional programme access and the additional resources required to recognize and serve a higher membership class.",
    cards: [
      {
        icon: Map,
        label: "Broader reach",
        title: "Regional administration",
        description:
          "Silver may involve eligibility, communication and verification across several approved states, provinces or territories.",
      },
      {
        icon: Zap,
        label: "Higher priority",
        title: "Priority service processing",
        description:
          "Eligible Silver communication and requests are positioned above Starter and Family within the organization’s membership workflow.",
      },
      {
        icon: Send,
        label: "Direct invitations",
        title: "Invitation and accreditation management",
        description:
          "The organization may manage direct invitations, event verification, priority registration and designated Silver recognition.",
      },
      {
        icon: Star,
        label: "Enhanced experience",
        title: "Higher-quality consideration",
        description:
          "Where membership level affects participation, quantity, seating or benefit quality, Silver may receive enhanced consideration within available capacity.",
      },
    ],
  },

  reviewSteps: [
    {
      title: "Choose a Silver duration",
      description:
        "Select monthly, yearly or one-time Silver Membership and review the exact payable amount before beginning the application.",
    },
    {
      title: "Choose the applicant structure",
      description:
        "Apply as one individual or one household. A household application must identify the responsible primary representative and all proposed members.",
    },
    {
      title: "Submit regional eligibility information",
      description:
        "Provide identity, residence, household information where applicable, intended region, reason for seeking Silver access and any required supporting documents.",
    },
    {
      title: "Payment and administrative review",
      description:
        "Payment is confirmed before the organization reviews the applicant’s identity, regional eligibility, submitted information and suitability for Silver Membership.",
    },
    {
      title: "Approval or eligible refund",
      description:
        "Approved applicants receive their Silver identity and regional designation. If denied, an eligible full refund is submitted through the payment provider and completion may take up to 10 business days.",
    },
  ],

  managementSection: {
    eyebrow: "Silver management",
    title: "Regional coverage, representation and renewal",
    introduction:
      "Silver Membership remains connected to one approved applicant structure and one defined region, with all privileges subject to active status and organizational rules.",
    cards: [
      {
        icon: UserRoundCog,
        title: "One recognized representative",
        description:
          "An individual member represents themselves. A Silver household remains managed by the approved primary representative responsible for communication and verification.",
      },
      {
        icon: MapPinned,
        title: "The approved region controls coverage",
        description:
          "Silver privileges apply only within the regional zone recorded and approved during application or a later authorized update.",
      },
      {
        icon: ClipboardCheck,
        title: "Regional changes require approval",
        description:
          "A member cannot independently replace their approved region. Relocation or a requested coverage change may require documents and a new administrative review.",
      },
      {
        icon: RefreshCw,
        title: "Renewal remains the member’s responsibility",
        description:
          "Monthly and yearly Silver Membership must be renewed before expiry unless a future automatic-renewal option is expressly authorized.",
      },
      {
        icon: Clock3,
        title: "Expired privileges become inactive",
        description:
          "Invitations, priority handling and regional benefits remain unavailable while the Silver membership is expired or suspended.",
      },
      {
        icon: ShieldCheck,
        title: "Priority does not remove verification",
        description:
          "Silver members must still complete identity, accreditation, security and programme-specific checks whenever required.",
      },
    ],
  },

  limitations: [
    "Silver Membership provides regional rather than nationwide coverage. Opportunities outside the approved region are not automatically included.",

    "Silver may be issued to an individual or approved household, but one payment does not create separate guaranteed benefits or independent claims for every listed household member.",

    "Silver Membership allows sponsorship, support, hosting and special-consideration requests to be submitted for priority review; it does not guarantee approval, money, equipment, funding or organizational participation.",

    "Priority handling does not guarantee an immediate response. Timing remains subject to urgency, relevance, staffing, verification and available resources.",

    "VIP recognition, priority seating, front-row placement and special accreditation apply only when expressly available and may be changed because of venue capacity, safety, protocol or event rules.",

    "Silver members cannot represent, speak for, negotiate for or legally bind 6clement Joshua or any affiliated organization.",

    "Silver does not authorize the use of the organization’s name, logo, documents, titles or identity in a way that suggests official representation or endorsement.",

    "Silver does not provide unrestricted access to the founder, chief executive, directors, board members, senior leadership or their private communication channels.",

    "Silver does not provide access to confidential company systems, executive portals, higher-tier private communities or direct member-to-member communication reserved for another membership class.",

    "Silver does not create investor, shareholder, partner, board, employee, agent, contractor or ownership status.",

    "Regional events, programmes, giveaways, empowerment and business opportunities remain subject to capacity, eligibility, conduct, age, security, location and published programme requirements.",

    "The organization may decline any request that is unlawful, unsafe, abusive, irrelevant, commercially unsuitable, outside available resources or inconsistent with organizational policy.",

    "False identity, false household information, misuse of accreditation, impersonation or unauthorized representation may result in rejection, suspension or cancellation.",

    "Once an application has been approved and the Silver identity has been issued, payment is not refundable because the member changed their mind, failed to use the benefits or did not receive a particular invitation or opportunity.",
  ],

  finalCtaDescription:
    "Establish a regional priority relationship, receive Silver recognition and become eligible for invitations, enhanced programme access and formal higher-level request consideration.",
};

const blackPageContent: DetailedMembershipContent = {
  heroDescription:
    "Black Membership is the nationwide VIP relationship class for approved individuals, households, organizations, businesses and public figures that have already established a verified Silver Membership history. It provides national coverage, stronger priority, controlled Platinum-member communication, higher-level request access and complimentary VIP admission to eligible official events.",

  overviewIntroduction:
    "Black Membership sits above Silver as a strictly controlled nationwide class. Entry is available only to applicants whose active Silver Membership can be verified and matched to the Black application.",

  overviewCards: [
    {
      icon: ShieldCheck,
      label: "Entry requirement",
      title: "Active Silver required",
      description:
        "An applicant must hold an approved and active Silver Membership before a Black application can proceed.",
    },
    {
      icon: UsersRound,
      label: "Applicant structure",
      title: "Individual or entity",
      description:
        "Black may recognize an approved individual, household, organization, business or public figure under one verified application.",
    },
    {
      icon: Map,
      label: "Coverage level",
      title: "Nationwide access",
      description:
        "Eligible Black benefits may apply throughout the approved country rather than only one state or regional zone.",
    },
    {
      icon: Crown,
      label: "Service class",
      title: "Nationwide VIP priority",
      description:
        "Black receives stronger recognition, accreditation and administrative priority than Starter, Family and Silver.",
    },
  ],

  eligibilityGate: {
    icon: ShieldCheck,
    eyebrow: "Strict eligibility gate",
    title: "Silver Membership must be verified first",
    introduction:
      "The Black application remains locked until the system verifies an active Silver membership belonging to the same applicant, household, organization or approved primary representative.",

    requirements: [
      "The applicant must already hold an approved and active Silver Membership.",

      "The applicant must provide the unique Silver membership identification number issued with the Silver card.",

      "The system must retrieve the Silver record directly from the membership database. Manually entering a number is not sufficient by itself.",

      "The legal name, applicant type and primary representative on the Black application must correspond with the verified Silver record.",

      "For a household, organization or business, the approved Silver representative or legal entity information must match the Black applicant structure.",

      "An invalid, expired, suspended, cancelled, duplicated or mismatched Silver record prevents the remaining Black application fields from being completed.",

      "Verified Silver information may be used to prefill the Black application, but the applicant must still provide all additional Black-level documents and answers.",

      "Holding Silver makes the applicant eligible to apply. It does not guarantee Black approval.",
    ],
  },

  purpose: {
    icon: Crown,
    eyebrow: "Why it exists",
    title: "Why Black Membership was created",
    introduction:
      "Black Membership creates a serious national relationship class for verified members who require broader reach, stronger treatment and a higher standard of organizational access.",

    paragraphs: [
      "Silver Membership establishes regional history, identity and participation. Black Membership is reserved for applicants who have already passed through that verified relationship and are now seeking nationwide privileges.",

      "The Silver prerequisite allows the organization to review an existing membership record before accepting a higher-value application. This reduces impersonation, inconsistent identity information, unverified organizations and applicants attempting to enter a senior class without an established membership history.",

      "Black Membership provides nationwide eligibility within the approved country. An active Black member may be considered for qualifying events, programmes, giveaways, empowerment activities and business opportunities regardless of the member’s home state, provided the opportunity is officially available within that country.",

      "Black also introduces stronger request rights, complimentary VIP event admission, controlled communication with approved Platinum members and a higher administrative priority. These privileges remain governed by verification, capacity, safety, resources and organizational policy.",
    ],
  },

  benefits: [
    {
      icon: BadgeCheck,
      title: "Official Black membership identity",
      description:
        "Receive a unique and verifiable Black membership identity linked to the member’s previous Silver record and approved nationwide status.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Silver-to-Black progression",
      description:
        "The Black relationship is issued only after the organization verifies the applicant’s active Silver Membership and confirms matching identity information.",
    },
    {
      icon: UsersRound,
      title: "Multiple approved applicant categories",
      description:
        "Black may be issued to an individual, household, registered organization, business or public figure whose application structure and documents are approved.",
    },
    {
      icon: Map,
      title: "Nationwide membership coverage",
      description:
        "Become eligible for qualifying Black programmes and opportunities throughout the approved country rather than being restricted to one state or region.",
    },
    {
      icon: MapPinned,
      title: "Cross-country programme eligibility",
      description:
        "A Black member may participate in eligible activities taking place in another state or region within the approved country, subject to registration and programme conditions.",
    },
    {
      icon: Zap,
      title: "Higher administrative priority",
      description:
        "Eligible Black communication, accreditation and formal requests receive a higher processing position than Starter, Family and Silver.",
    },
    {
      icon: Send,
      title: "Direct Black invitations",
      description:
        "The organization may send Black members direct invitations to selected national events, programmes, engagements, giveaways and business opportunities.",
    },
    {
      icon: TicketCheck,
      title: "Complimentary VIP event admission",
      description:
        "An active Black member may receive complimentary VIP admission to qualifying events organized, co-organized or officially designated by the organization where Black access is announced.",
    },
    {
      icon: Star,
      title: "VIP accreditation and treatment",
      description:
        "Receive Black-level accreditation, priority entry, designated registration support and VIP treatment at eligible official gatherings where those facilities are available.",
    },
    {
      icon: Crown,
      title: "VIP seating consideration",
      description:
        "Receive VIP seating or an equivalent designated Black member area where the event structure, venue, protocol, security and capacity permit.",
    },
    {
      icon: MessageCircle,
      title: "Controlled Platinum-member communication",
      description:
        "Communicate with approved Platinum members through membership channels created and controlled by the organization. Private contact information is not automatically disclosed.",
    },
    {
      icon: Building2,
      title: "Designated company communication",
      description:
        "Communicate with relevant membership, programme, partnership or administrative representatives assigned to eligible Black-level matters.",
    },
    {
      icon: Handshake,
      title: "Sponsorship request access",
      description:
        "Submit an eligible sponsorship proposal for higher-priority formal review. Submission does not guarantee acceptance, funding or organizational endorsement.",
    },
    {
      icon: CalendarDays,
      title: "Hosting and organizational attendance requests",
      description:
        "Request event hosting, programme involvement or official organizational attendance where such requests are accepted and relevant to the organization.",
    },
    {
      icon: HandHeart,
      title: "Empowerment and support requests",
      description:
        "Submit eligible empowerment, humanitarian, community or support requests for Black-level consideration, subject to evidence, resources and programme policy.",
    },
    {
      icon: Briefcase,
      title: "Business collaboration requests",
      description:
        "Submit eligible commercial, vendor, training, project, partnership-introduction or business-collaboration proposals through approved Black channels.",
    },
    {
      icon: Gift,
      title: "Nationwide giveaway eligibility",
      description:
        "Become eligible for qualifying giveaways and benefit programmes made available to Black members anywhere within the approved country.",
    },
    {
      icon: PackageCheck,
      title: "Higher-value benefit consideration",
      description:
        "Where an official programme differentiates benefits by membership level, Black may receive stronger quantity, quality or service consideration than lower tiers.",
    },
    {
      icon: Mail,
      title: "National opportunity notifications",
      description:
        "Receive relevant Black invitations, programme notices, accreditation information and opportunity announcements from across the approved country.",
    },
    {
      icon: Sparkles,
      title: "Future Black-only opportunities",
      description:
        "Become eligible for future national opportunities, programmes, engagements and controlled member experiences reserved for active Black members.",
    },
  ],

  positionTitle: "How Black stands above Silver",

  positionDescription:
    "Silver provides regional priority and invitation access. Black requires an existing verified Silver record and expands the relationship to nationwide coverage. It adds complimentary VIP admission to eligible official events, stronger accreditation, controlled communication with Platinum members, higher-priority administration and formal access to sponsorship, hosting, empowerment, support and business-collaboration request channels. Black remains below Platinum and does not provide executive, VVIP or representational authority.",

  valueSection: {
    eyebrow: "Nationwide VIP value",
    title: "Why Black Membership costs significantly more",
    introduction:
      "The Black price reflects nationwide administration, strict prerequisite verification, VIP event access, stronger service priority, controlled networking and the resources required to manage higher-level requests.",

    cards: [
      {
        icon: Map,
        label: "National reach",
        title: "Nationwide administration",
        description:
          "Black eligibility, invitations and programme access may be administered across every approved state or regional zone within the country.",
      },
      {
        icon: ShieldCheck,
        label: "Strict verification",
        title: "Silver-linked identity review",
        description:
          "Every Black application requires verification of the existing Silver record, applicant identity, membership history and additional Black-level documents.",
      },
      {
        icon: TicketCheck,
        label: "VIP admission",
        title: "Eligible event ticket coverage",
        description:
          "The membership may replace the cost of a standard VIP ticket at qualifying official events where complimentary Black admission is expressly provided.",
      },
      {
        icon: Zap,
        label: "Higher service level",
        title: "Priority requests and accreditation",
        description:
          "Black receives stronger administrative positioning, accreditation support and request review than lower membership classes.",
      },
    ],
  },

  reviewSteps: [
    {
      title: "Verify an active Silver Membership",
      description:
        "Enter the unique Silver membership number. The system retrieves and validates the official membership record before unlocking the Black application.",
    },
    {
      title: "Confirm identity and applicant structure",
      description:
        "The name, applicant category, primary representative and relevant legal information must correspond with the verified Silver record.",
    },
    {
      title: "Complete the Black application",
      description:
        "Provide the additional personal, household, organizational, business or public-figure information required for nationwide Black review.",
    },
    {
      title: "Select a duration and complete payment",
      description:
        "Choose monthly, yearly or one-time Black Membership and complete the confirmed payment before the application enters formal review.",
    },
    {
      title: "Strict administrative assessment",
      description:
        "The organization reviews membership history, identity, conduct, documentation, nationwide suitability, application purpose and Black-level eligibility.",
    },
    {
      title: "Approval or eligible refund",
      description:
        "Approved applicants receive their Black identity. When an application is finally denied, an eligible refund is submitted promptly through the payment provider, and completion may take up to 10 business days.",
    },
  ],

  managementSection: {
    eyebrow: "Black management",
    title: "Identity, nationwide status and VIP access",
    introduction:
      "Black Membership remains permanently linked to its verified Silver foundation, approved applicant structure and unique membership identity.",

    cards: [
      {
        icon: ShieldCheck,
        title: "The Silver link remains part of the record",
        description:
          "The approved Black profile retains a verified relationship with the Silver membership used during application and progression.",
      },
      {
        icon: UserRoundCog,
        title: "One responsible primary representative",
        description:
          "A household, organization or business must maintain one approved representative responsible for official communication, membership changes and verification.",
      },
      {
        icon: ClipboardCheck,
        title: "Material changes require approval",
        description:
          "Changes to legal identity, organization name, household structure, ownership information or primary representation require documentation and administrative review.",
      },
      {
        icon: TicketCheck,
        title: "VIP access requires active verification",
        description:
          "Complimentary VIP access applies only while the Black membership is active and must be confirmed through the official card, reference or event accreditation process.",
      },
      {
        icon: RefreshCw,
        title: "Renewal remains the holder’s responsibility",
        description:
          "Monthly and yearly Black Membership must be renewed before expiry unless an expressly authorized automatic-renewal option is introduced.",
      },
      {
        icon: Clock3,
        title: "Expired privileges become inactive",
        description:
          "VIP admission, invitations, Platinum communication and nationwide priority remain unavailable while the Black membership is expired, suspended or under review.",
      },
      {
        icon: BadgeCheck,
        title: "One unique Black identity",
        description:
          "Every approved Black card must contain a unique membership number connected to the verified applicant and official database record.",
      },
      {
        icon: ShieldCheck,
        title: "Misuse may end the membership",
        description:
          "Impersonation, ticket resale, unauthorized representation, false applications or misuse of Black privileges may result in suspension or cancellation.",
      },
    ],
  },

  limitations: [
    "An applicant cannot enter Black Membership directly from Starter or Family. An approved and active Silver Membership is compulsory.",

    "A false, expired, suspended, cancelled, duplicated or mismatched Silver membership number prevents Black eligibility.",

    "The name, legal identity, applicant type and approved representative must correspond with the verified Silver record unless a documented change has been formally approved.",

    "Black Membership provides nationwide privileges only within the approved country. It does not create international or global coverage.",

    "Complimentary VIP admission applies only to eligible events organized, co-organized or officially designated by the organization where Black access is expressly announced.",

    "Black ticket coverage does not automatically include VVIP access, executive boxes, premium tables, private lounges, backstage access, sponsor areas or invitation-only leadership spaces.",

    "Complimentary admission does not automatically cover guests, companions, family members, employees or organizational delegates unless the specific event expressly permits them.",

    "The membership does not cover travel, accommodation, feeding, transportation, merchandise or unrelated third-party charges unless specifically stated.",

    "A Black membership card, admission privilege or event accreditation cannot be transferred, rented, resold, lent or copied.",

    "Communication with Platinum members occurs only through approved and controlled membership channels. It does not guarantee a response, business relationship or disclosure of private contact details.",

    "Black does not provide unrestricted private communication with 6clement Joshua, the chief executive, directors, board members or senior leadership.",

    "Black members cannot represent, speak for, negotiate for, sign for or legally bind 6clement Joshua or an affiliated organization.",

    "Black does not authorize use of the organization’s name, logo, documents, titles or identity in a way that implies employment, endorsement, agency or representation.",

    "Black does not provide access to confidential company databases, internal staff systems, executive portals, financial records or private leadership information.",

    "The right to submit sponsorship, hosting, empowerment, support or business-collaboration requests does not guarantee funding, approval, attendance, endorsement or organizational participation.",

    "Black does not create investor, shareholder, partner, board, employee, contractor, agent or ownership status.",

    "A household, organization or business is recognized as one approved Black membership unit. One payment does not create separate guaranteed claims for every associated person.",

    "VIP priority remains subject to security, venue capacity, event protocol, accreditation deadlines, conduct rules and applicable law.",

    "Once the application is approved and the Black membership identity has been issued, payment is not refundable because the member changed their mind, did not attend events or did not receive a particular opportunity.",
  ],

  finalCtaDescription:
    "Progress from verified Silver status into a strict nationwide VIP relationship with Black accreditation, eligible complimentary VIP admission, controlled Platinum communication and higher-level request access.",
};

const platinumPageContent: DetailedMembershipContent = {
  heroDescription:
    "Platinum Membership is the international VVIP relationship class for approved individuals, households, organizations, businesses, investors and public figures that have already established an active Black Membership. It provides international opportunity coverage, stronger priority, controlled Elite-member and senior-staff communication, complimentary VIP and VVIP admission, and approved accommodation and feeding when officially invited.",

  overviewIntroduction:
    "Platinum sits above Black as a strictly verified international membership class. An active Black Membership must be retrieved, matched and approved before the Platinum application can be completed.",

  overviewCards: [
    {
      icon: ShieldCheck,
      label: "Entry requirement",
      title: "Active Black required",
      description:
        "Platinum is available only after an approved and active Black Membership has been verified against the official membership database.",
    },
    {
      icon: UsersRound,
      label: "Applicant structure",
      title: "Individual or approved entity",
      description:
        "An individual, household, organization, business, investor or public figure may apply under one verified applicant structure.",
    },
    {
      icon: Globe2,
      label: "Coverage level",
      title: "International access",
      description:
        "Eligible Platinum benefits may apply across countries where the organization officially operates, participates or announces a qualifying programme.",
    },
    {
      icon: Crown,
      label: "Service class",
      title: "International VVIP priority",
      description:
        "Platinum receives stronger consideration, accreditation and service priority than Black and every lower membership class.",
    },
  ],

  eligibilityGate: {
    icon: ShieldCheck,
    eyebrow: "Strict progression requirement",
    title: "Black Membership must be verified first",
    introduction:
      "The Platinum application remains locked until the system retrieves an active Black Membership belonging to the same person, household, organization or approved primary representative.",

    requirements: [
      "The applicant must already hold an approved and active Black Membership.",

      "The unique Black membership identification number must be entered before the Platinum application fields are unlocked.",

      "The membership system must retrieve the Black record directly from the official database.",

      "The applicant’s legal name, applicant type, organization information and primary representative must correspond with the Black record.",

      "An expired, suspended, cancelled, duplicated, false or mismatched Black Membership prevents the application from proceeding.",

      "A household, organization or business must apply through the same approved structure or representative connected to its Black Membership.",

      "Verified Black information may prefill parts of the Platinum application, but additional international and Platinum-level information will still be required.",

      "Holding Black Membership creates eligibility to apply. It does not guarantee Platinum approval.",
    ],
  },

  purpose: {
    icon: Crown,
    eyebrow: "Why it exists",
    title: "Why Platinum Membership was created",
    introduction:
      "Platinum creates a controlled international relationship for established Black members who require broader opportunity access, VVIP treatment and stronger organizational consideration.",

    paragraphs: [
      "Black Membership provides nationwide VIP privileges within one approved country. Platinum Membership expands that relationship internationally, allowing an approved member to be considered for eligible activities and opportunities outside their home country where the organization has officially made the programme available.",

      "The compulsory Black prerequisite ensures that every Platinum applicant already has an established membership identity, verified history and approved applicant structure before entering the international class.",

      "Platinum members receive stronger administrative priority than Black members, controlled communication with approved Elite members and designated senior staff, and access to selected international invitations, programmes and collaborations.",

      "The membership also introduces complimentary VIP and VVIP admission at qualifying official events. When the organization formally invites a Platinum member to travel for an eligible activity, approved accommodation and feeding may be provided for the stated invitation period. Transportation and other travel expenses remain the member’s responsibility.",
    ],
  },

  benefits: [
    {
      icon: BadgeCheck,
      title: "Official Platinum membership identity",
      description:
        "Receive a unique Platinum membership identity linked to the verified Black record, approved applicant structure and active international status.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Black-to-Platinum progression",
      description:
        "Platinum is issued only after the system confirms an active Black Membership and matching personal, household, business or organizational information.",
    },
    {
      icon: UsersRound,
      title: "Flexible approved applicant structure",
      description:
        "Platinum may recognize an individual, household, organization, business, investor or public figure through one approved membership structure.",
    },
    {
      icon: Globe2,
      title: "International membership coverage",
      description:
        "Become eligible for qualifying Platinum benefits in countries where the organization, an affiliated programme or an approved participating body officially makes them available.",
    },
    {
      icon: Map,
      title: "Cross-border opportunity eligibility",
      description:
        "A Platinum member may be considered for eligible events, programmes, giveaways, empowerment activities and business opportunities outside their home country.",
    },
    {
      icon: Zap,
      title: "Higher administrative priority",
      description:
        "Eligible Platinum communication, applications, accreditation and formal requests receive stronger priority than Black and all lower membership classes.",
    },
    {
      icon: Send,
      title: "International Platinum invitations",
      description:
        "Receive consideration for direct invitations to selected international events, gatherings, activities, programmes and business engagements.",
    },
    {
      icon: TicketCheck,
      title: "Complimentary VIP admission",
      description:
        "Receive complimentary VIP admission at qualifying events organized, co-organized or officially designated for Platinum access.",
    },
    {
      icon: Crown,
      title: "Complimentary VVIP admission",
      description:
        "Receive complimentary VVIP admission at qualifying official events where a Platinum VVIP category is expressly provided.",
    },
    {
      icon: Star,
      title: "VVIP accreditation and seating",
      description:
        "Receive designated Platinum accreditation, priority entry and VIP or VVIP seating where the venue, protocol, security and event structure permit.",
    },
    {
      icon: BedDouble,
      title: "Approved accommodation when officially invited",
      description:
        "When an official Platinum invitation expressly includes accommodation, the organization provides the approved lodging for the named member or representative during the stated invitation period.",
    },
    {
      icon: UtensilsCrossed,
      title: "Approved feeding during invited activities",
      description:
        "When included in the official invitation, appropriate feeding is provided during the approved event or activity period.",
    },
    {
      icon: Network,
      title: "Controlled Elite-member communication",
      description:
        "Communicate with approved Elite members through designated membership channels controlled by the organization.",
    },
    {
      icon: Building2,
      title: "Designated senior-staff communication",
      description:
        "Communicate with assigned senior staff for eligible Platinum matters through approved organizational channels.",
    },
    {
      icon: Handshake,
      title: "Higher-priority sponsorship requests",
      description:
        "Submit eligible sponsorship proposals for stronger consideration than Black requests, subject to evidence, relevance, resources and organizational approval.",
    },
    {
      icon: CalendarDays,
      title: "Programme and hosting proposals",
      description:
        "Submit eligible event, programme or hosting proposals through Platinum channels. Submission does not guarantee organizational participation.",
    },
    {
      icon: HandHeart,
      title: "International empowerment and support requests",
      description:
        "Submit eligible empowerment, humanitarian, community or support proposals connected to qualifying international or national programmes.",
    },
    {
      icon: Briefcase,
      title: "Higher-level business collaboration requests",
      description:
        "Submit eligible commercial, project, vendor, training or collaboration proposals for Platinum-level administrative consideration.",
    },
    {
      icon: PackageCheck,
      title: "Higher-value programme consideration",
      description:
        "Where an official programme differentiates by membership class, Platinum may receive stronger quantity, quality, access or service consideration than Black.",
    },
    {
      icon: Mail,
      title: "International opportunity notifications",
      description:
        "Receive relevant Platinum invitations, accreditation notices and programme announcements from approved countries and locations.",
    },
    {
      icon: Sparkles,
      title: "Future Platinum-only opportunities",
      description:
        "Become eligible for future international engagements and controlled member experiences reserved for active Platinum members.",
    },
  ],

  positionTitle: "How Platinum stands above Black",

  positionDescription:
    "Black provides nationwide VIP privileges, while Platinum requires a verified Black Membership and expands the relationship internationally. Platinum adds complimentary VVIP admission, stronger service priority, controlled Elite-member and senior-staff communication, and approved accommodation and feeding when officially invited. Platinum remains below Elite and does not include travel expenses, automatic meetings, company visits, partner communication or private leadership access.",

  valueSection: {
    eyebrow: "International VVIP value",
    title: "Why Platinum Membership costs significantly more",
    introduction:
      "The Platinum price reflects international administration, strict Black-linked verification, VIP and VVIP ticket coverage, enhanced communication access, higher request priority and approved hospitality for official invitations.",

    cards: [
      {
        icon: Globe2,
        label: "International reach",
        title: "Cross-border administration",
        description:
          "Platinum opportunities, invitations and verification may involve several countries, jurisdictions and approved programme locations.",
      },
      {
        icon: TicketCheck,
        label: "Premium admission",
        title: "VIP and VVIP ticket coverage",
        description:
          "The membership may replace the cost of eligible VIP and VVIP tickets where complimentary Platinum admission is expressly announced.",
      },
      {
        icon: BedDouble,
        label: "Invitation hospitality",
        title: "Accommodation and feeding",
        description:
          "Approved lodging and feeding may be provided when expressly included in an official Platinum invitation.",
      },
      {
        icon: Network,
        label: "Senior access",
        title: "Elite and senior-staff communication",
        description:
          "Platinum receives controlled access to approved Elite members and designated senior staff through authorized channels.",
      },
    ],
  },

  reviewSteps: [
    {
      title: "Verify an active Black Membership",
      description:
        "Enter the unique Black membership number so the system can retrieve and validate the official record.",
    },
    {
      title: "Confirm matching identity",
      description:
        "The name, applicant category, organization information and primary representative must correspond with the verified Black profile.",
    },
    {
      title: "Complete the Platinum application",
      description:
        "Provide the additional identity, international eligibility, activity, business or organizational information required for Platinum assessment.",
    },
    {
      title: "Choose a duration and complete payment",
      description:
        "Select monthly, yearly or one-time Platinum Membership and complete the confirmed payment before formal review.",
    },
    {
      title: "Enhanced administrative assessment",
      description:
        "The organization reviews membership history, documents, conduct, international suitability, application purpose and Platinum-level eligibility.",
    },
    {
      title: "Approval or eligible refund",
      description:
        "Approved applicants receive their Platinum identity. If finally denied, an eligible refund is submitted through the payment provider and completion may take up to 10 business days.",
    },
  ],

  managementSection: {
    eyebrow: "Platinum management",
    title: "International status, invitations and hospitality",
    introduction:
      "Platinum remains linked to the verified Black record, approved applicant structure and official invitation conditions.",

    cards: [
      {
        icon: ShieldCheck,
        title: "The Black foundation remains verified",
        description:
          "The Platinum profile retains a permanent connection to the Black Membership used to qualify for the application.",
      },
      {
        icon: UserRoundCog,
        title: "One approved representative",
        description:
          "A household, organization or business must maintain one verified representative responsible for communication and membership administration.",
      },
      {
        icon: Globe2,
        title: "International access is programme-based",
        description:
          "Platinum coverage applies only where an eligible programme, event or opportunity has been officially opened or announced.",
      },
      {
        icon: TicketCheck,
        title: "VIP and VVIP access requires verification",
        description:
          "Complimentary admission requires an active Platinum card, valid membership reference and any event-specific accreditation.",
      },
      {
        icon: BedDouble,
        title: "Hospitality must appear in the invitation",
        description:
          "Accommodation and feeding are provided only when expressly stated and approved for the named member or representative.",
      },
      {
        icon: RefreshCw,
        title: "Renewal remains the holder’s responsibility",
        description:
          "Monthly and yearly Platinum Membership must be renewed before expiry unless automatic renewal is separately authorized.",
      },
      {
        icon: Clock3,
        title: "Expired privileges become inactive",
        description:
          "International access, VVIP admission, Elite communication and invitation hospitality remain unavailable while membership is expired or suspended.",
      },
      {
        icon: ShieldCheck,
        title: "Privilege misuse may end membership",
        description:
          "Ticket resale, impersonation, unauthorized guests, false documentation or misuse of communication access may result in suspension or cancellation.",
      },
    ],
  },

  limitations: [
    "An applicant cannot apply for Platinum directly from Starter, Family or Silver. An approved and active Black Membership is compulsory.",

    "A false, expired, suspended, cancelled, duplicated or mismatched Black membership number prevents Platinum eligibility.",

    "The legal identity, applicant structure and primary representative must correspond with the verified Black record unless a documented change has been formally approved.",

    "International coverage does not mean that every benefit is available in every country. The programme or opportunity must be officially opened in the relevant location.",

    "Complimentary VIP and VVIP admission applies only to qualifying events organized, co-organized or officially designated for Platinum access.",

    "VIP or VVIP admission does not automatically include backstage access, private leadership rooms, partner lounges, board areas, sponsor areas or confidential executive spaces.",

    "Ticket coverage applies to the approved Platinum member or authorized primary representative. Guests, family members, employees and organizational delegates are not automatically included.",

    "Platinum does not cover airfare, road transport, airport transfers, visas, passports, travel insurance, local transportation or other travel expenses.",

    "Accommodation and feeding apply only when expressly included in an official invitation and only for the approved period and named member or representative.",

    "Accommodation and feeding cannot automatically be exchanged for cash, transferred to another person or extended beyond the approved invitation period.",

    "Platinum members cannot demand, book or automatically request private meetings with leadership.",

    "Company visits, leadership meetings and similar private engagements remain invitation-only.",

    "Platinum does not provide direct communication with company partners, board members, private leadership or 6clement Joshua unless separately authorized or invited.",

    "Communication with Elite members and senior staff occurs only through approved channels and does not guarantee a response, agreement or personal relationship.",

    "Platinum members cannot represent, speak for, negotiate for, sign for or legally bind 6clement Joshua or any affiliated organization.",

    "Platinum does not provide access to confidential databases, internal staff systems, financial records, executive portals or private company information.",

    "The right to submit sponsorship, support, hosting, empowerment or collaboration proposals does not guarantee approval, funding, attendance or endorsement.",

    "Platinum does not automatically create investor, shareholder, partner, board, employee, contractor, agent or ownership status.",

    "A household, organization or business is treated as one approved Platinum membership unit. One payment does not create separate guaranteed benefits for every associated person.",

    "Once the application is approved and the Platinum identity is issued, payment is not refundable because the member changed their mind, failed to travel or did not receive a specific invitation or opportunity.",
  ],

  finalCtaDescription:
    "Progress from verified Black status into an international VVIP relationship with premium event admission, stronger priority, controlled Elite communication and approved invitation hospitality.",
};

const elitePageContent: DetailedMembershipContent = {
  heroDescription:
    "Elite Membership is the highest public international relationship class within the 6clement Joshua membership structure. It is reserved for approved Platinum members seeking executive-level communication, premium international recognition, MVIP event access, formal meeting and company-visit requests, and complete approved travel hospitality when officially invited.",

  overviewIntroduction:
    "Elite sits immediately below the private 6clement Joshua Membership. It provides the strongest public membership treatment while preserving the distinction between premium membership and a private company, investment or strategic-partner relationship.",

  overviewCards: [
    {
      icon: ShieldCheck,
      label: "Entry requirement",
      title: "Active Platinum required",
      description:
        "An approved and active Platinum Membership must be verified before the Elite application can proceed.",
    },
    {
      icon: UsersRound,
      label: "Applicant structure",
      title: "Individual or approved entity",
      description:
        "Elite may recognize an approved individual, household, organization, business, investor or public figure through one verified structure.",
    },
    {
      icon: Globe2,
      label: "Coverage level",
      title: "International Elite access",
      description:
        "Eligible privileges may apply internationally wherever an official Elite programme, opportunity, activity or invitation is available.",
    },
    {
      icon: Gem,
      label: "Service class",
      title: "Highest public membership",
      description:
        "Elite receives the strongest public-tier recognition, communication priority, hospitality and opportunity consideration.",
    },
  ],

  eligibilityGate: {
    icon: LockKeyhole,
    eyebrow: "Strict Platinum progression",
    title: "Platinum Membership must be verified",
    introduction:
      "The Elite application remains unavailable until the official system retrieves an active Platinum Membership belonging to the same applicant, household, organization or approved representative.",

    requirements: [
      "The applicant must already hold an approved and active Platinum Membership.",

      "The unique Platinum membership identification number must be entered and verified against the official membership database.",

      "The legal name, applicant category, organization information and primary representative must match the verified Platinum record.",

      "A different person or entity cannot use another member’s Platinum identity to submit an Elite application.",

      "An expired, suspended, cancelled, duplicated, false or mismatched Platinum record prevents the application from proceeding.",

      "A household, organization or business must retain the approved structure and principal representative connected to its Platinum Membership.",

      "Verified Platinum information may be used to prefill the Elite application, but additional Elite-level declarations and documents will still be required.",

      "Holding Platinum creates eligibility to apply. It does not create automatic Elite approval.",
    ],
  },

  purpose: {
    icon: Gem,
    eyebrow: "Why it exists",
    title: "Why Elite Membership was created",
    introduction:
      "Elite was created for established Platinum members requiring the highest public level of international treatment, communication and organizational consideration.",

    paragraphs: [
      "Platinum provides international VVIP recognition and controlled access to Elite members and designated senior staff. Elite advances that relationship by introducing communication with approved leadership, partners, senior executives, other Elite members and members of the private 6clement Joshua class through authorized channels.",

      "Elite is designed for applicants whose relationship, activities, investments, public position, household responsibilities or organizational interests may require stronger international support and more direct administrative attention.",

      "Elite members may submit formal requests for meetings, executive appointments, company visits, official attendance, sponsorship, investment consideration, empowerment programmes, collaboration and other senior-level engagements. Each request remains subject to verification, relevance, availability and approval.",

      "The defining Elite privilege is complete approved invitation hospitality. When an Elite member is formally invited to a qualifying activity, the organization may cover the approved flight, airport transfers, road transportation, accommodation and feeding stated in the invitation.",
    ],
  },

  benefits: [
    {
      icon: BadgeCheck,
      title: "Official Elite membership identity",
      description:
        "Receive a unique Elite membership identity linked to the verified Platinum record, approved applicant structure and active international status.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Platinum-to-Elite progression",
      description:
        "Elite is issued only after the organization confirms the applicant’s active Platinum Membership and matching identity or entity information.",
    },
    {
      icon: UsersRound,
      title: "Approved individual or entity membership",
      description:
        "Elite may recognize an individual, household, organization, business, investor or public figure under one approved membership structure.",
    },
    {
      icon: Globe2,
      title: "International Elite coverage",
      description:
        "Become eligible for qualifying Elite programmes, invitations and opportunities across countries where they are officially made available.",
    },
    {
      icon: Zap,
      title: "Highest public-tier priority",
      description:
        "Eligible Elite communication, accreditation and formal requests receive priority above Platinum, Black, Silver, Family and Starter.",
    },
    {
      icon: LockKeyhole,
      title: "Dedicated Elite communication route",
      description:
        "Use controlled Elite channels for eligible membership, programme, executive, partnership and organizational communication.",
    },
    {
      icon: Building2,
      title: "Leadership communication access",
      description:
        "Communicate with approved organizational leadership through designated Elite channels, subject to availability, relevance and communication policy.",
    },
    {
      icon: Network,
      title: "Partner and senior-executive communication",
      description:
        "Communicate with approved partners and senior executives through controlled channels when the matter falls within an eligible Elite purpose.",
    },
    {
      icon: Gem,
      title: "Elite member network",
      description:
        "Communicate with other approved Elite members through private membership spaces or networking channels provided by the organization.",
    },
    {
      icon: Crown,
      title: "6clement Joshua member communication",
      description:
        "Elite is the only public membership class permitted to communicate with approved members of the private 6clement Joshua class through authorized channels.",
    },
    {
      icon: CalendarDays,
      title: "Meeting request access",
      description:
        "Submit formal requests for eligible meetings with designated leadership, executives, departments or approved company representatives.",
    },
    {
      icon: Building2,
      title: "Company-visit requests",
      description:
        "Request an approved visit to an eligible company location, programme site, office or organizational activity.",
    },
    {
      icon: UserRoundCog,
      title: "Executive appointment requests",
      description:
        "Submit a formal request for an executive appointment where the subject is relevant, properly documented and appropriate for Elite review.",
    },
    {
      icon: Send,
      title: "Official attendance requests",
      description:
        "Request the attendance or participation of an approved organizational representative at an eligible event, programme or engagement.",
    },
    {
      icon: TicketCheck,
      title: "Complimentary VIP admission",
      description:
        "Receive complimentary VIP admission at qualifying events officially opened to active Elite members.",
    },
    {
      icon: Crown,
      title: "Complimentary VVIP admission",
      description:
        "Receive complimentary VVIP admission, priority entry and designated premium seating where the event provides an approved VVIP category.",
    },
    {
      icon: Gem,
      title: "Complimentary MVIP event access",
      description:
        "Receive the event’s approved MVIP or highest premium membership-access category where that classification is officially available to Elite members.",
    },
    {
      icon: Star,
      title: "Elite accreditation and recognition",
      description:
        "Receive the strongest public membership accreditation, recognition and designated treatment at eligible official events and activities.",
    },
    {
      icon: Plane,
      title: "Approved domestic flight coverage",
      description:
        "When expressly included in an official Elite invitation, the organization may arrange or cover the approved domestic flight required to attend.",
    },
    {
      icon: Plane,
      title: "Approved international flight coverage",
      description:
        "When expressly included in an official Elite invitation, the organization may arrange or cover the approved international flight connected to that invitation.",
    },
    {
      icon: Car,
      title: "Airport transfer and road transportation",
      description:
        "Approved airport transfers and required road transportation may be provided as part of the official Elite invitation itinerary.",
    },
    {
      icon: BedDouble,
      title: "Approved accommodation",
      description:
        "Receive approved lodging for the named Elite member or authorized representative during the period specified in the official invitation.",
    },
    {
      icon: UtensilsCrossed,
      title: "Approved feeding",
      description:
        "Receive appropriate feeding during the approved invitation period where it is included in the official hospitality arrangement.",
    },
    {
      icon: Handshake,
      title: "Senior sponsorship consideration",
      description:
        "Submit eligible sponsorship proposals for the organization’s highest public-tier consideration, subject to evidence, resources and approval.",
    },
    {
      icon: Briefcase,
      title: "Investment and business proposals",
      description:
        "Submit eligible investment, commercial, project, vendor, expansion or business-collaboration proposals through Elite channels.",
    },
    {
      icon: HandHeart,
      title: "Empowerment and support proposals",
      description:
        "Submit eligible humanitarian, empowerment, education, development or community-support proposals for senior administrative consideration.",
    },
    {
      icon: Network,
      title: "Strategic introduction consideration",
      description:
        "Request an appropriate introduction to an approved investor, partner, executive or decision-maker when the organization considers the introduction relevant and suitable.",
    },
    {
      icon: PackageCheck,
      title: "Highest public programme consideration",
      description:
        "Where an official programme differentiates benefits by membership level, Elite may receive the strongest public-tier quality, quantity, access or service consideration.",
    },
    {
      icon: Mail,
      title: "Priority international notifications",
      description:
        "Receive selected Elite invitations, executive notices, international opportunities and premium accreditation information.",
    },
    {
      icon: Sparkles,
      title: "Future Elite-only privileges",
      description:
        "Become eligible for future international experiences, programmes and controlled opportunities reserved for active Elite members.",
    },
  ],

  positionTitle: "How Elite stands above Platinum",

  positionDescription:
    "Platinum provides international VVIP recognition, approved accommodation and feeding, and controlled communication with Elite members and senior staff. Elite adds MVIP access, the highest public administrative priority, controlled communication with leadership, partners, senior executives and private 6clement Joshua members, formal meeting and company-visit requests, and approved flights, airport transfers and road transportation when officially invited. Elite remains a membership relationship and does not automatically create the private company, investment or strategic-partner status attached to the final tier.",

  valueSection: {
    eyebrow: "Highest public-tier value",
    title: "Why Elite Membership costs substantially more",
    introduction:
      "The Elite price reflects international executive administration, premium event admission, leadership networking, senior request processing and complete approved invitation travel and hospitality.",

    cards: [
      {
        icon: Plane,
        label: "Invitation travel",
        title: "Approved flight and transport coverage",
        description:
          "Official Elite invitations may include approved domestic or international flights, airport transfers and required road transportation.",
      },
      {
        icon: Gem,
        label: "Premium access",
        title: "VIP, VVIP and MVIP admission",
        description:
          "Elite may replace the cost of qualifying premium event admission where an approved Elite access category is available.",
      },
      {
        icon: Network,
        label: "Executive network",
        title: "Leadership and final-class communication",
        description:
          "Elite receives controlled communication with leadership, partners, senior executives, other Elite members and approved final-class members.",
      },
      {
        icon: Zap,
        label: "Senior priority",
        title: "Highest public request position",
        description:
          "Eligible Elite proposals and requests receive the strongest public membership consideration within the organizational workflow.",
      },
    ],
  },

  reviewSteps: [
    {
      title: "Verify an active Platinum Membership",
      description:
        "Enter the unique Platinum membership number so the system can retrieve and validate the official record.",
    },
    {
      title: "Confirm the matching applicant",
      description:
        "The legal identity, applicant category, organization details and primary representative must correspond with the Platinum profile.",
    },
    {
      title: "Complete the Elite declarations",
      description:
        "Provide the additional background, purpose, international activity, organizational information and documents required for Elite assessment.",
    },
    {
      title: "Choose a duration and complete payment",
      description:
        "Select monthly, yearly or one-time Elite Membership and complete the confirmed payment before the application enters formal review.",
    },
    {
      title: "Enhanced senior-level review",
      description:
        "The organization reviews the applicant’s membership history, conduct, documentation, international suitability and intended use of Elite privileges.",
    },
    {
      title: "Approval or eligible refund",
      description:
        "Approved applicants receive their Elite identity. If finally denied, an eligible refund is submitted through the payment provider and completion may take up to 10 business days.",
    },
  ],

  managementSection: {
    eyebrow: "Elite management",
    title: "Executive access, invitations and international hospitality",
    introduction:
      "Elite privileges remain connected to the verified Platinum record, approved applicant structure and the exact terms of each official invitation or authorization.",

    cards: [
      {
        icon: ShieldCheck,
        title: "The Platinum foundation remains linked",
        description:
          "The Elite profile retains a verified connection to the Platinum Membership used during application.",
      },
      {
        icon: UserRoundCog,
        title: "One approved primary representative",
        description:
          "A household, organization or business must retain one verified representative responsible for communication and use of Elite privileges.",
      },
      {
        icon: LockKeyhole,
        title: "Executive communication remains controlled",
        description:
          "Leadership, partner, executive and final-class communication takes place only through approved membership channels.",
      },
      {
        icon: CalendarDays,
        title: "Requests require confirmation",
        description:
          "Meetings, visits, appointments and official attendance become valid only after the organization expressly approves and confirms them.",
      },
      {
        icon: Plane,
        title: "Travel must be pre-authorized",
        description:
          "Flight and transportation coverage applies only to travel arranged or expressly approved within an official Elite invitation.",
      },
      {
        icon: BedDouble,
        title: "Hospitality follows the invitation",
        description:
          "Accommodation and feeding apply only to the approved member or representative and only during the stated invitation period.",
      },
      {
        icon: RefreshCw,
        title: "Renewal remains the holder’s responsibility",
        description:
          "Monthly and yearly Elite Membership must be renewed before expiry unless automatic renewal is separately authorized.",
      },
      {
        icon: Clock3,
        title: "Expired privileges become inactive",
        description:
          "Communication access, meeting requests, premium admission and invitation hospitality remain unavailable while Elite Membership is expired or suspended.",
      },
    ],
  },

  limitations: [
    "An applicant cannot apply for Elite directly from Starter, Family, Silver or Black. An approved and active Platinum Membership is compulsory.",

    "A false, expired, suspended, cancelled, duplicated or mismatched Platinum membership number prevents Elite eligibility.",

    "The Elite applicant’s identity, entity structure and primary representative must correspond with the verified Platinum record unless a documented change has been approved.",

    "Elite provides international rather than final-tier global company relationship status.",

    "Communication with leadership, partners, executives, Elite members and 6clement Joshua members takes place only through approved and controlled channels.",

    "Communication access does not guarantee a response, agreement, investment, partnership, private friendship or personal relationship.",

    "Meeting, company-visit, executive-appointment and official-attendance requests remain subject to relevance, scheduling, security, availability and final approval.",

    "Submitting a request does not authorize a member to arrive at an office, private residence, event or company location without written confirmation.",

    "VIP, VVIP and MVIP admission applies only where the relevant event category is officially provided and opened to Elite members.",

    "Premium event access does not automatically include backstage areas, private residences, board meetings, confidential partner rooms or restricted leadership spaces.",

    "Flight, transfer and road-transportation coverage applies only when expressly included in an official invitation and approved before booking.",

    "The organization is not required to reimburse self-booked, self-initiated, upgraded, changed or unapproved travel.",

    "The travel class, airline, route, dates, accommodation and transportation arrangements remain subject to the approved invitation and organizational travel policy.",

    "Visa fees, passport expenses, travel insurance and personal travel costs are not automatically included unless the invitation expressly states otherwise.",

    "Travel and hospitality benefits apply to the named Elite member or authorized primary representative. Guests, relatives, staff and delegates are not automatically covered.",

    "Flights, accommodation, feeding or transport cannot automatically be exchanged for cash, transferred, resold or extended beyond the invitation period.",

    "Elite members cannot represent, speak for, negotiate for, sign for or legally bind 6clement Joshua or any affiliated organization.",

    "Elite does not authorize use of organizational names, logos, documents or titles in a way that implies employment, agency, partnership or endorsement.",

    "Elite does not provide unrestricted access to confidential databases, internal financial records, private leadership information or protected company systems.",

    "Sponsorship, investment, empowerment, collaboration and strategic-introduction requests do not guarantee funding, approval, participation or endorsement.",

    "Elite does not automatically create investor, shareholder, strategic partner, board, employee, contractor, agent or ownership status.",

    "Those private company and strategic relationship rights remain subject to the separate 6clement Joshua Membership process and any required legal agreements.",

    "A household, organization or business is treated as one approved Elite membership unit. Associated individuals do not automatically receive separate travel, ticketing or hospitality entitlements.",

    "Once the application is approved and the Elite identity is issued, payment is not refundable because the member changed their mind, failed to use the privileges or did not receive a specific meeting, invitation or opportunity.",
  ],

  finalCtaDescription:
    "Progress from verified Platinum status into the highest public international membership class, with MVIP recognition, executive communication, senior request access and complete approved invitation hospitality.",
};

const sixClementJoshuaPageContent: DetailedMembershipContent = {
  heroDescription:
    "6clement Joshua Membership is the highest private company-relationship class within the membership structure. It is reserved for verified Elite members seeking serious investment, strategic partnership, significant business participation or another substantial long-term relationship with the parent organization. Entry begins through invitation or private consideration, not immediate payment.",

  overviewIntroduction:
    "This is not an ordinary public membership. It is a private relationship route for approved investors, strategic partners and significant business relationships whose involvement may require direct CEO communication, executive consideration and structured company-level engagement.",

  overviewCards: [
    {
      icon: LockKeyhole,
      label: "Entry requirement",
      title: "Active Elite required",
      description:
        "A verified and active Elite Membership is required before an invitation or private consideration request can proceed.",
    },
    {
      icon: Landmark,
      label: "Relationship class",
      title: "Private company relationship",
      description:
        "The membership is intended for serious investment, strategic partnership and significant organizational relationships.",
    },
    {
      icon: Globe2,
      label: "Coverage level",
      title: "Global relationship access",
      description:
        "Approved engagement may extend across countries and organizational locations according to the relationship and applicable agreements.",
    },
    {
      icon: Crown,
      label: "Membership position",
      title: "Highest membership class",
      description:
        "This is the highest relationship level in the complete 6clement Joshua membership structure.",
    },
  ],

  eligibilityGate: {
    icon: LockKeyhole,
    eyebrow: "Private eligibility requirement",
    title: "Elite verification is required before consideration",
    introduction:
      "The private request process remains unavailable until the system verifies that the applicant holds an active Elite Membership belonging to the same individual, household, organization or approved primary representative.",

    requirements: [
      "The applicant must hold an approved and active Elite Membership.",

      "The unique Elite membership identification number must be entered and verified against the official membership database.",

      "The legal name, applicant type, organization details and primary representative must match the verified Elite record.",

      "A different individual, household, business or organization cannot use another member’s Elite identity to request consideration.",

      "An expired, suspended, cancelled, duplicated, false or mismatched Elite record prevents the request from proceeding.",

      "An invited applicant must provide the valid invitation code issued by the organization.",

      "An Elite member without an invitation may submit a private consideration request, but submission does not guarantee an invitation or approval.",

      "No payment is collected during the initial private consideration request.",

      "The organization may require identity verification, business records, financial information, due diligence, references and additional documentation before making a decision.",

      "Submitting a request does not create membership, partnership, investment rights, ownership, board authority or any other company position.",
    ],
  },

  purpose: {
    icon: Landmark,
    eyebrow: "Why it exists",
    title: "Why 6clement Joshua Membership was created",
    introduction:
      "The final membership was created to provide a controlled private route for people and entities seeking a substantial relationship with the parent organization.",

    paragraphs: [
      "Elite is the highest public membership class. The 6clement Joshua Membership sits beyond the ordinary public structure and is designed for verified members whose proposed involvement may affect investment, expansion, strategic development, major commercial opportunities or long-term organizational relationships.",

      "The membership allows approved investors, strategic partners, businesses, organizations and other significant applicants to communicate through a private company-level relationship rather than through standard public or membership-support channels.",

      "An approved member may communicate directly with the CEO and designated leadership, contribute ideas, submit recommendations and present serious proposals for organizational consideration. This creates meaningful access without transferring the authority to make company decisions.",

      "The CEO, board and authorized leadership remain responsible for every final company decision. A member’s idea, recommendation or proposal may be reviewed and adopted, but membership alone does not create voting rights, ownership or management authority.",
    ],
  },

  benefits: [
    {
      icon: BadgeCheck,
      title: "Official highest-tier membership identity",
      description:
        "Receive a unique and verifiable 6clement Joshua Membership identity linked to the approved Elite record and private relationship profile.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Elite-to-private progression",
      description:
        "The relationship is available only after the applicant’s active Elite Membership and matching identity or entity information have been verified.",
    },
    {
      icon: Landmark,
      title: "Private company-relationship status",
      description:
        "Become part of the highest approved membership relationship surrounding the 6clement Joshua parent organization and its affiliated businesses.",
    },
    {
      icon: Globe2,
      title: "Global relationship consideration",
      description:
        "Eligible communication, opportunities and approved engagements may be considered globally according to the member’s relationship and applicable organizational agreements.",
    },
    {
      icon: MessagesSquare,
      title: "Controlled direct CEO communication",
      description:
        "Communicate directly with the CEO through the private channels and procedures provided for approved final-tier members.",
    },
    {
      icon: Building2,
      title: "Direct senior-leadership communication",
      description:
        "Communicate with designated senior executives, authorized company leaders and relevant departments regarding approved company-level matters.",
    },
    {
      icon: Network,
      title: "Private final-tier member network",
      description:
        "Communicate with other approved members of the final relationship class through controlled private membership spaces where available.",
    },
    {
      icon: Lightbulb,
      title: "Strategic idea contribution",
      description:
        "Present serious ideas, recommendations and growth proposals directly for executive and organizational consideration.",
    },
    {
      icon: Waypoints,
      title: "Organizational-development participation",
      description:
        "Contribute perspectives on expansion, products, services, community programmes, partnerships and other approved development areas.",
    },
    {
      icon: CircleDollarSign,
      title: "Private investment consideration",
      description:
        "Submit an investment interest or capital proposal for internal review, due diligence and separate commercial negotiation.",
    },
    {
      icon: Handshake,
      title: "Strategic partnership consideration",
      description:
        "Submit a proposed strategic partnership, joint initiative or significant business relationship for private organizational review.",
    },
    {
      icon: Briefcase,
      title: "Major business proposal access",
      description:
        "Present substantial commercial, expansion, technology, property, media, infrastructure or project proposals through private company channels.",
    },
    {
      icon: CalendarDays,
      title: "Highest-priority meeting requests",
      description:
        "Request eligible meetings with the CEO, senior leadership, executives or relevant company representatives through the private scheduling process.",
    },
    {
      icon: Building2,
      title: "Company and project visit requests",
      description:
        "Request approved visits to company offices, operational locations, projects, programmes or other relevant organizational facilities.",
    },
    {
      icon: Send,
      title: "Official-attendance requests",
      description:
        "Request the attendance or participation of an authorized company representative at an eligible business, investment or strategic engagement.",
    },
    {
      icon: Crown,
      title: "Highest event-access consideration",
      description:
        "Receive the highest applicable membership admission, accreditation and seating level at qualifying official events.",
    },
    {
      icon: Plane,
      title: "Approved invitation travel",
      description:
        "When expressly stated in a formal invitation, approved flights, airport transfers and required road transportation may be arranged or covered.",
    },
    {
      icon: BedDouble,
      title: "Approved private hospitality",
      description:
        "Official invitations may include approved accommodation for the named member or authorized primary representative.",
    },
    {
      icon: UtensilsCrossed,
      title: "Approved feeding and hosting",
      description:
        "Feeding and appropriate hosting may be provided during the approved period stated in an official invitation.",
    },
    {
      icon: Zap,
      title: "Highest administrative priority",
      description:
        "Eligible final-tier communication and requests receive the highest membership-processing position within the organization.",
    },
    {
      icon: FileSignature,
      title: "Private documentation process",
      description:
        "Approved relationships may proceed to separate confidentiality, investment, partnership, commercial or other legal documentation where required.",
    },
    {
      icon: Scale,
      title: "Structured rights through separate agreements",
      description:
        "Any equity, ownership, profit participation, board position or legally binding commercial right must be expressly granted through separate signed agreements.",
    },
    {
      icon: HandHeart,
      title: "Highest-level programme proposals",
      description:
        "Submit substantial humanitarian, empowerment, education, development or public-impact proposals for senior organizational consideration.",
    },
    {
      icon: Sparkles,
      title: "Future private opportunities",
      description:
        "Become eligible for future private opportunities, briefings, engagements and relationship benefits reserved for approved final-tier members.",
    },
  ],

  positionTitle: "How the final tier stands above Elite",

  positionDescription:
    "Elite provides the highest public membership treatment, executive communication, premium international hospitality and senior request access. The 6clement Joshua Membership moves beyond the public structure into a private company-relationship class. It adds controlled direct CEO communication, strategic contribution, investment and partnership consideration, private documentation and the highest organizational relationship priority. It does not automatically transfer company ownership, voting power or decision-making authority.",

  valueSection: {
    eyebrow: "Private company value",
    title: "Why this is the highest membership class",
    introduction:
      "The final tier reflects the seriousness, confidentiality, executive administration, due diligence and company-level access required to manage investors, strategic partners and significant long-term relationships.",

    cards: [
      {
        icon: MessagesSquare,
        label: "CEO relationship",
        title: "Controlled direct communication",
        description:
          "Approved members receive a private route for communicating with the CEO and designated company leadership.",
      },
      {
        icon: Lightbulb,
        label: "Strategic contribution",
        title: "Ideas considered at company level",
        description:
          "Members may submit recommendations and proposals for direct executive and organizational consideration.",
      },
      {
        icon: CircleDollarSign,
        label: "Investment route",
        title: "Private investment consideration",
        description:
          "Serious investment interest may proceed through due diligence, negotiation and separate legal documentation.",
      },
      {
        icon: Handshake,
        label: "Partnership route",
        title: "Strategic relationship consideration",
        description:
          "Significant partnership and commercial relationships may be privately reviewed and developed.",
      },
    ],
  },

  reviewSteps: [
    {
      title: "Verify an active Elite Membership",
      description:
        "Enter the unique Elite membership number so the system can retrieve and validate the official membership record.",
    },
    {
      title: "Choose the private request route",
      description:
        "Provide a valid invitation code when invited, or select private consideration when requesting review without an invitation.",
    },
    {
      title: "Confirm the matching applicant",
      description:
        "The individual, household, organization, business and primary representative information must correspond with the verified Elite record.",
    },
    {
      title: "Submit the relationship request",
      description:
        "Explain the proposed investment, strategic partnership, major business relationship or other substantial reason for seeking the final membership class.",
    },
    {
      title: "Provide supporting information",
      description:
        "Submit relevant business records, professional history, proposal documents, financial capacity information, references and other requested evidence.",
    },
    {
      title: "Internal review and due diligence",
      description:
        "The organization privately assesses identity, background, reputation, financial or strategic capacity, relationship suitability and potential organizational value.",
    },
    {
      title: "Private contact and negotiation",
      description:
        "Selected applicants may be contacted for meetings, verification, clarification, negotiation and preparation of separate legal or commercial documentation.",
    },
    {
      title: "Final approval and onboarding",
      description:
        "Only after final approval will the applicant receive onboarding instructions, applicable membership value, payment instructions and required agreements.",
    },
  ],

  managementSection: {
    eyebrow: "Private relationship management",
    title: "Communication, contribution and company authority",
    introduction:
      "The relationship is managed privately and remains subject to confidentiality, due diligence, company policy and any separately signed agreements.",

    cards: [
      {
        icon: MessagesSquare,
        title: "Direct communication remains controlled",
        description:
          "CEO and leadership communication takes place through the approved private channels, scheduling procedures and relationship boundaries.",
      },
      {
        icon: Lightbulb,
        title: "Members may contribute ideas",
        description:
          "Members may provide advice, ideas and recommendations that leadership may consider when making organizational decisions.",
      },
      {
        icon: Scale,
        title: "Members do not make final decisions",
        description:
          "Final authority remains with the CEO, board and authorized company leadership unless a separate legal agreement expressly grants another right.",
      },
      {
        icon: FileSignature,
        title: "Legal rights require separate agreements",
        description:
          "Investment, ownership, partnership, profit, voting, board and commercial rights exist only when documented in separately signed agreements.",
      },
      {
        icon: LockKeyhole,
        title: "Confidentiality may be compulsory",
        description:
          "Members may be required to sign confidentiality or non-disclosure agreements before receiving protected business information.",
      },
      {
        icon: ShieldCheck,
        title: "Ongoing verification may be required",
        description:
          "The organization may periodically review identity, business status, compliance, relationship conduct and continued suitability.",
      },
      {
        icon: UserRoundCog,
        title: "One approved primary representative",
        description:
          "An organization, business, household or investment entity must maintain one authorized representative for official membership communication.",
      },
      {
        icon: RefreshCw,
        title: "Renewal or continuation remains conditional",
        description:
          "Continuation depends on active status, compliance, relationship quality, applicable payments and any separate agreement requirements.",
      },
    ],
  },

  limitations: [
    "An active and verified Elite Membership is required before a private consideration request or invitation can proceed.",

    "A false, expired, suspended, cancelled, duplicated or mismatched Elite membership number prevents eligibility.",

    "The applicant’s legal identity, entity structure and primary representative must correspond with the verified Elite record unless a documented change is formally approved.",

    "Submitting a private request does not guarantee an invitation, meeting, approval or membership.",

    "No payment is collected during the initial consideration request. Payment becomes relevant only after approval, onboarding instructions and applicable documentation.",

    "Direct CEO communication is controlled and subject to availability, scheduling, relevance, security and company communication policy.",

    "The membership does not create a personal friendship, family relationship or unrestricted private access to the CEO.",

    "Members may submit requests and recommendations but cannot demand approval, funding, investment, sponsorship, staffing, company resources or executive action.",

    "Members may contribute ideas, but the CEO, board and authorized leadership retain final decision-making authority.",

    "Membership alone does not provide voting rights, company control, management power or authority over employees, departments or affiliated organizations.",

    "Membership alone does not create investor, shareholder, equity-holder, strategic-partner, board-member, employee, contractor, agent or ownership status.",

    "Any investment, equity, partnership, ownership, profit participation, board appointment or commercial right requires a separate signed legal agreement.",

    "Members cannot represent, speak for, negotiate for, sign for or legally bind the company unless separately authorized in writing.",

    "Members cannot use the organization’s name, logo, documents, membership status or leadership relationship to imply unauthorized endorsement or authority.",

    "Private communication and membership access do not provide unrestricted access to confidential databases, financial systems, employee records or protected company information.",

    "Confidential information received through the relationship cannot be disclosed, copied, sold, published or used outside the authorized purpose.",

    "Meeting, visit, travel and hospitality requests remain subject to written approval and do not become valid until formally confirmed.",

    "Travel, accommodation, feeding and transportation benefits apply only when expressly included in an official invitation or written authorization.",

    "Guests, family members, employees, advisers and organizational delegates are not automatically covered by the member’s travel, hospitality or event privileges.",

    "Investment and partnership requests remain subject to due diligence, source-of-funds verification, legal review, commercial suitability and applicable law.",

    "The organization may reject or discontinue a relationship involving fraud, illegality, reputational risk, abuse, conflict of interest, unauthorized disclosure or conduct inconsistent with company values.",

    "The organization may decline a request without disclosing confidential internal deliberations, third-party information or protected decision-making material.",

    "An approved membership relationship may be suspended or cancelled when the member violates confidentiality, misuses access, impersonates leadership or acts against organizational interests.",

    "Approval of the membership does not guarantee financial returns, business success, contract awards, investment acceptance or any specific commercial result.",

    "A household, organization or business is treated as one approved relationship unit unless separate written agreements provide otherwise.",

    "Once onboarding has been completed and the final membership identity has been issued, payment is not refundable merely because a member changed their mind or did not obtain a requested commercial outcome.",
  ],

  finalCtaDescription:
    "Request private consideration for the highest company-relationship class, designed for verified Elite members seeking serious investment, strategic partnership or significant long-term engagement with the 6clement Joshua organization.",
};

const detailedContentBySlug: Partial<
  Record<string, DetailedMembershipContent>
> = {
  starter: starterPageContent,
  family: familyPageContent,
  silver: silverPageContent,
  black: blackPageContent,
  platinum: platinumPageContent,
  elite: elitePageContent,
  "6clement-joshua": sixClementJoshuaPageContent,
};

function getMembershipBySlug(slug: string) {
  return memberships.find((membership) => membership.slug === slug);
}

export function generateStaticParams() {
  return memberships.map((membership) => ({
    slug: membership.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: MembershipPageProps): Promise<Metadata> {
  const { slug } = await params;
  const membership = getMembershipBySlug(slug);

  if (!membership) {
    return {
      title: "Membership not found | 6membership",
      description: "The requested membership could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const detailedContent = detailedContentBySlug[membership.slug];

  const description =
    detailedContent?.heroDescription ?? membership.shortDescription;

  return {
    title: `${membership.name} Benefits | 6membership`,
    description,
    alternates: {
      canonical: `/memberships/${membership.slug}`,
    },
    openGraph: {
      title: `${membership.name} Benefits`,
      description,
      url: `/memberships/${membership.slug}`,
      siteName: "6membership",
      type: "website",
      images: [
        {
          url: "/6logo.png",
          width: 1200,
          height: 630,
          alt: `${membership.name} by 6clement Joshua`,
        },
      ],
    },
  };
}

export default async function MembershipBenefitsPage({
  params,
}: MembershipPageProps) {
  const { slug } = await params;
  const membership = getMembershipBySlug(slug);

  if (!membership) {
    notFound();
  }

  const membershipSlug = membership.slug;
  const detailedContent = detailedContentBySlug[membership.slug];

  const isPrivateRequest =
    membership.applicationMode === "invitation_only_request";

  const previousMembership = memberships
    .filter((item) => item.rank < membership.rank)
    .sort((first, second) => second.rank - first.rank)[0];
  const eligibilityGate = detailedContent?.eligibilityGate;
  const EligibilityGateIcon = eligibilityGate?.icon;
  function getActionHref(period: MembershipBillingPeriod) {
    if (isPrivateRequest) {
      return `/request-consideration?membership=${membershipSlug}&term=${period}`;
    }

    return `/apply?membership=${membershipSlug}&billing=${period}`;
  }

  return (
    <main
      className={`membership-benefits-page membership-benefits-page-${membership.slug}`}
    >
      <MembershipBenefitsReveal />
      <SiteHeader />

      <section className="membership-benefits-hero">
        <div className="membership-benefits-hero-atmosphere" aria-hidden="true">
          <span className="membership-benefits-hero-glow" />
          <span className="membership-benefits-hero-ring ring-one" />
          <span className="membership-benefits-hero-ring ring-two" />
        </div>

        <div className="site-shell membership-benefits-hero-shell">
          <Link
            className="membership-benefits-back-link"
            href="/#memberships"
            aria-label="Back to memberships"
            title="Back to memberships"
          >
            <ChevronLeft size={21} />
          </Link>

          <div className="membership-benefits-hero-grid">
            <div className="membership-benefits-card-column">
              <article
                className={`premium-membership-card premium-membership-card-${membership.slug} membership-benefits-main-card`}
                aria-label={`${membership.name}, ${membership.coverageLabel} coverage`}
              >
                <div className="premium-card-surface" aria-hidden="true" />

                <div
                  className="premium-card-security-pattern"
                  aria-hidden="true"
                />

                <div className="premium-card-light-sweep" aria-hidden="true" />

                <div className="premium-card-topline">
                  <strong>{membership.cardLabel}</strong>
                  <span>{membership.coverageLabel}</span>
                </div>

                <div className="premium-card-logo">
                  <Image
                    src="/6logo.png"
                    alt="6clement Joshua logo"
                    width={190}
                    height={190}
                    priority
                  />
                </div>

                <div className="premium-card-parent-brand">
                  {membership.cardFooter}
                </div>
              </article>

              <div className="membership-benefits-card-status">
                <ShieldCheck size={17} />

                <span>
                  {isPrivateRequest
                    ? "Invitation-only relationship class"
                    : "Official membership class"}
                </span>
              </div>
            </div>

            <header className="membership-benefits-hero-copy">
              <span className="membership-benefits-rank">
                Membership rank {membership.rank} of {memberships.length}
              </span>

              <h1>{membership.name}</h1>

              <div className="membership-benefits-coverage">
                <Globe2 size={17} />
                <span>{membership.coverageLabel} coverage</span>
              </div>

              <p className="membership-benefits-introduction">
                {detailedContent?.heroDescription ??
                  membership.shortDescription}
              </p>

              <p className="membership-benefits-availability">
                {membership.applicationAvailability}
              </p>

              <div
                className="membership-benefits-term-strip"
                aria-label={
                  isPrivateRequest
                    ? "Choose a preferred membership term"
                    : "Choose membership duration"
                }
              >
                {billingOptions.map((option) => {
                  const price = getBaseMembershipPrice(
                    membership,
                    option.value,
                  );

                  const isYearly = option.value === "yearly";
                  const isOneTime = option.value === "one_time";

                  return (
                    <Link
                      key={option.value}
                      className={`membership-benefits-term-option ${
                        isYearly ? "is-recommended" : ""
                      } ${isOneTime ? "is-long-term" : ""}`}
                      href={getActionHref(option.value)}
                    >
                      <div className="membership-benefits-term-topline">
                        <span>{option.label}</span>

                        {isYearly && <b>Recommended</b>}

                        {isOneTime && <b>Long-term</b>}
                      </div>

                      <strong>
                        {formatMembershipPrice(price, membership.baseCurrency)}
                      </strong>

                      <small>{option.duration}</small>

                      {isYearly && (
                        <em>Recommended for continuous annual membership.</em>
                      )}

                      {isOneTime && (
                        <em>
                          Recommended for long-term membership commitment.
                        </em>
                      )}

                      <div className="membership-benefits-term-action">
                        <span>
                          {isPrivateRequest
                            ? "Request consideration"
                            : "Select this option"}
                        </span>

                        <ArrowRight size={16} />
                      </div>
                    </Link>
                  );
                })}
              </div>

              <p className="membership-benefits-term-note">
                {isPrivateRequest
                  ? "No payment is collected during the initial private consideration request. The selected term becomes relevant only after invitation, documentation and final approval."
                  : "Displayed prices include applicable tax. International applicants will see the supported checkout currency and confirmed payable amount before payment."}
              </p>

              <div className="membership-benefits-hero-actions">
                <a
                  className="premium-details-button"
                  href="#complete-membership-benefits"
                >
                  Explore complete benefits
                  <ArrowRight size={17} />
                </a>

                <a
                  className="premium-details-button"
                  href="#membership-pricing"
                >
                  View pricing
                </a>
              </div>
            </header>
          </div>
        </div>
      </section>

      <section className="membership-benefits-content">
        <div className="site-shell membership-benefits-content-shell">
          <section className="membership-benefits-overview">
            <div className="membership-benefits-section-heading">
              <span>Membership overview</span>
              <h2>What {membership.name} represents</h2>

              {detailedContent && <p>{detailedContent.overviewIntroduction}</p>}
            </div>

            <div className="membership-benefits-overview-grid">
              {detailedContent ? (
                detailedContent.overviewCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <article
                      key={card.title}
                      className="membership-benefits-overview-card"
                    >
                      <div className="membership-benefits-overview-card-title">
                        <span className="membership-benefits-overview-icon">
                          <Icon size={14} aria-hidden="true" />
                        </span>

                        <span>{card.label}</span>
                      </div>

                      <strong>{card.title}</strong>
                      <p>{card.description}</p>
                    </article>
                  );
                })
              ) : (
                <>
                  <article className="membership-benefits-overview-card">
                    <span>Recognition level</span>
                    <strong>
                      Rank {membership.rank} of {memberships.length}
                    </strong>
                    <p>
                      This membership establishes an official and verifiable
                      relationship within the 6clement Joshua network.
                    </p>
                  </article>

                  <article className="membership-benefits-overview-card">
                    <span>Coverage</span>
                    <strong>{membership.coverageLabel}</strong>
                    <p>{membership.applicationAvailability}</p>
                  </article>

                  <article className="membership-benefits-overview-card">
                    <span>Membership holder</span>
                    <strong>
                      {membership.membershipUnit === "family"
                        ? "Family or household"
                        : "Approved individual"}
                    </strong>
                    <p>
                      {membership.membershipUnit === "family"
                        ? "One recognized family membership identity is issued for the approved household."
                        : "The membership is issued to one approved person and cannot be transferred or shared."}
                    </p>
                  </article>

                  <article className="membership-benefits-overview-card">
                    <span>Application route</span>
                    <strong>
                      {isPrivateRequest
                        ? "Private consideration"
                        : "Open membership application"}
                    </strong>
                    <p>
                      {isPrivateRequest
                        ? "Invited applicants provide an invitation code. Other eligible individuals may request private consideration without making an initial payment."
                        : "Eligible applicants may select a membership duration, complete payment and submit their application for administrative review."}
                    </p>
                  </article>
                </>
              )}
            </div>
          </section>

          {eligibilityGate && EligibilityGateIcon && (
            <section className="membership-benefits-section">
              <div className="membership-benefits-section-heading">
                <span>{eligibilityGate.eyebrow}</span>
                <h2>{eligibilityGate.title}</h2>
                <p>{eligibilityGate.introduction}</p>
              </div>

              <article className="membership-benefits-eligibility-gate">
                <div className="membership-benefits-eligibility-gate-icon">
                  <EligibilityGateIcon size={19} aria-hidden="true" />
                </div>

                <div className="membership-benefits-eligibility-gate-content">
                  <strong>Application access requirements</strong>

                  <div className="membership-benefits-eligibility-requirements">
                    {eligibilityGate.requirements.map((requirement, index) => (
                      <div key={requirement}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <p>{requirement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </section>
          )}

          {detailedContent && (
            <section className="membership-benefits-section">
              <div className="membership-benefits-section-heading">
                <span>{detailedContent.purpose.eyebrow}</span>
                <h2>{detailedContent.purpose.title}</h2>
                <p>{detailedContent.purpose.introduction}</p>
              </div>

              <article className="membership-benefits-overview-card membership-benefits-story-card">
                <div className="membership-benefits-story-icon">
                  <detailedContent.purpose.icon size={18} aria-hidden="true" />
                </div>

                <div className="membership-benefits-story-copy">
                  {detailedContent.purpose.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </section>
          )}

          <section
            id="complete-membership-benefits"
            className="membership-benefits-section"
          >
            <div className="membership-benefits-section-heading">
              <span>Complete privileges</span>
              <h2>What {membership.name} provides</h2>
              <p>
                These benefits apply only while the membership is active and
                remain subject to identity verification, eligibility,
                organizational rules and programme-specific requirements.
              </p>
            </div>

            <div className="membership-benefits-list">
              {detailedContent
                ? detailedContent.benefits.map((benefit, index) => {
                    const Icon = benefit.icon;

                    return (
                      <article
                        key={benefit.title}
                        className="has-detailed-benefit"
                      >
                        <div className="membership-benefits-list-number">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <span className="membership-benefits-benefit-icon">
                          <Icon size={14} aria-hidden="true" />
                        </span>

                        <div className="membership-benefits-benefit-copy">
                          <strong>{benefit.title}</strong>
                          <p>{benefit.description}</p>
                        </div>
                      </article>
                    );
                  })
                : membership.benefits.map((benefit, index) => (
                    <article key={benefit}>
                      <div className="membership-benefits-list-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <Check size={18} />
                      <p>{benefit}</p>
                    </article>
                  ))}
            </div>
          </section>

          <section className="membership-benefits-section membership-benefits-position-section">
            <div className="membership-benefits-section-heading">
              <span>Membership position</span>

              <h2>
                {detailedContent
                  ? detailedContent.positionTitle
                  : previousMembership
                    ? `How it stands above ${previousMembership.name}`
                    : "The official entry membership"}
              </h2>
            </div>

            <div className="membership-benefits-position-card">
              {detailedContent ? (
                <p>{detailedContent.positionDescription}</p>
              ) : previousMembership ? (
                <>
                  <div>
                    <span>Previous membership</span>
                    <strong>{previousMembership.name}</strong>
                    <small>{previousMembership.coverageLabel} coverage</small>
                  </div>

                  <ArrowRight size={22} />

                  <div>
                    <span>Current membership</span>
                    <strong>{membership.name}</strong>
                    <small>{membership.coverageLabel} coverage</small>
                  </div>

                  <p>
                    {membership.name} sits above {previousMembership.name} in
                    the official membership ranking. It provides a higher level
                    of recognition and the additional privileges specifically
                    listed on this page.
                  </p>
                </>
              ) : (
                <p>
                  This is the official entry point into the 6clement Joshua
                  membership structure.
                </p>
              )}
            </div>
          </section>

          {detailedContent && (
            <section className="membership-benefits-section">
              <div className="membership-benefits-section-heading">
                <span>{detailedContent.valueSection.eyebrow}</span>
                <h2>{detailedContent.valueSection.title}</h2>
                <p>{detailedContent.valueSection.introduction}</p>
              </div>

              <div className="membership-benefits-overview-grid">
                {detailedContent.valueSection.cards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <article
                      key={card.title}
                      className="membership-benefits-overview-card"
                    >
                      <div className="membership-benefits-overview-card-title">
                        <span className="membership-benefits-overview-icon">
                          <Icon size={14} aria-hidden="true" />
                        </span>

                        <span>{card.label}</span>
                      </div>

                      <strong>{card.title}</strong>
                      <p>{card.description}</p>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          <section
            id="membership-pricing"
            className="membership-benefits-section"
          >
            <div className="membership-benefits-section-heading">
              <span>
                {isPrivateRequest
                  ? "Private membership value"
                  : "Membership pricing"}
              </span>

              <h2>
                {isPrivateRequest
                  ? "Select a preferred membership term"
                  : "Choose your membership duration"}
              </h2>

              <p>
                {isPrivateRequest
                  ? "No payment is collected when a private consideration request is submitted. The values below apply only after invitation, review, documentation and final approval."
                  : "The displayed base prices include applicable tax. International applicants will see the supported checkout currency and exact payable amount before payment."}
              </p>
            </div>

            <div className="membership-benefits-pricing-grid">
              {billingOptions.map((option) => {
                const price = getBaseMembershipPrice(membership, option.value);

                return (
                  <article
                    key={option.value}
                    className="membership-benefits-price-card"
                  >
                    <span>{option.label}</span>

                    <strong>
                      {formatMembershipPrice(price, membership.baseCurrency)}
                    </strong>

                    <p>{option.duration}</p>

                    {membership.pricesIncludeTax && (
                      <small>Applicable tax included</small>
                    )}

                    <Link
                      className="membership-benefits-price-action"
                      href={getActionHref(option.value)}
                    >
                      {isPrivateRequest
                        ? `Request ${option.label.toLowerCase()} consideration`
                        : `Apply with ${option.label.toLowerCase()} billing`}

                      <ArrowRight size={16} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="membership-benefits-section">
            <div className="membership-benefits-section-heading">
              <span>Review and approval</span>

              <h2>
                {isPrivateRequest
                  ? "How private consideration works"
                  : "Payment and administrative review"}
              </h2>
            </div>

            <div className="membership-benefits-review-panel">
              {isPrivateRequest && !detailedContent ? (
                <>
                  <article>
                    <span>01</span>
                    <div>
                      <strong>Submit a private request</strong>
                      <p>
                        Provide an invitation code or request consideration
                        through the dedicated private form.
                      </p>
                    </div>
                  </article>

                  <article>
                    <span>02</span>
                    <div>
                      <strong>Internal relationship review</strong>
                      <p>
                        The organization reviews the applicant and proposed
                        strategic relationship.
                      </p>
                    </div>
                  </article>

                  <article>
                    <span>03</span>
                    <div>
                      <strong>Private contact and documentation</strong>
                      <p>
                        Selected applicants are contacted for verification, due
                        diligence and documentation.
                      </p>
                    </div>
                  </article>

                  <article>
                    <span>04</span>
                    <div>
                      <strong>Final approval and onboarding</strong>
                      <p>
                        Membership is issued only after final approval and
                        completion of all applicable documentation.
                      </p>
                    </div>
                  </article>
                </>
              ) : detailedContent ? (
                detailedContent.reviewSteps.map((step, index) => (
                  <article key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.description}</p>
                    </div>
                  </article>
                ))
              ) : (
                <>
                  <article>
                    <span>01</span>
                    <div>
                      <strong>Select a membership duration</strong>
                      <p>
                        Choose monthly, yearly or one-time membership and review
                        the payable amount.
                      </p>
                    </div>
                  </article>

                  <article>
                    <span>02</span>
                    <div>
                      <strong>Complete payment</strong>
                      <p>
                        Payment is confirmed before the application is submitted
                        for administrative review.
                      </p>
                    </div>
                  </article>

                  <article>
                    <span>03</span>
                    <div>
                      <strong>Administrative review</strong>
                      <p>
                        The organization verifies the information, documents and
                        eligibility requirements.
                      </p>
                    </div>
                  </article>

                  <article>
                    <span>04</span>
                    <div>
                      <strong>Approval or eligible refund</strong>
                      <p>
                        Approved applicants receive their membership identity.
                        If denied, an eligible refund may take up to{" "}
                        {membership.refundProcessingBusinessDays} business days.
                      </p>
                    </div>
                  </article>
                </>
              )}
            </div>
          </section>

          {detailedContent && (
            <section className="membership-benefits-section">
              <div className="membership-benefits-section-heading">
                <span>{detailedContent.managementSection.eyebrow}</span>

                <h2>{detailedContent.managementSection.title}</h2>

                <p>{detailedContent.managementSection.introduction}</p>
              </div>

              <div className="membership-benefits-review-panel">
                {detailedContent.managementSection.cards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <article key={card.title}>
                      <span>
                        <Icon size={14} aria-hidden="true" />
                      </span>

                      <div>
                        <strong>{card.title}</strong>
                        <p>{card.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          <section className="membership-benefits-section">
            <div className="membership-benefits-section-heading">
              <span>Important conditions</span>
              <h2>What this membership does not guarantee</h2>
            </div>

            <div className="membership-benefits-conditions">
              {(detailedContent?.limitations ?? membership.limitations).map(
                (limitation) => (
                  <article key={limitation}>
                    <CircleAlert size={18} />
                    <p>{limitation}</p>
                  </article>
                ),
              )}
            </div>
          </section>

          <section className="membership-benefits-final-cta">
            <div>
              <span>
                {isPrivateRequest
                  ? "Private company relationship"
                  : `${membership.coverageLabel} membership`}
              </span>

              <h2>
                {isPrivateRequest
                  ? "Request private consideration"
                  : `Apply for ${membership.name}`}
              </h2>

              <p>
                {isPrivateRequest
                  ? "Submitting a request does not create membership, collect payment or guarantee an invitation."
                  : (detailedContent?.finalCtaDescription ??
                    "Choose your preferred duration and begin the official application process.")}
              </p>
            </div>

            <Link
              className="premium-apply-button"
              href={getActionHref("monthly")}
            >
              {membership.primaryActionLabel}
              <ArrowRight size={18} />
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
