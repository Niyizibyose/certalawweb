"use strict";
exports.id = 415;
exports.ids = [415];
exports.modules = {

/***/ 28486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9285);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98369);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(326);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50594);








const LeftDrawer = ({ navs  })=>{
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [toggle, setToggle] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const toggleDrawer = (open)=>(event)=>{
            if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
                return;
            }
            setToggle(open);
        }
    ;
    const handleKeyDown = (event)=>{
        if (event.key === "Escape") {
            setToggle(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "button",
                className: "relative group flex flex-col hover:text-white text-gray-300",
                onClick: ()=>setToggle(!toggle)
                ,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        fontSize: "large"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "top-8 text-xs absolute uppercase text-brand-yellow group-hover:block hidden",
                        children: "Menu"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_5___default()), {
                anchor: "right",
                open: toggle,
                onClose: toggleDrawer(false),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    sx: {
                        width: "100vw",
                        backgroundColor: "white"
                    },
                    role: "presentation",
                    onClick: toggleDrawer(false),
                    onKeyDown: toggleDrawer(false),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex py-3 px-4 md:px-8 flex-col items-center min-h-screen overflow-y-auto w-full",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full md:max-w-6xl flex-flex-col items-end",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    type: "button",
                                    onKeyDown: handleKeyDown,
                                    className: "text-primary flex flex-col items-center ml-auto",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            fontSize: "large"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-primary",
                                            children: "ESC"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col items-end mt-4",
                                    children: [
                                        navs.map((element)=>{
                                            const active = pathname === element.path;
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: element.path,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: `text-xl md:text-2xl cursor-pointer flex items-center py-2 space-x-3 font-medium ${active ? "text-primary" : "text-brand-gray hover:text-primary hover:font-semibold"}`,
                                                    children: element.label
                                                })
                                            }, element.label);
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/careers",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: pathname === "/careers" ? "text-primary" : "text-brand-gray hover:text-primary hover:font-semibold",
                                                children: "Careers"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/news",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: pathname === "/news" ? "text-primary" : "text-brand-gray hover:text-primary hover:font-semibold",
                                                children: "News"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/contact",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: pathname === "/contact" ? "text-primary" : "text-brand-gray hover:text-primary hover:font-semibold",
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeftDrawer);


/***/ }),

/***/ 23010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Static)
/* harmony export */ });
class Static {
    static navs = [
        {
            path: "/",
            label: "HOME"
        },
        {
            path: "/about",
            label: "ABOUT"
        },
        {
            path: "/practice-areas",
            label: "PRACTICE AREAS"
        },
        {
            path: "/insights",
            label: "INSIGHT"
        },
        {
            path: "/people",
            label: "PEOLE & CULTURE"
        },
        {
            path: "/pro-bono",
            label: "PRO BONO"
        },
        {
            path: "/academy",
            label: "CLT Center"
        }, 
    ];
    static team = [
        {
            image: "/assets/images/staff/Florida.jpg",
            firstName: "Florida",
            lastName: "Kabasinga",
            title: `Managing Partner /
Head of ADR and Strategic Litigation.`,
            desc: `Ms. Florida is the founder and Managing Partner of CERTA Law. She specialises in ADR and Strategic Litigation. Florida has gained reputation over, among other public interest litigation cases, challenges to constitutional provisions seeking authentic interpretation of laws before Rwanda’s Supreme Court.
She is also a certified mediator by the International Institute of Mediation and Conflict Resolution and a prolific arbitrator with Kigali International Arbitration Centre where she represented international and domestic clients, including the International Union for Conservation of Nature (IUCN). Ms. Florida holds a Master of Laws (Magna cum Laude) in International Human Rights Law from the University of Notre Dame (Indiana, USA) and a Bachelor of Laws Degree (LLB Hons) from Makerere University (Kampala, Uganda). 
She has also received various trainings from prestigious institutions notably, University of Pretoria, South Africa, Erasmus University, The Hague, Netherlands, and Chartered Institute of Arbitrators, London. She has taught, at different times, International Criminal Law, Moot Courts and Common Law Litigation Principles and
Techniques, among others, at different Universities in Rwanda and abroad, including at the Institute for Legal Practice & Development in Rwanda (ILPD).
In addition to teaching, she is also a trainer where she regularly conducts training workshops for female advocates under the auspices of the Rwanda Bar Association aimed at inspiring and raising their capacity and profiles in the practice of law
in Rwanda and in the East African Community.
With an experience spinning to almost 2 decades, Ms. Florida has previously worked for the government of Rwanda as a Senior Legal Advisor to the Prosecutor General and the International Crimes Unit, National Public Prosecution Authority, Rwanda. Internationally, Ms. Florida is also well exposed where she worked as Variously Appeals Counsel, Assistant Appeals Counsel and Case Manager at the
Office of the Prosecutor, United Nations International Criminal Tribunal for Rwanda (ICTR).
Ms. Florida is a member of the Rwanda Bar Association, East African Law Society, American Bar Association, International Association of Prosecutors, the Chartered Institute of Arbitrators Kigali Arbitration Center. She speaks at various conferences on cyber security and International Humanitarian Law all over the world, most recently in Washington DC, Michigan, Nairobi, and San Diego. She speaks three languages Kinyarwanda, English and Kiswahili.`
        },
        {
            image: "/assets/images/staff/Maurice.jpg",
            firstName: "Jean Maurice",
            lastName: "Mugabonabandi",
            title: "PARTNER / HEAD OF LABOUR, CORPORATE AND COMMERCIAL TRANSACTIONS",
            desc: "Jean Maurice is a Partner at CERTA Law and Head of the Labour, Corporate and Commercial Transactions wing of the Firm. He is a versatile litigator, Arbitrator and Mediator. As a licensed arbitrator, he sits on various panels of Kigali International Arbitration Center through which he has rendered high level arbitration and mediation services to international financial institutions, Government Institutions, Non-Governmental Organizations, multinational corporations, and home companies. He is also a member of the Rwandan Bar Association, East African Law Society and Chartered Institute of Arbitrators. Due to his outstanding mediation skill base, Maurice is regularly appointed as a Court Mediator. Prior to joining CERTA, he worked with government institutions such as the Ministry of Public Service and Labour charged with Public Service inspection and Litigation, Penal Reform International, an NGO that works on penal and criminal justice reform worldwide among others. From this background, he has acquired immense experience in legal drafting and reviewing, negotiation and legal compliance. He holds an LLB from the National University of Rwanda and a Postgraduate Diploma in Legal Practice from the Rwanda Institute of Legal Practice and Development. He is a native speaker of Kinyarwanda, and he is fluent in French and English."
        },
        {
            image: "/assets/images/staff/Fiston.jpg",
            firstName: "FRED FISTON",
            lastName: "RWAGITARE",
            title: "Partner / Head of Civil and Criminal Matters",
            desc: `Rwagitare is a partner at CERTA Law. He is both diligent in his law practice and committed to the profession. With more than a decade of Legal practice, Rwagitare specializes in civil and criminal matters, and he heads the Civil and Criminal Law Department of the Firm. He joined the Firm in 2017 after 5 years serving as an attorney with MRB Attorneys, as well as Prolex Advocates, where he advised and represented various international and national commercial companies in a range of legal areas. Prior to joining the legal practice, Rwagitare worked for a decade in Finance and Administration in both public service and international NGOs such as the Centre Canadien D’étude Et De Coopération Internationale (CECI), where he served as the Regional Finance and Administration Manager for Rwanda, Burundi, and DRC. Through this experience, he has been a noteworthy leader and an expert in the East African region legal and social affairs. He holds a Bachelor of Laws Degree (LLB), from the Kigali Independent University (ULK) and he is a member of the Rwanda Bar Association. He also holds a Diploma in Legal Practice from the Institute of Legal Practice and Development. Rwagitare has been consultant for many international non-governmental organizations, multinational corporations, and companies in Rwanda.
He also contributed to various research projects for the Rwandan Ministry of
 ealth (MINISANTE) as well as the Rwanda Ministry of Local government. Rwagitare is recognized as a professional and prolific mediator who holds a mediation certificate from Edwards Mediation Academy. He speaks Kinyarwanda, English and French fluently.`
        },
        {
            image: "/assets/images/staff/Bosco.jpg",
            firstName: "JEAN BOSCO",
            lastName: "SAFARI",
            title: "ASSOCIATE / HEAD OF CASE MANAGEMENT & LITIGATION",
            desc: `SAFARI Jean Bosco is an Associate and Head of Case Management at CERTA Law. He holds a bachelor’s degree (LLB) from University of Rwanda and a Diploma in Legal Practice from the Institute of Legal Practice and Development. He also has a certificate in Media Law from the Thomson Foundation, a global media development Center. Bosco is currently pursuing a master’s degree in Business Law at the University of Rwanda.
His focus area is litigation in matters relating to administrative, banking and finance. Within these practicing areas, Bosco has advised and represented numerous commercial entities both international and local. Before joining the Firm, Bosco worked with the Ministry of Justice as an integral part to the project titled ‘Leading Cases Arising in Civil Matters. He also, while at the University, was a commissioner in charge of Justice in a task force established to advocate for human rights. He is a native speaker of Kinyarwanda and speaks English fluently`
        },
        {
            image: "/assets/images/staff/Chris.jpg",
            firstName: "CHRIS",
            lastName: "AINEMATSIKO",
            title: "ASSOCIATE / IN-CHARGE OF LEGAL COMPLIANCE & DUE DILIGENCE",
            desc: `Chris AINEMATSIKO oversees clientele general risk, due diligence, and legal compliance matters. He has a track record of expeditiously liaising with relevant institutions such as courts, National Prosecution Authority (NPPA), Rwanda Revenue Authority (RRA), Rwanda Development Board (RDB), Ministry of Foreign Affairs (MINAFFETE), Rwanda Governance Board (RGB), and Rwanda Land Center among others to see through a fast flow of transactions and legal compliance issues such as registration of companies, NGO’s INGO’s and Intellectual Property.
Chris holds a Bachelor of Laws degree from University of Kigali and a Post Graduate Diploma in Legal Practice from the Institute of Legal Practice and Development. He is a member of the Rwanda Bar Association and the East African Law Society, and he is an associate of the Chartered Institute of Arbitrators. During his undergraduate studies, Chris represented Rwanda in different academic competitions such as the 2018 International Humanitarian Law Moot Court and the 2018 Peace Regional Moot Court on humanitarian law both held in
Kigali. He has undertaken internships with the Commercial Court in Kigali and the Rwanda Revenue Authority. He is a native speaker of Kinyarwanda and has excellent command of the English language`
        },
        {
            image: "/assets/images/staff/Celine.jpg",
            firstName: "CELINE",
            lastName: "IZABAYO",
            title: "FINANCE MANAGER",
            desc: `Celine Izabayo is a Finance Manager at CERTA Law. She is a financial management enthusiast. Celine combines financial management skills and administrative skills where her reception management, client correspondence, communication and excellent organization at the law firm have been noted top-notch.
Prior to joining CERTA Law, Celine worked with numerous entities including serving as the secretary and administrative assistant at Rwagasabo Safaris, Rwandan Water & Sanitation Corporation (WASAC) among others. Celine holds a bachelor’s degree in Finance from the University of Rwanda and in her efforts to bridge and combine the finance and administrative knowledge to the legal issues, she is currently pursuing an LLB at University of Kigali. At the Firm, she is mostly handling financial functions related to collection, analysing, recording and ensuring accuracy of the firm’s financial operations as well as ensuring good office management by performing general clerical tasks and providing assistance to the staff, and being the first contact of the company.`
        },
        {
            image: "/assets/images/staff/Denise.jpg",
            firstName: "DENISE",
            lastName: "ISIMBI",
            title: "JUNIOR ASSOCIATE",
            desc: `Denise ISIMBI is a Junior Associate at CERTA Law. She graduated top of her class
and holds a Magna Cum Laude LLB from Kigali Independent of University, ULK. She is passionate about Alternative Dispute Resolution and has interned at the Kigali International Arbitration Centre (KIAC) where she gained extensive experience in both domestic and international Arbitration practices. At CERTA, she handles ADR related cases and acts as a tribunal secretary in arbitration proceedings presided over the Partners. Denise was a legal fellow at the International Lawyers Project (ILP), where she assisted the Director of Partnerships in brokering pro bono legal partnerships for communities, civil society organizations, journalists, and governments in cases involving anti-bribery and corruption, tax reform, media freedom, and environmental and climate change in Sub-Saharan Africa. While at university, she competed in a variety of local and continental tournaments. She won the fifth national International Humanitarian Law Moot Court and went on to represent Rwanda in the 20th All African IHL Moot Court in Naivasha, Kenya. In 2020, she co-won the Africa Legal Innovation Challenge by the Lawyers Hub, Kenya with the most innovative legal solution to challenges associated with virtual courts. She is trained in legal aid provision standards and was coordinator at the university’s legal clinic. Denise is a native speaker of Kinyarwanda and speaks fluent English
`
        },
        {
            image: "/assets/images/staff/Michael.jpg",
            firstName: "MICHAEL",
            lastName: "BUTERA",
            title: "ASSOCIATE.",
            desc: `Michael Butera is a Junior Associate at CERTA Law. He specialises in Constitutional Law, Climate Justice, Human Rights and Legal Policy Analysis. He is a graduate of Strathmore Law School and the recipient of both Strathmore University Merit Scholarship and Critical Legal Training Scholarship from European Center for Constitutional and Human Rights. At Strathmore, Michael served as the Publishing Editor of the Strathmore Law Review, Senior Law clinician at the Strathmore Law Clinic and interned at various research centres including Centre for Intellectual Property and Information Technology Law, Kenya. He also served as a Legal Researcher at the Strathmore Extractive Industries Center in Partnership with the African Legal Support Facility hosted by the African Development Bank for its African Petroleum Legislation Atlas pilot Project.
Michael has also contributed to various research projects including serving as a legal researcher in the preparation of the report on the Status of ADR in Kenya by the Chartered Institute of Arbitrators, Kenyan Branch. He has assisted as an editorial assistant for the Kenyan Constitutional Commentary book by PLO Lumumba and Prof Franceschi, Luis. He has also published articles and presented conference papers in different platforms such as the Strathmore Research Symposium 2020.
Before joining CERTA, Michael worked with the European Center for Constitutional and Human Rights in Berlin, Germany where he mostly worked on Business and Human Rights (BHR) and Climate Justice. He enjoys reading African Literature and he is a firm devotee of African decolonizing projects and because of this, he now serves as a Regional Representative for East Africa, Rwanda at Afronomicslaw Academic Form—An International Law decolonising and ‘TWAILING’ academic forum. Outside his practicing area, he is interested in African Legal History, Third World Approach to International Law and Economics, and International Climate Change Law. He speaks Kinyarwanda, Kiswahili.`
        },
        {
            image: "/assets/images/staff/Patricia.jpg",
            firstName: "PATRICIA",
            lastName: "MUTESI",
            title: "JUNIOR ASSOCIATE.",
            desc: `Patricia is a Junior Associate at CERTA Law specializing in family law matters at the Firm.
Patricia holds a bachelor’s degree in Law (LLB) from the University of Rwanda and is currently pursuing a post graduate diploma in legal practice at the Institution of Legal Practice and Development (ILPD).
In addition, she holds a certificate on the Introduction to International Arbitration Assessment from the Chartered Institute of Arbitrators.
Patricia has a passion for justice and a particular interest in the areas of Human Rights Law. On many occasions, she represented her university at different moot Court Competitions and emerged as the best female pleader at the 7th Edition of the National Moot Court Competition in Property and Land law (IPEACE) of 2019. She also participated in the 4th Edition of the ICRC National Moot Court Competition in 2019 in which she emerged as the first runner up.
She is a native speaker of Kinyarwanda and a fluent speaker of English`
        },
        {
            image: "/assets/images/staff/Deogratias.jpg",
            firstName: "DEOGRATIAS",
            lastName: "NTEZIRYAYO",
            title: "JUNIOR ASSOCIATE.",
            desc: `Deogratias is a Junior Associate at Certa Law Chambers and a DLA Piper Fellow.
Due to his outstanding academic achievements, Deogratias was awarded the DLA Piper Global Scholarship. He is a Regional Representative at Afronomicslaw Academic Forum and Co-founder and the Managing Editor of the University of Rwanda Law Review. After co-partnering in resurrection of the University of Rwanda Law Student Association, he served as its Director of the Legal Aid Clinics. Deogratias holds a Bachelor of Laws LLB (Hons) from the University of Rwanda and an Intermediate Diploma of Business and Corporate Law from Gelegenheit International Law Chambers. He is passionate about International Corporate and Fiscal Law and Public Interest Litigation. Deogratias did the Leadership Development Course at the University of Oxford, Saïd Business School in March 2022. He participated in diverse legal on top of which is the Virtual DLA Piper Africa Associates Training Academy. With Advocate for International Development (A4ID), he completed the “Law and Development Training Programme 2021: the Legal Path to Sustainable Development,” the programme which mainly centred on the current World Trilemma of Climate Change, Technology, and World Economic Inequalities; and captivated the lawyer’s social responsibility to harness the profession towards the SDGs. Regarding the practical experience, Deogratias volunteered at Certa Law Chambers and did a Judicial Clerkship at
the Court of Appeal in 2021. Deogratias has a keen interest in research and litigation and possesses excellent mooting skills. He has represented the University of Rwanda in a National Moot Court Competition on Contracts Law, and his team won the pleadings and memorials best trophies`
        }, 
    ];
    static practiceItems = [
        {
            title: "Banking & Finance",
            icon: "/assets/images/icons/Banking _ Finance.png"
        },
        {
            title: "Revenue & Tax",
            icon: "/assets/images/icons/Revenues _ Tax.png"
        },
        {
            title: "Corperate Governance",
            icon: "/assets/images/icons/Corporate Gov.png"
        },
        {
            title: "Corperate & Commercial transactions",
            icon: "/assets/images/icons/Corporate Transactios.png"
        },
        {
            title: "Employment Labour",
            icon: "/assets/images/icons/Employment.png"
        },
        {
            title: "Intellectual Property",
            icon: "/assets/images/icons/IP icon.png"
        },
        {
            title: "Dispute Resolution",
            icon: "/assets/images/icons/Dispute resolution.png"
        }, 
    ];
};


/***/ })

};
;