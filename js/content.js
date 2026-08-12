/**
 * Portfolio Dynamic Content Configuration
 * You can edit this file manually or via the local admin.html visual dashboard.
 */
var portfolioData = {
    personal: {
        name: "Hafiz Muhammad Zaigham Latif",
        title: "Manufacturing Intelligence Specialist | Industrial Engineer | Business Intelligence Developer",
        eyebrow: "6+ Years Experience • Industrial Engineering & BI",
        mission: "Transforming manufacturing data into strategic business decisions through Power BI, SQL, Excel, ERP & Process Optimization.",
        location: "Lahore, Pakistan",
        email: "hafizzaigham9@gmail.com",
        phone: "+92-321-2095794",
        whatsapp: "923212095794",
        resumeUrl: "https://drive.google.com/file/d/1ow1c3HYK9AlvkLf7duqwFMT9_dZbtBvE/view?usp=sharing",
        linkedinUrl: "https://www.linkedin.com/in/muhammad-zaigham-latif-4540aa17b/"
    },

    stats: [
        { number: 6, suffix: "+", title: "Years Experience", sub: "Textile & Footwear IE" },
        { number: 100, suffix: "+", title: "Automated Reports", sub: "Excel VBA & Power Query" },
        { number: 20, suffix: "+", title: "Interactive Dashboards", sub: "Power BI & DAX Engines" },
        { icon: "factory", title: "Manufacturing", sub: "Industry Specialist" },
        { icon: "cpu", title: "ERP & RFID", sub: "Floor Automation" },
        { icon: "trending-up", title: "Data-Driven", sub: "Decision Making" }
    ],

    about: {
        title: "Transforming Data into Actionable Insights",
        lead: "Every manufacturing company generates massive amounts of data. The challenge isn't collecting it. The challenge is transforming it into meaningful insights that improve productivity, reduce costs, and support better decisions.",
        narrative: "For the past 6+ years, I have worked in Industrial Engineering and Manufacturing Analytics at market-leading organizations like Combined Fabrics Limited and Firhaj Footwear, helping teams optimize production through Business Intelligence, ERP integration, RFID systems, Power BI dashboards, SQL reporting, and continuous process improvement.",
        pills: [
            "80% Reduction in Reporting Time",
            "0% Voucher Audit Discrepancies",
            "3,400+ Standardized Factory Operations",
            "100% Real-Time Shop Floor Traceability"
        ]
    },

    expertise: [
        {
            title: "Manufacturing Engineering",
            icon: "settings",
            skills: ["Work Study", "SAM Analysis", "Line Balancing", "Capacity Planning", "Cut-to-Pack Costing", "Production Planning"]
        },
        {
            title: "Business Intelligence",
            icon: "bar-chart-2",
            skills: ["Power BI", "Dashboard Design", "DAX Calculations", "KPI Reporting", "Data Modeling", "Executive Briefings"]
        },
        {
            title: "Data Analytics",
            icon: "database",
            skills: ["SQL Queries", "MS Excel (VBA/Macros)", "Power Query ETL", "Data Cleaning", "Report Automation", "Python Basics"]
        },
        {
            title: "Manufacturing Systems",
            icon: "cpu",
            skills: ["ERP Systems", "RFID Floor Integration", "Lean Manufacturing", "Continuous Improvement", "Root Cause Analysis", "INA Hanger Lines"]
        }
    ],

    projects: [
        {
            id: "1",
            badge: "Featured Case Study",
            icon: "line-chart",
            title: "Production & OEE Performance Dashboard",
            problem: "Production managers manually prepared paper reports every day, leading to delayed 24-hour reporting lag and undetected operator downtime.",
            solution: "Built an automated web-based Power BI Dashboard connected live with ERP and INA Hanger Line SQL database streams.",
            technologies: ["Power BI", "SQL", "Power Query", "Excel"],
            features: "Production | Efficiency % | Downtime | Target vs Actual | Operator Performance",
            impact: [
                "Reduced manual reporting time by 80%",
                "100% real-time shop floor production visibility",
                "Saved 5+ hours of daily compilation work"
            ]
        },
        {
            id: "2",
            badge: "Cost Engineering",
            icon: "dollar-sign",
            title: "Cut-to-Pack Costing & CPP Analysis Dashboard",
            problem: "Inaccurate tentative costing for buyer submissions risk-threatened profit margins and created budget variance during bulk production.",
            solution: "Built SAM-validated Cut-to-Pack Costing Engine in Excel & Power BI analyzing direct vs indirect labor ratios.",
            technologies: ["Power BI", "Excel VBA", "Power Query", "SAM Costing"],
            features: "Tentative Cost Sheets | CPP Analysis | Labor Ratios | Margin Protection",
            impact: [
                "Protected buyer submission profit margins",
                "Reduced CPP cost-per-piece variance by 60%",
                "Accelerated tentative cost sheet prep time"
            ]
        },
        {
            id: "3",
            badge: "RFID & Automation",
            icon: "cpu",
            title: "RFID & INA Hanger Line Real-Time Dashboard",
            problem: "Delayed 24-hour paper logs concealed hanger line bottlenecks and operator idle time on sewing lines.",
            solution: "Integrated RFID & INA Hanger Line sensor data streams into Power BI real-time bottleneck alerts.",
            technologies: ["RFID", "ERP", "Power BI", "SQL"],
            features: "Real-time Hanger Tracking | Line Balance | Idle Time Alerts | Operator Efficiency",
            impact: [
                "Achieved 100% shop floor hanger traceability",
                "80% faster line bottleneck resolution",
                "Maximized garment output per operator hour"
            ]
        },
        {
            id: "4",
            badge: "Planning & IE",
            icon: "calendar",
            title: "Production Planning & Capacity Allocation Model",
            problem: "Unaligned line capacity and absenteeism caused target garment output shortfalls and line imbalance.",
            solution: "Designed dynamic capacity allocation and attendance allowance models in Excel & Power BI.",
            technologies: ["Excel VBA", "Power BI", "Work Study", "ERP"],
            features: "Line Balancing | Capacity Forecast | Attendance Incentive | Target Output",
            impact: [
                "Increased shop floor operator line presence",
                "Stabilized daily target garment completion",
                "Optimized capacity allocation across units"
            ]
        },
        {
            id: "5",
            badge: "Quality & Deficits",
            icon: "shield-alert",
            title: "Quality & Floor Deficit Reduction Engine",
            problem: "Unaddressed floor deficits led to budget overruns and delayed shipment schedules.",
            solution: "Led weekly and monthly executive risk analysis meetings using Power BI quality data models.",
            technologies: ["Power BI", "DAX", "SQL", "Data Modeling"],
            features: "Deficit Analysis | Scrap Rates | Root Cause Matrix | Executive Risk Briefings",
            impact: [
                "Reduced operator daily floor deficits",
                "Improved shipment on-time delivery rates",
                "Streamlined executive decision support"
            ]
        },
        {
            id: "6",
            badge: "Excel Automation",
            icon: "file-spreadsheet",
            title: "Excel Voucher & Wage Validation Automation",
            problem: "Manual paper vouchers required 3+ days of audits and created wage payment friction.",
            solution: "Deployed digital voucher validation workflows and standardized coding for 3,400+ operations.",
            technologies: ["Excel VBA", "Power Query", "Power Apps", "SQL"],
            features: "Voucher Validation | 3,400+ Standard Operations | Automated Payroll | Audit Engine",
            impact: [
                "0% Voucher Audit Discrepancy Rate",
                "Saved 15 hours/week in manual payment auditing",
                "Instant automated wage & piece-rate processing"
            ]
        }
    ],

    services: [
        {
            icon: "bar-chart-2",
            title: "Power BI Dashboard Development",
            description: "Custom interactive Power BI dashboards, DAX calculations, and real-time visualization pipelines.",
            queryText: "Power BI Dashboard Development"
        },
        {
            icon: "pie-chart",
            title: "Business Intelligence Solutions",
            description: "End-to-end BI architecture, KPI frameworks, and executive decision-support systems.",
            queryText: "Business Intelligence Solutions"
        },
        {
            icon: "factory",
            title: "Manufacturing Analytics",
            description: "OEE tracking, line balance analytics, operator downtime reporting, and bottleneck identification.",
            queryText: "Manufacturing Analytics"
        },
        {
            icon: "settings",
            title: "Industrial Engineering Consulting",
            description: "SAM validation, Work Study, Operation Bulletins (OBs), line capacity planning, and labor ratio optimization.",
            queryText: "Industrial Engineering Consulting"
        },
        {
            icon: "line-chart",
            title: "Production KPI Dashboard",
            description: "Automated daily target vs actual tracking, worker efficiency metrics, and floor output monitors.",
            queryText: "Production KPI Dashboard"
        },
        {
            icon: "database",
            title: "SQL Reporting",
            description: "Complex SQL query writing, view creation, stored procedures, and ERP database data extraction routines.",
            queryText: "SQL Reporting"
        },
        {
            icon: "file-spreadsheet",
            title: "Excel Automation",
            description: "VBA Macros, automated financial & operational workbooks, rate sheet generators, and error-free templates.",
            queryText: "Excel Automation"
        },
        {
            icon: "refresh-cw",
            title: "Power Query",
            description: "Advanced M-code data cleaning, multi-source data merging, and automated ETL transformation flows.",
            queryText: "Power Query ETL"
        },
        {
            icon: "cpu",
            title: "ERP Reporting Integration",
            description: "Connecting ERP databases into custom visual reporting layers for seamless management auditing.",
            queryText: "ERP Reporting Integration"
        },
        {
            icon: "eye",
            title: "Data Visualization",
            description: "Transforming complex datasets into executive presentation decks, interactive charts, and clear infographics.",
            queryText: "Data Visualization"
        }
    ],

    faq: [
        {
            question: "What industries do you work with?",
            answer: "I specialize primarily in Textile Manufacturing, Garments, Apparel Exporters, Footwear, and general industrial manufacturing plants. My solutions also apply seamlessly to retail and supply chain operations requiring data automation."
        },
        {
            question: "Can you build custom Power BI dashboards for our factory?",
            answer: "Yes. I design end-to-end custom Power BI dashboards with DAX measures, automated Power Query ETL pipelines, and live database/ERP connections to track real-time OEE, line balance, daily output targets, and costing."
        },
        {
            question: "Do you automate complex Excel reports and workbooks?",
            answer: "Absolutely. I use VBA Macros, Power Query ETL routines, and dynamic Excel modeling to eliminate manual copy-pasting, automate payment/voucher logging, and generate 100% error-free financial & operational reports."
        },
        {
            question: "Can you optimize existing manufacturing reports and SAM rate sheets?",
            answer: "Yes. Combining Industrial Engineering methodologies with BI, I perform SAM validation, standardize operation names/rates (over 3,400+ operations standardized), and optimize direct/indirect labor ratios to lower Cost Per Piece (CPP)."
        }
    ]
};

if (typeof window !== 'undefined') {
    window.portfolioData = portfolioData;
}

// Expose globally for both browser client and Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
