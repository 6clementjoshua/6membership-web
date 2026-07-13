export type MembershipBillingPeriod = "monthly" | "yearly" | "one_time";

export type MembershipCoverage =
  | "state"
  | "regional"
  | "nationwide"
  | "international";

export type MembershipApplicationStatus =
  | "email_verification_pending"
  | "draft"
  | "payment_pending"
  | "payment_processing"
  | "payment_confirmed"
  | "submitted"
  | "under_review"
  | "more_information_required"
  | "information_received"
  | "approved"
  | "membership_issued"
  | "denied_refund_pending"
  | "refund_processing"
  | "refund_completed"
  | "refund_failed"
  | "cancelled"
  | "expired";

export type MembershipPrice = {
  monthly: number;
  yearly: number;
  oneTime: number;
};

export type MembershipTier = {
  slug: string;
  rank: number;

  name: string;
  cardLabel: string;
  coverageLabel: string;
  coverage: MembershipCoverage;

  baseCurrency: string;
  pricesIncludeTax: boolean;
  prices: MembershipPrice;

  monthlyDurationMonths: number;
  yearlyDurationMonths: number;
  oneTimeEquivalentYears: number;
  oneTimeDiscountPercent: number;

  applicationAvailability: string;
  shortDescription: string;

  benefits: string[];
  limitations: string[];

  cardFooter: string;
  directoryLabel: string;

  applicationMode: "open" | "invitation_preferred" | "invitation_only_request";

  primaryActionLabel: string;
  requiresInvitationCode: boolean;
  allowsConsiderationRequest: boolean;

  requiresPaymentBeforeReview: boolean;
  refundOnDenial: boolean;
  refundProcessingBusinessDays: number;

  membershipUnit: "individual" | "family";
  representedMemberLimit: number | null;
  cardIssuanceModel: "individual" | "single_family_card";

  allowsMinors: boolean;
  guardianRequiredForMinors: boolean;
};

export const internationalCheckoutPolicy = {
  baseCurrency: "NGN",

  currencySelectionOrder: ["supported_local_currency", "USD", "NGN"] as const,

  description:
    "The applicant is shown a supported checkout currency before payment. Where the applicant's local currency is unavailable, checkout falls back to USD and then NGN.",

  storeExchangeRate: true,
  validateAmountOnServer: true,
  refundToOriginalTransaction: true,
};

export const starterMembership: MembershipTier = {
  slug: "starter",
  rank: 1,

  name: "Starter Membership",
  cardLabel: "STARTER",
  coverageLabel: "STATE",
  coverage: "state",

  baseCurrency: "NGN",
  pricesIncludeTax: true,

  prices: {
    monthly: 16000,
    yearly: 192000,
    oneTime: 15360000,
  },

  monthlyDurationMonths: 1,
  yearlyDurationMonths: 12,
  oneTimeEquivalentYears: 200,
  oneTimeDiscountPercent: 60,

  applicationAvailability:
    "Open to individuals from every country. Starter membership privileges apply within one selected state, province, territory or equivalent local jurisdiction.",

  shortDescription:
    "Official entry-level recognition for people seeking an established relationship and authorized communication access within the 6clement Joshua network.",

  benefits: [
    "Official recognition as a Starter member of the 6clement Joshua network.",
    "Authorized access to submit formal inquiries, introductions, proposals, meeting requests and other eligible communications.",
    "Access to organizational dealings, activities and opportunities specifically marked as available to Starter members.",
    "Eligibility to register for general member gatherings, public events, get-togethers and state-level activities.",
    "A unique and verifiable membership identity for confirming eligibility before participation.",
    "A personalized digital membership card, downloadable card image, PDF membership certificate and branded approval email.",
  ],

  limitations: [
    "Membership permits communication and consideration but does not guarantee that every request, proposal or meeting will be accepted.",
    "Starter membership does not automatically include empowerment, grants, sponsorship, investment access or restricted programmes.",
    "Events and programmes remain subject to their stated membership-tier eligibility requirements.",
    "Starter privileges apply only within the approved state, province, territory or equivalent local jurisdiction.",
  ],

  cardFooter: "A 6CLEMENT JOSHUA NETWORK MEMBERSHIP",
  directoryLabel: "Starter",
  applicationMode: "open",
  primaryActionLabel: "Apply now",
  requiresInvitationCode: false,
  allowsConsiderationRequest: false,
  requiresPaymentBeforeReview: true,
  refundOnDenial: true,
  refundProcessingBusinessDays: 10,

  membershipUnit: "individual",
  representedMemberLimit: 1,
  cardIssuanceModel: "individual",

  allowsMinors: false,
  guardianRequiredForMinors: false,
};

export const familyMembership: MembershipTier = {
  slug: "family",
  rank: 2,

  name: "Family Membership",
  cardLabel: "FAMILY",
  coverageLabel: "STATE",
  coverage: "state",

  baseCurrency: "NGN",
  pricesIncludeTax: true,

  prices: {
    monthly: 60000,
    yearly: 720000,
    oneTime: 57600000,
  },

  monthlyDurationMonths: 1,
  yearlyDurationMonths: 12,
  oneTimeEquivalentYears: 200,
  oneTimeDiscountPercent: 60,

  applicationAvailability:
    "Open to recognized households and family units from every country. The membership must be submitted by an adult family representative, parent, legal guardian or responsible head of the family.",

  shortDescription:
    "A unified state-level membership that gives an eligible household one recognized relationship, one family identity and structured access to the 6clement Joshua network.",

  benefits: [
    "Official recognition of the approved household as a Family member of the 6clement Joshua network.",
    "One authorized family representative may communicate, submit inquiries, make introductions and approach the organization on behalf of the household.",
    "Eligible family members may attend general gatherings, public events, get-togethers and activities expressly available to the Family tier.",
    "Where a programme is specifically open to Family members, support, items or participation may be considered at a family-appropriate level rather than as an individual Starter benefit.",
    "One verifiable family membership identity may be used to confirm household eligibility before participation in an activity or programme.",
    "The approved household receives one personalized digital Family card, downloadable card image, PDF membership certificate and branded approval email.",
    "Children and minors may be represented only through an approved parent or verified legal guardian.",
  ],

  limitations: [
    "Family Membership represents one household collectively and does not create a separate membership card or separate entitlement for every individual family member.",
    "There is no advertised numerical household limit, but the organization may request a reasonable list of represented family members and evidence of genuine family relationships.",
    "Benefits are provided as one family package and are not automatically multiplied according to the number of people listed under the household.",
    "Family Membership does not guarantee grants, empowerment, financial assistance, sponsorship, items or admission to restricted programmes.",
    "Every activity or support programme will state whether Family Membership is eligible before an application or participation request is accepted.",
    "Family privileges apply only within the approved state, province, territory or equivalent local jurisdiction.",
    "The approved family representative is responsible for the accuracy of all household information and for the conduct of represented members.",
  ],

  cardFooter: "A 6CLEMENT JOSHUA NETWORK MEMBERSHIP",
  directoryLabel: "Family",
  applicationMode: "open",
  primaryActionLabel: "Apply now",
  requiresInvitationCode: false,
  allowsConsiderationRequest: false,
  requiresPaymentBeforeReview: true,
  refundOnDenial: true,
  refundProcessingBusinessDays: 10,

  membershipUnit: "family",
  representedMemberLimit: null,
  cardIssuanceModel: "single_family_card",

  allowsMinors: true,
  guardianRequiredForMinors: true,
};

export const silverMembership: MembershipTier = {
  slug: "silver",
  rank: 3,

  name: "Silver Membership",
  cardLabel: "SILVER",
  coverageLabel: "REGIONAL",
  coverage: "regional",

  baseCurrency: "NGN",
  pricesIncludeTax: true,

  prices: {
    monthly: 46000,
    yearly: 552000,
    oneTime: 44160000,
  },

  monthlyDurationMonths: 1,
  yearlyDurationMonths: 12,
  oneTimeEquivalentYears: 200,
  oneTimeDiscountPercent: 60,

  applicationAvailability:
    "Open to individuals from every country. Silver Membership provides approved privileges within one selected region or equivalent multi-state geographical area.",

  shortDescription:
    "A higher-recognition regional membership for individuals seeking priority communication handling, broader organizational access and eligibility for selected Silver-level opportunities.",

  benefits: [
    "Official recognition as a Silver member of the 6clement Joshua network.",
    "Priority handling and faster administrative review of eligible inquiries, introductions, proposals and meeting requests compared with entry-level memberships.",
    "Easier access to approved organizational communication channels and structured follow-up on eligible matters.",
    "Eligibility to apply for selected empowerment, support, development and opportunity programmes expressly marked for Silver members.",
    "Access to regional events, activities, introductions and organizational opportunities available to Silver members.",
    "Higher membership recognition when administrators verify eligibility for an activity, programme or organizational dealing.",
    "A unique and verifiable Silver membership identity for confirming active regional membership status.",
    "A personalized digital Silver card, downloadable card image, PDF membership certificate and branded approval email.",
    "Minors may apply only through an approved parent or verified legal guardian.",
  ],

  limitations: [
    "Priority handling does not guarantee that every inquiry, proposal, meeting request or application will be accepted.",
    "Eligibility to apply for an empowerment or support programme does not guarantee funding, assistance, selection or approval.",
    "Every programme, opportunity and event will state the membership tiers permitted to participate.",
    "Silver Membership applies only within the approved region or equivalent geographical coverage area.",
    "Silver Membership represents one approved individual and cannot be transferred or shared with another person.",
    "A minor applicant must remain represented by the approved parent or legal guardian recorded during the application.",
    "The organization may request additional information or supporting documents before approval or participation.",
  ],

  cardFooter: "A 6CLEMENT JOSHUA NETWORK MEMBERSHIP",
  directoryLabel: "Silver",
  applicationMode: "open",
  primaryActionLabel: "Apply now",
  requiresInvitationCode: false,
  allowsConsiderationRequest: false,
  requiresPaymentBeforeReview: true,
  refundOnDenial: true,
  refundProcessingBusinessDays: 10,

  membershipUnit: "individual",
  representedMemberLimit: 1,
  cardIssuanceModel: "individual",

  allowsMinors: true,
  guardianRequiredForMinors: true,
};

export const blackMembership: MembershipTier = {
  slug: "black",
  rank: 4,

  name: "Black Membership",
  cardLabel: "BLACK",
  coverageLabel: "NATIONWIDE",
  coverage: "nationwide",

  baseCurrency: "NGN",
  pricesIncludeTax: true,

  prices: {
    monthly: 120000,
    yearly: 1440000,
    oneTime: 115200000,
  },

  monthlyDurationMonths: 1,
  yearlyDurationMonths: 12,
  oneTimeEquivalentYears: 200,
  oneTimeDiscountPercent: 60,

  applicationAvailability:
    "Open to eligible individuals from every country. Black Membership provides approved privileges throughout one selected country.",

  shortDescription:
    "A premium nationwide membership for individuals seeking stronger organizational recognition, elevated communication priority and access to selected invitation-based opportunities.",

  benefits: [
    "Official recognition as a Black member of the 6clement Joshua network.",
    "Nationwide membership recognition across all states, provinces, territories or equivalent jurisdictions within the approved country.",
    "Higher-priority administrative handling of eligible inquiries, proposals, introductions and meeting requests than Starter, Family and Silver memberships.",
    "Eligibility to apply for selected higher-level empowerment, support, development and opportunity programmes expressly available to Black members.",
    "Eligibility to receive company-issued invitations to selected events, gatherings, private activities and opportunities when the member satisfies the stated requirements.",
    "Access to selected invitation-only opportunities that may not be available through an open public application.",
    "Priority consideration for eligible organizational dealings, professional introductions, collaborations and nationwide activities.",
    "Higher recognition when membership eligibility is verified for an event, programme, opportunity or organizational engagement.",
    "A unique and verifiable Black membership identity for confirming active nationwide membership status.",
    "A personalized digital Black card, downloadable card image, PDF membership certificate and branded approval email.",
    "Minors may apply only through an approved parent or verified legal guardian.",
  ],

  limitations: [
    "Black Membership does not guarantee that every inquiry, proposal, meeting request, collaboration or programme application will be accepted.",
    "Company invitations are issued only when an eligible opportunity is available and the member satisfies its specific requirements.",
    "Invitation eligibility does not guarantee that an invitation will be issued during every membership period.",
    "Eligibility for empowerment, support or opportunity programmes does not guarantee funding, assistance, selection or approval.",
    "Every private event, activity and restricted opportunity remains subject to capacity, location, conduct, verification and programme-specific conditions.",
    "Black Membership applies only within the approved country and does not provide international coverage.",
    "The membership represents one approved individual and cannot be transferred, rented, sold or shared.",
    "A minor member must remain represented by the approved parent or legal guardian recorded during the application.",
  ],

  cardFooter: "A 6CLEMENT JOSHUA NETWORK MEMBERSHIP",
  directoryLabel: "Black",
  applicationMode: "open",
  primaryActionLabel: "Apply now",
  requiresInvitationCode: false,
  allowsConsiderationRequest: false,
  requiresPaymentBeforeReview: true,
  refundOnDenial: true,
  refundProcessingBusinessDays: 10,

  membershipUnit: "individual",
  representedMemberLimit: 1,
  cardIssuanceModel: "individual",

  allowsMinors: true,
  guardianRequiredForMinors: true,
};

export const platinumMembership: MembershipTier = {
  slug: "platinum",
  rank: 5,

  name: "Platinum Membership",
  cardLabel: "PLATINUM",
  coverageLabel: "INTERNATIONAL",
  coverage: "international",

  baseCurrency: "NGN",
  pricesIncludeTax: true,

  prices: {
    monthly: 360000,
    yearly: 4320000,
    oneTime: 345600000,
  },

  monthlyDurationMonths: 1,
  yearlyDurationMonths: 12,
  oneTimeEquivalentYears: 200,
  oneTimeDiscountPercent: 60,

  applicationAvailability:
    "Open to eligible individuals worldwide. Platinum Membership provides approved international recognition and access throughout the 6clement Joshua network.",

  shortDescription:
    "A distinguished international membership for individuals seeking elevated recognition, executive-level request access and eligibility for selected invitation-only empowerment and support opportunities.",

  benefits: [
    "Official international recognition as a Platinum member of the 6clement Joshua network.",
    "International membership privileges across countries and geographical regions where the organization operates or recognizes membership access.",
    "Higher-priority handling of eligible communications, proposals, introductions and organizational requests than Starter, Family, Silver and Black memberships.",
    "Eligibility to receive invitations to selected private, international and Platinum-level company events.",
    "Eligibility to receive invitations to selected empowerment, support, development and opportunity programmes expressly available to Platinum members.",
    "Access to invitation-only empowerment and support opportunities that may not be available through an open public application.",
    "Permission to submit eligible executive meeting requests for consideration by senior organizational leadership.",
    "Priority consideration for selected international introductions, collaborations, partnerships and organizational dealings.",
    "Higher recognition during eligibility checks for international events, programmes, opportunities and organizational engagements.",
    "A unique and verifiable Platinum membership identity confirming active international membership status.",
    "A personalized digital Platinum card, downloadable card image, PDF membership certificate and branded approval email.",
    "Minors may apply only through an approved parent or verified legal guardian.",
  ],

  limitations: [
    "Platinum Membership does not guarantee that every communication, proposal, meeting request, collaboration or programme request will be accepted.",
    "Empowerment, support and opportunity invitations are issued only when an eligible programme is available and the member satisfies its requirements.",
    "Invitation eligibility does not guarantee that an invitation will be issued during every membership period.",
    "An executive meeting request remains subject to relevance, availability, verification and approval by senior leadership.",
    "Every private or international event remains subject to capacity, location, conduct and programme-specific conditions.",
    "The membership represents one approved individual and cannot be transferred, rented, sold or shared.",
    "A minor member must remain represented by the approved parent or legal guardian recorded during the application.",
    "The organization may request additional information or supporting documents before approving participation in a restricted opportunity.",
  ],

  cardFooter: "A 6CLEMENT JOSHUA NETWORK MEMBERSHIP",
  directoryLabel: "Platinum",
  applicationMode: "open",
  primaryActionLabel: "Apply now",
  requiresInvitationCode: false,
  allowsConsiderationRequest: false,
  requiresPaymentBeforeReview: true,
  refundOnDenial: true,
  refundProcessingBusinessDays: 10,

  membershipUnit: "individual",
  representedMemberLimit: 1,
  cardIssuanceModel: "individual",

  allowsMinors: true,
  guardianRequiredForMinors: true,
};

export const eliteMembership: MembershipTier = {
  slug: "elite",
  rank: 6,

  name: "Elite Membership",
  cardLabel: "ELITE",
  coverageLabel: "INTERNATIONAL",
  coverage: "international",

  baseCurrency: "NGN",
  pricesIncludeTax: true,

  prices: {
    monthly: 600000,
    yearly: 7200000,
    oneTime: 576000000,
  },

  monthlyDurationMonths: 1,
  yearlyDurationMonths: 12,
  oneTimeEquivalentYears: 200,
  oneTimeDiscountPercent: 60,

  applicationAvailability:
    "Open to eligible individuals worldwide. Elite Membership is the highest strategic relationship class available through open application.",

  shortDescription:
    "The highest-ranking open membership class, providing international recognition, executive-priority communication and eligibility for exclusive leadership, partnership and high-level programme opportunities.",

  benefits: [
    "Official international recognition as an Elite member of the 6clement Joshua network.",
    "The highest membership recognition available through an open public application.",
    "Executive-priority handling of eligible communications, proposals, introductions and organizational requests.",
    "Priority access to approved organizational communication channels and executive-level administrative follow-up.",
    "Eligibility to receive invitations to exclusive Elite events, private gatherings and high-level company activities.",
    "Eligibility to receive invitations to selected high-level empowerment, support, development and partnership programmes.",
    "Consideration for direct meetings with senior leadership when the request is relevant, eligible and approved.",
    "Priority consideration for strategic introductions, collaborations, partnerships and international organizational opportunities.",
    "Access to selected Elite opportunities that are unavailable to Starter, Family, Silver, Black and Platinum members.",
    "International membership privileges throughout countries and regions where the organization operates or recognizes membership access.",
    "The highest recognition during eligibility checks below the invitation-preferred 6clement Joshua Membership.",
    "A unique and verifiable Elite membership identity confirming active international membership status.",
    "A personalized digital Elite card, downloadable card image, PDF membership certificate and branded approval email.",
    "Minors may apply only through an approved parent or verified legal guardian.",
  ],

  limitations: [
    "Elite Membership does not create company ownership, equity, employment, agency or a legal business partnership.",
    "Executive-priority communication does not guarantee that every proposal, request, collaboration or meeting will be accepted.",
    "Direct meetings with senior leadership remain subject to relevance, availability, security, verification and final approval.",
    "Elite event and programme invitations are issued only when an eligible opportunity exists and the member satisfies its requirements.",
    "Invitation eligibility does not guarantee that an invitation will be issued during every membership period.",
    "Empowerment, support and partnership eligibility does not guarantee funding, assistance, selection or contractual engagement.",
    "The membership represents one approved individual and cannot be transferred, rented, sold or shared.",
    "A minor member must remain represented by the approved parent or legal guardian recorded during the application.",
  ],

  cardFooter: "A 6CLEMENT JOSHUA NETWORK MEMBERSHIP",
  directoryLabel: "Elite",
  applicationMode: "open",
  primaryActionLabel: "Apply now",
  requiresInvitationCode: false,
  allowsConsiderationRequest: false,
  requiresPaymentBeforeReview: true,
  refundOnDenial: true,
  refundProcessingBusinessDays: 10,

  membershipUnit: "individual",
  representedMemberLimit: 1,
  cardIssuanceModel: "individual",

  allowsMinors: true,
  guardianRequiredForMinors: true,
};

export const sixClementJoshuaMembership: MembershipTier = {
  slug: "6clement-joshua",
  rank: 7,

  name: "6clement Joshua Membership",
  cardLabel: "6CLEMENT JOSHUA",
  coverageLabel: "GLOBAL",
  coverage: "international",

  baseCurrency: "NGN",
  pricesIncludeTax: true,

  prices: {
    monthly: 6000000,
    yearly: 72000000,
    oneTime: 5760000000,
  },

  monthlyDurationMonths: 1,
  yearlyDurationMonths: 12,
  oneTimeEquivalentYears: 200,
  oneTimeDiscountPercent: 60,

  applicationAvailability:
    "Reserved for invited investors, strategic partners and approved individuals with a substantial established or proposed business relationship with 6clement Joshua and affiliated organizations. Individuals without an invitation may submit a private request for consideration.",

  shortDescription:
    "The highest global relationship class within the 6clement Joshua network, reserved for approved investors, strategic partners and individuals engaged in significant organizational business.",

  benefits: [
    "The highest official membership recognition available within the 6clement Joshua network.",
    "Global recognition throughout countries and regions where the organization operates or recognizes membership access.",
    "Direct approved communication access to 6clement Joshua, the chief executive, senior leadership and designated organizational decision-makers.",
    "Eligibility for direct exchange of approved business contact information and ongoing senior-level communication.",
    "Highest-priority handling of eligible business communications, proposals, strategic requests and organizational matters.",
    "Eligibility to receive direct invitations from 6clement Joshua and affiliated organizations.",
    "Access to selected private leadership meetings, board-level discussions, investor engagements and strategic gatherings where eligible.",
    "Eligibility for the highest-level partnership, investment, empowerment, support and organizational opportunities.",
    "Priority consideration for strategic collaborations, business development, introductions and international organizational opportunities.",
    "Access to qualifying benefits and opportunities available to lower membership tiers, subject to programme-specific eligibility.",
    "A uniquely issued and verifiable 6clement Joshua membership identity confirming the approved global relationship.",
    "A personalized digital membership card, downloadable card image, formal PDF certificate and privately branded onboarding package.",
  ],

  limitations: [
    "Submitting a request for consideration does not create membership and does not guarantee an invitation, review meeting or approval.",
    "Payment alone cannot create this membership or establish a business partnership, investment relationship, shareholding, board position, employment or company ownership.",
    "Any investment, equity, partnership, board or commercial relationship requires separate due diligence, approval and signed legal documentation.",
    "Direct communication access is issued only after identity verification, security review, documentation and final organizational approval.",
    "Private meetings, invitations and strategic opportunities remain subject to relevance, availability, confidentiality, security and specific eligibility requirements.",
    "The membership is personal to the approved holder and cannot be transferred, rented, sold, delegated or shared.",
    "The organization may suspend or withdraw access where documentation, conduct, security or relationship requirements are no longer satisfied.",
  ],

  cardFooter: "THE HIGHEST 6CLEMENT JOSHUA RELATIONSHIP CLASS",
  directoryLabel: "6clement Joshua",

  applicationMode: "invitation_only_request",
  primaryActionLabel: "Request consideration",
  requiresInvitationCode: true,
  allowsConsiderationRequest: true,

  requiresPaymentBeforeReview: false,
  refundOnDenial: false,
  refundProcessingBusinessDays: 0,

  membershipUnit: "individual",
  representedMemberLimit: 1,
  cardIssuanceModel: "individual",

  allowsMinors: false,
  guardianRequiredForMinors: false,
};

export const memberships: MembershipTier[] = [
  starterMembership,
  familyMembership,
  silverMembership,
  blackMembership,
  platinumMembership,
  eliteMembership,
  sixClementJoshuaMembership,
];

export function getMembershipBySlug(slug: string): MembershipTier | undefined {
  return memberships.find((membership) => membership.slug === slug);
}

export function getBaseMembershipPrice(
  membership: MembershipTier,
  billingPeriod: MembershipBillingPeriod,
): number {
  if (billingPeriod === "monthly") {
    return membership.prices.monthly;
  }

  if (billingPeriod === "yearly") {
    return membership.prices.yearly;
  }

  return membership.prices.oneTime;
}

export function getBillingPeriodLabel(
  billingPeriod: MembershipBillingPeriod,
): string {
  if (billingPeriod === "monthly") {
    return "Monthly";
  }

  if (billingPeriod === "yearly") {
    return "Yearly";
  }

  return "One-time";
}

export function formatMembershipPrice(
  amount: number,
  currency = "NGN",
  locale = "en-NG",
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${currency} ${amount.toLocaleString()}`;
  }
}
