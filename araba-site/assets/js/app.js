/* ARABA FOUNDATION — content + engine (one file by design)
   EDITING GUIDE — press Ctrl+F in this file and search for:
   [EDIT: CONTACT]  [EDIT: DONATION AMOUNTS]  [EDIT: PROGRAMMES]
   [EDIT: STORIES]  [EDIT: APPLICATION FORMS]  [EDIT: POLICIES]
   Footer contact lines live in index.html (search for "phv"). */
const SITE = { analyticsId:null, whatsappNumber:null, paymentProvider:null, applyEndpoint:null, formsEndpoint:null };

/* [EDIT: DONATION AMOUNTS] — suggested one-off amounts in NGN */
const DONATE_AMOUNTS = [5000, 10000, 25000, 50000, 100000];

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ic = n => `<svg class="ic" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const ov = t => `<p class="ov">${t}</p>`;
const ph = (seed, alt, ratio='4/5', tag='Placeholder image — awaiting verified field photography') =>
  `<figure class="ph" style="aspect-ratio:${ratio}"><img src="https://picsum.photos/seed/${seed}/1200/900.jpg" alt="${esc(alt)}" loading="lazy"><figcaption class="ph-tag">${tag}</figcaption></figure>`;
const note = (t, label='Editable placeholder') => `<div class="pnote">${ic('info')}<div><strong>${label}.</strong> ${t}</div></div>`;
const DEMO = 'Demonstration content — sample editorial awaiting verified stories';
const status = (kind, title, body) => `<div class="fstatus fstatus-${kind}" role="status"><strong>${title}</strong><div>${body}</div></div>`;
const steps = items => `<ol class="steps">${items.map((s,i)=>`<li><span class="step-n">${String(i+1).padStart(2,'0')}</span><strong>${s[0]}</strong><p>${s[1]}</p></li>`).join('')}</ol>`;
const pageHero = (kick, title, lede='', chips='') => `<section class="phero"><div class="wrap">${ov(kick)}<h1 tabindex="-1">${title}</h1>${lede?`<p class="plede">${lede}</p>`:''}${chips}</div></section>`;
const fmtNGN = n => '₦' + Number(String(n).replace(/[^\d.]/g,'')||0).toLocaleString('en-NG');

/* [EDIT: PROGRAMMES] — the five programme areas */
const PROGRAMMES = [
  { key:'sme', num:'01', pillar:'I', name:'Empowering Small Businesses', formal:'SME Empowerment & Micro-Business Support', seed:'araba-sme',
    tagline:'Standing with the small businesses that hold communities together.',
    short:'Grants, training, mentorship and formalisation support for market traders, artisans and small businesses.',
    overview:[`Small businesses are the quiet infrastructure of Nigerian life. The trader whose stall feeds a family and employs a neighbour. The tailor, the welder, the popcorn machine, the provision shop. When these businesses fail, it is rarely for lack of effort — it is a failed cooler, a bad season, an unaffordable restock, or never having learned the numbers.`,
      `Araba Foundation stands with these businesses: assessing need honestly, providing practical support, and building the skills that keep a business alive after we have moved on. Our support is never a lottery or a handout — it is a hand up, shaped around what a specific business actually needs to survive and grow.`],
    who:['Market traders & stall owners','Artisans & craftspeople','Small shop owners','Home-based producers','Women-owned businesses','Youth-owned businesses','Informal businesses seeking to formalise'],
    initiatives:[['Micro-business grants & financial assistance','Direct, practical support for stock, equipment or repairs at the moments that decide whether a business survives.'],['Access to affordable business funding opportunities','Connecting owners to fair, non-exploitative funding pathways — never loans disguised as gifts.'],['Business development training','Practical skills in pricing, stock control, customer service and growth planning.'],['Financial literacy & business management education','Record-keeping, budgeting and separating business from household finance.'],['Digital skills & technology adoption','From simple bookkeeping tools to selling online — at the pace the business can absorb.'],['Mentorship & business advisory support','A trusted, experienced voice for the decisions that keep owners awake at night.'],['Support for women-owned & youth-owned businesses','Deliberate focus on groups historically excluded from credit and networks.'],['Business formalisation & registration assistance','Helping informal businesses become formal — opening doors to contracts, banking and protection.']],
    objective:'To help small businesses survive, grow, create jobs, and become financially sustainable.' },
  { key:'startup', num:'02', pillar:'I', name:'Supporting Future Entrepreneurs', formal:'Entrepreneurship & Startup Support', seed:'araba-startup',
    tagline:'Turning ambition and ideas into working enterprises.',
    short:'Seed support, skills and mentorship for people with business ideas and no way to fund them.',
    overview:[`Nigeria does not lack ideas — it lacks pathways. All over the country, people carry viable business ideas they cannot afford to start: the caterer with no capital, the barber with no shop, the designer with a machine and no fabric.`,
      `This programme exists for exactly those people. We help shape the idea, plan the business, build the skills — and, where assessment and resources allow, provide seed support that turns intention into operation. The goal is always the same: a person earning their own income, on their own terms.`],
    who:['Unemployed & underemployed youth','First-time founders with viable ideas','Skilled tradespeople without startup capital','Vocational graduates needing tools to begin','Anyone with a plan — and no way to fund it alone'],
    initiatives:[['Startup seed funding opportunities','Modest, well-assessed seed support to turn a viable idea into a working business.'],['Entrepreneurship training','The fundamentals: customers, costs, pricing, and surviving the first year.'],['Business idea development','Pressure-testing and shaping raw ideas into workable models.'],['Business planning & mentorship','A realistic plan — and someone in your corner while you execute it.'],['Skills acquisition & vocational training','Learning a trade properly, with recognised, marketable competence.'],['Connection to investors, sponsors & support programmes','Opening doors to wider ecosystems a first-time founder cannot see alone.']],
    objective:'To help people move from unemployment or financial dependency towards entrepreneurship and economic independence.' },
  { key:'humanitarian', num:'03', pillar:'II', name:'Restoring Hope for the Homeless', formal:'Homelessness & Vulnerable People Support', seed:'araba-hope',
    tagline:'Relief for today. A path forward for tomorrow.',
    short:'Emergency relief and a route back to stability for homeless and vulnerable people.',
    overview:[`Somewhere tonight, someone is sleeping in a motor park, at a market gate, or in a half-finished building. Homelessness and extreme poverty are often met with pity — or looked past entirely. We treat them as what they are: a crisis, and a call to action.`,
      `Our humanitarian work begins with immediate relief — food, clothing, hygiene, shelter through partners — but it does not end there. Every intervention is designed as a doorway to something more durable: rehabilitation, skills, livelihood, reintegration. Relief restores today. Programme support rebuilds tomorrow.`],
    who:['Homeless individuals','People living in extreme poverty','People in sudden crisis','Families in unsafe or unstable living conditions','People referred by communities, faith institutions & local partners'],
    initiatives:[['Emergency food distribution','Dignified, organised relief when hunger is the immediate crisis.'],['Clothing & essential supplies','The basics of daily life, provided with respect.'],['Temporary shelter support through partnerships','Working with shelters and partners to find safe, short-term accommodation.'],['Hygiene & sanitation assistance','Hygiene kits and sanitation support that protect health and self-respect.'],['Access to healthcare support through appropriate partners','Routing people to the right medical help, responsibly.'],['Rehabilitation & livelihood opportunities','The bridge from crisis to stability: training, tools and work pathways.'],['Skills development & reintegration programmes','Longer-term support so relief becomes a turning point, not a recurring need.']],
    objective:'To restore dignity — not simply to provide temporary relief.' },
  { key:'children', num:'04', pillar:'II', name:'Caring for Vulnerable Children', formal:'Orphanage & Child Welfare Support', seed:'araba-children',
    tagline:'Every child deserves a childhood — and a future.',
    short:'Reliable, safeguarded support for orphanages, children\u2019s homes and the children they raise.',
    overview:[`In children\u2019s homes across Nigeria, dedicated caregivers raise children with limited means — feeding, schooling and clothing them on thin margins and unpredictable support. These homes do heroic work, often invisibly.`,
      `Araba Foundation partners with these homes — reliably and respectfully. From nutrition and school fees to facility repairs and mentorship, our support strengthens the people and institutions raising vulnerable children. One rule governs everything: the child\u2019s dignity, privacy and best interests come first, always.`],
    who:['Partner orphanages & children\u2019s homes','Children in residential care','Children transitioning out of care','The caregivers & housemothers who raise them'],
    initiatives:[['Food & nutritional support','Regular, reliable nutrition for growing children in partner homes.'],['Clothing & educational materials','Uniforms, books and supplies that let children arrive prepared and proud.'],['School fees & educational sponsorship','Keeping children in school — consistently, not sporadically.'],['Medical & healthcare assistance','Timely access to care through appropriate partners.'],['Facility improvement & essential supplies','Safe, functional spaces: beds, water, power, learning corners.'],['Mentorship & educational development','Consistent adults who show up, encourage and open horizons.'],['Support for children transitioning into independent adulthood','The forgotten cliff-edge: housing, skills and guidance at eighteen.']],
    objective:'To strengthen the institutions raising vulnerable children — always prioritising child safeguarding, privacy, dignity and responsible partnerships.' },
  { key:'disability', num:'05', pillar:'II', name:'Championing Disability Inclusion', formal:'Disability Inclusion & Empowerment', seed:'araba-ability',
    tagline:'Ability is everywhere. Opportunity should be too.',
    short:'Grants, accessible training, assistive equipment and advocacy for people living with disabilities.',
    overview:[`Ability is everywhere in Nigeria. Opportunity is not. People living with disabilities are routinely shut out of work, training and economic life — not by their disabilities, but by environments, attitudes and systems that were never designed to include them.`,
      `This programme works to change that: backing disability-led businesses, making training genuinely accessible, supporting assistive equipment through specialist partners, and advocating for inclusion. Our measure of success is independence — disabled people earning, leading and participating on equal terms.`],
    who:['People with physical disabilities','People with visual, hearing or speech impairments','People with intellectual & developmental disabilities (support via specialist partners)','Disability-led businesses & groups','Families & caregivers'],
    initiatives:[['Financial support & grants for disability-led businesses','Backing entrepreneurs who are too often overlooked by funders.'],['Accessible vocational & entrepreneurship training','Training designed for how people actually learn, move and communicate.'],['Assistive equipment support through partnerships','Wheelchairs, hearing aids, screen readers and more — via specialist partners.'],['Inclusive employment & business opportunities','Working with employers and markets to open real doors.'],['Digital skills development','Skills that travel: work that is not limited by physical access.'],['Disability awareness & advocacy','Changing attitudes, not just circumstances.'],['Partnerships with disability-focused organisations','Nothing about disabled people, without disabled people.']],
    objective:'To promote equal opportunities and economic independence for people living with disabilities.' },
];
const P = k => PROGRAMMES.find(p => p.key === k);
const DESG = [...PROGRAMMES.map(p => [p.key, p.formal]), ['general','General Foundation Fund']];
const FREQ = { once:'One-time', monthly:'Monthly', quarterly:'Quarterly', annual:'Annual' };

/* Impact metrics — NO figures published until verified; slots only */
const METRICS = [
  ['Individuals supported','Unique people reached across all five programmes — counted once per person per reporting year.','w6'],
  ['Small businesses empowered','Businesses receiving grants, training, mentorship or formalisation support.','w2'],
  ['Entrepreneurs trained','People completing entrepreneurship or vocational training cohorts.','w2'],
  ['Children reached','Children in partner homes and programmes receiving direct support — reported in aggregate only, never identified.','w2'],
  ['Disability inclusion initiatives','Grants, training placements and accessibility support delivered with partner organisations.','w3'],
  ['Communities reached','Distinct communities where at least one programme activity took place.','w3'],
];
const dash = light => `
  <div class="dashwrap ${light?'lt':''}">
    <div class="stamp">Pending verification — no placeholder figures published</div>
    <div class="dash ${light?'light':''}">
      ${METRICS.map(([l,def,w]) => `<div class="${w}"><span class="d-num" aria-label="Figure pending verification">—</span><span class="d-label">${l}</span><p class="d-note">${def}</p></div>`).join('')}
    </div>
  </div>`;

/* [EDIT: STORIES] — clearly flagged demonstration content */
const STORIES = [
  { slug:'cooler-market', tag:'economic', tagLabel:'Economic empowerment', title:'From one cooler to a corner of the market', seed:'araba-story1',
    ex:'When her only cooler failed, a drinks trader nearly lost everything. A micro-grant, bookkeeping classes and a mentor helped her rebuild — and plan for growth.',
    body:[`Before dawn, A.* used to wheel her cooler to the same corner she had occupied for six years. When it broke down in the rainy season, she faced a choice between borrowing at rates she could not survive, or watching her stock — and her regulars — disappear.`,
    `Through the SME Empowerment programme, she received a micro-business grant covering a replacement cooler and a modest restock. But the support did not stop at equipment: a short bookkeeping course showed her how to separate takings from household money, and monthly mentorship sessions helped her plan for the lean season instead of being ambushed by it.`,
    `Eight months on — in this illustrative scenario — she has a second table, an assistant on weekends, and, in her own words, "a number I can actually plan with."`] },
  { slug:'starter-kit', tag:'humanitarian', tagLabel:'Humanitarian support', title:'A starter kit and a second chance', seed:'araba-story2',
    ex:'Relief got him through the week. Skills, tools and a foot in the door got him back.',
    body:[`When the outreach team first met B.* — in this sample narrative — he had been sleeping near a motor park for months, surviving on odd jobs and the kindness of traders.`,
    `The first support was simple: food, clean clothes, a hygiene kit, and — through a partner shelter — a safe place to sleep. But the plan was never to leave it there. A skills assessment surfaced years of informal welding experience; a reintegration pathway followed, including a refresher course, a basic tool kit, and an introduction to a workshop needing extra hands.`,
    `Relief restored his week. The programme\u2019s real ambition was his footing: the difference between being helped and being needed again.`] },
  { slug:'quiet-one', tag:'children', tagLabel:'Children & welfare', title:'The quiet one who wouldn\u2019t raise her hand', seed:'araba-story3',
    ex:'School fees opened the door. A mentor who kept showing up changed what happened inside it.',
    body:[`In a partner children\u2019s home, the staff could name the children at risk of slipping through — and C.* (sample) was one of them: bright, but silent in class, convinced that questions were for other children.`,
    `An education sponsorship covered her fees, books and uniform, removing the daily reminders of "difference" that follow a child through school. Just as important was the mentorship component: a consistent visitor who helped with homework, asked about her week, and slowly made raising her hand feel safe.`,
    `Sponsorship pays the bills of an education. Presence builds the learner. Our children\u2019s programme is built on that pairing.`] },
  { slug:'apprentice-not-charity', tag:'disability', tagLabel:'Disability inclusion', title:'Apprenticeship, not charity', seed:'araba-story4',
    ex:'A tailored training placement, an accessible workshop and an employer willing to look at ability first.',
    body:[`D.* — in this sample story — had completed tailoring training but spent two years without a machine or a workshop that could accommodate him: the exact gap between ability and opportunity that the Disability Inclusion programme exists to close.`,
    `Support came in three parts: a grant towards an industrial machine, an accessibility assessment of a partnering workshop, and employer engagement that focused on what he could do, not what he could not. He was taken on as an apprentice, with his trainer supported to adapt instruction rather than lower it.`,
    `Independence, not charity, was the goal — and the outcome this sample story illustrates.`] },
];

const APPLY_CATS = [
  {k:'sme', code:'SME', label:'Small Business Support', ic:'case', desc:'For existing businesses: traders, artisans, shop owners and small enterprises.'},
  {k:'startup', code:'ENT', label:'Startup / Aspiring Entrepreneur', ic:'sprout', desc:'For people with a business idea who need skills, guidance or seed support.'},
  {k:'humanitarian', code:'HUM', label:'Homelessness / Emergency Assistance', ic:'home', desc:'For urgent humanitarian situations — food, shelter, essentials, crisis support.'},
  {k:'children', code:'CHS', label:'Orphanage / Children\u2019s Home Support', ic:'child', desc:'For orphanages and children\u2019s homes seeking assistance.'},
  {k:'disability', code:'DIS', label:'Disability Support', ic:'access', desc:'For people living with disabilities seeking empowerment or accessibility support.'},
];
const F = (n,l,t,o={}) => Object.assign({n,l,t}, o);

/* [EDIT: APPLICATION FORMS] — conditional forms per category */
const SCHEMAS = {
  sme: [
    F('name','Applicant\u2019s full name','text',{req:1,ac:'name'}), F('phone','Phone number','tel',{req:1,ac:'tel'}), F('email','Email address','email',{req:1,ac:'email'}),
    F('state','State','text',{req:1}), F('lga','Local Government Area (LGA)','text',{req:1}),
    F('biz','Business name','text',{req:1}), F('btype','Type of business','text',{req:1,pl:'e.g. fashion & tailoring, food trading, hairdressing, mechanics, retail shop'}),
    F('years','How long has the business been operating?','select',{req:1,opts:['Less than 1 year','1\u20133 years','3\u20135 years','More than 5 years']}),
    F('bdesc','Describe your business','textarea',{req:1}),
    F('stype','Type of support required','select',{req:1,opts:['Micro-business grant / financial assistance','Equipment or tools','Business development training','Financial literacy / business management','Digital skills','Mentorship / business advisory','Business formalisation / registration','Other']}),
    F('amount','Estimated financial assistance required (NGN)','number',{req:1,pl:'e.g. 150000'}),
    F('reason','Reason for requesting support','textarea',{req:1}),
    F('docs','Supporting documents you could provide if requested — optional','textarea',{hint:'No uploads needed to apply. Never share bank details, card numbers or sensitive financial information at application stage.'}),
  ],
  startup: [
    F('name','Full name','text',{req:1,ac:'name'}), F('phone','Phone number','tel',{req:1,ac:'tel'}), F('email','Email address','email',{req:1,ac:'email'}),
    F('state','State','text',{req:1}), F('lga','Local Government Area (LGA)','text',{req:1}),
    F('idea','Describe your business idea','textarea',{req:1}), F('skills','Your skills & experience','textarea',{req:1}),
    F('capital','Estimated startup capital required (NGN)','number',{req:1,pl:'e.g. 250000'}),
    F('use','How will the support be used?','textarea',{req:1}), F('income','How will the business generate income?','textarea',{req:1}),
    F('docs','Supporting documents you could provide if requested — optional','textarea'),
  ],
  humanitarian: [
    F('bname','Applicant or beneficiary name','text',{req:1}),
    F('contact','Contact details — where available','text',{hint:'A phone number, a relative\u2019s contact, a community leader — whatever is safe and available.'}),
    F('loc','Location — city, LGA and state','text',{req:1}), F('situation','Nature of the situation','textarea',{req:1}),
    F('atype','Type of assistance required','select',{req:1,opts:['Emergency food','Clothing & essential supplies','Temporary shelter','Hygiene & sanitation','Healthcare access','Rehabilitation & livelihood support','Skills development & reintegration','Other']}),
    F('urgency','Urgency level','select',{req:1,opts:['Immediate / critical','Within a few days','Within weeks','Planning ahead']}),
    F('docs','Supporting documentation — optional','textarea',{hint:'Only mention documents that can be shared safely and appropriately. Never include sensitive personal or financial details here.'}),
  ],
  children: [
    F('inst','Name of institution','text',{req:1}), F('loc','Location — city, LGA and state','text',{req:1}),
    F('person','Contact person','text',{req:1,ac:'name'}), F('role','Role / position','text'),
    F('phone','Phone number','tel',{req:1,ac:'tel'}), F('email','Email address','email',{req:1,ac:'email'}),
    F('count','Number of children under care','number',{req:1}),
    F('reg','Registration details — where applicable','text',{hint:'e.g. social-welfare registration reference, if held. Leave blank if not applicable.'}),
    F('needs','Type of assistance needed (tick all that apply)','checks',{req:1,opts:['Food & nutritional support','Clothing & educational materials','School fees / educational sponsorship','Medical & healthcare assistance','Facility improvement & essential supplies','Mentorship & educational development','Support for children transitioning to adulthood']}),
    F('details','Please give brief details of the assistance needed','textarea',{req:1}),
    F('docs','Supporting documentation — optional','textarea'),
  ],
  disability: [
    F('name','Applicant\u2019s name','text',{req:1,ac:'name'}), F('contact','Contact details — phone or email','text',{req:1}),
    F('loc','Location — city, LGA and state','text',{req:1}),
    F('access','Accessibility or support requirements','textarea',{req:1,hint:'Tell us what makes support accessible for you — communication, mobility, format, environment\u2026'}),
    F('skills','Skills, business or employment interests','textarea',{req:1}),
    F('atype','Type of assistance requested','select',{req:1,opts:['Financial support for a disability-led business','Accessible vocational or entrepreneurship training','Assistive equipment (via partners)','Inclusive employment or business opportunity','Digital skills development','Awareness & advocacy','Other']}),
    F('details','Anything else that would help us assess this request','textarea'),
    F('docs','Supporting documents you could provide if requested — optional','textarea'),
  ],
};

/* [EDIT: POLICIES] — have counsel review before launch */
const PRIVACY = [
  ['1. Who we are', ['Araba Foundation is a Nigerian non-governmental organisation working in economic empowerment and humanitarian support. Our registration details will be published here once verified.']],
  ['2. What we collect', ['Through this website\u2019s forms we may collect: identity and contact details (name, email, phone); application details (the information you choose to provide in the support portal, such as business, location or situation details); donation pledges (name, email, amount, frequency, programme designation); and enquiry content.', '<strong>Current status (pre-launch):</strong> the submission services are not yet connected, so data entered on this site is validated in your browser only and is <strong>not transmitted or stored</strong> anywhere.']],
  ['3. How we use it', ['To respond to enquiries; to assess and process applications for support; to process and receipt donations once payment is live; to send programme updates where you have opted in; to meet legal and safeguarding obligations; and to produce aggregate, non-identifying impact reporting.']],
  ['4. Sharing', ['We do not sell personal data, ever. We share data only with service providers operating under agreement (e.g. payment and email providers once appointed), with programme partners where necessary and consented, and where required by law or necessary to protect a person at risk.']],
  ['5. Storage & security', ['When services go live, data will be transmitted encrypted in transit and stored with access controls; the specific providers, locations and retention periods will be documented here. We collect the minimum necessary — our application forms deliberately avoid bank details, card details and other sensitive financial information.']],
  ['6. Children & vulnerable people', ['Data relating to children is collected only through responsible partner institutions, kept to a minimum, and never published in identifiable form. Images, names and stories require informed consent (including guardian consent for children) and can be withdrawn — see our Safeguarding Policy.']],
  ['7. Cookies & analytics', ['This site currently sets no tracking cookies. A privacy-conscious analytics setup is planned; the integration point is present in the code and remains disabled until a measurement ID is configured. No advertising trackers are used.']],
  ['8. Your rights', ['You may request access to, correction of, or deletion of your personal data, and object to its processing, by contacting us through the details published on the <a href="#/contact">Contact page</a> once channels are live.']],
  ['9. Changes & contact', ['This policy will be updated as services come online; material changes will be announced on this page. Questions about privacy can be directed to us via the Contact page.']],
];
const SAFEGUARDING = [
  ['1. Our commitment', ['Araba Foundation exists to restore dignity — and that begins with safety. We are committed to creating and maintaining an environment in which children and vulnerable adults are protected from harm, abuse, exploitation and humiliation, by anyone acting under our name: staff, volunteers, partners and representatives.']],
  ['2. Scope', ['This policy covers all children (under 18) and vulnerable adults who come into contact with our programmes, and all people and organisations acting for or with Araba Foundation, including partner institutions delivering joint activities.']],
  ['3. Principles', ['The best interests of the child or vulnerable person come first. Zero tolerance for abuse, neglect, exploitation or humiliation. Do no harm: no programme activity is worth a safeguarding risk. Dignity and privacy in every interaction, image and story. Confidentiality balanced with action — concerns are handled discreetly but never ignored. Safeguarding is everyone\u2019s responsibility.']],
  ['4. In our programmes', ['Child-facing roles are staffed only after proportionate vetting. Engagement with children in partner homes is supervised and conducted in open, appropriate settings; no unaccompanied private contact. For vulnerable adults, support proceeds on the basis of informed consent and respect for the person\u2019s autonomy and dignity. Partner institutions must share our standards as a condition of working with us.']],
  ['5. Images, stories & consent', ['No photograph, name or story is collected or published without informed consent (including guardian consent for children, and assent from the child where appropriate). Consent can be withdrawn. We never publish identifying details of children, and we never use exploitative poverty imagery, exaggerated emotional manipulation, or photographs that compromise a person\u2019s privacy or dignity. Placeholder imagery on this website is used precisely because no consented photography exists yet.']],
  ['6. Recruitment & vetting', ['Roles involving contact with children or vulnerable adults require references and proportionate background checks, a self-declaration, and acceptance of this policy and our code of conduct before starting.']],
  ['7. Code of conduct', ['Treat every person with respect. Never be alone with a child out of sight of others. Never photograph or share images without consent. Never exchange contact details, gifts or money privately with beneficiaries. Never use language or behaviour that shames, threatens or demeans. Report every concern — however uncertain — through the channels below.']],
  ['8. Reporting a concern', ['If you believe a child or vulnerable person is in immediate danger, contact the police or appropriate authorities first. To raise a concern to Araba Foundation — about our people, our programmes or a partner — contact us through the <a href="#/contact">Contact page</a> and mark your message as a safeguarding concern; a named safeguarding focal point (placeholder — to be appointed and published) will handle it confidentially. Concerns can be raised anonymously and will still be acted on.']],
  ['9. How we respond', ['Every concern is acknowledged, assessed and recorded. We act to protect the person concerned, involve authorities where appropriate, cooperate fully with investigations, and review our practice afterwards so the same risk cannot recur silently.']],
  ['10. Review', ['This policy is owned by [placeholder — safeguarding lead role] and will be reviewed [placeholder — review cadence] and after any significant incident. The published version is binding on everyone acting under our name.']],
];

/* ============ PAGES (do not edit below unless you're comfortable with code) ============ */
function pgHome(){
  const mq = ['Creating opportunities','Restoring dignity','Empowering lives','Everyone deserves an opportunity'];
  const mqHTML = `<div class="mq-track" aria-hidden="true">${(mq.map(s=>`<span>${s}</span>`).join('')).repeat(4)}</div>`;
  return `
  <section class="hero"><div class="wrap hero-grid">
    <div class="hero-copy">
      ${ov('Araba Foundation — Nigeria')}
      <h1 class="hero-h"><span class="hline">Creating <span class="em">Opportunities.</span></span><span class="hline">Restoring <span class="em">Dignity.</span></span><span class="hline">Empowering <span class="em">Lives.</span></span></h1>
      <p class="lede">Araba Foundation is committed to building a more inclusive and empowered Nigeria by supporting underserved entrepreneurs, vulnerable individuals, children, and people living with disabilities.</p>
      <div class="cta-row">
        <a class="btn btn-solid" href="#/donate">${ic('heart')} Support our mission</a>
        <a class="btn btn-ghost" href="#/programmes">Explore our programmes ${ic('arrow')}</a>
      </div>
      <div class="hero-facts">
        <span>${ic('pin')} Working across Nigeria</span>
        <span>${ic('case')} Five core programmes</span>
        <span>${ic('shield')} Dignity-first, community-first</span>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-weave" aria-hidden="true"></div>
      <figure class="ph arch"><img src="https://picsum.photos/seed/araba-hero/900/1200.jpg" alt="Placeholder photograph of a Nigerian community scene — to be replaced with verified field photography" fetchpriority="high"><figcaption class="ph-tag">Placeholder photography</figcaption></figure>
      <aside class="hero-quote"><p>"Poverty should not determine someone's future."</p><span>The belief we stand on</span></aside>
    </div>
  </div></section>
  <section class="sec"><div class="wrap mission-grid">
    <div class="reveal">
      ${ov('Our mission')}
      <h2>Everyone deserves an opportunity.</h2>
      <span class="stitch"></span>
      <p style="margin-top:22px">Across Nigeria, determination is never in short supply. It is in the market stall opened before dawn, the workshop where an apprentice perfects a craft, the young graduate with a business plan and no way to fund it, the mother building a livelihood one customer at a time.</p>
      <p style="margin-top:14px">What is often missing is not ability or ambition — it is <strong>access</strong>: to capital, to skills, to networks, and to someone who takes that ambition seriously.</p>
      <p style="margin-top:14px">Araba Foundation exists to bridge that gap — connecting underserved entrepreneurs, vulnerable individuals, children and people living with disabilities to the practical support that turns effort into independence.</p>
    </div>
    <div class="bridge reveal" role="img" aria-label="Diagram: three gaps — capital, skills and support — bridged into opportunity with dignity">
      <ul class="gaps">
        <li>${ic('case')}<div><strong>Access to capital</strong><span>Stock, equipment, seed funding</span></div></li>
        <li>${ic('sprout')}<div><strong>Access to skills & education</strong><span>Training, literacy, vocational skills</span></div></li>
        <li>${ic('users')}<div><strong>Access to support & networks</strong><span>Mentorship, advocacy, opportunity</span></div></li>
      </ul>
      <svg class="b-lines" viewBox="0 0 120 160" aria-hidden="true">
        <path d="M0 25 C 55 25, 60 78, 112 80"/><path class="g" d="M0 80h112"/><path d="M0 135 C 55 135, 60 82, 112 80"/><circle cx="112" cy="80" r="5"/>
      </svg>
      <div class="b-out"><b>Opportunity</b><p>— with dignity: the outcome every Araba Foundation programme works toward.</p></div>
    </div>
  </div></section>
  <section class="sec" style="background:var(--cream-2)"><div class="wrap">
    <div class="sec-h reveal">${ov('What we do')}
      <h2>Five programmes. One purpose.</h2>
      <p class="sub">Economic empowerment for people ready to build; humanitarian support for people who need someone to stand with them. Hover or focus each programme to preview it.</p>
    </div>
    <div class="pindex reveal">
      <div class="pi-rows">
        ${PROGRAMMES.map(p=>`
        <a class="prow" href="#/${p.key}" data-k="${p.key}">
          <span class="pi-thumb"><img src="https://picsum.photos/seed/${p.seed}/400/400.jpg" alt="" loading="lazy"></span>
          <span class="n">${p.num}</span>
          <span><h3>${p.name}</h3><p class="d">${p.short}</p></span>
          <span class="go">${ic('arrow')}</span>
        </a>`).join('')}
      </div>
      <div class="pi-media" aria-hidden="true">
        ${PROGRAMMES.map((p,i)=>`<img data-k="${p.key}" class="${i===0?'on':''}" src="https://picsum.photos/seed/${p.seed}/800/1000.jpg" alt="" loading="lazy">`).join('')}
      </div>
    </div>
    <p class="reveal" style="margin-top:26px"><a class="tlink" href="#/programmes">See all programmes in detail ${ic('arrow')}</a></p>
  </div></section>
  <section class="sec dk"><div class="wrap">
    <div class="sec-h reveal">${ov('Measured impact')}
      <h2 style="color:var(--cream)">Together, we can make a difference.</h2>
      <p class="sub" style="color:rgba(246,243,235,.8)">We are building an impact dashboard around verified, auditable figures. Until those figures exist, we publish slots — never invented numbers.</p>
    </div>
    ${dash(false)}
    <p class="reveal" style="margin-top:26px"><a class="tlink" style="color:var(--gold)" href="#/impact">Our approach to impact reporting ${ic('arrow')}</a></p>
  </div></section>
  <section class="sec"><div class="wrap">
    <div class="sec-h reveal">${ov('Stories & field notes')}
      <h2>Every number is a person.</h2>
      <p class="sub">This editorial section will carry real beneficiary stories, community activities, field reports and programme updates. The samples below show the format — and are clearly marked as demonstration content.</p>
    </div>
    <div class="st-grid reveal">
      <a class="st-lead" href="#/story/${STORIES[0].slug}">
        ${ph(STORIES[0].seed,'Placeholder photograph illustrating a sample story','16/9','Placeholder image')}
        <span class="st-body"><span class="kicker">${STORIES[0].tagLabel}</span><span class="dtag" style="margin-top:10px">${DEMO}</span><h3>${STORIES[0].title}</h3><p>${STORIES[0].ex}</p><span class="tlink" style="margin-top:14px">Read the sample story ${ic('arrow')}</span></span>
      </a>
      <div class="st-side">
        ${STORIES.slice(1).map(s=>`
        <a class="st-mini" href="#/story/${s.slug}">
          ${ph(s.seed,'Placeholder photograph illustrating a sample story','1/1','Placeholder')}
          <span class="m-body"><span class="dtag">${DEMO}</span><h3>${s.title}</h3><p>${s.ex}</p></span>
        </a>`).join('')}
      </div>
    </div>
    <div class="st-more reveal">
      <p style="color:var(--ink-2);font-size:.9rem;max-width:56ch">Real stories will only ever be published with informed consent — and never in a way that compromises a beneficiary's privacy or dignity.</p>
      <a class="tlink" href="#/news">Visit News &amp; Stories ${ic('arrow')}</a>
    </div>
  </div></section>
  <section class="sec" style="background:var(--cream-2)"><div class="wrap">
    <div class="sec-h reveal">${ov('Get involved')}<h2>Be part of someone's story.</h2></div>
    <div class="reveal">
      <a class="gi-band gi-gold" href="#/donate"><span class="gn">01</span><span><h3>Make a donation</h3><p>One gift can restock a market stall, kit out a workshop, or put a child's school year behind them.</p></span><span class="go">${ic('arrow')}</span></a>
      <a class="gi-band" href="#/volunteer"><span class="gn">02</span><span><h3>Become a volunteer</h3><p>Skills, time and presence — mentors, trainers, organisers and hands-on helpers.</p></span><span class="go">${ic('arrow')}</span></a>
      <a class="gi-band gi-dark" href="#/partner"><span class="gn">03</span><span><h3>Become a corporate partner</h3><p>Companies, foundations and development organisations building programmes with us — not just for us.</p></span><span class="go">${ic('arrow')}</span></a>
    </div>
  </div></section>
  <div class="marquee">${mqHTML}</div>
  <section class="sec dk cta-dark"><div class="wrap reveal">
    ${ov('Join us')}
    <h2 style="color:var(--cream)">Your support can change a life.</h2>
    <p>Individuals, organisations, companies and development partners — there is a place for you in this work. Whether you give, volunteer, partner with us, or simply tell someone about what we do, you become part of the story of a person finding their footing.</p>
    <div class="cta-row2">
      <a class="btn btn-gold" href="#/donate">${ic('heart')} Donate</a>
      <a class="btn btn-ghost-l" href="#/partner">${ic('rings')} Partner with us</a>
      <a class="btn btn-ghost-l" href="#/volunteer">${ic('users')} Volunteer</a>
    </div>
    <p class="alt">Looking for support yourself? This door is open to you too — <a href="#/apply">start an application</a>.</p>
  </div></section>`;
}
function pgAbout(){
  const vals = [['Compassion','We lead with empathy and respect — never pity.'],['Integrity','We do what we say, and say what we do.'],['Dignity','Support is delivered in a way that honours the person receiving it.'],['Inclusion','No one is excluded by circumstance, ability or status.'],['Accountability','We answer for every resource entrusted to us.'],['Empowerment','Our goal is independence, not dependency.'],['Transparency','Our decisions, figures and finances are open to scrutiny.'],['Sustainability','We build support that lasts beyond the moment.']];
  return `
  ${pageHero('About us','Built on belief. Guided by dignity.','Araba Foundation is a Nigerian non-governmental organisation dedicated to empowering underserved communities, supporting vulnerable individuals, promoting entrepreneurship, and improving access to opportunity.')}
  <section class="sec"><div class="wrap">
    <div class="split">
      <div class="reveal">
        ${ov('Our story')}
        <h2>A foundation for the people the system walks past.</h2>
        <span class="stitch"></span>
        <p style="margin-top:22px">Araba Foundation was born from a simple observation: the people working hardest to change their circumstances are too often the people with the least access to the resources that change requires. Determination is abundant in Nigeria\u2019s markets, workshops and communities — opportunity is not.</p>
        <p style="margin-top:14px">We exist to close that distance: pairing economic empowerment with humanitarian support, so that a trader, a first-time founder, a child in a children\u2019s home, a person sleeping rough, or a disabled entrepreneur can all find the same thing here — a fair chance, delivered with respect.</p>
        <p style="margin-top:14px">The name <em>Araba</em> carries meaning in Yoruba tradition; we are confirming its public telling with cultural custodians before we share that story here.</p>
        ${note('Our founding story, founding team and registration details will be published here once verified. We do not publish organisational history that has not been confirmed.')}
      </div>
      <div class="reveal">${ph('araba-about','Placeholder photograph of community life in Nigeria','4/3')}
        <blockquote class="obj" style="margin-top:26px"><p>"We believe that poverty should not determine someone's future. Every individual deserves dignity, opportunity, support, and the chance to build a better life."</p></blockquote>
      </div>
    </div>
  </div></section>
  <section class="sec" style="background:var(--cream-2)"><div class="wrap reveal">
    ${ov('Mission & vision')}<h2>What drives the work.</h2>
    <div class="pillars" style="margin-top:32px">
      <div class="pillar"><span class="pk">Our mission</span><h3 style="font-size:1.3rem">Create opportunity, deliberately.</h3><p style="font-size:.98rem">To create opportunities for underserved individuals, vulnerable communities, and low-income entrepreneurs in Nigeria through economic empowerment, social support, education, inclusion, and access to sustainable livelihood opportunities.</p></div>
      <div class="pillar"><span class="pk">Our vision</span><h3 style="font-size:1.3rem">A society where everyone can contribute.</h3><p style="font-size:.98rem">A society where everyone, regardless of financial circumstances, physical ability, background, or social status, has the opportunity to live with dignity, achieve economic independence, and contribute meaningfully to society.</p></div>
    </div>
    <div class="keystone">${ic('shield')} <span><b>Dignity</b> is the foundation beneath every programme — support is delivered in a way that honours the person receiving it.</span></div>
  </div></section>
  <section class="sec"><div class="wrap">
    <div class="sec-h reveal">${ov('Core values')}<h2>Eight values we are willing to be judged by.</h2></div>
    <div class="reveal" style="columns:2;column-gap:60px">
      ${vals.map(v=>`<div style="display:flex;gap:14px;padding:16px 0;border-bottom:1px solid var(--line);break-inside:avoid"><strong style="font:italic 500 1.3rem var(--f-d);min-width:170px;color:var(--gold-ink)">${v[0]}</strong><span style="font-size:.92rem;color:var(--ink-2);align-self:center">${v[1]}</span></div>`).join('')}
    </div>
  </div></section>
  <section class="sec" style="background:var(--cream-2)"><div class="wrap">
    <div class="sec-h reveal">${ov('Our approach')}<h2>How we work — and why it works.</h2></div>
    <div class="reveal">${steps([
      ['Listen first','Every engagement starts with the people concerned — their situation, their skills, their own definition of a better life.'],
      ['Assess responsibly','Requests are reviewed against clear eligibility criteria and the resources actually available. We never make promises we cannot keep.'],
      ['Equip, don\u2019t just give','Wherever possible, support builds capability: training, tools, mentorship and structures that outlast a single handout.'],
      ['Walk alongside','Follow-up matters more than a photo opportunity. We stay connected to the people and businesses we support.'],
      ['Account openly','We report what we did, what it cost and what changed — and we publish nothing we cannot verify.'],
    ])}</div>
  </div></section>
  <section class="sec"><div class="wrap split">
    <div class="reveal">
      ${ov('Transparency')}<h2>Committed to transparency.</h2>
      <p style="margin-top:16px">Trust is earned with evidence, not adjectives. Our transparency commitments:</p>
      <ul class="inits" style="grid-template-columns:1fr">
        <li>${ic('check')}<div><strong>Publish verified figures only</strong><span>No beneficiary numbers, testimonials, partnerships or achievements are displayed without evidence.</span></div></li>
        <li>${ic('check')}<div><strong>Publish reports and financials</strong><span>Annual impact reports and financial statements from the first completed reporting cycle.</span></div></li>
        <li>${ic('check')}<div><strong>Explain how decisions are made</strong><span>Applicants are told what support depends on: eligibility, assessment and available resources.</span></div></li>
        <li>${ic('check')}<div><strong>Welcome scrutiny</strong><span>From donors, partners, regulators and the communities we serve.</span></div></li>
      </ul>
      ${note('Registration number, trustees, board members and audited financials are intentionally withheld until verified. Placeholder slots are ready for each.')}
    </div>
    <div class="reveal">
      ${ov('Inclusion')}<h2>Committed to inclusion.</h2>
      <p style="margin-top:16px">Inclusion is not a programme here — it is the design brief. It shapes who we support, how we communicate, and how this website itself was built:</p>
      <ul class="inits" style="grid-template-columns:1fr">
        <li>${ic('check')}<div><strong>Keyboard navigation</strong><span>Every interactive element is reachable and operable by keyboard.</span></div></li>
        <li>${ic('check')}<div><strong>Readable contrast</strong><span>The palette was checked against WCAG contrast thresholds for text and interfaces.</span></div></li>
        <li>${ic('check')}<div><strong>Descriptive image text</strong><span>Images carry meaningful alternative text and honest placeholder labels.</span></div></li>
        <li>${ic('check')}<div><strong>Screen-reader structure</strong><span>Semantic HTML, landmarks, labelled forms and live status regions.</span></div></li>
        <li>${ic('check')}<div><strong>Reduced-motion support</strong><span>Animation is disabled for visitors who prefer reduced motion.</span></div></li>
      </ul>
    </div>
  </div></section>`;
}
function pgProgrammes(){
  const block = p => `
    <div class="pg-block reveal">
      <span class="pg-num" aria-hidden="true">${p.num}</span>
      <div class="pb">
        <span class="tag">${p.tagline}</span>
        <h2>${p.name}</h2>
        <p style="color:var(--gold-ink);font-size:.85rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-top:8px">${p.formal}</p>
        <div class="two-col"><p>${p.overview[0]}</p><p>${p.overview[1]}</p></div>
        ${ov('Key initiatives')}
        <ul class="inits">${p.initiatives.map(i=>`<li>${ic('check')}<div><strong>${i[0]}</strong><span>${i[1]}</span></div></li>`).join('')}</ul>
        <div style="margin-top:22px;display:flex;flex-wrap:wrap;gap:12px;align-items:center">
          <a class="btn btn-solid" href="#/apply/${p.key}">${ic('send')} Apply under this programme</a>
          <a class="tlink" href="#/${p.key}">Explore the ${p.name} programme ${ic('arrow')}</a>
        </div>
      </div>
    </div>`;
  return `
  ${pageHero('Our programmes','Five programmes. One purpose.','Araba Foundation works across two pillars — economic empowerment and humanitarian support — anchored by a single commitment: dignity for every person we serve.')}
  <section class="sec"><div class="wrap reveal">
    ${ov('How the work is organised')}<h2>Two pillars, five programmes.</h2>
    <div class="pillars" style="margin-top:34px">
      <div class="pillar"><span class="pk">Pillar I</span><h3>Economic empowerment</h3><p>For people ready to work, build and grow.</p>
        <ul><li><span class="n">01</span><a href="#/sme">SME Empowerment &amp; Micro-Business Support</a></li><li><span class="n">02</span><a href="#/startup">Entrepreneurship &amp; Startup Support</a></li></ul></div>
      <div class="pillar"><span class="pk">Pillar II</span><h3>Humanitarian support</h3><p>For people who need someone to stand with them right now.</p>
        <ul><li><span class="n">03</span><a href="#/humanitarian">Homelessness &amp; Vulnerable People Support</a></li><li><span class="n">04</span><a href="#/children">Orphanage &amp; Child Welfare Support</a></li><li><span class="n">05</span><a href="#/disability">Disability Inclusion &amp; Empowerment</a></li></ul></div>
    </div>
    <div class="keystone">${ic('shield')} <span><b>Dignity</b> is the keystone: the same standard of respect applies whether we are backing a business or carrying relief supplies.</span></div>
    <div class="pnote">${ic('info')}<div><strong>Important.</strong> Araba Foundation does not promise guaranteed grants, loans or funding. All support is subject to eligibility criteria, assessment and available resources.</div></div>
  </div></section>
  <section class="sec" style="padding-top:0"><div class="wrap" style="padding-top:0">${PROGRAMMES.map(block).join('')}</div></section>
  <section class="sec dk cta-dark"><div class="wrap reveal">${ov('Take the next step')}
    <h2 style="color:var(--cream)">Support a programme — or apply to one.</h2>
    <p>Every programme accepts applications from the people it exists to serve, and donations designated to it from the people who believe in it.</p>
    <div class="cta-row2"><a class="btn btn-gold" href="#/apply">${ic('send')} Apply for support</a><a class="btn btn-ghost-l" href="#/donate">${ic('heart')} Donate</a></div>
  </div></section>`;
}
function pgProgramme(key){
  const p = P(key); if(!p) return pgNotFound();
  return `
  ${pageHero('Programme '+p.num+' — Pillar '+p.pillar, p.name, p.tagline)}
  <section style="padding:0"><div class="wrap" style="padding-top:34px">${ph(p.seed,'Placeholder photograph — '+p.formal+' programme imagery to be replaced with verified field photography','21/9','Placeholder — field photography to come')}</div></section>
  <section class="sec"><div class="wrap">
    <div class="split">
      <div class="reveal">
        ${ov('Overview')}<h2>Why this programme exists.</h2>
        <p style="margin-top:20px">${p.overview[0]}</p><p style="margin-top:14px">${p.overview[1]}</p>
        <blockquote class="obj"><p>${p.objective}</p></blockquote>
      </div>
      <div class="reveal">
        ${ov('Who we support')}
        <ul class="who-chips">${p.who.map(w=>`<li>${w}</li>`).join('')}</ul>
        <div style="margin-top:26px" class="formcard">
          <h3 style="font-size:1.15rem">${ic('info')} Apply or designate</h3>
          <p style="font-size:.9rem;color:var(--ink-2);margin:10px 0 16px">Applications under this programme are assessed against eligibility criteria and available resources. Submitting an application does not guarantee assistance.</p>
          <div style="display:flex;flex-direction:column;gap:10px">
            <a class="btn btn-solid" style="justify-content:center" href="#/apply/${p.key}">${ic('send')} Apply for support</a>
            <a class="btn btn-ghost" style="justify-content:center" href="#/donate/${p.key}">${ic('heart')} Donate to this programme</a>
          </div>
        </div>
      </div>
    </div>
  </div></section>
  <section class="sec" style="background:var(--cream-2)"><div class="wrap">
    <div class="sec-h reveal">${ov('Key initiatives')}<h2>What support looks like in practice.</h2></div>
    <ul class="inits reveal">${p.initiatives.map(i=>`<li>${ic('check')}<div><strong>${i[0]}</strong><span>${i[1]}</span></div></li>`).join('')}</ul>
  </div></section>
  <section class="sec"><div class="wrap">
    <div class="sec-h reveal">${ov('How support works')}<h2>From application to follow-up.</h2>
      <p class="sub">The exact steps and support types vary by programme, eligibility and the resources actually available at the time.</p></div>
    <div class="reveal">${steps([
      ['Expression of interest','Submit an application through the accessible support portal — free of charge.'],
      ['Assessment & eligibility','Each request is screened against clear criteria. We may reach out for a conversation.'],
      ['Support plan','If support is approved, it is shaped around what will actually help — not a one-size package.'],
      ['Delivery & follow-up','Support is delivered with dignity, followed up, and recorded honestly.'],
    ])}</div>
    <div class="pnote reveal">${ic('shield')}<div><strong>A note on honesty.</strong> Araba Foundation does not operate as a loan company or a guaranteed-grant scheme, and we will never charge a fee for applications. Beware of anyone claiming otherwise.</div></div>
  </div></section>
  <section class="sec dk cta2"><div class="wrap cta2-grid reveal">
    <div>${ov('Programme '+p.num)}<h2 style="color:var(--cream)">Both doors are open.</h2>
      <p style="color:rgba(246,243,235,.8);margin-top:14px">If ${p.name.toLowerCase()} describes your situation, apply. If it describes the change you want to fund, give with designation.</p></div>
    <div class="cta2-btns">
      <a class="btn btn-gold" style="justify-content:center" href="#/apply/${p.key}">${ic('send')} Apply — ${p.formal}</a>
      <a class="btn btn-ghost-l" style="justify-content:center" href="#/donate/${p.key}">${ic('heart')} Donate to this programme</a>
    </div>
  </div></section>`;
}
function pgImpact(){
  return `
  ${pageHero('Our impact','Evidence, or silence.','This page exists for the people who check: donors, partners and grant-makers doing their due diligence. It will report what we did, what it cost and what changed — and nothing we cannot verify.')}
  <section class="sec"><div class="wrap">
    <div class="sec-h reveal">${ov('What we measure')}<h2>Six metrics, clearly defined.</h2>
      <p class="sub">Each metric below shows its counting definition. Values remain unpublished until figures can be verified through proper monitoring — slots are ready for the data.</p></div>
    ${dash(true)}
  </div></section>
  <section class="sec" style="background:var(--cream-2)"><div class="wrap split">
    <div class="reveal">
      ${ov('Reporting principles')}<h2>How we will report.</h2>
      <ul class="inits" style="grid-template-columns:1fr;margin-top:14px">
        <li>${ic('check')}<div><strong>Verified or nothing</strong><span>Figures appear only after monitoring and internal review are complete.</span></div></li>
        <li>${ic('check')}<div><strong>Consent first</strong><span>No story, image or name is published without informed consent.</span></div></li>
        <li>${ic('check')}<div><strong>Dignity always</strong><span>No exploitative imagery or exaggerated emotional manipulation — ever.</span></div></li>
        <li>${ic('check')}<div><strong>Timely and consistent</strong><span>Reporting on a fixed annual cycle once the first cycle closes.</span></div></li>
        <li>${ic('check')}<div><strong>Methodology published</strong><span>Every published metric carries its definition and counting rules.</span></div></li>
      </ul>
    </div>
    <div class="reveal">
      ${ov('Programme achievements')}<h2>By programme.</h2>
      <div style="margin-top:18px;display:flex;flex-direction:column">
        ${PROGRAMMES.map(p=>`<div style="display:flex;justify-content:space-between;gap:14px;align-items:center;padding:13px 0;border-bottom:1px solid var(--line)"><span><b style="font:italic 500 1rem var(--f-d);color:var(--gold-ink)">${p.num}</b> &nbsp;<strong style="font-size:.95rem">${p.formal}</strong></span><span class="st-pill st-pend">Reporting opens with first verified cycle</span></div>`).join('')}
      </div>
      ${note('Programme achievement summaries will populate these rows as monitoring data is verified.')}
    </div>
  </div></section>
  <section class="sec"><div class="wrap">
    <div class="sec-h reveal">${ov('Community activities & photographs')}<h2>From the field.</h2>
      <p class="sub">Field reports and verified programme photography will be published here as activities are documented with consent.</p></div>
    <div class="news-grid reveal">
      <div class="slot">${ic('doc')}<strong>Field report — in preparation</strong><span>Community outreach activity report. Placeholder slot.</span></div>
      <div class="slot">${ic('doc')}<strong>Programme update — in preparation</strong><span>SME support cohort update. Placeholder slot.</span></div>
      <div class="slot">${ic('doc')}<strong>Photo essay — in preparation</strong><span>Consented programme photography. Placeholder slot.</span></div>
    </div>
    <div class="gal reveal" style="margin-top:30px">
      ${ph('araba-f1','Placeholder photograph — programme activity','4/3','Placeholder')}
      ${ph('araba-f2','Placeholder photograph — programme activity','4/3','Placeholder')}
      ${ph('araba-f3','Placeholder photograph — programme activity','4/3','Placeholder')}
      ${ph('araba-f4','Placeholder photograph — programme activity','4/3','Placeholder')}
    </div>
    <p class="reveal" style="margin-top:22px"><a class="tlink" href="#/news">Read stories & field notes ${ic('arrow')}</a></p>
  </div></section>
  <section class="sec" style="background:var(--cream-2)"><div class="wrap split">
    <div class="reveal">
      ${ov('Annual reports & financial transparency')}<h2>The paper trail.</h2>
      <p style="margin-top:16px">From our first completed reporting cycle, annual impact reports and financial statements will be published here as downloads. Until then, these slots state plainly that the documents do not yet exist.</p>
      <div class="formcard" style="margin-top:22px">
        ${[['Annual Impact Report','Placeholder edition — awaiting first reporting cycle'],['Financial Statements','Awaiting first audited period'],['Safeguarding Policy','Published on this website']].map(r=>`
        <div style="display:flex;justify-content:space-between;align-items:center;gap:14px;padding:14px 0;border-bottom:1px solid var(--line)">
          <span style="display:flex;gap:12px;align-items:center">${ic('doc')}<span><strong style="font-size:.95rem">${r[0]}</strong><span style="display:block;font-size:.8rem;color:var(--ink-2)">${r[1]}</span></span></span>
          ${r[0]==='Safeguarding Policy'?`<a class="tlink" href="#/safeguarding">Read ${ic('arrow')}</a>`:`<span><button class="btn btn-ghost" disabled>${ic('dl')} Download PDF</button></span>`}
        </div>`).join('')}
        <p style="font-size:.82rem;color:var(--ink-2);margin-top:14px">Download buttons are intentionally disabled — enabling them before real reports exist would be a claim, not a document.</p>
      </div>
    </div>
    <div class="reveal">
      ${ov('For institutional donors')}<h2>Due diligence, upfront.</h2>
      <p style="margin-top:16px;font-size:.95rem">Status of documents institutional partners typically request:</p>
      <table class="ddlist" style="margin-top:16px">
        <thead><tr><th scope="col">Document</th><th scope="col">Status</th></tr></thead>
        <tbody>
          <tr><td>Safeguarding Policy</td><td><span class="st-pill st-ok">Published</span></td></tr>
          <tr><td>Privacy Policy</td><td><span class="st-pill st-ok">Published</span></td></tr>
          <tr><td>Certificate of registration</td><td><span class="st-pill st-req">On request — placeholder</span></td></tr>
          <tr><td>Audited financial statements</td><td><span class="st-pill st-pend">Pending first cycle</span></td></tr>
          <tr><td>Annual impact report</td><td><span class="st-pill st-pend">Pending first cycle</span></td></tr>
          <tr><td>Programme monitoring data</td><td><span class="st-pill st-req">On request</span></td></tr>
          <tr><td>Partnership references</td><td><span class="st-pill st-pend">To be established</span></td></tr>
        </tbody>
      </table>
      <p style="margin-top:18px"><a class="tlink" href="#/partner">Partner with us ${ic('arrow')}</a></p>
    </div>
  </div></section>`;
}
function enquiryForm(id, name, extra=''){
  return `<form class="formcard" data-form="enquiry" data-name="${name}" id="${id}" novalidate>
    ${extra}
    <div class="field"><label for="${id}-n">Full name <span class="req" aria-hidden="true">*</span></label><input id="${id}-n" name="name" type="text" required autocomplete="name"><p class="ferr" hidden>Please enter your name.</p></div>
    <div class="field"><label for="${id}-e">Email address <span class="req" aria-hidden="true">*</span></label><input id="${id}-e" name="email" type="email" required autocomplete="email"><p class="ferr" hidden>Please enter a valid email address.</p></div>
    <div class="field"><label for="${id}-o">Organisation <span style="font-weight:400;color:var(--ink-2)">(optional)</span></label><input id="${id}-o" name="organisation" type="text" autocomplete="organization"></div>
    <div class="field"><label for="${id}-p">Phone <span style="font-weight:400;color:var(--ink-2)">(optional)</span></label><input id="${id}-p" name="phone" type="tel" autocomplete="tel"></div>
    <div class="field"><label for="${id}-m">Message <span class="req" aria-hidden="true">*</span></label><textarea id="${id}-m" name="message" required></textarea><p class="ferr" hidden>Please include a short message.</p></div>
    <div class="field check"><input type="checkbox" name="consent" id="${id}-c" required><label for="${id}-c" style="font-weight:400">I agree to my details being used to respond to this enquiry, as described in the <a href="#/privacy">Privacy Policy</a>. <span class="req" aria-hidden="true">*</span></label></div>
    <p class="ferr" id="${id}-cc" hidden>Please confirm consent so we may respond.</p>
    <button class="btn btn-solid" type="submit">${ic('send')} Send enquiry</button>
    <div class="fstatus-slot" aria-live="polite"></div>
  </form>`;
}
function pgInvolved(){
  const sec = (id,num,title,icn,body,bullets,formName) => `
    <div class="pg-block reveal" id="${id}">
      <span class="pg-num" aria-hidden="true">${num}</span>
      <div class="pb">
        <span class="tag">${body}</span>
        <h2>${title}</h2>
        <ul class="inits">${bullets.map(b=>`<li>${ic(icn)}<div><strong>${b[0]}</strong><span>${b[1]}</span></div></li>`).join('')}</ul>
        <div style="margin-top:34px">${enquiryForm('f-'+id, formName)}</div>
      </div>
    </div>`;
  return `
  ${pageHero('Get involved','Be part of someone\u2019s story.','There are four ways in — giving your money, your time, your organisation\u2019s weight, or your voice. Each one matters, and each starts with a conversation.',`<ul class="trust-chips"><li>${ic('shield')} All engagements follow our Safeguarding Policy</li><li>${ic('info')} Enquiry forms are pre-launch integration points</li></ul>`)}
  <section class="sec"><div class="wrap">
    ${sec('vol','01','Volunteer — give time and skills','users','For people who want to contribute directly.',[
      ['Business mentorship & advisory','Guide small business owners through real decisions.'],
      ['Vocational & skills training support','Help deliver practical, hands-on learning.'],
      ['Community outreach & distribution','Be present where the work happens.'],
      ['Digital, media & storytelling','Help us document the work honestly and well.'],
      ['Programme administration','Keep the engine running behind the scenes.'],
      ['Professional services','Legal, finance, health and other expertise, pro bono.'],
    ],'Volunteer enquiry')}
    ${sec('corp','02','Corporate partnerships','rings','For businesses investing in community and CSR programmes.',[
      ['Programme sponsorship','Underwrite a programme area with transparent reporting.'],
      ['Employee giving & matched funding','Turn your team\u2019s generosity into sustained support.'],
      ['In-kind & professional support','Goods, services and expertise where they matter most.'],
      ['Co-designed community investment','CSR built with communities, not just for them.'],
    ],'Corporate partnership enquiry')}
    ${sec('inst','03','Institutional partnerships','shield','For NGOs, development organisations, foundations and humanitarian agencies.',[
      ['Programme collaboration','Deliver alongside organisations with shared standards.'],
      ['Due diligence & documentation','Policies published; documents available on request.'],
      ['Joint monitoring & learning','Shared measurement, honest reporting.'],
    ],'Institutional partnership enquiry')}
    ${sec('fund','04','Fundraising partners','heart','For individuals and organisations raising support for our programmes.',[
      ['Community fundraising','Turn birthdays, drives and events into programme support.'],
      ['Online campaigns','Champion a programme designation of your choice.'],
      ['Faith & community groups','Organised giving with full transparency.'],
    ],'Fundraising partnership enquiry')}
    ${note('Dedicated pages: <a href="#/volunteer">Volunteer</a>, <a href="#/partner">Partner With Us</a>, and <a href="#/donate">Donate</a> carry more detail on each route.')}
  </div></section>`;
}
function pgDonate(){
  return `
  ${pageHero('Donate','Your generosity, honestly handled.','Every naira given is designated to the programme you choose — and accounted for in reporting you can check. Online payment is not yet active; this page shows the complete giving experience ahead of launch.',
  `<ul class="trust-chips">
    <li>${ic('shield')} Payment gateway: not yet connected</li>
    <li>${ic('info')} Tax-deductibility: not yet confirmed — no tax claims made</li>
    <li>${ic('check')} Designation: choose your programme</li>
    <li>${ic('users')} Recurring options: monthly, quarterly, annual</li>
  </ul>`)}
  <section class="sec"><div class="wrap split">
    <form class="formcard reveal" data-form="donation" id="donationForm" novalidate>
      ${ov('1 — Frequency')}
      <div class="field">
        <div class="seg" role="radiogroup" aria-label="Donation frequency">
          ${Object.entries(FREQ).map(([k,l],i)=>`<label class="seglabel ${i===0?'on':''}"><input class="sr" type="radio" name="frequency" value="${k}" ${i===0?'checked':''}>${l}</label>`).join('')}
        </div>
        <p class="hint">Recurring gifts give programmes stability — they let us plan support around people, not around fundraising cycles.</p>
      </div>
      ${ov('2 — Programme designation')}
      <div class="field">
        <div class="cat-radios" role="radiogroup" aria-label="Choose a programme to support">
          ${DESG.map(([k,l])=>`<label><input type="radio" name="designation" value="${k}" ${k==='general'?'checked':''}><span><strong>${l}</strong><span style="color:var(--ink-2)">${k==='general'?'Directs support to where assessment shows the greatest need.':'Directs your gift to this programme area.'}</span></span></label>`).join('')}
        </div>
      </div>
      ${ov('3 — Amount (NGN)')}
      <div class="field">
        <div class="chips" id="amtChips">
          ${DONATE_AMOUNTS.map((a,i)=>`<button type="button" class="chip ${i===1?'on':''}" data-v="${a}">${fmtNGN(a)}</button>`).join('')}
        </div>
        <div style="margin-top:14px"><label for="don-amt"><strong>Custom amount</strong> — or enter your own</label>
        <input id="don-amt" name="amount" type="number" min="100" step="any" value="10000" inputmode="numeric" required></div>
        <p class="ferr" hidden>Please enter a donation amount.</p>
        <p class="hint">International donors: multi-currency giving (USD, GBP, EUR) is planned as part of the payment integration. Amounts are currently displayed in Nigerian Naira (NGN).</p>
      </div>
      ${ov('4 — Your details')}
      <div class="field"><label for="don-name">Full name <span class="req" aria-hidden="true">*</span></label><input id="don-name" name="name" type="text" required autocomplete="name"><p class="ferr" hidden>Please enter your name.</p></div>
      <div class="field"><label for="don-email">Email address <span class="req" aria-hidden="true">*</span></label><input id="don-email" name="email" type="email" required autocomplete="email"><p class="ferr" hidden>Please enter a valid email address.</p></div>
      <div class="field"><label for="don-msg">Dedication or note <span style="font-weight:400;color:var(--ink-2)">(optional)</span></label><input id="don-msg" name="note" type="text"></div>
      ${ov('5 — Secure payment')}
      <div class="pnote">${ic('shield')}<div><strong>Secure payment gateway — integration pending.</strong> The payment provider slot is reserved but not yet connected. <strong>No payment can be taken and no card details are collected on this page.</strong> Bank transfer details will be published once verified.</div></div>
      <div class="field check"><input type="checkbox" name="ack" id="don-ack" required><label for="don-ack" style="font-weight:400">I understand online payment is not yet active and that submitting this form will not charge me or transmit any data. <span class="req" aria-hidden="true">*</span></label></div>
      <p class="ferr" id="don-acke" hidden>Please confirm you understand payment is not yet active.</p>
      <button class="btn btn-gold" type="submit">${ic('heart')} Complete donation pledge</button>
      <div class="fstatus-slot" aria-live="polite"></div>
    </form>
    <aside class="reveal">
      ${ov('Why give here')}<h2 style="font-size:1.5rem">Trust, built in.</h2>
      <div class="formcard" style="margin-top:18px">
        <h3 style="font-size:1.05rem">${ic('case')} Where your gift goes</h3>
        <p style="font-size:.88rem;color:var(--ink-2);margin:8px 0">Your chosen designation directs support to that programme area. A full breakdown of programme spending will be published in our financial reports once the first reporting cycle is complete — until then, we claim nothing we cannot show.</p>
      </div>
      <div class="formcard" style="margin-top:14px">
        <h3 style="font-size:1.05rem">${ic('info')} Tax status</h3>
        <p style="font-size:.88rem;color:var(--ink-2);margin:8px 0">Araba Foundation\u2019s tax-deductibility position in Nigeria or elsewhere is <strong>not yet confirmed</strong>. It will be stated here, clearly, once verified. Until then we make no tax claims.</p>
      </div>
      <div class="formcard" style="margin-top:14px">
        <h3 style="font-size:1.05rem">${ic('rings')} Other ways to give</h3>
        <ul class="inits" style="grid-template-columns:1fr;margin-top:6px">
          <li>${ic('check')}<div><strong>Bank transfer</strong><span>Account details will be published here once verified.</span></div></li>
          <li>${ic('check')}<div><strong>In-kind support</strong><span>Goods, equipment and professional services.</span></div></li>
          <li>${ic('check')}<div><strong>Corporate & institutional partnership</strong><span><a href="#/partner">Start a partnership conversation</a>.</span></div></li>
        </ul>
      </div>
    </aside>
  </div></section>
  <section class="sec" style="background:var(--cream-2)"><div class="wrap">
    <div class="sec-h reveal">${ov('Giving FAQ')}<h2>Straight answers.</h2></div>
    <div class="faq reveal" style="max-width:820px">
      <details><summary>Are donations tax-deductible? ${ic('plus')}</summary><div class="fa">That is not yet confirmed. We will state Araba Foundation\u2019s tax position here, clearly, once it has been verified — and not before.</div></details>
      <details><summary>Is online payment live? ${ic('plus')}</summary><div class="fa">Not yet. The secure gateway is not connected, so nothing can be charged. This page demonstrates the complete giving experience; the payment integration slot is ready in the code.</div></details>
      <details><summary>Can I give from outside Nigeria? ${ic('plus')}</summary><div class="fa">A multi-currency option (USD, GBP, EUR) is planned as part of the payment integration. Until then, amounts are shown in Naira.</div></details>
      <details><summary>Can I choose which programme my gift supports? ${ic('plus')}</summary><div class="fa">Yes — every donation carries a designation: any of the five programmes, or the General Foundation Fund, which directs support to where assessment shows the greatest need.</div></details>
      <details><summary>Do you accept donations of goods instead of money? ${ic('plus')}</summary><div class="fa">In-kind support is welcome — equipment, supplies and professional services. <a href="#/contact">Contact us</a> to discuss what is genuinely needed.</div></details>
    </div>
  </div></section>`;
}
function pgVolunteer(){
  return `
  ${pageHero('Volunteer','Give what money can\u2019t: presence.','Mentors, trainers, organisers, storytellers and helping hands — volunteers make our programmes personal. Onboarding depends on programme need, capacity and safeguarding checks.',
  `<ul class="trust-chips"><li>${ic('shield')} Child-facing roles require safeguarding vetting</li><li>${ic('clock')} Flexible commitments welcome</li></ul>`)}
  <section class="sec"><div class="wrap split">
    <div class="reveal">
      ${ov('Where volunteers help')}<h2>Skills that become someone\u2019s turning point.</h2>
      <ul class="inits" style="margin-top:16px">
        <li>${ic('case')}<div><strong>Business mentorship & advisory</strong><span>One honest hour can reroute a business decision.</span></div></li>
        <li>${ic('sprout')}<div><strong>Vocational & skills training support</strong><span>Stand beside trainers in practical sessions.</span></div></li>
        <li>${ic('home')}<div><strong>Community outreach & distribution</strong><span>Be present where relief and assessments happen.</span></div></li>
        <li>${ic('chat')}<div><strong>Digital, media & storytelling</strong><span>Document the work with consent and dignity.</span></div></li>
        <li>${ic('doc')}<div><strong>Programme administration</strong><span>Records, logistics and coordination.</span></div></li>
        <li>${ic('shield')}<div><strong>Professional services</strong><span>Legal, financial, medical and technical expertise, pro bono.</span></div></li>
      </ul>
    </div>
    <div class="reveal">
      ${ov('What to expect')}<h2 style="font-size:1.5rem">The volunteer journey.</h2>
      <div style="margin-top:16px">${steps([
        ['Enquiry','Tell us who you are and what you can offer.'],
        ['Conversation','A short call to find the right fit.'],
        ['Checks','References and safeguarding vetting, proportionate to the role.'],
        ['Induction','Orientation and our code of conduct.'],
        ['Placement','You start — with ongoing support behind you.'],
      ])}</div>
      <div class="pnote">${ic('shield')}<div><strong>Safeguarding first.</strong> Placements — especially child-facing roles — are subject to vetting and our <a href="#/safeguarding">Safeguarding Policy</a>. This protects the people we serve, and you.</div></div>
    </div>
  </div></section>
  <section class="sec" style="background:var(--cream-2)"><div class="wrap" style="max-width:860px">
    <div class="sec-h reveal">${ov('Volunteer intake')}<h2>Start your volunteer journey.</h2></div>
    <form class="formcard reveal" data-form="enquiry" data-name="Volunteer application" novalidate>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 18px">
        <div class="field"><label for="v-n">Full name <span class="req" aria-hidden="true">*</span></label><input id="v-n" name="name" type="text" required autocomplete="name"><p class="ferr" hidden>Please enter your name.</p></div>
        <div class="field"><label for="v-e">Email <span class="req" aria-hidden="true">*</span></label><input id="v-e" name="email" type="email" required autocomplete="email"><p class="ferr" hidden>Please enter a valid email address.</p></div>
        <div class="field"><label for="v-p">Phone <span class="req" aria-hidden="true">*</span></label><input id="v-p" name="phone" type="tel" required autocomplete="tel"><p class="ferr" hidden>Please enter a phone number.</p></div>
        <div class="field"><label for="v-l">State & LGA <span class="req" aria-hidden="true">*</span></label><input id="v-l" name="location" type="text" required><p class="ferr" hidden>Please tell us where you are based.</p></div>
      </div>
      <div class="field"><label for="v-s">Skills & experience <span class="req" aria-hidden="true">*</span></label><textarea id="v-s" name="skills" required></textarea><p class="ferr" hidden>Tell us a little about what you can offer.</p></div>
      <div class="field"><label for="v-a">Availability</label><select id="v-a" name="availability"><option>Weekdays</option><option>Weekends</option><option>Evenings</option><option>Flexible</option><option>One-off events</option></select></div>
      <div class="field"><label for="v-m">Anything else we should know</label><textarea id="v-m" name="message"></textarea></div>
      <div class="field check"><input type="checkbox" name="sg" id="v-sg" required><label for="v-sg" style="font-weight:400">I have read the <a href="#/safeguarding">Safeguarding Policy</a> and agree to uphold the code of conduct. <span class="req" aria-hidden="true">*</span></label></div>
      <p class="ferr" id="v-sge" hidden>Please confirm the safeguarding declaration.</p>
      <div class="field check"><input type="checkbox" name="consent" id="v-c" required><label for="v-c" style="font-weight:400">I agree to my details being used to process this enquiry, as described in the <a href="#/privacy">Privacy Policy</a>. <span class="req" aria-hidden="true">*</span></label></div>
      <p class="ferr" id="v-ce" hidden>Please confirm consent.</p>
      <button class="btn btn-solid" type="submit">${ic('send')} Submit volunteer enquiry</button>
      <div class="fstatus-slot" aria-live="polite"></div>
    </form>
  </div></section>`;
}
function pgPartner(){
  return `
  ${pageHero('Partner with us','Serious partners deserve serious paperwork.','For companies, foundations, NGOs and development organisations: partnership models, process, and the documents you will ask for — with their honest status.',
  `<ul class="trust-chips"><li>${ic('doc')} Due diligence pack available on request</li><li>${ic('shield')} Policies published: Safeguarding & Privacy</li><li>${ic('info')} Financials pending first audited cycle</li></ul>`)}
  <section class="sec"><div class="wrap split">
    <div class="reveal">
      ${ov('Partnership models')}<h2>Four ways to build with us.</h2>
      <ul class="inits" style="margin-top:16px">
        <li>${ic('case')}<div><strong>Programme sponsorship</strong><span>Underwrite a programme area — with reporting you can audit.</span></div></li>
        <li>${ic('users')}<div><strong>Employee giving & matched funding</strong><span>Structured workplace giving that compounds.</span></div></li>
        <li>${ic('sprout')}<div><strong>In-kind & professional support</strong><span>Goods, equipment, services and expertise.</span></div></li>
        <li>${ic('rings')}<div><strong>Co-designed community investment</strong><span>CSR built with communities, not just for them.</span></div></li>
      </ul>
    </div>
    <div class="reveal">
      ${ov('Process')}<h2 style="font-size:1.5rem">How partnership begins.</h2>
      <div style="margin-top:16px">${steps([
        ['Conversation','We learn each other\u2019s goals and constraints.'],
        ['Alignment & due diligence','Documents exchanged; expectations set.'],
        ['Agreement','A written MOU — scope, reporting, responsibilities.'],
        ['Launch, report, review','Delivery with scheduled, honest reporting.'],
      ])}</div>
      <div class="pnote">${ic('doc')}<div><strong>Recognition policy placeholder.</strong> How partners are acknowledged publicly will be defined and published here before any partnership is announced.</div></div>
    </div>
  </div></section>
  <section class="sec" style="background:var(--cream-2)"><div class="wrap" style="max-width:860px">
    <div class="sec-h reveal">${ov('Partnership enquiry')}<h2>Start the conversation.</h2></div>
    ${enquiryForm('f-partner','Partnership enquiry', `
      <div class="field"><label for="fp-type">Partnership type</label><select id="fp-type" name="ptype"><option>Corporate / CSR</option><option>Institutional / development organisation</option><option>Foundation / grant-maker</option><option>Fundraising partner</option><option>Other</option></select></div>`)}
    ${note('The full due diligence checklist with live document status is on the <a href="#/impact">Our Impact</a> page.')}
  </div></section>`;
}
function applyField(f){
  const req = f.req ? `<span class="req" aria-hidden="true">*</span>` : '';
  let ctrl;
  if(f.t==='textarea') ctrl = `<textarea id="af-${f.n}" name="${f.n}" ${f.req?'required':''} placeholder="${f.pl?esc(f.pl):''}"></textarea>`;
  else if(f.t==='select') ctrl = `<select id="af-${f.n}" name="${f.n}" ${f.req?'required':''}><option value="">Please select\u2026</option>${f.opts.map(o=>`<option>${o}</option>`).join('')}</select>`;
  else if(f.t==='checks') return `<fieldset class="field" style="border:none"><legend style="font-weight:600;font-size:.9rem;margin-bottom:9px">${f.l} <span class="req" aria-hidden="true">*</span></legend>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">${f.opts.map(o=>`<span class="check"><input type="checkbox" name="${f.n}" value="${esc(o)}" data-checkgrp="${f.n}" id="af-${f.n}-${esc(o).replace(/\W+/g,'')}"><label for="af-${f.n}-${esc(o).replace(/\W+/g,'')}" style="font-weight:400;font-size:.88rem">${o}</label></span>`).join('')}</div>
    <p class="hint">${f.hint||''}</p><p class="ferr" hidden>Please select at least one option.</p></fieldset>`;
  else ctrl = `<input id="af-${f.n}" name="${f.n}" type="${f.t}" ${f.req?'required':''} ${f.ac?`autocomplete="${f.ac}"`:''} placeholder="${f.pl?esc(f.pl):''}">`;
  return `<div class="field"><label for="af-${f.n}">${f.l} ${req}</label>${ctrl}${f.hint?`<p class="hint">${f.hint}</p>`:''}<p class="ferr" hidden>Please complete this field.</p></div>`;
}
function pgApply(preset){
  return `
  ${pageHero('Apply for support','This door is open to you.','A free, accessible application portal for individuals, small businesses and institutions seeking assistance. Choose a category below — the form adapts to your situation.',
  `<ul class="trust-chips">
    <li>${ic('check')} Applying is free — beware of anyone charging a fee</li>
    <li>${ic('shield')} No bank details or card details are ever requested here</li>
    <li>${ic('doc')} No uploads required to apply</li>
    <li>${ic('info')} Applying does not guarantee assistance</li>
  </ul>`)}
  <section class="sec"><div class="wrap" style="max-width:880px">
    <div class="sec-h reveal">${ov('Step 1 — Choose a category')}<h2>What kind of support do you need?</h2></div>
    <ul class="cat-radios reveal" role="radiogroup" aria-label="Application category" id="applyCats">
      ${APPLY_CATS.map(c=>`<li><label><input type="radio" name="cat" value="${c.k}" ${preset===c.k?'checked':''}><svg class="ic ci"><use href="#i-${c.ic}"/></svg><span><strong>${c.label}</strong><span>${c.desc}</span></span></label></li>`).join('')}
    </ul>
    <div class="sec-h reveal" style="margin-top:56px">${ov('Step 2 — Your application')}<h2 id="applyFormTitle">Select a category to begin.</h2>
      <p class="sub">The form below adapts to the category you choose. Fields marked <span class="req">*</span> are required; everything else is optional.</p></div>
    <div id="applyFormWrap" class="reveal"></div>
    <div class="sec-h reveal" style="margin-top:56px">${ov('What happens next')}<h2>After you apply.</h2></div>
    <div class="reveal">${steps([
      ['Acknowledgement','You receive a reference for your application.'],
      ['Review & eligibility','Each application is screened against clear criteria and available resources.'],
      ['Conversation','We may contact you to understand your situation better.'],
      ['Decision','We explain the outcome either way — and, where possible, next steps.'],
    ])}</div>
    <div class="pnote reveal">${ic('info')}<div><strong>Please note.</strong> Submitting an application does not guarantee assistance. All support is subject to eligibility criteria, assessment and available resources. Timelines vary by programme and demand.</div></div>
    <details class="console reveal" id="adminConsole">
      <summary>${ic('shield')} Staff console — application integration preview</summary>
      <div class="console-body" id="consoleBody">
        <p>Drafts submitted in this browser session appear below, demonstrating how applications will queue for administrative review. <strong>Session-only preview:</strong> drafts live in this tab\u2019s memory — no server, no persistence, not accessible to the Foundation.</p>
        <div id="consoleTable"><p style="margin-top:12px">No drafts in this session yet.</p></div>
      </div>
    </details>
  </div></section>`;
}
function pgNews(){
  return `
  ${pageHero('News & stories','Every number is a person.','Beneficiary stories, community activities, field reports and programme updates — published with consent, told with dignity. The samples below demonstrate the editorial format until verified stories are available.',
  `<ul class="trust-chips"><li>${ic('shield')} Published only with informed consent</li><li>${ic('info')} Sample content is clearly flagged</li></ul>`)}
  <section class="sec"><div class="wrap">
    <div class="fbar reveal" role="group" aria-label="Filter stories">
      ${[['all','All stories'],['economic','Economic empowerment'],['humanitarian','Humanitarian support'],['children','Children'],['disability','Disability inclusion']].map(([k,l],i)=>`<button class="fbtn" data-filter="${k}" aria-pressed="${i===0}">${l}</button>`).join('')}
    </div>
    <div class="st-grid reveal" style="margin-bottom:30px">
      <a class="st-lead story-card" href="#/story/${STORIES[0].slug}" data-tags="${STORIES[0].tag}">
        ${ph(STORIES[0].seed,'Placeholder photograph illustrating a sample story','16/9','Placeholder image')}
        <span class="st-body"><span class="kicker">${STORIES[0].tagLabel}</span><span class="dtag" style="margin-top:10px">${DEMO}</span><h3>${STORIES[0].title}</h3><p>${STORIES[0].ex}</p><span class="tlink" style="margin-top:12px">Read the sample story ${ic('arrow')}</span></span>
      </a>
      <div class="slot" data-tags="pending">${ic('doc')}<strong>Field report — in preparation</strong><span>Verified community activity reporting will appear here.</span></div>
    </div>
    <div class="news-grid reveal">
      ${STORIES.slice(1).map(s=>`
      <a class="st-card story-card" href="#/story/${s.slug}" data-tags="${s.tag}">
        ${ph(s.seed,'Placeholder photograph illustrating a sample story','3/2','Placeholder')}
        <span class="st-body"><span class="kicker">${s.tagLabel}</span> <span class="dtag" style="margin-left:6px">Sample</span><h3 style="margin-top:10px">${s.title}</h3><p>${s.ex}</p></span>
      </a>`).join('')}
      <div class="slot" data-tags="pending">${ic('doc')}<strong>Programme update — in preparation</strong><span>SME support cohort reporting. Placeholder slot.</span></div>
      <div class="slot" data-tags="pending">${ic('doc')}<strong>Announcement — in preparation</strong><span>Partnership and programme announcements. Placeholder slot.</span></div>
    </div>
  </div></section>
  <section class="sec" style="background:var(--cream-2)"><div class="wrap split">
    <div class="reveal">
      ${ov('Story guidelines')}<h2>How stories get published.</h2>
      <p style="margin-top:14px">A story appears on this page only when three things are true: the person gave informed consent, the content protects their privacy and dignity, and the facts were verified with the programme team. We never trade a beneficiary\u2019s image for donations — <a href="#/safeguarding">our safeguarding policy</a> applies to storytelling too.</p>
    </div>
    <form class="formcard reveal" data-form="enquiry" data-name="Story updates subscription" novalidate>
      <h3>${ic('mail')} Get programme updates</h3>
      <p style="font-size:.9rem;color:var(--ink-2);margin:10px 0 16px">Honest numbers, real stories — when there is something true to tell.</p>
      <div class="field"><label for="nl-e">Email address <span class="req" aria-hidden="true">*</span></label><input id="nl-e" name="email" type="email" required autocomplete="email"><p class="ferr" hidden>Please enter a valid email address.</p></div>
      <div class="field check"><input type="checkbox" name="consent" id="nl-c" required><label for="nl-c" style="font-weight:400">I agree to receive programme updates, as described in the <a href="#/privacy">Privacy Policy</a>. <span class="req" aria-hidden="true">*</span></label></div>
      <p class="ferr" id="nl-ce" hidden>Please confirm consent.</p>
      <button class="btn btn-solid" type="submit">${ic('send')} Subscribe</button>
      <div class="fstatus-slot" aria-live="polite"></div>
    </form>
  </div></section>`;
}
function pgStory(slug){
  const s = STORIES.find(x=>x.slug===slug);
  if(!s) return pgNotFound();
  return `
  ${pageHero(s.tagLabel+' — story', s.title)}
  <section class="sec"><div class="wrap article">
    <span class="dtag">${DEMO}</span>
    ${ph(s.seed,'Placeholder photograph illustrating a sample story — to be replaced with consented field photography','16/9','Placeholder image')}
    <div class="art-body">${s.body.map(p=>`<p>${p}</p>`).join('')}</div>
    <div class="art-note">${ic('info')} <strong>Demonstration content.</strong> This sample story was created to show how verified beneficiary stories will be presented. The person, events and outcomes described are illustrative — not real statistics, claims or beneficiaries. Real stories will only be published with informed consent and verified facts.</div>
    <p style="margin-top:26px"><a class="tlink" href="#/news">${ic('arrow')} Back to News &amp; Stories</a></p>
  </div></section>`;
}

/* [EDIT: CONTACT] — page contact details (footer lines live in index.html) */
function pgContact(){
  const wa = SITE.whatsappNumber ? `https://wa.me/${SITE.whatsappNumber}` : '#';
  return `
  ${pageHero('Contact us','We would like to hear from you.','Enquiries, partnerships, media, volunteering — and safeguarding concerns, which are always treated as a priority.',
  `<ul class="trust-chips"><li>${ic('shield')} Safeguarding concerns handled confidentially</li><li>${ic('info')} Contact details below are placeholders pending confirmation</li></ul>`)}
  <section class="sec"><div class="wrap split">
    <form class="formcard reveal" data-form="enquiry" data-name="Contact enquiry" novalidate>
      ${ov('Send a message')}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 18px">
        <div class="field"><label for="c-n">Full name <span class="req" aria-hidden="true">*</span></label><input id="c-n" name="name" type="text" required autocomplete="name"><p class="ferr" hidden>Please enter your name.</p></div>
        <div class="field"><label for="c-e">Email <span class="req" aria-hidden="true">*</span></label><input id="c-e" name="email" type="email" required autocomplete="email"><p class="ferr" hidden>Please enter a valid email address.</p></div>
      </div>
      <div class="field"><label for="c-s">Subject <span class="req" aria-hidden="true">*</span></label>
        <select id="c-s" name="subject" required>
          <option value="">Please select\u2026</option>
          <option>General enquiry</option><option>Programme question</option><option>Partnership & media</option><option>Volunteering</option><option>Application support</option><option>Safeguarding concern</option>
        </select><p class="ferr" hidden>Please choose a subject.</p>
        <p class="hint">If your enquiry concerns the safety of a child or vulnerable person, mark it as a safeguarding concern — these are prioritised and handled confidentially.</p></div>
      <div class="field"><label for="c-m">Message <span class="req" aria-hidden="true">*</span></label><textarea id="c-m" name="message" required></textarea><p class="ferr" hidden>Please include a message.</p></div>
      <div class="field check"><input type="checkbox" name="consent" id="c-c" required><label for="c-c" style="font-weight:400">I agree to my details being used to respond to this enquiry, as described in the <a href="#/privacy">Privacy Policy</a>. <span class="req" aria-hidden="true">*</span></label></div>
      <p class="ferr" id="c-ce" hidden>Please confirm consent.</p>
      <button class="btn btn-solid" type="submit">${ic('send')} Send message</button>
      <div class="fstatus-slot" aria-live="polite"></div>
    </form>
    <aside class="reveal">
      <div class="contact-cards">
        <div class="c-card">${ic('mail')}<div><strong>Email</strong><span>hello@arabafoundation.org <span class="phv">Placeholder</span></span></div></div>
        <div class="c-card">${ic('phone')}<div><strong>Telephone</strong><span>+234 000 000 0000 <span class="phv">Placeholder</span></span></div></div>
        <div class="c-card">${ic('pin')}<div><strong>Office</strong><span>Nigeria — address to be published upon confirmation <span class="phv">Placeholder</span></span></div></div>
        <div class="c-card">${ic('chat')}<div><strong>WhatsApp</strong><span><a href="${wa}" ${SITE.whatsappNumber?'':'data-ph="WhatsApp number not yet connected — this is an integration placeholder."'}>Chat with us on WhatsApp</a> <span class="phv">Placeholder</span></span></div></div>
        <div class="c-card">${ic('clock')}<div><strong>Response times</strong><span>We aim to respond to genuine enquiries; committed response times will be published at launch.</span></div></div>
      </div>
      <div class="map-slot">${ic('pin')}<span>Interactive map will be embedded here once the office address is confirmed.</span></div>
    </aside>
  </div></section>`;
}
const legal = (title, sections) => `
  ${pageHero('Policy', title)}
  <section class="sec"><div class="wrap" style="max-width:820px">
    ${sections.map(([h,...ps])=>`<div class="reveal" style="margin-bottom:34px"><h2 style="font-size:1.45rem;text-transform:none;letter-spacing:0">${h}</h2>${ps.map(p=>`<p style="margin-top:12px">${p}</p>`).join('')}</div>`).join('')}
    <div class="pnote">${ic('info')}<div><strong>Editable placeholder.</strong> This policy template must be reviewed by qualified counsel before launch. Registration details, effective dates and named contacts are withheld until verified.</div></div>
  </div></section>`;
const pgPrivacy = () => legal('Privacy Policy', PRIVACY);
const pgSafeguarding = () => legal('Safeguarding Policy', SAFEGUARDING);
function pgNotFound(){
  return `${pageHero('404','Page not found.')}<section class="sec"><div class="wrap" style="max-width:640px"><p>The page you were looking for does not exist — it may have moved, or the link may be a placeholder.</p><p style="margin-top:18px"><a class="tlink" href="#/home">Return to the homepage ${ic('arrow')}</a></p></div></section>`;
}

const routes = {
  home:{t:'Araba Foundation — Creating Opportunities. Restoring Dignity. Empowering Lives.', d:'Nigerian NGO supporting underserved entrepreneurs, vulnerable individuals, children and people living with disabilities.', r:pgHome},
  about:{t:'About Us — Araba Foundation', d:'Our story, mission, vision, values, approach and commitments to transparency and inclusion.', r:pgAbout},
  programmes:{t:'Our Programmes — Araba Foundation', d:'Five programmes across two pillars: economic empowerment and humanitarian support.', r:pgProgrammes},
  sme:{t:'SME Empowerment — Araba Foundation', d:'Micro-business grants, training, mentorship and formalisation support for small businesses.', r:()=>pgProgramme('sme')},
  startup:{t:'Entrepreneurship & Startup Support — Araba Foundation', d:'Seed support, skills and mentorship for aspiring entrepreneurs.', r:()=>pgProgramme('startup')},
  humanitarian:{t:'Homelessness & Vulnerable People Support — Araba Foundation', d:'Emergency relief and reintegration pathways for homeless and vulnerable people.', r:()=>pgProgramme('humanitarian')},
  children:{t:'Orphanage & Child Welfare Support — Araba Foundation', d:'Safeguarded support for orphanages, children\u2019s homes and vulnerable children.', r:()=>pgProgramme('children')},
  disability:{t:'Disability Inclusion & Empowerment — Araba Foundation', d:'Grants, accessible training, assistive equipment and advocacy for people living with disabilities.', r:()=>pgProgramme('disability')},
  impact:{t:'Our Impact — Araba Foundation', d:'Impact reporting, transparency and due-diligence information for institutional donors.', r:pgImpact},
  involved:{t:'Get Involved — Araba Foundation', d:'Volunteer, partner, fundraise or give — four routes into the work.', r:pgInvolved},
  donate:{t:'Donate — Araba Foundation', d:'One-time, monthly, quarterly and annual giving with programme designation.', r:pgDonate},
  volunteer:{t:'Volunteer — Araba Foundation', d:'Give time and skills: mentorship, training, outreach and more.', r:pgVolunteer},
  partner:{t:'Partner With Us — Araba Foundation', d:'Partnership models and process for corporate, institutional and fundraising partners.', r:pgPartner},
  apply:{t:'Apply for Support — Araba Foundation', d:'A free, accessible application portal across five support categories.', r:pgApply},
  news:{t:'News & Stories — Araba Foundation', d:'Beneficiary stories, field reports and programme updates — published with consent.', r:pgNews},
  story:{t:'Story — Araba Foundation', d:'Beneficiary story.', r:pgStory},
  contact:{t:'Contact Us — Araba Foundation', d:'Contact Araba Foundation — enquiries, partnerships, media and safeguarding.', r:pgContact},
  privacy:{t:'Privacy Policy — Araba Foundation', d:'How Araba Foundation collects, uses and protects personal data.', r:pgPrivacy},
  safeguarding:{t:'Safeguarding Policy — Araba Foundation', d:'Our commitment and procedures for protecting children and vulnerable adults.', r:pgSafeguarding},
};
const NAVMAP = {programmes:'programmes',sme:'programmes',startup:'programmes',humanitarian:'programmes',children:'programmes',disability:'programmes',about:'about',impact:'impact',involved:'involved',volunteer:'involved',partner:'involved',apply:'involved',news:'news',story:'news',contact:'contact'};
const main = document.getElementById('main');
const drafts = [];
function router(){
  const raw = location.hash.replace(/^#\/?/,'');
  const [path, arg] = raw.split('/');
  const key = path || 'home';
  const r = routes[key] || routes.home;
  document.title = r.t;
  document.getElementById('metaDesc').setAttribute('content', r.d);
  main.innerHTML = `<div class="page">${key==='apply' ? r.r(arg) : (key==='story' ? r.r(arg) : r.r())}</div>`;
  window.scrollTo(0,0);
  const h = main.querySelector('h1'); if(h) try{h.focus({preventScroll:true})}catch(e){}
  const nv = NAVMAP[key];
  document.querySelectorAll('[data-nav]').forEach(el=>{ if(el.dataset.nav===nv) el.setAttribute('aria-current','page'); else el.removeAttribute('aria-current'); });
  closeMobile();
  mount(key, arg);
}
window.addEventListener('hashchange', router);
function mount(key, arg){
  initReveal(); initForms();
  if(key==='home') initHomeIndex();
  if(key==='donate') initDonate(arg);
  if(key==='apply') initApply(arg);
  if(key==='news') initNews();
}
function initReveal(){
  const els = main.querySelectorAll('.reveal');
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){ els.forEach(e=>e.classList.add('in')); return; }
  const io = new IntersectionObserver(es=>es.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);} }),{threshold:.12});
  els.forEach(e=>io.observe(e));
}
function initHomeIndex(){
  const imgs = main.querySelectorAll('.pi-media img');
  main.querySelectorAll('.prow').forEach(row=>{
    const swap = () => imgs.forEach(im=>im.classList.toggle('on', im.dataset.k===row.dataset.k));
    row.addEventListener('mouseenter', swap);
    row.addEventListener('focus', swap);
  });
}
function initNews(){
  main.querySelectorAll('.fbtn').forEach(b=>b.addEventListener('click', ()=>{
    main.querySelectorAll('.fbtn').forEach(x=>x.setAttribute('aria-pressed', x===b));
    const f = b.dataset.filter;
    main.querySelectorAll('.story-card').forEach(c=>{ c.style.display = (f==='all'||c.dataset.tags===f)?'':'none'; });
    main.querySelectorAll('[data-tags="pending"]').forEach(c=>{ c.style.display = f==='all'?'':'none'; });
  }));
}
function initDonate(preset){
  if(preset && DESG.some(([k])=>k===preset)){
    const r = main.querySelector(`input[name="designation"][value="${preset}"]`); if(r) r.checked = true;
  }
  const amt = document.getElementById('don-amt');
  main.querySelectorAll('#amtChips .chip').forEach(ch=>ch.addEventListener('click', ()=>{
    main.querySelectorAll('#amtChips .chip').forEach(c=>c.classList.remove('on'));
    ch.classList.add('on'); amt.value = ch.dataset.v;
  }));
  amt.addEventListener('input', ()=>{
    main.querySelectorAll('#amtChips .chip').forEach(c=>c.classList.toggle('on', c.dataset.v===amt.value));
  });
  main.querySelectorAll('.seg input').forEach(r=>r.addEventListener('change', ()=>{
    main.querySelectorAll('.seglabel').forEach(l=>l.classList.toggle('on', l.querySelector('input').checked));
  }));
}
function initApply(preset){
  const wrap = document.getElementById('applyFormWrap');
  const title = document.getElementById('applyFormTitle');
  const build = k => {
    const cat = APPLY_CATS.find(c=>c.k===k);
    title.textContent = 'Application — ' + cat.label;
    wrap.innerHTML = `
    <form class="formcard" data-form="apply" id="applyForm" novalidate>
      <input type="hidden" name="cat" value="${k}">
      ${SCHEMAS[k].map(applyField).join('')}
      <div class="pnote">${ic('info')}<div><strong>Privacy & honesty notes.</strong> Submitting an application does not guarantee assistance — support depends on eligibility, assessment and available resources. We never request bank or card details, and applying is free.</div></div>
      <div class="field check"><input type="checkbox" name="privacy" id="af-p" required><label for="af-p" style="font-weight:400">I have read the <a href="#/privacy">Privacy Policy</a> and consent to my details being used to assess this application. <span class="req" aria-hidden="true">*</span></label></div>
      <p class="ferr" id="af-pe" hidden>Please confirm the privacy consent.</p>
      <div class="field check"><input type="checkbox" name="decl" id="af-d" required><label for="af-d" style="font-weight:400">I understand that submitting this application does not guarantee assistance, and that all information provided is true to the best of my knowledge. <span class="req" aria-hidden="true">*</span></label></div>
      <p class="ferr" id="af-de" hidden>Please confirm the declaration.</p>
      <button class="btn btn-solid" type="submit">${ic('send')} Submit application</button>
      <div class="fstatus-slot" aria-live="polite"></div>
    </form>`;
    initReveal();
  };
  const first = document.querySelector('#applyCats input:checked');
  if(first) build(first.value); else title.textContent = 'Select a category to begin.';
  main.querySelectorAll('#applyCats input').forEach(r=>r.addEventListener('change', ()=>{ if(r.checked) build(r.value); }));
}
function renderConsole(){
  const t = document.getElementById('consoleTable'); if(!t) return;
  t.innerHTML = drafts.length ? `
    <table><thead><tr><th>Reference</th><th>Category</th><th>Name</th><th>Recorded</th></tr></thead>
    <tbody>${drafts.map(d=>`<tr><td>${esc(d.ref)}</td><td>${esc(d.cat)}</td><td>${esc(d.name)}</td><td>${esc(d.time)}</td></tr>`).join('')}</tbody></table>
    <p style="margin-top:10px">${drafts.length} draft${drafts.length>1?'s':''} in session — integration point ready for a submission service.</p>`
    : `<p style="margin-top:12px">No drafts in this session yet.</p>`;
}
function initForms(){
  main.querySelectorAll('form[data-form]').forEach(form=>{
    form.setAttribute('novalidate','');
    form.addEventListener('submit', e=>{
      e.preventDefault();
      let firstBad = null;
      const flag = (el, errEl) => { el.setAttribute('aria-invalid','true'); if(errEl) errEl.hidden=false; if(!firstBad) firstBad = el; };
      form.querySelectorAll('[required]').forEach(el=>{
        const wrap = el.closest('.field') || el.closest('fieldset');
        const errEl = wrap ? wrap.querySelector('.ferr') : null;
        el.removeAttribute('aria-invalid'); if(errEl) errEl.hidden = true;
        let bad = false;
        if(el.type==='checkbox') bad = !el.checked;
        else if(el.type==='email') bad = !/^\S+@\S+\.\S+$/.test(el.value.trim());
        else if(el.type==='number') bad = !(parseFloat(el.value)>0);
        else if(el.tagName==='SELECT') bad = !el.value;
        else bad = !el.value.trim();
        if(bad) flag(el, errEl);
      });
      const groups = {};
      form.querySelectorAll('input[type=checkbox][data-checkgrp]').forEach(c=>{ (groups[c.dataset.checkgrp] ||= []).push(c); });
      Object.entries(groups).forEach(([g,cs])=>{
        const any = cs.some(c=>c.checked);
        const fs = cs[0].closest('fieldset'); const err = fs.querySelector('.ferr');
        if(!any){ err.hidden=false; if(!firstBad) firstBad = cs[0]; } else err.hidden=true;
      });
      if(firstBad){ firstBad.focus(); return; }
      const data = Object.fromEntries(new FormData(form).entries());
      if(form.dataset.form==='donation') handleDonation(form, data);
      else if(form.dataset.form==='apply') handleApply(form, data);
      else handleGeneric(form);
    });
  });
}
function handleGeneric(form){
  const slot = form.querySelector('.fstatus-slot');
  slot.innerHTML = status('ok', form.dataset.name + ' — validated, not yet sent',
    `<p>Your details passed validation — but this is a pre-launch build: the secure backend that receives enquiries is not connected, so <strong>nothing was sent or stored</strong>.</p>
     <p>Once live, this form will reach the team directly. Interim contact options are listed on the <a href="#/contact">Contact page</a> (placeholders pending confirmation).</p>`);
}
function handleDonation(form, d){
  const slot = form.querySelector('.fstatus-slot');
  const desg = DESG.find(([k])=>k===d.designation);
  slot.innerHTML = status('ok','Donation pledge complete — nothing was charged',
    `<dl class="pledge">
      <dt>Frequency</dt><dd>${FREQ[d.frequency]||d.frequency}</dd>
      <dt>Amount</dt><dd>${fmtNGN(d.amount)}</dd>
      <dt>Designation</dt><dd>${esc(desg?desg[1]:d.designation)}</dd>
      <dt>Donor</dt><dd>${esc(d.name)} &lt;${esc(d.email)}&gt;</dd>
    </dl>
    <p><strong>Important:</strong> online giving is not yet active. The secure payment gateway is not connected, so no payment was taken and no donor record was created. This summary demonstrates the confirmation experience donors will receive once giving goes live.</p>
    <p>Interim options: bank transfer details will be published here once verified; in-kind support and partnership enquiries are welcome via the <a href="#/contact">Contact page</a>.</p>`);
  slot.scrollIntoView({behavior:'smooth', block:'nearest'});
}
function handleApply(form, d){
  const slot = form.querySelector('.fstatus-slot');
  const cat = APPLY_CATS.find(c=>c.k===d.cat);
  const ref = `AF-${new Date().getFullYear()}-${cat.code}-${Math.random().toString(36).slice(2,8).toUpperCase()}`;
  drafts.push({ref, cat:cat.label, name:d.name||d.bname||d.person||d.inst||'—', time:new Date().toLocaleTimeString()});
  renderConsole();
  slot.innerHTML = status('warn','Draft recorded — reference '+ref,
    `<p>Application reference: <strong class="ref">${ref}</strong> · Category: ${esc(cat.label)} · Status: <strong>draft — not submitted</strong></p>
     <p><strong>Pre-launch notice:</strong> the application service is not connected yet, so this draft was not sent to Araba Foundation and no data has left your browser. The reference above is generated locally to demonstrate the acknowledgement you will receive once the portal is live — it is not registered in any system.</p>
     <p>What happens next, once live: acknowledgement &rarr; eligibility review &rarr; possible conversation &rarr; decision. Remember — submitting an application does not guarantee assistance.</p>`);
  slot.scrollIntoView({behavior:'smooth', block:'nearest'});
}
const burger = document.getElementById('burger'), mm = document.getElementById('mobileMenu');
function closeMobile(){ mm.classList.remove('open'); document.body.classList.remove('lock'); burger.setAttribute('aria-expanded','false'); }
burger.addEventListener('click', ()=>{ mm.classList.add('open'); document.body.classList.add('lock'); burger.setAttribute('aria-expanded','true'); mm.querySelector('summary').focus(); });
document.getElementById('mmClose').addEventListener('click', closeMobile);
mm.querySelectorAll('a').forEach(a=>a.addEventListener('click', closeMobile));
document.querySelectorAll('.has-sub > .navbtn').forEach(btn=>{
  btn.addEventListener('click', e=>{
    e.stopPropagation();
    const li = btn.parentElement, open = li.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    document.querySelectorAll('.has-sub').forEach(o=>{ if(o!==li){ o.classList.remove('open'); o.querySelector('button').setAttribute('aria-expanded','false'); } });
  });
});
document.addEventListener('click', e=>{
  if(!e.target.closest('.has-sub')) document.querySelectorAll('.has-sub.open').forEach(o=>{ o.classList.remove('open'); o.querySelector('button').setAttribute('aria-expanded','false'); });
  const phl = e.target.closest('[data-ph]');
  if(phl){ e.preventDefault(); toast(phl.dataset.ph); }
});
document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){ closeMobile(); document.querySelectorAll('.has-sub.open').forEach(o=>o.classList.remove('open')); }
});
let toastT;
function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(()=>t.classList.remove('show'), 3600);
}
if (SITE.analyticsId) { /* integration slot: load privacy-conscious analytics here */ }
router();