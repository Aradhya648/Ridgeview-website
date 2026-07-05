import Link from "next/link";

export const metadata = {
  title: "India's Fiscal Federalism Under Strain | Ridgeview Consulting",
  description:
    "Centre-State transfers, devolution gaps, and the road to the 16th Finance Commission. Policy Research Series Paper No. RC-001.",
};

export default function FiscalFederalismArticle() {
  return (
    <div className="pt-24 sm:pt-32 pb-24 sm:pb-36 px-5 sm:px-6">
      <div className="mx-auto max-w-3xl">

        {/* Back */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-foreground transition-colors mb-10 sm:mb-14"
        >
          <span>&larr;</span>
          <span>All Insights</span>
        </Link>

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Policy Research
            </span>
            <span className="text-xs font-medium px-2 py-0.5 bg-accent/8 text-accent rounded-full border border-accent/15">
              Paper No. RC-001
            </span>
            <span className="text-xs text-muted">June 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-foreground">
            India&apos;s Fiscal Federalism Under Strain
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted leading-relaxed">
            Centre-State transfers, devolution gaps, and the road to the 16th Finance Commission
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span>Ridgeview Consulting Research Team</span>
            <span>Shri Ram College of Commerce, University of Delhi</span>
            <span>25 min read</span>
          </div>
        </div>

        <div className="h-px bg-border mb-10 sm:mb-14" />

        {/* Disclaimer */}
        <div className="mb-10 p-4 sm:p-5 border border-border rounded-lg bg-surface text-xs text-muted leading-relaxed">
          This paper represents the independent research and analysis of Ridgeview Consulting and does not reflect the views of any institution or government body. All data cited is drawn from publicly available official sources.
        </div>

        <div className="prose-article">

          {/* Executive Summary */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-5">Executive Summary</h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed mb-5">
              India&apos;s fiscal federalism stands at a structural inflection point. The architecture of Centre-State financial transfers, built on the twin pillars of tax devolution and grants-in-aid, faces a confluence of stresses that have been years in the making. States collectively account for over 52 percent of total public expenditure — shouldering primary responsibility for health, education, agriculture, and local governance — yet their ability to raise own-source revenues has been progressively narrowed.
            </p>
            <p className="text-base sm:text-lg text-muted leading-relaxed mb-5">
              The Goods and Services Tax, while rationalising India&apos;s indirect tax landscape, collapsed the independent fiscal base of states by subsuming VAT, entry tax, and purchase tax into a jointly administered framework. Simultaneously, the Centre&apos;s growing reliance on cesses and surcharges — instruments constitutionally excluded from the divisible pool under Articles 270 and 271 — has quietly eroded the quantum of resources available for sharing. What states gain in the headline devolution percentage, they lose in the base on which that percentage is applied.
            </p>

            {/* Key Findings Box */}
            <div className="mt-8 border border-border rounded-lg overflow-hidden">
              <div className="px-5 sm:px-6 py-4 bg-surface border-b border-border">
                <p className="text-xs font-medium uppercase tracking-widest text-accent">Key Findings</p>
              </div>
              <div className="divide-y divide-border">
                {[
                  "The divisible pool as a share of gross tax revenue has declined from approximately 87% in the early 2010s to roughly 78% today — a contraction of nearly 9 percentage points — as cesses and surcharges have risen from 9.5% of gross tax receipts in 2010-11 to an estimated 23% in 2024-25.",
                  "The 15th Finance Commission's horizontal devolution formula, while introducing the 'demographic performance' criterion to partially redress southern states' concerns, did not resolve the fundamental equity-efficiency tension.",
                  "Centrally Sponsored Schemes — now numbering over 131 with more than 200 sub-components — account for approximately 1.5% of GDP and over 50% of Centre-State transfers, yet their design remains stubbornly process-centric.",
                  "The 16th Finance Commission (chaired by Dr. Arvind Panagariya, tabled February 1, 2026) retains vertical devolution at 41% and introduces a new 'Contribution to GDP' criterion while discontinuing revenue deficit grants — raising legitimate equity concerns for structurally deficit states.",
                ].map((finding, i) => (
                  <div key={i} className="px-5 sm:px-6 py-4 flex gap-4">
                    <span className="text-xs font-mono text-accent mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-sm text-muted leading-relaxed">{finding}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 1 */}
          <section className="mb-12 sm:mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">Section 1</p>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-5">
              GST and the Erosion of States&apos; Fiscal Autonomy
            </h2>
            <h3 className="text-base font-semibold text-foreground mb-3 mt-8">1.1 The Pre-GST Fiscal Landscape</h3>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
              Before July 2017, states operated with a meaningful portfolio of independent tax instruments. Value Added Tax on most goods, entry taxes, octroi, purchase tax, and levies on certain services collectively constituted States&apos; Own Tax Revenue — a revenue stream over which state legislatures exercised genuine autonomy in design, rate-setting, and administration. The 101st Constitutional Amendment, which gave effect to GST through the insertion of Article 246A, fundamentally altered this arrangement. The new regime replaced origin-based taxes with a destination-based consumption tax jointly administered by the Union and states through the GST Council, a body under Article 279A where the Centre holds one-third of the voting weight.
            </p>

            <h3 className="text-base font-semibold text-foreground mb-3 mt-8">1.2 The GST Compensation Mechanism and its Aftermath</h3>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
              The GST (Compensation to States) Act, 2017 guaranteed states a 14 percent annual growth in protected revenue for five years. The mechanism worked adequately initially. By 2020-21, the COVID-19 pandemic devastated consumption and GST collections, opening a compensation gap the Centre could not fill. When the compensation period ended in June 2022, states lost both the guaranteed revenue floor and the institutional backstop it had provided. The post-compensation landscape has seen SGST revenues recover in absolute terms, but the structural autonomy problem remains unresolved.
            </p>

            <h3 className="text-base font-semibold text-foreground mb-3 mt-8">1.3 The Cess and Surcharge Problem</h3>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
              The deeper erosion of states&apos; fiscal position lies in the Centre&apos;s systematic expansion of revenue instruments constitutionally excluded from the divisible pool. Under Articles 270 and 271, cesses and surcharges are not shared with states. In the early 2010s, these levies constituted approximately 9.5% of gross tax revenue. By 2024-25, they are projected at approximately ₹4.23 lakh crore — constituting around 23% of gross tax receipts, fully retained by the Centre.
            </p>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
              NIPFP estimates from 2024 suggest that merging cesses and surcharges into the divisible pool could increase states&apos; aggregate receipts by approximately ₹1.5 lakh crore annually. A further governance concern, documented by the CAG, is that ₹3.69 lakh crore in cess collections had not been transferred to designated reserve funds as of March 2024.
            </p>
            <div className="border-l-2 border-accent/30 pl-5 py-1 my-6">
              <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed italic">
                &ldquo;The cess-and-surcharge expansion is not an incidental fiscal management choice — it is a structural transfer of fiscal leverage from states to the Centre.&rdquo;
              </p>
            </div>
          </section>

          {/* Divolution table */}
          <section className="mb-12 sm:mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">Data</p>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-6">
              Evolution of Vertical Devolution
            </h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted">Finance Commission</th>
                    <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted">Award Period</th>
                    <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted">States&apos; Share</th>
                    <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted hidden sm:table-cell">Key Feature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["13th FC", "2010–15", "32%", "Introduced performance grants"],
                    ["14th FC", "2015–20", "42%", "Historic jump; Planning Commission abolished"],
                    ["15th FC", "2020–26", "41%", "Adjusted for J&K bifurcation; 6-year period"],
                    ["16th FC", "2026–31", "41%", "Compliance-driven; GDP contribution criterion added"],
                  ].map(([fc, period, share, feature]) => (
                    <tr key={fc} className="hover:bg-surface/50 transition-colors">
                      <td className="px-4 py-3 font-medium text-foreground">{fc}</td>
                      <td className="px-4 py-3 text-muted">{period}</td>
                      <td className="px-4 py-3 font-semibold text-accent">{share}</td>
                      <td className="px-4 py-3 text-muted hidden sm:table-cell">{feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12 sm:mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">Section 2</p>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-5">
              The Devolution Formula and Finance Commission Architecture
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
              The Finance Commission&apos;s recommendations operate on two axes. Vertical devolution determines what proportion of the divisible pool is transferred to states collectively. Horizontal devolution allocates the aggregate states&apos; share among the twenty-eight states based on a multi-criteria formula. The 15th FC&apos;s horizontal formula assigned weights as: Income Distance (45%), Population/Demographic Performance combined (25% using 2011 Census data), Area (15%), Forest and Ecology (10%), and Tax and Fiscal Effort (2.5%).
            </p>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
              The 16th FC has revised this formula, notably introducing a new &ldquo;Contribution to GDP&rdquo; criterion at 10% while removing the Tax and Fiscal Effort parameter. The complete formula now distributes weights as: Income Distance 42.5%, Population 17.5%, Demographic Performance 10%, Area 10%, Forest and Ecology 10%, and Contribution to GDP 10%.
            </p>

            <h3 className="text-base font-semibold text-foreground mb-3 mt-8">The Southern States&apos; Grievance</h3>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
              Southern states — Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, and Telangana — have invested heavily in demographic transition since the 1970s, successfully bringing total fertility rates below replacement level. The shift from 1971 to 2011 Census data effectively penalised these states for this demographic success. Under the 16th FC, Karnataka was the largest gainer at +0.48%, while Tamil Nadu saw only a negligible increase from 4.079% to 4.097% — reflecting the reduced weight given to the demographic performance criterion.
            </p>
          </section>

          {/* Cess table */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-6">
              Cesses and Surcharges vs. Divisible Pool
            </h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted">Year</th>
                    <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted">Cess &amp; Surcharge</th>
                    <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted">Divisible Pool</th>
                    <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted">States&apos; Effective Share</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["2010-11", "~9.5% of GTR", "~87% of GTR", "~36.5%"],
                    ["2017-18", "~13% of GTR", "~84% of GTR", "~35.3%"],
                    ["2020-21", "~20%+ of GTR", "~78% of GTR", "~32.0%"],
                    ["2024-25 (BE)", "~23% of GTR", "~76% of GTR", "~31.2%"],
                  ].map(([year, cess, pool, share]) => (
                    <tr key={year} className="hover:bg-surface/50 transition-colors">
                      <td className="px-4 py-3 font-medium text-foreground">{year}</td>
                      <td className="px-4 py-3 text-muted">{cess}</td>
                      <td className="px-4 py-3 text-muted">{pool}</td>
                      <td className="px-4 py-3 font-semibold text-accent">{share}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-2">Sources: CSEP (2026), Union Budget Documents, Finance Commission Reports; RBI State Finances 2024-25.</p>
          </section>

          {/* Section 3 */}
          <section className="mb-12 sm:mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">Section 3</p>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-5">
              Grants, Tied Transfers, and the Autonomy Problem
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
              Centrally Sponsored Schemes are joint funding programmes through which the Centre finances national development and welfare priorities in areas that fall within the State or Concurrent Lists. The constitutional basis is primarily Article 282, which allows the Union to make grants for any public purpose regardless of legislative domain. From approximately 50 schemes in the early Planning Commission era, CSS proliferated to over 131 schemes with more than 200 sub-components as of the current period.
            </p>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
              CSS now accounts for approximately 1.5% of GDP and constitutes over 50% of Centre-State transfers. The critical problem with CSS dominance is not the quantum of resources transferred but the conditionality attached. The Special Assistance to States for Capital Investment (SASCI) scheme is illustrative: the share of unconditional funds within SASCI declined from 80% in 2022-23 to only 38% in 2025-26.
            </p>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
              A particularly regressive dimension is the uniform 60:40 Centre-State matching ratio applied across fiscally heterogeneous states. Bihar, which depends on Central transfers for over 72% of its revenue receipts, faces an entirely different burden in mobilising a 40% match than Karnataka. The Karnataka experience with PM Awas Yojana is illustrative: despite the nominal sharing norm, the State spends ₹4-5 lakh per housing unit while the Centre&apos;s contribution is less than ₹1 lakh.
            </p>
            <div className="border-l-2 border-accent/30 pl-5 py-1 my-6">
              <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed italic">
                &ldquo;States are increasingly implementers of centrally designed programmes rather than autonomous fiscal actors.&rdquo;
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12 sm:mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">Section 4</p>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-5">
              The 16th Finance Commission — What Changed and What Was Missed
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
              The 16th Finance Commission, constituted on December 31, 2023, and chaired by Dr. Arvind Panagariya, submitted its report to President Droupadi Murmu on November 17, 2025. It was tabled in Parliament alongside Union Budget 2026-27 on February 1, 2026, covering the five-year award period from April 1, 2026 to March 31, 2031.
            </p>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
              The Commission&apos;s most consequential decision was to retain vertical devolution at 41% — unchanged from the 15th FC, despite demands from multiple states for an increase to at least 50%. Total grants recommended amount to ₹9.47 lakh crore for the five-year period. The most significant departure is the complete discontinuation of revenue deficit grants, sector-specific grants, and state-specific grants.
            </p>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
              The most significant characterisation of the 16th FC&apos;s philosophical orientation is the shift from &ldquo;entitlement-based&rdquo; to &ldquo;compliance-driven&rdquo; fiscal federalism. When revenue deficit grants are abolished simultaneously with tighter fiscal deficit ceilings and more conditional grant architecture, states with structurally weak revenue bases face a simultaneous reduction in the unconditional resources available to them.
            </p>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Notably, the 16th FC does not address the cess-and-surcharge expansion directly, does not recommend a structural rationalisation of CSS, and does not establish a permanent institutional mechanism for Centre-State fiscal consultation beyond the Finance Commission&apos;s quinquennial cycle.
            </p>
          </section>

          {/* Policy Recommendations */}
          <section className="mb-12 sm:mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">Recommendations</p>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-6">
              Six Policy Reforms
            </h2>
            <div className="space-y-5">
              {[
                {
                  n: "01",
                  title: "Incorporate a defined floor of cess revenue into the divisible pool",
                  body: "Parliament should amend Article 270 to include a floor of 30% of annual cess and surcharge collections in the divisible pool. A 30% floor would yield approximately ₹45,000–60,000 crore in additional annual flows to states, sufficient to partially offset the discontinuation of revenue deficit grants.",
                },
                {
                  n: "02",
                  title: "Index CSS matching ratios to state fiscal capacity",
                  body: "The Ministry of Finance should introduce a tiered matching ratio framework under which states' required contribution is determined by a composite fiscal capacity index. States below a defined threshold should attract a 75:25 or 80:20 Centre-State ratio.",
                },
                {
                  n: "03",
                  title: "Establish a permanent Fiscal Federalism Council",
                  body: "India needs a permanent institutionalised body — modelled partially on the GST Council — with a dedicated fiscal federalism mandate: reviewing Centre-State transfer allocations mid-cycle, adjudicating CSS design disputes, and establishing a grievance mechanism for grant delays.",
                },
                {
                  n: "04",
                  title: "Reconstitute State Finance Commissions with statutory timelines",
                  body: "States that constitute SFCs with clear mandates, adequate secretarial resources, and binding timelines for action on recommendations should receive a 2-3% premium on their local body grants.",
                },
                {
                  n: "05",
                  title: "Introduce multi-year rolling devolution projections",
                  body: "Finance Ministry should publish three-year rolling devolution projections — updated annually with revised tax collection estimates — to enable states to plan multi-year capital expenditure programmes with greater confidence.",
                },
                {
                  n: "06",
                  title: "Mandate sunset clauses and outcome-based continuity criteria for all CSS",
                  body: "All CSS, including existing ones on a rolling five-year basis, should be subject to mandatory sunset unless an independent evaluation demonstrates measurable outcome improvements against pre-specified indicators.",
                },
              ].map(({ n, title, body }) => (
                <div key={n} className="flex gap-5 sm:gap-6 p-5 sm:p-6 border border-border rounded-lg hover:border-accent/30 transition-colors">
                  <span className="text-2xl font-semibold font-mono text-accent/30 shrink-0 leading-none mt-0.5">{n}</span>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground mb-2 leading-snug">{title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-5">Conclusion</h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
              India&apos;s fiscal federal architecture is not broken — it is under structural strain that, if unaddressed, risks becoming self-reinforcing. The 16th Finance Commission&apos;s report represents a thoughtful attempt to balance discipline with equity, performance with need. But it operates within the same constitutional parameters and institutional constraints that have produced the strains this paper has documented.
            </p>
            <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
              The reforms required are not exotic. They are largely incremental — legislative, institutional, and design changes that adjust the incentive structure of intergovernmental finance without requiring constitutional amendment. What they require is political will on the part of a Centre that has, over the past decade, found fiscal leverage in precisely the mechanisms this paper recommends reforming.
            </p>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              The strongest argument for reform is not normative but instrumental: a fiscal federal architecture perceived as inequitable by the states that generate the bulk of India&apos;s economic growth will, over time, produce cooperative deficits in infrastructure, health, and education that undermine that growth.
            </p>
          </section>

          {/* Sources */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-lg font-semibold tracking-tight text-foreground mb-5">Key Sources</h2>
            <div className="space-y-2 text-xs text-muted leading-relaxed">
              {[
                "Reserve Bank of India. State Finances: A Study of Budgets of 2024-25. Mumbai: RBI, December 2024.",
                "PRS Legislative Research. Report of the 16th Finance Commission for 2026-31 (Summary). New Delhi: PRS, February 2026.",
                "PRS Legislative Research. State of State Finances 2024-25 and 2025-26. New Delhi: PRS, October 2025.",
                "Centre for Social and Economic Progress (CSEP). 'The Hidden Cost of Cesses and Surcharges for Indian States.' March 2026.",
                "National Institute of Public Finance and Policy (NIPFP). Centrally Sponsored Schemes: PMEAC Report. New Delhi: NIPFP, August 2021.",
                "Comptroller and Auditor General of India. Report on Union Government Finances (relevant years).",
                "Centre for Budget and Policy Studies (CBPS). 'Centrally Sponsored Schemes and India's Shifting Federal Balance.' April 2026.",
              ].map((s, i) => (
                <p key={i}>{s}</p>
              ))}
            </div>
          </section>

        </div>

        {/* Footer CTA */}
        <div className="h-px bg-border mb-10 sm:mb-14" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Ridgeview Consulting will continue to monitor the 16th Finance Commission award period.</p>
            <p className="text-xs text-muted">Policy Research Series · Paper No. RC-001</p>
          </div>
          <Link
            href="/insights"
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            More Insights &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
